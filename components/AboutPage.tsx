import { Building2, Sparkles, Award, TrendingUp, Globe, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  language: 'ko' | 'en';
}

export default function AboutPage({ language }: AboutPageProps) {
  const content = {
    ko: {
      hero: {
        subtitle: 'ABOUT PURPLEAI',
        title: 'The Future of Clinical Decision Support',
        subtitle2: 'and Streamlined Patient Workflow',
        description: 'PurpleAI is not just another tech company—it\'s a lifeline in the race against time for cerebrovascular healthcare. Founded in 2019 as part of SK C&C Healthcare, PurpleAI set out to redefine emergency stroke and neurovascular care through cutting-edge AI-driven solutions.',
      },
      story: {
        title: 'The PurpleAI Story',
        subtitle: 'Transforming Cerebrovascular Healthcare with AI',
        identity: {
          title: 'Our Identity & Mission',
          content: 'PurpleAI is a fast-growing medical AI innovator transforming stroke care through intelligent automation and predictive insight. Founded as an independent company in October 2024 (after operating within SK Group since 2019), PurpleAI is dedicated to enhancing workflow efficiency, diagnostic accuracy, and patient outcomes.',
        },
        rnd: {
          title: 'R&D and Validation',
          content: 'Our journey began with intensive R&D, securing a Proof of Concept (PoC) with Asan Medical Center, one of Asia\'s most prestigious and advanced hospitals. As a global leader in stroke and neurosurgical care, Asan Medical Center played a pivotal role in validating PurpleAI\'s AI technology for brain hemorrhage detection, ensuring its clinical impact and real-world applicability.',
        },
        achievements: {
          title: 'Achievements and Growth',
          content: 'PurpleAI transitioned from research to real-world impact, achieving GMP certification, launching Medical Insight+ Brain Hemorrhage, and forming strategic partnerships with Yuhan Medical and leading PACS vendors. By 2022, PurpleAI scaled rapidly, integrating its AI solution into 40+ major hospitals nationwide. A major breakthrough came with FDA clearance for its brain hemorrhage AI, Hyper Insight - ICH, paving the way for global expansion.',
        },
        vision: {
          title: 'Our Future Vision',
          content: 'PurpleAI is now expanding its Hyper Insight™ portfolio across multiple imaging modalities and advancing into multimodal, data-driven predictive analytics. Its upcoming flagship, StrokeShieldAI, is built to anticipate and monitor high-risk complications after initial stroke treatment—providing clinicians with real-time foresight for earlier intervention and better outcomes.',
        },
        commitment: 'PurpleAI is more than a company—it\'s a commitment to revolutionizing cerebrovascular healthcare through AI, empowering doctors with faster, more accurate decision-making when it matters most.',
      },
      timeline: {
        title: 'Our Journey',
        subtitle: 'Milestones in AI-Powered Healthcare Innovation',
        periods: {
          foundation: {
            year: '2019',
            title: 'Foundation & Infrastructure',
            items: [
              'Established SK C&C Healthcare in January 2019',
              'Secured Brain Hemorrhage AI Proof of Concept (PoC) with Asan Medical Center, one of Asia\'s top hospitals and a leader in stroke and neurosurgical care',
              'Focused on organizational structure, technology, and infrastructure',
            ],
          },
          development: {
            year: '2020-2021',
            title: 'Product Development & Commercialization',
            items: [
              'Obtained GMP certification and manufacturing approval for medical devices',
              'Launched Medical Insight+ Brain Hemorrhage',
              'Established partnerships with Yuhan Medical and became a Top PACS Partner',
              'Secured AI-Radiology licenses with Lunit, VUNO, and Deepnoid',
            ],
          },
          expansion: {
            year: '2022-2025',
            title: 'Domestic Launch & Global Expansion',
            items: [
              'Deployed in top-ranked general hospitals nationwide',
              'Designated as an Innovative Medical Device for brain hemorrhage detection',
              'Received FDA approval for Brain Hemorrhage AI',
              'Developed an advanced Brain Hemorrhage AI Deep Learning Algorithm',
              'Integrated with Microsoft Azure for global deployment',
              'Achieved world-leading accuracy and speed in brain hemorrhage detection',
            ],
          },
        },
      },
      stats: {
        hospitals: {
          value: '40+',
          label: 'Major Hospitals',
        },
        accuracy: {
          value: 'World-Leading',
          label: 'AI Accuracy',
        },
        certification: {
          value: 'FDA Cleared',
          label: 'Global Standard',
        },
        year: {
          value: '2019',
          label: 'Established',
        },
      },
    },
    en: {
      hero: {
        subtitle: 'ABOUT PURPLEAI',
        title: 'The Future of Clinical Decision Support',
        subtitle2: 'and Streamlined Patient Workflow',
        description: 'PurpleAI is not just another tech company—it\'s a lifeline in the race against time for cerebrovascular healthcare. Founded in 2019 as part of SK C&C Healthcare, PurpleAI set out to redefine emergency stroke and neurovascular care through cutting-edge AI-driven solutions.',
      },
      story: {
        title: 'The PurpleAI Story',
        subtitle: 'Transforming Cerebrovascular Healthcare with AI',
        identity: {
          title: 'Our Identity & Mission',
          content: 'PurpleAI is a fast-growing medical AI innovator transforming stroke care through intelligent automation and predictive insight. Founded as an independent company in October 2024 (after operating within SK Group since 2019), PurpleAI is dedicated to enhancing workflow efficiency, diagnostic accuracy, and patient outcomes.',
        },
        rnd: {
          title: 'R&D and Validation',
          content: 'Our journey began with intensive R&D, securing a Proof of Concept (PoC) with Asan Medical Center, one of Asia\'s most prestigious and advanced hospitals. As a global leader in stroke and neurosurgical care, Asan Medical Center played a pivotal role in validating PurpleAI\'s AI technology for brain hemorrhage detection, ensuring its clinical impact and real-world applicability.',
        },
        achievements: {
          title: 'Achievements and Growth',
          content: 'PurpleAI transitioned from research to real-world impact, achieving GMP certification, launching Medical Insight+ Brain Hemorrhage, and forming strategic partnerships with Yuhan Medical and leading PACS vendors. By 2022, PurpleAI scaled rapidly, integrating its AI solution into 40+ major hospitals nationwide. A major breakthrough came with FDA clearance for its brain hemorrhage AI, Hyper Insight - ICH, paving the way for global expansion.',
        },
        vision: {
          title: 'Our Future Vision',
          content: 'PurpleAI is now expanding its Hyper Insight™ portfolio across multiple imaging modalities and advancing into multimodal, data-driven predictive analytics. Its upcoming flagship, StrokeShieldAI, is built to anticipate and monitor high-risk complications after initial stroke treatment—providing clinicians with real-time foresight for earlier intervention and better outcomes.',
        },
        commitment: 'PurpleAI is more than a company—it\'s a commitment to revolutionizing cerebrovascular healthcare through AI, empowering doctors with faster, more accurate decision-making when it matters most.',
      },
      timeline: {
        title: 'Our Journey',
        subtitle: 'Milestones in AI-Powered Healthcare Innovation',
        periods: {
          foundation: {
            year: '2019',
            title: 'Foundation & Infrastructure',
            items: [
              'Established SK C&C Healthcare in January 2019',
              'Secured Brain Hemorrhage AI Proof of Concept (PoC) with Asan Medical Center, one of Asia\'s top hospitals and a leader in stroke and neurosurgical care',
              'Focused on organizational structure, technology, and infrastructure',
            ],
          },
          development: {
            year: '2020-2021',
            title: 'Product Development & Commercialization',
            items: [
              'Obtained GMP certification and manufacturing approval for medical devices',
              'Launched Medical Insight+ Brain Hemorrhage',
              'Established partnerships with Yuhan Medical and became a Top PACS Partner',
              'Secured AI-Radiology licenses with Lunit, VUNO, and Deepnoid',
            ],
          },
          expansion: {
            year: '2022-2025',
            title: 'Domestic Launch & Global Expansion',
            items: [
              'Deployed in top-ranked general hospitals nationwide',
              'Designated as an Innovative Medical Device for brain hemorrhage detection',
              'Received FDA approval for Brain Hemorrhage AI',
              'Developed an advanced Brain Hemorrhage AI Deep Learning Algorithm',
              'Integrated with Microsoft Azure for global deployment',
              'Achieved world-leading accuracy and speed in brain hemorrhage detection',
            ],
          },
        },
      },
      stats: {
        hospitals: {
          value: '40+',
          label: 'Major Hospitals',
        },
        accuracy: {
          value: 'World-Leading',
          label: 'AI Accuracy',
        },
        certification: {
          value: 'FDA Cleared',
          label: 'Global Standard',
        },
        year: {
          value: '2019',
          label: 'Established',
        },
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Building2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm">{t.hero.subtitle}</span>
            </div>
            <h1 className="mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t.hero.subtitle2}
              </span>
            </h1>
            <p className="text-white/70 max-w-4xl mx-auto mt-6 leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 text-center hover:border-purple-500/40 transition-all">
              <div className="text-purple-400 mb-2">{t.stats.hospitals.value}</div>
              <p className="text-white/60 text-sm">{t.stats.hospitals.label}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 text-center hover:border-purple-500/40 transition-all">
              <div className="text-cyan-400 mb-2">{t.stats.accuracy.value}</div>
              <p className="text-white/60 text-sm">{t.stats.accuracy.label}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 text-center hover:border-purple-500/40 transition-all">
              <div className="text-purple-400 mb-2">{t.stats.certification.value}</div>
              <p className="text-white/60 text-sm">{t.stats.certification.label}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 text-center hover:border-purple-500/40 transition-all">
              <div className="text-cyan-400 mb-2">{t.stats.year.value}</div>
              <p className="text-white/60 text-sm">{t.stats.year.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-purple-400">{t.story.title}</h2>
                <p className="text-white/60">{t.story.subtitle}</p>
              </div>
            </div>

            <div className="space-y-8 text-white/70 leading-relaxed">
              <div>
                <h3 className="text-purple-400 mb-3">{t.story.identity.title}</h3>
                <p>{t.story.identity.content}</p>
              </div>
              
              <div>
                <h3 className="text-purple-400 mb-3">{t.story.rnd.title}</h3>
                <p>{t.story.rnd.content}</p>
              </div>
              
              <div>
                <h3 className="text-purple-400 mb-3">{t.story.achievements.title}</h3>
                <p>{t.story.achievements.content}</p>
              </div>
              
              <div>
                <h3 className="text-purple-400 mb-3">{t.story.vision.title}</h3>
                <p>{t.story.vision.content}</p>
                
                {/* Vision Flow Diagram */}
                <div className="mt-6 rounded-2xl overflow-hidden bg-white/5 p-6">
                  <ImageWithFallback
                    src="/figma/19bccaad5984c0a6ee92e37d0d174577532329e7.png"
                    alt="PurpleAI Stroke Care Workflow - Hyper Insight and StrokeShieldAI Product Portfolio"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                
                {/* Prognostic Intelligence Highlight */}
                <div className="mt-6 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/90 leading-relaxed">
                        <span className="text-purple-300">Expanding beyond acute triage into prognostic intelligence</span>
                        <br />
                        <span className="text-cyan-300">predicting outcomes using imaging and patient metadata.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/90">{t.story.commitment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-purple-400 mb-4">{t.timeline.title}</h2>
            <p className="text-white/60">{t.timeline.subtitle}</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-purple-500/50 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2019 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-12">
                  <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all lg:ml-auto">
                    <div className="flex items-center gap-3 mb-6 lg:justify-end">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="lg:text-right">
                        <div className="text-purple-400">{t.timeline.periods.foundation.year}</div>
                        <h3 className="text-white">{t.timeline.periods.foundation.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {t.timeline.periods.foundation.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 lg:flex-row-reverse lg:text-right">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a1a] hidden lg:block"></div>
              </div>

              {/* 2020-2021 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div className="lg:pl-12">
                  <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all lg:mr-auto">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400">{t.timeline.periods.development.year}</div>
                        <h3 className="text-white">{t.timeline.periods.development.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {t.timeline.periods.development.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0a1a] hidden lg:block"></div>
              </div>

              {/* 2022-2025 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-12">
                  <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all lg:ml-auto">
                    <div className="flex items-center gap-3 mb-6 lg:justify-end">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div className="lg:text-right">
                        <div className="text-purple-400">{t.timeline.periods.expansion.year}</div>
                        <h3 className="text-white">{t.timeline.periods.expansion.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {t.timeline.periods.expansion.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 lg:flex-row-reverse lg:text-right">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
                
                {/* Timeline Dot with pulse effect */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-[#0a0a1a]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12 text-center">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-white mb-4">Leading the Future of AI Healthcare</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              PurpleAI continues to push the boundaries of AI-powered cerebrovascular healthcare, delivering innovative solutions that save lives and empower medical professionals worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>FDA Cleared</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>World-Leading Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>40+ Major Hospitals</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
