import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  language: 'ko' | 'en';
}

export default function VideoSection({ language }: VideoSectionProps) {
  const content = {
    ko: {
      videoTitle: 'Watch the video below to see how AI detection, triage and localization can transform stroke care',
    },
    en: {
      videoTitle: 'Watch the video below to see how AI detection, triage and localization can transform stroke care',
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#0a0a1a]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/3 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Video Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Video Title with Icon */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-3xl" />
            <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 to-[#2a2a3e]/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  {t.videoTitle}
                </span>
              </h3>
            </div>
          </div>
          
          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border-2 border-purple-500/30"
              src="https://www.youtube.com/embed/VrMBB6ZemHk?si=WoZ0BBsHITJdo3oP"
              title="Purple AI Stroke Care Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
