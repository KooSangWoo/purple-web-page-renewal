import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Target, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DeploymentSectionProps {
  language: "ko" | "en";
}

export default function DeploymentSection({
  language,
}: DeploymentSectionProps) {
  const [activeTab, setActiveTab] = useState("hemorrhage");

  const content = {
    ko: {
      title: "배포를 위한 Hyper Insight Suite",
      subtitle:
        "AI 기반 솔루션으로 신속한 성능, 원활한 확장성 및 강력한 보안을 제공합니다. 각 병원의 고유한 요구사항에 맞춰 조정 가능한 기능으로 신뢰할 수 있고 미래 지향적인 솔루션을 제공합니다.",
      tabs: {
        hemorrhage: "뇌출혈",
        infarct: "뇌경색",
        aneurysm: "뇌동맥류",
      },
      hemorrhage: {
        title: "빠르고, 정확하며, 일관된",
        subtitle: "효과적인 분류 및 빠른 이송 결정",
        description:
          "비조영 뇌 CT 스캔에서 의심되는 급성 뇌내출혈을 감지하고 국소화하도록 설계된 AI 소프트웨어로, 잠재적인 급성 뇌내출혈에 대해 임상의에게 즉시 경고합니다. 의심스러운 영역을 강조 표시하고 뇌출혈의 존재에 대한 확률 점수를 제공하여 의사의 진단 결정을 지원합니다.",
        ctaTitle: "비조영 CT 뇌내출혈",
        ctaSubtitle: "주요 유형의 뇌출혈 진단을 위한 AI 임상 진단 지원",
        clinicalUse: {
          title: "임상 사용 사례",
          items: [
            "방사선 전문의가 급성 뇌내출혈을 식별하고 위치를 파악하는 데 도움",
            "AI 지원 감지를 사용하여 진단의 민감도 및 특이도 향상",
            "응급 상황에서 빠른 분류 및 이송 결정 지원",
          ],
        },
        howItWorks: {
          title: "작동 방식",
          items: [
            "의심되는 출혈 영역의 자동 감지 및 국소화",
            "확률 기반 점수를 사용한 CT 이미지의 시각적 오버레이",
            "10초 이내 빠른 분석으로 이송 결정 지원",
            "기존 PACS 시스템과 통합",
          ],
        },
      },
      infarct: {
        title: "Hyper Insight – 뇌경색",
        description:
          "AI 소프트웨어로 비조영 뇌 CT 스캔에서 의심되는 급성 뇌경색을 감지하고 국소화하도록 설계되었으며, 잠재적인 급성 뇌경색에 대해 임상의에게 즉시 경고합니다. 의심스러운 영역을 강조 표시하고 뇌경색의 존재에 대한 확률 점수를 제공하여 의사의 진단 결정을 지원합니다.",
        ctaTitle: "비조영 CT 뇌경색",
        ctaSubtitle: "주요 유형의 뇌경색 진단을 위한 AI 임상 진단 지원",
        clinicalUse: {
          title: "임상 사용 사례",
          items: [
            "방사선 전문의가 급성 허혈성 뇌졸중을 식별하고 위치를 파악하는 데 도움",
            "AI 지원 감지를 사용하여 진단의 민감도 및 특이도 향상",
          ],
        },
        howItWorks: {
          title: "작동 방식",
          items: [
            "의심되는 경색 영역의 자동 감지 및 국소화",
            "확률 기반 점수를 사용한 CT 이미지의 시각적 오버레이",
            "기존 PACS 시스템과 통합",
          ],
        },
      },
      aneurysm: {
        title: "Hyper Insight – 뇌동맥류",
        description:
          "뇌 CTA 스캔에서 의심되는 뇌동맥류를 감지하고 국소화하도록 설계된 AI 소프트웨어로, 잠재적인 뇌동맥류에 대해 임상의에게 즉시 경고합니다. 의심스러운 영역을 강조 표시하고 동맥류의 존재에 대한 확률 점수를 제공하여 의사의 진단 결정을 지원합니다.",
        ctaTitle: "CTA 뇌동맥류",
        ctaSubtitle: "3mm 미만의 작은 병변에 대한 AI 임상 진단 지원",
        clinicalUse: {
          title: "임상 사용 사례",
          items: [
            "방사선 전문의가 뇌동맥류를 식별하고 위치와 크기를 결정하는 데 도움",
            "대량 임상 환경에서 진단 신뢰도를 향상시키고 간과를 줄임",
          ],
        },
        howItWorks: {
          title: "작동 방식",
          items: [
            "잠재적 동맥류 부위의 자동 감지",
            "동맥류 위치 및 직경 범위의 시각화 제공",
            "감지된 각 병변에 대한 확률 값 출력",
            "기존 PACS 시스템과 통합",
          ],
        },
      },
      stats: {
        hospitals: {
          label: "40개 이상 병원에서 신뢰",
          number: "40",
          suffix: "",
        },
        accuracy: {
          label: "정확도",
          number: "99",
          suffix: "%",
        },
        fda: {
          label: "FDA 승인",
        },
      },
    },
    en: {
      title: "Hyper Insight Suite for Deployment",
      subtitle:
        "Our AI-powered solutions deliver rapid performance, seamless scalability and robust security. With adaptable features tailored to each hospital's unique requirements, it provides dependable, future-ready solutions",
      tabs: {
        hemorrhage: "HEMORRHAGE",
        infarct: "INFARCT",
        aneurysm: "ANEURYSM",
      },
      hemorrhage: {
        title: "Fast, Accurate, Consistent",
        subtitle: "Effective Triage and Faster Transfer Decisions",
        description:
          "AI software designed to assist in detecting and localizing suspicious acute intracerebral hemorrhage on non-contrast brain CT scans, instantly alerting clinicians to potential acute intracerebral hemorrhage. It highlights suspicious regions and provides a probability score for the presence of hemorrhage to support physicians' diagnostic decisions.",
        ctaTitle: "Non-contrast CT Intracerebral Hemorrhage",
        ctaSubtitle:
          "AI clinical diagnostic support for major types of intracerebral hemorrhage",
        clinicalUse: {
          title: "Clinical Use Case",
          items: [
            "Assist radiologists in identifying and localizing acute intracerebral hemorrhage",
            "Improve sensitivity and specificity in diagnosis using AI-supported detection",
            "Support rapid triage and transfer decisions in emergency situations",
          ],
        },
        howItWorks: {
          title: "How It Works",
          items: [
            "Automated detection and localization of suspected hemorrhage regions",
            "Visual overlays on CT images with probability-based scoring",
            "Rapid analysis within 10 seconds to support transfer decisions",
            "Integrates with existing PACS systems",
          ],
        },
      },
      infarct: {
        title: "Hyper Insight – Infarct",
        description:
          "AI software designed to assist in detecting and localizing suspicious acute cerebral infarction on non-contrast brain CT scans, instantly alerting clinicians to potential acute cerebral infarction. It highlights suspicious regions and provides a probability score for the presence of infarction to support physicians' diagnostic decisions.",
        ctaTitle: "Non-contrast CT Brain Infarction",
        ctaSubtitle:
          "AI clinical diagnostic support for major types of brain infarction",
        clinicalUse: {
          title: "Clinical Use Case",
          items: [
            "Assist radiologists in identifying and localizing acute ischemic strokes",
            "Improve sensitivity and specificity in diagnosis using AI-supported detection",
          ],
        },
        howItWorks: {
          title: "How It Works",
          items: [
            "Automated detection and localization of suspected infarct regions",
            "Visual overlays on CT images with probability-based scoring",
            "Integrates with existing PACS systems",
          ],
        },
      },
      aneurysm: {
        title: "Hyper Insight – Aneurysm",
        description:
          "AI software designed to assist in detecting and localizing suspected cerebral aneurysms in brain CTA scans, instantly alerting clinicians to potential cerebral aneurysms. It highlights suspicious regions and provides a probability score for the presence of aneurysm to support physicians' diagnostic decisions.",
        ctaTitle: "CTA Brain Aneurysm",
        ctaSubtitle:
          "AI clinical diagnostic support for small lesions under 3 mm",
        clinicalUse: {
          title: "Clinical Use Case",
          items: [
            "Assist radiologists in identifying cerebral aneurysms and determining their location and size.",
            "Enhance diagnostic confidence and reduce oversight in high-volume clinical settings.",
          ],
        },
        howItWorks: {
          title: "How It Works",
          items: [
            "Automatic detection of potential aneurysm sites.",
            "Provides visualization of aneurysm locations and diameter range.",
            "Outputs probability values for each detected lesion.",
            "Integrates with existing PACS systems",
          ],
        },
      },
      stats: {
        hospitals: {
          label: "Trusted by over",
          number: "40",
          suffix: " hospitals",
        },
        accuracy: {
          label: "Accuracy",
          number: "99",
          suffix: "%",
        },
        fda: {
          label: "FDA-Cleared",
        },
      },
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a1a] to-[#1a1a2e]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">{t.title}</h2>
          <p className="text-white/70 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          {Object.entries(t.tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-3 rounded-lg transition-all uppercase tracking-wide ${
                activeTab === key
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "hemorrhage" && (
            <motion.div
              key="hemorrhage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title & Description */}
              <div className="text-center mb-12 max-w-4xl mx-auto">
                <h3 className="text-3xl mb-6 text-white">
                  {t.hemorrhage.title}
                </h3>
                <p className="text-xl mb-4 text-white/80">
                  {t.hemorrhage.subtitle}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {t.hemorrhage.description}
                </p>
              </div>

              {/* CTA Title */}
              <div className="text-center mb-8">
                <h4 className="text-2xl mb-2 text-white">
                  {t.hemorrhage.ctaTitle}
                </h4>
                <p className="text-white/70">{t.hemorrhage.ctaSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12 items-start">
                {/* Stats Grid */}
                <div className="grid md:grid-r-3 gap-6 max-w-5xl  mb-12">
                  {/* Hospitals */}
                  <Card className="p-6 bg-[#1a1a2e]/60 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-500/60 transition-all">
                    <div className="flex flex-row items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-7 h-7 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">
                          {t.stats.hospitals.label}
                        </div>
                        <div className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {t.stats.hospitals.number}
                          <span className="text-base ml-1">
                            {t.stats.hospitals.suffix}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Accuracy */}
                  <Card className="p-6 bg-[#1a1a2e]/60 backdrop-blur-xl border-2 border-cyan-500/20 hover:border-cyan-500/60 transition-all">
                    <div className="flex flex-row items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">
                          {t.stats.accuracy.label}
                        </div>
                        <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {t.stats.accuracy.number}
                          <span className="text-base">
                            {t.stats.accuracy.suffix}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* FDA */}
                  <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-lg shadow-purple-500/50">
                    <div className="flex flex-row items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-xl text-white">
                        {t.stats.fda.label}
                      </div>
                    </div>
                  </Card>
                </div>
                {/* Image */}
                <div className="mb-12 max-w-3xl mx-auto">
                  <img
                    src="/figma/55c13409e60550fde205822c2c42e3bf60d42eb4.png"
                    alt="Hemorrhage detection"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "infarct" && (
            <motion.div
              key="infarct"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title & Description */}
              <div className="text-center mb-12 max-w-4xl mx-auto">
                <h3 className="text-3xl mb-6 text-white">{t.infarct.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {t.infarct.description}
                </p>
              </div>

              {/* CTA Title */}
              <div className="text-center mb-8">
                <h4 className="text-2xl mb-2 text-white">
                  {t.infarct.ctaTitle}
                </h4>
                <p className="text-white/70">{t.infarct.ctaSubtitle}</p>
              </div>

              {/* Image */}
              <div className="mb-12 max-w-3xl mx-auto">
                <img
                  src="/figma/8b9791f38d5638568f59f56466a7f988635b1d7c.png"
                  alt="Brain Infarction detection"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Clinical Use Case & How It Works */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Clinical Use Case */}
                <div>
                  <h5 className="text-xl mb-4 text-white">
                    {t.infarct.clinicalUse.title}
                  </h5>
                  <ul className="space-y-3">
                    {t.infarct.clinicalUse.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h5 className="text-xl mb-4 text-white">
                    {t.infarct.howItWorks.title}
                  </h5>
                  <ul className="space-y-3">
                    {t.infarct.howItWorks.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "aneurysm" && (
            <motion.div
              key="aneurysm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title & Description */}
              <div className="text-center mb-12 max-w-4xl mx-auto">
                <h3 className="text-3xl mb-6 text-white">{t.aneurysm.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {t.aneurysm.description}
                </p>
              </div>

              {/* CTA Title */}
              <div className="text-center mb-8">
                <h4 className="text-2xl mb-2 text-white">
                  {t.aneurysm.ctaTitle}
                </h4>
                <p className="text-white/70">{t.aneurysm.ctaSubtitle}</p>
              </div>

              {/* Image */}
              <div className="mb-12 max-w-3xl mx-auto">
                <img
                  src="/figma/f74b4cb6897b9a92acaa9f6b0e9995a11c8ea05b.png"
                  alt="Brain Aneurysm detection"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Clinical Use Case & How It Works */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Clinical Use Case */}
                <div>
                  <h5 className="text-xl mb-4 text-white">
                    {t.aneurysm.clinicalUse.title}
                  </h5>
                  <ul className="space-y-3">
                    {t.aneurysm.clinicalUse.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <h5 className="text-xl mb-4 text-white">
                    {t.aneurysm.howItWorks.title}
                  </h5>
                  <ul className="space-y-3">
                    {t.aneurysm.howItWorks.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
