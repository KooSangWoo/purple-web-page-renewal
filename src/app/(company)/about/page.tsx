"use client";

import AboutPage from "@/components/AboutPage";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AboutContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";

  return <AboutPage language={validLanguage} />;
}

export default function About() {
  return (
    <Suspense fallback={<AboutPage language="en" />}>
      <AboutContent />
    </Suspense>
  );
}

