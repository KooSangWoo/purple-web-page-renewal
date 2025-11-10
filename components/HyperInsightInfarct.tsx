import { Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HyperInsightInfarctProps {
  language: "ko" | "en";
}

export default function HyperInsightInfarct({
  language,
}: HyperInsightInfarctProps) {
  const content = {
    ko: {
      title: "Hyper Insight™ - INFARCT*",
      description:
        "AI-powered diagnostic support for rapid, accurate detection and localization of acute ischemic stroke on non-contrast CT, providing ROI visualization, ASPECTS scoring, and comprehensive AIS assessment with probability-based, real-time alerts for LVO, MeVO, and SVO detection, along with automated report generation.",
      preciseDetection: "Precise AI Detection",
      preciseDetectionDesc:
        "Automatically highlights suspicious regions, assigns probability scores for the likelihood of infarction, and alerts clinicians in real time.",
      intuitiveReporting: "Intuitive Reporting",
      intuitiveReportingDesc:
        "Generates clear, easy-to-read summary reports for rapid clinical review.",
      worklistPrioritization: "Worklist Prioritization",
      worklistPrioritizationDesc:
        "Urgent cases are automatically highlighted and sorted by severity.",
      goldenTimeAdvantage: "Golden Time Advantage",
      goldenTimeAdvantageDesc: "Faster time-to-review for time-critical cases.",
      efficiencyBoost: "Efficiency Boost",
      efficiencyBoostDesc:
        "Frees attention to the highest-risk cases first. Delivers AI-supported findings within seconds.",
      automatedAnalysis: "Automated Analysis",
      automatedAnalysisDesc:
        "Detects and localizes suspected infarct regions using deep learning. Marks suspected areas and provides a probability scoring directly on CT image",
      pacsIntegration: "PACS Integration",
      pacsIntegrationDesc:
        "Connects seamlessly with existing hospital imaging systems.",
      disclaimer:
        "* Approved by Korea's Ministry of Food and Drug Safety (MFDS). ASPECTS scoring and reporting features are currently undergoing National MFDS review. Not cleared or approved by the US Food and Drug Administration (FDA). This software is not for clinical use in the United States and is provided for research, evaluation, and educational purposes only.",
    },
    en: {
      title: "Hyper Insight™ - INFARCT*",
      description:
        "AI-powered diagnostic support for rapid, accurate detection and localization of acute ischemic stroke on non-contrast CT, providing ROI visualization, ASPECTS scoring, and comprehensive AIS assessment with probability-based, real-time alerts for LVO, MeVO, and SVO detection, along with automated report generation.",
      preciseDetection: "Precise AI Detection",
      preciseDetectionDesc:
        "Automatically highlights suspicious regions, assigns probability scores for the likelihood of infarction, and alerts clinicians in real time.",
      intuitiveReporting: "Intuitive Reporting",
      intuitiveReportingDesc:
        "Generates clear, easy-to-read summary reports for rapid clinical review.",
      worklistPrioritization: "Worklist Prioritization",
      worklistPrioritizationDesc:
        "Urgent cases are automatically highlighted and sorted by severity.",
      goldenTimeAdvantage: "Golden Time Advantage",
      goldenTimeAdvantageDesc: "Faster time-to-review for time-critical cases.",
      efficiencyBoost: "Efficiency Boost",
      efficiencyBoostDesc:
        "Frees attention to the highest-risk cases first. Delivers AI-supported findings within seconds.",
      automatedAnalysis: "Automated Analysis",
      automatedAnalysisDesc:
        "Detects and localizes suspected infarct regions using deep learning. Marks suspected areas and provides a probability scoring directly on CT image",
      pacsIntegration: "PACS Integration",
      pacsIntegrationDesc:
        "Connects seamlessly with existing hospital imaging systems.",
      disclaimer:
        "* Approved by Korea's Ministry of Food and Drug Safety (MFDS). ASPECTS scoring and reporting features are currently undergoing National MFDS review. Not cleared or approved by the US Food and Drug Administration (FDA). This software is not for clinical use in the United States and is provided for research, evaluation, and educational purposes only.",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-start gap-6">
            {/* Brain Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-3 flex items-center justify-center flex-shrink-0">
              <Brain className="w-10 h-10 text-white" />
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <h1 className="mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Hyper Insight™
                </span>
                <span className="text-white"> - </span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  INFARCT*
                </span>
              </h1>
              <p className="text-white/70 leading-relaxed max-w-5xl">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - 2 Column Layout */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Visual Examples */}
            <div className="space-y-8">
              {/* Section 1: CT Scan Comparison */}
              <div className="relative">
                {/* Purple numbered badge */}
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white">1</span>
                </div>

                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Original CT Scan */}
                    <div className="bg-black rounded-xl overflow-hidden col-span-2">
                      <ImageWithFallback
                        src="/images/MASTER_INFARCT_251028.jpg"
                        alt="Original CT Scan"
                        className="w-full h-full object-contains "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Medical Report Interface */}
              <div className="relative">
                {/* Purple numbered badge */}
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white">2</span>
                </div>

                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden">
                  {/* Report Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                    <h3 className="text-white">
                      Medical Insight+ BRAIN INFARCT
                    </h3>
                  </div>

                  {/* Report Body */}
                  <div className="p-6 space-y-6">
                    <ImageWithFallback
                      src="/images/report_brain_infarct.png"
                      alt="Original CT Scan"
                      className="w-full h-full object-contains "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-6">
              {/* Feature with numbered badge - Precise AI Detection */}
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white">1</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all pt-8">
                  <h3 className="text-purple-400 mb-3">{t.preciseDetection}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t.preciseDetectionDesc}
                  </p>
                </div>
              </div>

              {/* Feature with numbered badge - Intuitive Reporting */}
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white">2</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all pt-8">
                  <h3 className="text-purple-400 mb-3">
                    {t.intuitiveReporting}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t.intuitiveReportingDesc}
                  </p>
                </div>
              </div>

              {/* Worklist Prioritization */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">
                  {t.worklistPrioritization}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t.worklistPrioritizationDesc}
                </p>
              </div>

              {/* Golden Time Advantage */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">
                  {t.goldenTimeAdvantage}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t.goldenTimeAdvantageDesc}
                </p>
              </div>

              {/* Efficiency Boost */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.efficiencyBoost}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t.efficiencyBoostDesc}
                </p>
              </div>

              {/* Automated Analysis */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.automatedAnalysis}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t.automatedAnalysisDesc}
                </p>
              </div>

              {/* PACS Integration */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.pacsIntegration}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t.pacsIntegrationDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <p className="text-white/50 text-sm leading-relaxed">
            {t.disclaimer}
          </p>
        </div>
      </section>
    </div>
  );
}
