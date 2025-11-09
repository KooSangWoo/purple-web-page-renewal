import { motion } from 'motion/react';
import { Brain, Activity, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

interface MedicalProductsProps {
  language: 'ko' | 'en';
}

export default function MedicalProducts({ language }: MedicalProductsProps) {
  const content = {
    ko: {
      title: '의료 AI 솔루션',
      subtitle: '뇌질환 진단의 새로운 기준',
      ich: {
        title: 'Hyper Insight - ICH',
        subtitle: '뇌출혈 진단 AI',
        description: '뇌출혈(Intracerebral Hemorrhage)을 빠르고 정확하게 검출합니다.',
        features: ['실시간 검출', '98% 이상 정확도', '3D 시각화'],
      },
      infarct: {
        title: 'Hyper Insight - Infarct',
        subtitle: '뇌경색 진단 AI',
        description: '급성 뇌경색을 조기에 발견하여 골든타임을 확보합니다.',
        features: ['조기 검출', '병변 크기 측정', '예후 예측'],
      },
      conditions: {
        hemorrhage: {
          title: '뇌출혈 (ICH)',
          description: '뇌 혈관이 파열되어 뇌 조직 내부로 출혈이 발생하는 질환입니다. 고혈압, 외상 등이 주요 원인이며, 신속한 진단과 치료가 생명을 좌우합니다.',
          symptoms: '갑작스러운 두통, 의식 저하, 편마비',
        },
        infarct: {
          title: '뇌경색 (Infarction)',
          description: '뇌 혈관이 막혀 혈류가 차단되어 뇌 조직이 손상되는 질환입니다. 골든타임 내 치료 시 예후가 크게 개선됩니다.',
          symptoms: '안면 마비, 언어 장애, 편측 마비',
        },
        artery: {
          title: '뇌동맥류 (Aneurysm)',
          description: '뇌 혈관 벽이 약해져 풍선처럼 부풀어 오르는 질환입니다. 파열 시 치명적인 뇌출혈을 유발할 수 있습니다.',
          symptoms: '두통, 시야 장애, 의식 소실 (파열 시)',
        },
      },
    },
    en: {
      title: 'Medical AI Solutions',
      subtitle: 'New Standard in Brain Disease Diagnosis',
      ich: {
        title: 'Hyper Insight - ICH',
        subtitle: 'Intracerebral Hemorrhage AI',
        description: 'Fast and accurate detection of intracerebral hemorrhage.',
        features: ['Real-time Detection', '98%+ Accuracy', '3D Visualization'],
      },
      infarct: {
        title: 'Hyper Insight - Infarct',
        subtitle: 'Brain Infarction AI',
        description: 'Early detection of acute brain infarction to secure golden time.',
        features: ['Early Detection', 'Lesion Size Measurement', 'Prognosis Prediction'],
      },
      conditions: {
        hemorrhage: {
          title: 'Intracerebral Hemorrhage (ICH)',
          description: 'A condition where a blood vessel in the brain ruptures, causing bleeding into the brain tissue. Hypertension and trauma are major causes, and rapid diagnosis and treatment are life-critical.',
          symptoms: 'Sudden headache, decreased consciousness, hemiplegia',
        },
        infarct: {
          title: 'Brain Infarction',
          description: 'A condition where brain tissue is damaged due to blocked blood vessels. Prognosis improves significantly with treatment within the golden time.',
          symptoms: 'Facial paralysis, speech disorders, unilateral paralysis',
        },
        artery: {
          title: 'Brain Aneurysm',
          description: 'A condition where the brain vessel wall weakens and bulges like a balloon. When ruptured, it can cause fatal brain hemorrhage.',
          symptoms: 'Headache, visual disturbances, loss of consciousness (when ruptured)',
        },
      },
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-white/60">{t.subtitle}</p>
        </motion.div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {/* ICH Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-2 text-white">{t.ich.title}</h3>
              <div className="text-cyan-400 mb-4">{t.ich.subtitle}</div>
              <p className="text-white/70 mb-6">{t.ich.description}</p>
              <div className="space-y-2">
                {t.ich.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Infarct Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-2 text-white">{t.infarct.title}</h3>
              <div className="text-purple-400 mb-4">{t.infarct.subtitle}</div>
              <p className="text-white/70 mb-6">{t.infarct.description}</p>
              <div className="space-y-2">
                {t.infarct.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Brain Conditions Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Hemorrhage */}
            <Card className="p-6 bg-[#1a1a2e]/40 backdrop-blur-xl border-red-500/20">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-red-500" />
              </div>
              <h4 className="text-xl mb-3 text-white">{t.conditions.hemorrhage.title}</h4>
              <p className="text-sm text-white/70 mb-4">{t.conditions.hemorrhage.description}</p>
              <div className="text-xs text-red-400 bg-red-500/10 px-3 py-2 rounded-lg">
                {language === 'ko' ? '주요 증상: ' : 'Symptoms: '}{t.conditions.hemorrhage.symptoms}
              </div>
            </Card>

            {/* Infarction */}
            <Card className="p-6 bg-[#1a1a2e]/40 backdrop-blur-xl border-orange-500/20">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-orange-500" />
              </div>
              <h4 className="text-xl mb-3 text-white">{t.conditions.infarct.title}</h4>
              <p className="text-sm text-white/70 mb-4">{t.conditions.infarct.description}</p>
              <div className="text-xs text-orange-400 bg-orange-500/10 px-3 py-2 rounded-lg">
                {language === 'ko' ? '주요 증상: ' : 'Symptoms: '}{t.conditions.infarct.symptoms}
              </div>
            </Card>

            {/* Aneurysm */}
            <Card className="p-6 bg-[#1a1a2e]/40 backdrop-blur-xl border-yellow-500/20">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-yellow-500" />
              </div>
              <h4 className="text-xl mb-3 text-white">{t.conditions.artery.title}</h4>
              <p className="text-sm text-white/70 mb-4">{t.conditions.artery.description}</p>
              <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-2 rounded-lg">
                {language === 'ko' ? '주요 증상: ' : 'Symptoms: '}{t.conditions.artery.symptoms}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
