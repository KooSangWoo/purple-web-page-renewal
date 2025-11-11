import { useState, useEffect, useRef } from "react";
// "motion/react" 대신 "framer-motion"을 사용합니다.
// (framer-motion이 설치되어 있어야 합니다)
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
  /** 이 숫자 '이상'일 때만 캐러셀이 스크롤됩니다. (기본값: 5) */
  minToScroll?: number;
}

// 스크롤을 시작할 기본 아이템 개수
const DEFAULT_MIN_TO_SCROLL = 5;

export default function PartnerCarousel({
  partners,
  minToScroll = DEFAULT_MIN_TO_SCROLL,
}: PartnerCarouselProps) {
  // --- 1. 스크롤 여부를 결정하는 플래그 ---
  const shouldScroll = partners.length >= minToScroll;

  const [offsetX, setOffsetX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  // --- 2. 스크롤이 필요할 때만 로고 3배, 아닐 땐 원본 사용 ---
  const displayPartners = shouldScroll
    ? [...partners, ...partners, ...partners]
    : partners;

  const CARD_WIDTH = 240; // Width of each card including gap (224px + 16px gap = 240px)
  const SCROLL_SPEED = 0.5; // Pixels per frame

  useEffect(() => {
    // --- 3. 스크롤이 필요 없거나, 일시정지 상태면 애니메이션 중지 ---
    if (!shouldScroll || isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = () => {
      setOffsetX((prev) => {
        const newOffset = prev - SCROLL_SPEED;
        if (Math.abs(newOffset) >= CARD_WIDTH * partners.length) {
          return 0; // 리셋
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // 'shouldScroll'을 의존성 배열에 추가
  }, [isPaused, partners.length, shouldScroll, CARD_WIDTH]); // CARD_WIDTH 의존성 추가

  const handlePrevSlide = () => {
    setOffsetX((prev) => prev + CARD_WIDTH);
  };

  const handleNextSlide = () => {
    setOffsetX((prev) => prev - CARD_WIDTH);
  };

  const handlePause = () => {
    if (shouldScroll) setIsPaused(true);
  };

  const handleResume = () => {
    if (shouldScroll) setIsPaused(false);
  };

  return (
    <div className="relative max-w-7xl mx-auto mb-16 px-6">
      {/* --- 4. 레이아웃 변경 ---
        스크롤이 필요 없으면 'justify-center'로 중앙 정렬
        스크롤이 필요하면 'gap-6'로 버튼과 캐러셀 배치
      */}
      <div
        className={`flex items-center ${
          shouldScroll ? "gap-6" : "justify-center"
        }`}
      >
        {/* --- 5. 버튼 조건부 렌더링 --- */}
        {shouldScroll && (
          <button
            onClick={handlePrevSlide}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transition-all group z-10"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
          </button>
        )}

        {/* --- 6. 캐러셀 컨테이너 조건부 스타일링 ---
          스크롤 시: flex-1, overflow-hidden
          고정 시: flex, flex-wrap, justify-center
        */}
        <div
          className={
            shouldScroll
              ? // 스크롤 시
                "flex-1 overflow-hidden relative"
              : // 고정 시
                "flex flex-wrap justify-center gap-6"
          }
        >
          <motion.div
            className="flex gap-6"
            // --- 7. 애니메이션 조건부 적용 ---
            animate={{ x: shouldScroll ? offsetX : 0 }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 0.1, // 0으로 하면 animate가 즉시 적용되어 transition이 안먹힐 수 있습니다.
            }}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          >
            {displayPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-56 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all p-6 flex items-center justify-center group hover:bg-white/8"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain max-h-16 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- 5. 버튼 조건부 렌더링 --- */}
        {shouldScroll && (
          <button
            onClick={handleNextSlide}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transition-all group z-10"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
}
