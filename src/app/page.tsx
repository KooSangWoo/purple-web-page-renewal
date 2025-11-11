"use client";

import DeploymentSection from "@/components/DeploymentSection";
import HeroSection from "@/components/HeroSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import MobileViewerSection from "@/components/MobileViewerSection";
import TopSection from "@/components/TopSection";
import TrustSection from "@/components/TrustSection";
import VideoSection from "@/components/VideoSection";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage();
  const handleNavigate = (section: string) => {
    router.push(`/#${section}`);
  };
  // TestDriveForm을 dynamic import로 변경하고, 'ssr: false' 옵션을 줍니다.
  const TestDriveForm = dynamic(
    () => import("@/components/TestDriveForm"),
    { ssr: false } // SSR 끄기
  );
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
        <HeroSection language={language} />
        <TopSection language={language} onNavigate={handleNavigate} />
        <DeploymentSection language={language} />
        <VideoSection language={language} />
        <MobileViewerSection language={language} />
        <InteractiveDemo language={language} />
        <TrustSection language={language} />
        <TestDriveForm language={language} />
      </div>
    </>
  );
}
