import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
}

export default function PartnerCarousel({ partners }: PartnerCarouselProps) {
  const [offsetX, setOffsetX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  // Triple the logos for seamless infinite scroll
  const tripleLogos = [...partners, ...partners, ...partners];

  const CARD_WIDTH = 240; // Width of each card including gap
  const SCROLL_SPEED = 0.5; // Pixels per frame

  useEffect(() => {
    if (isPaused) return;

    const animate = () => {
      setOffsetX((prev) => {
        const newOffset = prev - SCROLL_SPEED;
        // Reset when first set of logos is completely scrolled
        if (Math.abs(newOffset) >= CARD_WIDTH * partners.length) {
          return 0;
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
  }, [isPaused, partners.length]);

  const handlePrevSlide = () => {
    setOffsetX((prev) => prev + CARD_WIDTH);
  };

  const handleNextSlide = () => {
    setOffsetX((prev) => prev - CARD_WIDTH);
  };

  return (
    <div className="relative max-w-7xl mx-auto mb-16">
      <div className="flex items-center gap-6">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrevSlide}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transition-all group z-10"
          aria-label="Previous partners"
        >
          <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
        </button>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: offsetX }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 0,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {tripleLogos.map((partner, index) => (
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

        {/* Right Navigation Button */}
        <button
          onClick={handleNextSlide}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 hover:bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transition-all group z-10"
          aria-label="Next partners"
        >
          <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}
