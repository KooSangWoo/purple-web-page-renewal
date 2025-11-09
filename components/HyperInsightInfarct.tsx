import { Brain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HyperInsightInfarctProps {
  language: 'ko' | 'en';
}

export default function HyperInsightInfarct({ language }: HyperInsightInfarctProps) {
  const content = {
    ko: {
      title: 'Hyper Insight™ - INFARCT*',
      description: 'AI-powered diagnostic support for rapid, accurate detection and localization of acute ischemic stroke on non-contrast CT, providing ROI visualization, ASPECTS scoring, and comprehensive AIS assessment with probability-based, real-time alerts for LVO, MeVO, and SVO detection, along with automated report generation.',
      preciseDetection: 'Precise AI Detection',
      preciseDetectionDesc: 'Automatically highlights suspicious regions, assigns probability scores for the likelihood of infarction, and alerts clinicians in real time.',
      intuitiveReporting: 'Intuitive Reporting',
      intuitiveReportingDesc: 'Generates clear, easy-to-read summary reports for rapid clinical review.',
      worklistPrioritization: 'Worklist Prioritization',
      worklistPrioritizationDesc: 'Urgent cases are automatically highlighted and sorted by severity.',
      goldenTimeAdvantage: 'Golden Time Advantage',
      goldenTimeAdvantageDesc: 'Faster time-to-review for time-critical cases.',
      efficiencyBoost: 'Efficiency Boost',
      efficiencyBoostDesc: 'Frees attention to the highest-risk cases first. Delivers AI-supported findings within seconds.',
      automatedAnalysis: 'Automated Analysis',
      automatedAnalysisDesc: 'Detects and localizes suspected infarct regions using deep learning. Marks suspected areas and provides a probability scoring directly on CT image',
      pacsIntegration: 'PACS Integration',
      pacsIntegrationDesc: 'Connects seamlessly with existing hospital imaging systems.',
      disclaimer: '* Approved by Korea\'s Ministry of Food and Drug Safety (MFDS). ASPECTS scoring and reporting features are currently undergoing National MFDS review. Not cleared or approved by the US Food and Drug Administration (FDA). This software is not for clinical use in the United States and is provided for research, evaluation, and educational purposes only.',
    },
    en: {
      title: 'Hyper Insight™ - INFARCT*',
      description: 'AI-powered diagnostic support for rapid, accurate detection and localization of acute ischemic stroke on non-contrast CT, providing ROI visualization, ASPECTS scoring, and comprehensive AIS assessment with probability-based, real-time alerts for LVO, MeVO, and SVO detection, along with automated report generation.',
      preciseDetection: 'Precise AI Detection',
      preciseDetectionDesc: 'Automatically highlights suspicious regions, assigns probability scores for the likelihood of infarction, and alerts clinicians in real time.',
      intuitiveReporting: 'Intuitive Reporting',
      intuitiveReportingDesc: 'Generates clear, easy-to-read summary reports for rapid clinical review.',
      worklistPrioritization: 'Worklist Prioritization',
      worklistPrioritizationDesc: 'Urgent cases are automatically highlighted and sorted by severity.',
      goldenTimeAdvantage: 'Golden Time Advantage',
      goldenTimeAdvantageDesc: 'Faster time-to-review for time-critical cases.',
      efficiencyBoost: 'Efficiency Boost',
      efficiencyBoostDesc: 'Frees attention to the highest-risk cases first. Delivers AI-supported findings within seconds.',
      automatedAnalysis: 'Automated Analysis',
      automatedAnalysisDesc: 'Detects and localizes suspected infarct regions using deep learning. Marks suspected areas and provides a probability scoring directly on CT image',
      pacsIntegration: 'PACS Integration',
      pacsIntegrationDesc: 'Connects seamlessly with existing hospital imaging systems.',
      disclaimer: '* Approved by Korea\'s Ministry of Food and Drug Safety (MFDS). ASPECTS scoring and reporting features are currently undergoing National MFDS review. Not cleared or approved by the US Food and Drug Administration (FDA). This software is not for clinical use in the United States and is provided for research, evaluation, and educational purposes only.',
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
                    <div className="bg-black rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMENUJTIwc2NhbiUyMHN0cm9rZXxlbnwxfHx8fDE3NjI0ODA2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Original CT Scan"
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    {/* AI-Enhanced CT Scan */}
                    <div className="bg-black rounded-xl overflow-hidden relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMENUJTIwc2NhbiUyMHN0cm9rZXxlbnwxfHx8fDE3NjI0ODA2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="AI Detection CT Scan"
                        className="w-full h-full object-cover aspect-square"
                      />
                      {/* Simulated AI detection overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-red-500/40 rounded-full blur-xl"></div>
                      </div>
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
                    <h3 className="text-white">Medical Insight+ BRAIN INFARCT</h3>
                  </div>
                  
                  {/* Report Body */}
                  <div className="p-6 space-y-6">
                    {/* Report Title and Info */}
                    <div>
                      <h4 className="text-white/80 mb-4">Infarct - Report</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-white/50">Patient ID</p>
                          <p className="text-white/50">Patient Name</p>
                          <p className="text-white/50">Age / Sex</p>
                          <p className="text-white/50">Study Date</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/70">-</p>
                          <p className="text-white/70">-</p>
                          <p className="text-white/70">67Y/M</p>
                          <p className="text-white/70">2025-10-03 17:30</p>
                        </div>
                      </div>
                    </div>

                    {/* AI Probability */}
                    <div className="bg-white/5 rounded-xl px-4 py-2 text-center">
                      <p className="text-white/60 text-sm">AI Probability (0-100) : 87.9</p>
                    </div>

                    {/* Suspected Badge */}
                    <div className="bg-red-500/20 border-2 border-red-500 rounded-xl px-6 py-3 text-center">
                      <p className="text-red-400">Suspected</p>
                    </div>

                    {/* ASPECT SCORE */}
                    <div className="text-center">
                      <p className="text-white/60 text-sm mb-3">ASPECT SCORE : 7</p>
                      
                      {/* Brain Scan Images */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-black rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMENUJTIwc2NhbiUyMHN0cm9rZXxlbnwxfHx8fDE3NjI0ODA2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Brain Scan 1"
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                        <div className="bg-black rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMENUJTIwc2NhbiUyMHN0cm9rZXxlbnwxfHx8fDE3NjI0ODA2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Brain Scan 2"
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                      </div>

                      {/* ASPECT Score Legend */}
                      <div className="flex flex-wrap justify-center gap-2 text-xs">
                        <div className="bg-cyan-500/20 border border-cyan-500 px-3 py-1 rounded">C</div>
                        <div className="bg-orange-500/20 border border-orange-500 px-3 py-1 rounded">IC</div>
                        <div className="bg-purple-500/20 border border-purple-500 px-3 py-1 rounded">L</div>
                        <div className="bg-green-500/20 border border-green-500 px-3 py-1 rounded">M1</div>
                        <div className="bg-blue-500/20 border border-blue-500 px-3 py-1 rounded">M2</div>
                        <div className="bg-pink-500/20 border border-pink-500 px-3 py-1 rounded">M3</div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 text-xs mt-2">
                        <div className="bg-indigo-500/20 border border-indigo-500 px-3 py-1 rounded">M2</div>
                        <div className="bg-yellow-500/20 border border-yellow-500 px-3 py-1 rounded">M3</div>
                        <div className="bg-purple-500/20 border border-purple-500 px-3 py-1 rounded">M4</div>
                        <div className="bg-teal-500/20 border border-teal-500 px-3 py-1 rounded">M5</div>
                        <div className="bg-rose-500/20 border border-rose-500 px-3 py-1 rounded">M6</div>
                      </div>
                      <div className="flex justify-center mt-2">
                        <div className="bg-red-500/30 border border-red-500 px-4 py-1 rounded text-xs">Infarct</div>
                      </div>
                    </div>
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
                  <p className="text-white/60 text-sm leading-relaxed">{t.preciseDetectionDesc}</p>
                </div>
              </div>

              {/* Feature with numbered badge - Intuitive Reporting */}
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white">2</span>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all pt-8">
                  <h3 className="text-purple-400 mb-3">{t.intuitiveReporting}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{t.intuitiveReportingDesc}</p>
                </div>
              </div>

              {/* Worklist Prioritization */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.worklistPrioritization}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.worklistPrioritizationDesc}</p>
              </div>

              {/* Golden Time Advantage */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.goldenTimeAdvantage}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.goldenTimeAdvantageDesc}</p>
              </div>

              {/* Efficiency Boost */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.efficiencyBoost}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.efficiencyBoostDesc}</p>
              </div>

              {/* Automated Analysis */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.automatedAnalysis}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.automatedAnalysisDesc}</p>
              </div>

              {/* PACS Integration */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-orange-400 mb-3">{t.pacsIntegration}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.pacsIntegrationDesc}</p>
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
