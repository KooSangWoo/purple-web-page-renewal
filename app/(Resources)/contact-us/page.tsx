"use client";
import TestDriveForm from "@/components/TestDriveForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactUsContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";
  return <TestDriveForm language={validLanguage} />;
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      <Suspense fallback={<TestDriveForm language="en" />}>
        <ContactUsContent />
      </Suspense>
    </div>
  );
}
