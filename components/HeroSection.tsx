import { motion } from "motion/react";
import { Sparkles, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  language: "ko" | "en";
}

export default function HeroSection({ language }: HeroSectionProps) {
  const router = useRouter();

  const content = {
    ko: {
      title: "모두에게 이로운\n AI를 만듭니다",
      subtitle:
        "Purple AI는 최첨단 인공지능 기술로 의료, 비즈니스, 그리고 일상의 혁신을 이끌어갑니다.",
      cta1: "무료 Test Drive 신청",
      cta2: "데모 체험하기",
    },
    en: {
      title: "Clinically Inspired.\nTruly Transformative.",
      subtitle:
        "Fast, Accurate, Consistent Efficient Triage for Stroke Treatment & Transfer.",
      cta1: "Test-Drive Hyper Insight",
      cta2: "Try Demo",
    },
  };

  const t = content[language];

  function handleTest(): void {
    router.push("/contact-us");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-3/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/2 translate-x-3/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Orbs - 원형 공들 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => {
          // 고정된 seed를 사용하여 서버/클라이언트 일관성 유지
          const seed = i * 0.12345;
          const startY = (Math.sin(seed) * 0.5 + 0.5) * 100;
          const endY = (Math.sin(seed + 1) * 0.5 + 0.5) * 100;
          const startX = (Math.cos(seed) * 0.5 + 0.5) * 100;
          const size = (Math.sin(seed * 2) * 0.5 + 0.5) * 40 + 20; // 20-60px
          const xOffset = (Math.sin(seed * 3) * 0.5 + 0.5) * 20 - 10;
          const duration = (Math.sin(seed * 4) * 0.5 + 0.5) * 15 + 10;
          const delay = (Math.cos(seed * 5) * 0.5 + 0.5) * 5;

          return (
            <motion.div
              key={i}
              initial={{
                x: `${startX}vw`,
                y: `${startY}vh`,
              }}
              animate={{
                y: [`${startY}vh`, `${endY}vh`, `${startY}vh`],
                x: [`${startX}vw`, `${startX + xOffset}vw`, `${startX}vw`],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background:
                  i % 3 === 0
                    ? "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.1) 70%, transparent 100%)"
                    : i % 3 === 1
                    ? "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.1) 70%, transparent 100%)"
                    : "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 70%, transparent 100%)",
                filter: "blur(8px)",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 40px rgba(147, 51, 234, 0.3)"
                    : "0 0 40px rgba(6, 182, 212, 0.3)",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">
              AI Innovation Leader
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto whitespace-pre-line">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 rounded-full shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/60"
              onClick={handleTest}
            >
              {t.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 text-white px-8 py-6 rounded-full backdrop-blur-sm transition-all"
              onClick={() => window.open("https://www.purple-ai.co", "_blank")}
            >
              <Play className="w-5 h-5 mr-2" />
              {t.cta2}
            </Button>
          </div>
        </motion.div>

        {/* Floating 3D Object */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-20 mx-auto w-64 h-64 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10 transform rotate-12" />
          <div className="absolute inset-4 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-2xl backdrop-blur-md border border-white/20" />
          <div className="absolute inset-8 bg-gradient-to-tr from-purple-700/40 to-cyan-700/40 rounded-xl backdrop-blur-lg border border-white/30 flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-purple-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
