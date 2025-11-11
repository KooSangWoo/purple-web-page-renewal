"use client";

import HyperInsightICH from "@/components/HyperInsightICH";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function IchContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";
  return <HyperInsightICH language={validLanguage} />;
}

export default function IchPage() {
  return (
    <Suspense fallback={<HyperInsightICH language="en" />}>
      <IchContent />
    </Suspense>
  );
}

