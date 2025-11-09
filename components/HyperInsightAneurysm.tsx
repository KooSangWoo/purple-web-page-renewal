import { Brain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HyperInsightAneurysmProps {
  language: 'ko' | 'en';
}

export default function HyperInsightAneurysm({ language }: HyperInsightAneurysmProps) {
  const content = {
    ko: {
      title: 'Hyper Insight™ - ANEURYSM*',
      description: 'AI-powered diagnostic support for early, accurate detection and localization of unruptured intracranial aneurysms on CTA, with precise identification of size and shape, including lesions smaller than 2 mm.',
      worklistPrioritization: 'Worklist Prioritization',
      worklistPrioritizationDesc: 'Urgent cases are automatically highlighted and sorted by severity.',
      efficiencyBoost: 'Efficiency Boost',
      efficiencyBoostDesc: 'Frees attention to the highest-risk cases first. Delivers AI-supported findings within seconds.',
      automatedAnalysis: 'Automated Analysis',
      automatedAnalysisDesc: 'Detects and localizes unruptured cerebral aneurysms using deep learning. Marks aneurysm locations, outlines, and diameter ranges on CTA images.',
      pacsIntegration: 'PACS Integration',
      pacsIntegrationDesc: 'Connects seamlessly with existing hospital imaging systems.',
      disclaimer: '* Approved by Korea\'s Ministry of Food and Drug Safety (MFDS). Not cleared or approved by the US Food and Drug Administration (FDA). This software is not for clinical use in the United States and is provided for research, evaluation, and educational purposes only.',
    },
    en: {
      title: 'Hyper Insight™ - ANEURYSM*',
      description: 'AI-powered diagnostic support for early, accurate detection and localization of unruptured intracranial aneurysms on CTA, with precise identification of size and shape, including lesions smaller than 2 mm.',
      worklistPrioritization: 'Worklist Prioritization',
      worklistPrioritizationDesc: 'Urgent cases are automatically highlighted and sorted by severity.',
      efficiencyBoost: 'Efficiency Boost',
      efficiencyBoostDesc: 'Frees attention to the highest-risk cases first. Delivers AI-supported findings within seconds.',
      automatedAnalysis: 'Automated Analysis',
      automatedAnalysisDesc: 'Detects and localizes unruptured cerebral aneurysms using deep learning. Marks aneurysm locations, outlines, and diameter ranges on CTA images.',
      pacsIntegration: 'PACS Integration',
      pacsIntegrationDesc: 'Connects seamlessly with existing hospital imaging systems.',
      disclaimer: '* Approved by Korea\'s Ministry of Food and Drug Safety (MFDS). Not cleared or approved by the US Food and Drug Administration (FDA). This software is not for clinical use in the United States and is provided for research, evaluation, and educational purposes only.',
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
                  ANEURYSM*
                </span>
              </h1>
              <p className="text-white/70 leading-relaxed max-w-5xl">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {/* MRI Scan Images - Single Box with 2 Image Groups */}
            <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* First Image Group - Left Side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Left CT Scan - w/o AI */}
                  <div className="space-y-2">
                    <div className="bg-black rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDVCUyMHNjYW58ZW58MXx8fHwxNzYyNDgyNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="CT Scan without AI"
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="w-8 h-8 bg-gray-600 rounded"></div>
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Right CT Scan - w/ AI */}
                  <div className="space-y-2">
                    <div className="bg-black rounded-xl overflow-hidden relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDVCUyMHNjYW58ZW58MXx8fHwxNzYyNDgyNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="CT Scan with AI"
                        className="w-full aspect-square object-cover"
                      />
                      {/* AI Detection overlay */}
                      <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-blue-500/50 rounded-full blur-sm"></div>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="w-8 h-8 bg-gray-600 rounded"></div>
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Second Image Group - Right Side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Left CT Scan - w/o AI */}
                  <div className="space-y-2">
                    <div className="bg-black rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDVCUyMHNjYW58ZW58MXx8fHwxNzYyNDgyNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="CT Scan without AI"
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="w-8 h-8 bg-gray-600 rounded"></div>
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Right CT Scan - w/ AI */}
                  <div className="space-y-2">
                    <div className="bg-black rounded-xl overflow-hidden relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDVCUyMHNjYW58ZW58MXx8fHwxNzYyNDgyNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="CT Scan with AI"
                        className="w-full aspect-square object-cover"
                      />
                      {/* AI Detection overlay */}
                      <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-blue-500/50 rounded-full blur-sm"></div>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="w-8 h-8 bg-gray-600 rounded"></div>
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Column Layout - Chart and Features */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Performance Chart */}
              <div className="space-y-8">

                {/* Performance Chart - AI Assistance Improvement */}
                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden p-8">
                  <div className="flex justify-end gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-400/50 border-2 border-purple-300/50"></div>
                      <span className="text-white/80">w/o AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-600 border-2 border-purple-500"></div>
                      <span className="text-white/80">w/ AI</span>
                    </div>
                  </div>
                  
                  {/* Bar Chart - Grid Layout */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Non-radiologist */}
                    <div>
                      <p className="text-white mb-2">Non-radiologist</p>
                      <div className="relative h-64 flex items-end gap-3">
                        <div className="flex-1 flex flex-col items-center">
                          <div className="text-purple-300 mb-2">43.54%</div>
                          <div 
                            className="w-full bg-gradient-to-t from-purple-400/60 via-purple-400/50 to-purple-400/40 rounded-t-lg border-2 border-purple-400/40"
                            style={{ height: '43.54%' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="text-white mb-2">65.82%</div>
                          <div 
                            className="w-full bg-gradient-to-t from-purple-600 via-purple-600 to-purple-500 rounded-t-lg border-2 border-purple-500/50"
                            style={{ height: '65.82%' }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-cyan-400/70 text-xs mt-3 text-center">*P-value: &lt;0.0001</p>
                    </div>

                    {/* Radiologists */}
                    <div>
                      <p className="text-white mb-2">Radiologists</p>
                      <div className="relative h-64 flex items-end gap-3">
                        <div className="flex-1 flex flex-col items-center">
                          <div className="text-purple-300 mb-2">66.75%</div>
                          <div 
                            className="w-full bg-gradient-to-t from-purple-400/60 via-purple-400/50 to-purple-400/40 rounded-t-lg border-2 border-purple-400/40"
                            style={{ height: '66.75%' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="text-white mb-2">73.38%</div>
                          <div 
                            className="w-full bg-gradient-to-t from-purple-600 via-purple-600 to-purple-500 rounded-t-lg border-2 border-purple-500/50"
                            style={{ height: '73.38%' }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-cyan-400/70 text-xs mt-3 text-center">*P-value: 0.0004</p>
                    </div>

                    {/* Neuroradiologists */}
                    <div>
                      <p className="text-white mb-2">Neuroradiologists</p>
                      <div className="relative h-64 flex items-end gap-3">
                        <div className="flex-1 flex flex-col items-center">
                          <div className="text-purple-300 mb-2">84.95%</div>
                          <div 
                            className="w-full bg-gradient-to-t from-purple-400/60 via-purple-400/50 to-purple-400/40 rounded-t-lg border-2 border-purple-400/40"
                            style={{ height: '84.95%' }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="text-white mb-2">88.01%</div>
                          <div 
                            className="w-full bg-gradient-to-t from-purple-600 via-purple-600 to-purple-500 rounded-t-lg border-2 border-purple-500/50"
                            style={{ height: '88.01%' }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-cyan-400/70 text-xs mt-3 text-center">*P-value: 0.0299</p>
                    </div>
                  </div>
                </div>

                {/* Performance Table by Size */}
                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-purple-600/30 text-white">
                      <th className="px-4 py-3 text-left">Size (mm)</th>
                      <th className="px-4 py-3 text-center">AI (A)</th>
                      <th className="px-4 py-3 text-center">Human + AI (B)</th>
                      <th className="px-4 py-3 text-center">Human (C)</th>
                      <th className="px-4 py-3 text-center">Difference (A-C)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/5">
                      <td className="px-4 py-3 text-white/70">&lt; 3</td>
                      <td className="px-4 py-3 text-center text-white/70">75%</td>
                      <td className="px-4 py-3 text-center text-white/70">68%</td>
                      <td className="px-4 py-3 text-center text-white/70">57%</td>
                      <td className="px-4 py-3 text-center text-orange-400">18%p</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-4 py-3 text-white/70">3~5</td>
                      <td className="px-4 py-3 text-center text-white/70">84%</td>
                      <td className="px-4 py-3 text-center text-white/70">78%</td>
                      <td className="px-4 py-3 text-center text-white/70">66%</td>
                      <td className="px-4 py-3 text-center text-orange-400">18%p</td>
                    </tr>
                    <tr className="hover:bg-white/5 bg-orange-500/10">
                      <td className="px-4 py-3 text-white/70">5~10</td>
                      <td className="px-4 py-3 text-center text-white/70">92%</td>
                      <td className="px-4 py-3 text-center text-white/70">92%</td>
                      <td className="px-4 py-3 text-center text-white/70">84%</td>
                      <td className="px-4 py-3 text-center text-orange-400">8%p</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-4 py-3 text-white/70">&gt;= 10</td>
                      <td className="px-4 py-3 text-center text-white/70">100%</td>
                      <td className="px-4 py-3 text-center text-white/70">98%</td>
                      <td className="px-4 py-3 text-center text-white/70">99%</td>
                      <td className="px-4 py-3 text-center text-orange-400">1%p</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>

              {/* Right: Features List */}
              <div className="space-y-6">
                {/* Worklist Prioritization */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                  <h3 className="text-orange-400 mb-3">{t.worklistPrioritization}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{t.worklistPrioritizationDesc}</p>
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
