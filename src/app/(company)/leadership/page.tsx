"use client";

import LeadershipPage from "@/components/LeadershipPage";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LeadershipContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";

  return <LeadershipPage language={validLanguage} />;
}

export default function Leadership() {
  return (
    <Suspense fallback={<LeadershipPage language="en" />}>
      <LeadershipContent />
    </Suspense>
  );
}

