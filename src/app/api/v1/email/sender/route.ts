import { NextRequest, NextResponse } from "next/server";
import { RES_0000, RES_4001, RES_5000 } from "./response";
import nodemailer, { SendMailOptions, SentMessageInfo } from "nodemailer";
import logger from "@/src/lib/logger";

/**
 * POST /api/v1/email/sender.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { from, to, name, title, content } = body;

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // to 가 undefined 이므로, payload 에 to 는 없음 -> process.env.EMAIL_USER 로 발송 (시스템에 고정 등록된 메일)
    logger.info(
      `POST /api/v1/email/sender. ip: ${ip} - payload: ${JSON.stringify(
        body,
        null,
        2
      )}`
    );

    // 필수 입력값 누락
    if (!from || !name || !title || !content) {
      return NextResponse.json(RES_4001, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SECOND_PASS,
      },
    });

    // 제목에서 대괄호 안에 있는 옵션 추출
    const option = title.match(/\[(.*?)\]/)?.[1] || "";

    const mailOptions: SendMailOptions = {
      /**
       * Gmail SMTP 서버를 사용할 때, 발신자 주소(From 필드)는 인증된 Gmail 계정으로 제한됩니다.
       * 이는 Gmail이 스푸핑(spoofing) 방지 및 보안 강화를 위해 적용하는 정책입니다.
       * 따라서, 이메일의 From 필드에 다른 이메일 주소를 지정하더라도 실제 발신자는 인증된 Gmail 계정으로 처리됩니다.
       *
       * 실제 사용할 PurpleAI 계정을 process.env.EMAIL_USER 에 등록해야 합니다.
       * 발신자 가이드라인 참조: https://support.google.com/a/answer/81126?hl=ko
       */
      from: `"${name}" <${process.env.EMAIL_USER}>`, // 표시 이름 + 실제 발신 계정.
      to: to || process.env.EMAIL_RECEIVER,
      subject: title,
      text: `From: ${name} (${from})\nOption: ${option}\n\n${content}`, // 발신자 이메일을 확인할 방법이 없으므로 내용에 추가
    };

    try {
      const info = await new Promise<SentMessageInfo>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });

      logger.info(`Email sent: ${info.response}`);
      return NextResponse.json(RES_0000, { status: 200 });
    } catch (emailError) {
      logger.error(`Email sending failed: ${emailError}`);
      return NextResponse.json(RES_5000, { status: 500 });
    }
  } catch (error) {
    logger.error(`API error: ${error}`);
    return NextResponse.json(RES_5000, { status: 500 });
  }
}
