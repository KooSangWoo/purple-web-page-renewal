import { motion } from 'motion/react';
import { Zap, Shield, Users, Sparkles, Code, LineChart } from 'lucide-react';
import { Card } from './ui/card';

interface BentoGridProps {
  language: 'ko' | 'en';
}

export default function BentoGrid({ language }: BentoGridProps) {
  const content = {
    ko: {
      title: '왜 Purple AI인가?',
      subtitle: '최첨단 기술과 검증된 전문성',
      services: {
        model: {
          title: 'AI 모델 개발',
          description: '맞춤형 AI 모델을 설계하고 개발합니다',
        },
        consulting: {
          title: 'AI 컨설팅',
          description: 'AI 도입 전략부터 실행까지 컨설팅',
        },
        solution: {
          title: 'AI 솔루션',
          description: '즉시 사용 가능한 AI 솔루션 제공',
        },
      },
      strengths: {
        performance: {
          title: '최고의 성능',
          description: '업계 최고 수준의 정확도와 속도',
        },
        security: {
          title: '보안 우선',
          description: '의료 데이터 보안 표준 준수',
        },
        support: {
          title: '전문가 지원',
          description: '24/7 기술 지원 및 유지보수',
        },
      },
    },
    en: {
      title: 'Why Purple AI?',
      subtitle: 'Cutting-edge Technology and Proven Expertise',
      services: {
        model: {
          title: 'AI Model Development',
          description: 'Design and develop custom AI models',
        },
        consulting: {
          title: 'AI Consulting',
          description: 'From AI adoption strategy to execution',
        },
        solution: {
          title: 'AI Solutions',
          description: 'Ready-to-use AI solutions',
        },
      },
      strengths: {
        performance: {
          title: 'Top Performance',
          description: 'Industry-leading accuracy and speed',
        },
        security: {
          title: 'Security First',
          description: 'Compliance with medical data security standards',
        },
        support: {
          title: 'Expert Support',
          description: '24/7 technical support and maintenance',
        },
      },
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-white/60">{t.subtitle}</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Large Card - AI Model Development */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <Card className="h-full p-8 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all group">
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl mb-4 text-white">{t.services.model.title}</h3>
                <p className="text-white/70 text-lg mb-6">{t.services.model.description}</p>
                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">98%</div>
                      <div className="text-sm text-white/60">{language === 'ko' ? '평균 정확도' : 'Avg Accuracy'}</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">50+</div>
                      <div className="text-sm text-white/60">{language === 'ko' ? '프로젝트' : 'Projects'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Top Performance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <Card className="h-full p-6 bg-[#1a1a2e]/40 backdrop-blur-xl border-cyan-500/20 hover:border-cyan-400/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl mb-2 text-white">{t.strengths.performance.title}</h4>
              <p className="text-sm text-white/60">{t.strengths.performance.description}</p>
            </Card>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1"
          >
            <Card className="h-full p-6 bg-[#1a1a2e]/40 backdrop-blur-xl border-green-500/20 hover:border-green-400/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl mb-2 text-white">{t.strengths.security.title}</h4>
              <p className="text-sm text-white/60">{t.strengths.security.description}</p>
            </Card>
          </motion.div>

          {/* AI Consulting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1"
          >
            <Card className="h-full p-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LineChart className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl mb-2 text-white">{t.services.consulting.title}</h4>
              <p className="text-sm text-white/60">{t.services.consulting.description}</p>
            </Card>
          </motion.div>

          {/* Expert Support */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1"
          >
            <Card className="h-full p-6 bg-[#1a1a2e]/40 backdrop-blur-xl border-orange-500/20 hover:border-orange-400/40 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl mb-2 text-white">{t.strengths.support.title}</h4>
              <p className="text-sm text-white/60">{t.strengths.support.description}</p>
            </Card>
          </motion.div>

          {/* AI Solutions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6 bg-gradient-to-br from-pink-500/20 to-purple-600/10 border-pink-500/30 backdrop-blur-sm hover:border-pink-400/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-white">{t.services.solution.title}</h4>
                  <p className="text-sm text-white/60">{t.services.solution.description}</p>
                  <div className="flex gap-2 mt-4">
                    {['Medical AI', 'Vision AI', 'NLP'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
