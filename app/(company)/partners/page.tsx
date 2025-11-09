"use client";

import PartnersPage from "@/components/PartnersPage";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PartnersContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";

  return <PartnersPage language={validLanguage} />;
}

export default function Partners() {
  return (
    <Suspense fallback={<PartnersPage language="en" />}>
      <PartnersContent />
    </Suspense>
  );
}

