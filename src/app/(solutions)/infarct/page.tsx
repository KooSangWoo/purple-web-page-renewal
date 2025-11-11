"use client";

import HyperInsightInfarct from "@/components/HyperInsightInfarct";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function InfarctContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";
  return <HyperInsightInfarct language={validLanguage} />;
}

export default function InfarctPage() {
  return (
    <Suspense fallback={<HyperInsightInfarct language="en" />}>
      <InfarctContent />
    </Suspense>
  );
}

