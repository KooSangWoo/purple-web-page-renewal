"use client";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader, Send } from "lucide-react"; // Send 아이콘 추가
import { motion } from "motion/react"; // motion 임포트 추가

interface TestDriveFormProps {
  language: "ko" | "en";
}

// --- Toast 컴포넌트 ---
function SuccessToast() {
  return (
    <div className="bg-[var(--muted-foreground)] text-white h-[34px] md:h-[50px] rounded-[8px] font-medium text-xs md:text-sm flex items-center justify-center mx-auto w-[300px] md:w-[365px]">
      Your request has been submitted successfully
    </div>
  );
}

function FailedToast() {
  return (
    <div className="bg-red-600 text-white h-[34px] md:h-[50px] rounded-[8px] font-medium text-xs md:text-sm flex items-center justify-center mx-auto w-[300px] md:w-[365px]">
      Your request has been submitted failed
    </div>
  );
}

export default function TestDriveForm({ language }: TestDriveFormProps) {
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    option: "hemorrhage",
    message: "",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Input/Textarea 값 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Select 값 변경 핸들러
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, option: value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      console.log("Form submitted:", formData);

      try {
        const { data: response } = await axios.post("/api/v1/email/sender", {
          from: formData.email,
          // (수정) Next.js 클라이언트 환경 변수 접근 방식으로 변경
          to: process.env.EMAIL,
          name: `${formData.firstName} ${formData.lastName}`,
          title: `[${formData.option}] Contact Us - ${formData.firstName} ${formData.lastName}`,
          content: formData.message,
        });

        console.log(
          `formdata ${JSON.stringify(formData)}, ${process.env.EMAIL}`
        );

        if (response.code === "0000") {
          toast.custom(() => <SuccessToast />);
          setSubmitted(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            option: "hemorrhage",
            message: "",
          });
        } else {
          toast.custom(() => <FailedToast />);
        }
      } catch (error) {
        console.error(error);
        toast.custom(() => <FailedToast />);
      } finally {
        setIsLoading(false);
      }
    },
    [formData]
  );

  const content = {
    // ... (ko/en content 객체는 동일하므로 생략) ...
    ko: {
      title: "Contact Us",
      subtitle:
        "We're paving the way for the future of cerebrovascular AI clinical decision support.",
      description: "Connect with us to discover how.",
      firstName: "First Name",
      firstNamePlaceholder: "Enter first name",
      lastName: "Last Name",
      lastNamePlaceholder: "Enter last name",
      email: "Email",
      emailPlaceholder: "example@company.com",
      option: "Option",
      optionPlaceholder: "Select option",
      options: {
        All: "All",
        hemorrhage: "Hemorrhage",
        infarct: "Infarct",
        aneurysm: "Aneurysm",
      },
      message: "Message",
      messagePlaceholder: "Enter your message...",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Message Sent!",
      successMessage: "Our team will contact you soon.",
    },
    en: {
      title: "Contact Us",
      subtitle:
        "We're paving the way for the future of cerebrovascular AI clinical decision support.",
      description: "Connect with us to discover how.",
      firstName: "First Name",
      firstNamePlaceholder: "Enter first name",
      lastName: "Last Name",
      lastNamePlaceholder: "Enter last name",
      email: "Email",
      emailPlaceholder: "example@company.com",
      option: "Option",
      optionPlaceholder: "Select option",
      options: {
        All: "All",
        hemorrhage: "Hemorrhage",
        infarct: "Infarct",
        aneurysm: "Aneurysm",
      },
      message: "Message",
      messagePlaceholder: "Enter your message...",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Message Sent!",
      successMessage: "Our team will contact you soon.",
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-2">{t.subtitle}</p>
            <p className="text-xl text-white/60">{t.description}</p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-[#1a1a2e]/60 backdrop-blur-xl border-purple-500/20">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white/80">
                        {t.firstName} *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={t.firstNamePlaceholder}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white/80">
                        {t.lastName} *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={t.lastNamePlaceholder}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80">
                        {t.email} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Option */}
                    {isClient && (
                      <div className="space-y-2">
                        <Label htmlFor="option" className="text-white/80">
                          {t.option} *
                        </Label>
                        <Select
                          value={formData.option}
                          onValueChange={handleSelectChange}
                          required
                        >
                          <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder={t.optionPlaceholder} />
                          </SelectTrigger>
                          <SelectContent
                            position="popper"
                            className="bg-[#2a2a3e]/95 backdrop-blur-xl border-purple-500/20 text-white"
                          >
                            <SelectItem
                              value="All"
                              className="text-white focus:bg-purple-500/20 focus:text-white"
                            >
                              {t.options.All}
                            </SelectItem>
                            <SelectItem
                              value="hemorrhage"
                              className="text-white focus:bg-purple-500/20 focus:text-white"
                            >
                              {t.options.hemorrhage}
                            </SelectItem>
                            <SelectItem
                              value="infarct"
                              className="text-white focus:bg-purple-500/20 focus:text-white"
                            >
                              {t.options.infarct}
                            </SelectItem>
                            <SelectItem
                              value="aneurysm"
                              className="text-white focus:bg-purple-500/20 focus:text-white"
                            >
                              {t.options.aneurysm}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/80">
                      {t.message}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      rows={12}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 resize-none min-h-[200px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-6 shadow-lg shadow-purple-500/50 transition-all disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        {/* (수정) Loader2 -> Loader */}
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t.submit}
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl mb-4 text-white">{t.success}</h3>
                  <p className="text-white/60 text-lg">{t.successMessage}</p>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
