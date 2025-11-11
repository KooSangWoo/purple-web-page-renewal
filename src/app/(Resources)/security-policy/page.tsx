"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface SecurityPolicyProps {
  language?: "ko" | "en";
}

function SecurityPolicyContent({ language: defaultLang }: SecurityPolicyProps) {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : defaultLang;

  return <SecurityPolicyPageContent language={validLanguage} />;
}

function SecurityPolicyPageContent({ language = "en" }: SecurityPolicyProps) {
  const policyTitle =
    language === "ko" ? "정보 보안 정책" : "Information Security Policy";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] text-gray-300 pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-20 md:pt-32">
        {/* 메인 타이틀 (언어에 따라 변경) */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {policyTitle}
          </span>
        </h1>

        <article className="space-y-12 bg-purple-900/10 border border-purple-500/20 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          {/* 현재는 영문 텍스트만 사용합니다. */}
          <section className="pb-8 border-b border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">
              1. Customer Trust and Compliance
            </h3>
            <p className="leading-relaxed text-lg text-gray-300">
              We place the highest value on customer trust, protecting patients'
              sensitive medical information assets under the strictest standards
              and ensuring full compliance with all applicable regulations.
            </p>
          </section>

          {/* ... (나머지 섹션) ... */}
          <section className="pb-8 border-b border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">
              2. Data Integrity and Availability
            </h3>
            <p className="leading-relaxed text-lg text-gray-300">
              We safeguard the integrity and availability of medical imaging
              data to support accurate diagnoses and provide uninterrupted
              interpretation services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">
              3. Continuous Improvement and Security Culture
            </h3>
            <p className="leading-relaxed text-lg text-gray-300">
              We continuously strengthen our information security management
              system to address potential threats, while fostering a culture of
              security in which every employee internalizes responsibility for
              information protection.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

export default function SecurityPolicyPage({
  language = "en",
}: SecurityPolicyProps) {
  return (
    // Suspense가 useSearchParams를 사용하는 컴포넌트(SecurityPolicyContent)를 직접 감쌉니다.
    // Suspense는 클라이언트에서 searchParams를 읽을 수 있을 때까지 fallback을 보여줍니다.
    <Suspense fallback={<SecurityPolicyPageContent language={language} />}>
      <SecurityPolicyContent language={language} />
    </Suspense>
  );
}
