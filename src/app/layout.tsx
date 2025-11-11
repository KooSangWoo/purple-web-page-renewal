"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const URL = new URLSearchParams({ language: language });
  const handleGoHome = () => {
    router.push("/");
  };
  const handleNavigateToICH = () => {
    router.push(`/ich?${URL}`);
  };
  const handleNavigateToInfarct = () => {
    router.push("/infarct");
  };
  const handleNavigateToAneurysm = () => {
    router.push("/aneurysm");
  };
  const handleNavigateToAbout = () => {
    router.push("/about");
  };
  const handleNavigateToLeadership = () => {
    router.push("/leadership");
  };
  const handleNavigateToPartners = () => {
    router.push("/partners");
  };

  return (
    <>
      <html className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
        <body>
          <header>
            <Header
              language={language}
              setLanguage={setLanguage}
              onLogoClick={handleGoHome}
              onNavigateToICH={handleNavigateToICH}
              onNavigateToInfarct={handleNavigateToInfarct}
              onNavigateToAneurysm={handleNavigateToAneurysm}
              onNavigateToAbout={handleNavigateToAbout}
              onNavigateToLeadership={handleNavigateToLeadership}
              onNavigateToPartners={handleNavigateToPartners}
            />
          </header>
          <main>{children}</main>
          <Footer language={language} />
        </body>
      </html>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}

