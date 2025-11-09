"use client";

import HyperInsightAneurysm from "@/components/HyperInsightAneurysm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AneurysmContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";
  return <HyperInsightAneurysm language={validLanguage} />;
}

export default function AneurysmPage() {
  return (
    <Suspense fallback={<HyperInsightAneurysm language="en" />}>
      <AneurysmContent />
    </Suspense>
  );
}
