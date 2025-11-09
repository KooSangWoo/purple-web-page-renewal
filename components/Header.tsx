import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface HeaderProps {
  language: "ko" | "en";
  setLanguage: (lang: "ko" | "en") => void;
  onLogoClick?: () => void;
  onNavigateToICH?: () => void;
  onNavigateToInfarct?: () => void;
  onNavigateToAneurysm?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToLeadership?: () => void;
  onNavigateToPartners?: () => void;
}

export default function Header({
  language,
  setLanguage,
  onLogoClick,
  onNavigateToICH,
  onNavigateToInfarct,
  onNavigateToAneurysm,
  onNavigateToAbout,
  onNavigateToLeadership,
  onNavigateToPartners,
}: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const content = {
    ko: {
      products: "Solutions",
      research: "Research",
      company: "Company",
      resources: "Resources",
      companyMenu: {
        about: "About",
        leadership: "Leadership",
        partners: "Partners",
      },
      productsMenu: {
        ich: "Hyper Insight - ICH",
        infarct: "Hyper Insight - Infarct",
        aneurysm: "Hyper Insight - Aneurysm",
      },
    },
    en: {
      products: "Solutions",
      research: "Research",
      company: "Company",
      resources: "Resources",
      companyMenu: {
        about: "About",
        leadership: "Leadership",
        partners: "Partners",
      },
      productsMenu: {
        ich: "Hyper Insight - ICH",
        infarct: "Hyper Insight - Infarct",
        aneurysm: "Hyper Insight - Aneurysm",
      },
    },
  };

  const t = content[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onLogoClick}
          >
            <Image
              src="/figma/0fd84fb9ced89783ca438f1d10834ba73c11cd7c.png"
              alt="Purple AI"
              width={256} // 원본 비율 유지를 위한 값 (필요시 실제 이미지 비율에 맞게 수정)
              height={32} // 원본 비율 유지를 위한 값
              className="h-6 md:h-8 lg:h-10 w-auto" // 반응형 높이 설정 및 너비 자동 조절
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            {/* Products & Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-full text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                {t.products}
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeMenu === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a2e]/95 backdrop-blur-xl rounded-2xl border border-purple-600/20 overflow-hidden shadow-xl"
                  >
                    <div className="p-2">
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateToICH?.();
                        }}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-purple-700/30 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-purple-500/20"
                      >
                        <div className="text-white">{t.productsMenu.ich}</div>
                      </div>
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateToInfarct?.();
                        }}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-purple-700/30 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-purple-500/20"
                      >
                        <div className="text-white">
                          {t.productsMenu.infarct}
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateToAneurysm?.();
                        }}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-purple-700/30 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-purple-500/20"
                      >
                        <div className="text-white">
                          {t.productsMenu.aneurysm}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Research */}
            <button className="px-4 py-2 rounded-full text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              {t.research}
            </button>

            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("company")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-full text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                {t.company}
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeMenu === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e]/95 backdrop-blur-xl rounded-2xl border border-purple-600/20 overflow-hidden shadow-xl"
                  >
                    <div className="p-2">
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateToAbout?.();
                        }}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-purple-700/30 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-purple-500/20 text-white/80 hover:text-white"
                      >
                        {t.companyMenu.about}
                      </div>
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateToLeadership?.();
                        }}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-purple-700/30 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-purple-500/20 text-white/80 hover:text-white"
                      >
                        {t.companyMenu.leadership}
                      </div>
                      <div
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateToPartners?.();
                        }}
                        className="px-4 py-3 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-purple-700/30 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-purple-500/20 text-white/80 hover:text-white"
                      >
                        {t.companyMenu.partners}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources */}
            <button className="px-4 py-2 rounded-full text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              {t.resources}
            </button>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <Globe className="w-5 h-5 text-white/70" />
            </button>
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-[#1a1a2e]/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-xl"
                >
                  <button
                    onClick={() => {
                      setLanguage("ko");
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left transition-colors ${
                      language === "ko"
                        ? "bg-purple-500/20 text-purple-300"
                        : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    한국어
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left transition-colors ${
                      language === "en"
                        ? "bg-purple-500/20 text-purple-300"
                        : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}
