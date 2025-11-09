import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DetailedSolutionsPageProps {
  language: 'ko' | 'en';
  onBack: () => void;
  initialSection?: string;
}

export default function DetailedSolutionsPage({ language, onBack, initialSection }: DetailedSolutionsPageProps) {
  const content = {
    ko: {
      back: '← 돌아가기',
      clinicians: {
        id: 'clinicians',
        title: 'Clinicians',
        subtitle: 'PurpleAI는 임상의에게 정확한 환자 치료를 제공하고 임상 데이터 워크플로우 전반에서 환자 치료를 가속화합니다.',
        description: '정확한 영상 진단과 환자 전달 시스템을 통해 영상을 표시하고 검증합니다.',
        section1: {
          title: '01',
          subtitle: '의사결정 가속화',
          items: [
            '즉각적인 뇌 영상 분석으로 임상 워크플로우 가속화',
            '뇌영상의 임상의의 검토 시간 단축',
            '중증 환자의 조치에 대한 영상 우선순위 지정 활성화',
            '두개내 CT 영상을 10초 이내로 분석하여 이송 결정을 내릴 수 있게 지원',
          ],
        },
        section2: {
          title: '02',
          subtitle: '환자 이송 신속화',
          items: [
            '10초 이내로 이송 시간 단축. 뇌졸중 환자에게 매우 중요한 시간입니다.',
            '새로운 케이스를 즉시 감지하고 알림으로 전달하여 이송 시간을 95.6% 단축',
            '병원에서 뇌졸중 치료에 대한 실시간 알림으로 94.4% 신속한 대응',
            '전문가를 위한 주요 부위의 유무에 관련된 최신 임상데이터 제공하여 보다 신속하고 정확한 결정을 지원',
          ],
        },
        stats: {
          sensitivity: {
            label: '민감도',
            value: '92.9%',
            description: '뇌출혈 사례 중',
          },
          specificity: {
            label: '특이도',
            value: '86.6%',
            description: '뇌출혈이 없는 사례 중',
          },
          ich: {
            label: 'ICH',
            value: '0.0594',
            description: '뇌 출혈 검출 수',
          },
          ais: {
            label: 'AIS',
            value: '0.27',
            description: '뇌경색 검출 수',
          },
        },
      },
      careTeams: {
        id: 'care-teams',
        title: 'Care Teams',
        subtitle: '모바일 장치에서 원활하게 환자 정보에 액세스하고, 부서 간 협업을 촉진하며, 환자 여정 전반에 걸쳐 치료 조정 및 결과를 최적화합니다.',
        description: '치료팀은 원활한 환자 치료를 위해 부서간 협력, 실시간 이미지와 결과 공유 및 의료진의 신속한 커뮤니케이션을 통해 고객 만족도를 높입니다.',
        section1: {
          title: '01',
          subtitle: '치료팀을 위한 통합 커뮤니케이션',
          description: '여러 부서를 연결하여 환자의 진단에서 치료까지 원활한 전환을 보장합니다.',
        },
        section2: {
          title: '02',
          subtitle: '실시간 협업 도구',
          description: '병원의 팀원들이 실시간 업데이트를 공유하며 환자 치료의 속도와 정확성을 높입니다.',
        },
      },
      administrators: {
        id: 'administrators',
        title: 'Administrators',
        subtitle: 'PurpleAI는 운영 효율성을 높이고 병원 분석 투자를 강화하며 의료팀을 지원하고 환자 결과를 개선하고 신뢰할 수 있는 데이터로 결과를 개선합니다.',
        description: '병원 관리자가 운영 절차, 데이터 분석 및 팀 성과를 극대화하고 수익성을 높이면서 환자 결과를 개선할 수 있습니다.',
        section1: {
          title: '01',
          subtitle: '투자 수익 및 환자 결과 극대화',
          description: '치료의 영향을 극대화하면서 병원 운영을 합리화하고 비용을 절감합니다.',
        },
        section2: {
          title: '02',
          subtitle: '효율성 향상 및 치료 최적화',
          description: '워크플로우를 최적화하고 치료를 개선하며 운영 우수성을 보장합니다.',
        },
      },
    },
    en: {
      back: '← Back',
      clinicians: {
        id: 'clinicians',
        title: 'Clinicians',
        subtitle: 'PurpleAI provides clinicians accurate equitable patient care and provide critical clinical data workflow networks.',
        description: 'Accurate image diagnosis and images validated by the patent delivery system.',
        section1: {
          title: '01',
          subtitle: 'Accelerate Decision-Making',
          items: [
            'Immediate brain imaging analysis accelerates clinical workflow',
            'Reduced clinician review time for brain imaging',
            'Enable imaging prioritization for critical patient action',
            'Analyze intracranial CT images in under 10 seconds to support transfer decisions',
          ],
        },
        section2: {
          title: '02',
          subtitle: 'Expedite Patient Transfers',
          items: [
            'Transfer time reduced to under 10 seconds - critical time for stroke patients.',
            '95.6% faster transfer by immediately detecting new cases and delivering alerts',
            '94.4% faster response with real-time alerts for stroke treatment at hospitals',
            'Support faster and more accurate decisions by providing latest clinical data on key areas for specialists',
          ],
        },
        stats: {
          sensitivity: {
            label: 'Sensitivity',
            value: '92.9%',
            description: 'in hemorrhage cases',
          },
          specificity: {
            label: 'Specificity',
            value: '86.6%',
            description: 'in non-hemorrhage cases',
          },
          ich: {
            label: 'ICH',
            value: '0.0594',
            description: 'hemorrhage detection count',
          },
          ais: {
            label: 'AIS',
            value: '0.27',
            description: 'infarction detection count',
          },
        },
      },
      careTeams: {
        id: 'care-teams',
        title: 'Care Teams',
        subtitle: 'With a mobile device, clinical teams have accessibility, cooperation and efficient workflow before the patient\'s arrival, sharing images and results, and executing care throughout the patient care journey.',
        description: 'Care teams enhance customer satisfaction through interdepartmental collaboration, real-time image and result sharing, and rapid communication among medical staff for seamless patient care.',
        section1: {
          title: '01',
          subtitle: 'Unified Communication for Care Teams',
          description: 'Connect multiple departments to ensure smooth transitions from patient diagnosis to treatment.',
        },
        section2: {
          title: '02',
          subtitle: 'Real-time Collaboration Tools',
          description: 'Hospital team members share real-time updates to increase the speed and accuracy of patient care.',
        },
      },
      administrators: {
        id: 'administrators',
        title: 'Administrators',
        subtitle: 'PurpleAI can cover extensive financial and competitive pressures, highlight executive evidence efficiency, deliver hospital goal, and strengthen your teams with reliable, trusted data to improve patient outcomes.',
        description: 'Hospital administrators can maximize operational procedures, data analytics, and team performance to improve patient outcomes while increasing profitability.',
        section1: {
          title: '01',
          subtitle: 'Maximize ROI and Patient Outcomes',
          description: 'Streamline hospital operations and reduce costs while maximizing the impact of care.',
        },
        section2: {
          title: '02',
          subtitle: 'Enhance Efficiency and Optimize Care',
          description: 'Optimize workflows, improve care delivery, and ensure operational excellence.',
        },
      },
    },
  };

  const t = content[language];

  useEffect(() => {
    // Scroll to initial section if provided
    if (initialSection) {
      setTimeout(() => {
        const element = document.getElementById(initialSection);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [initialSection]);

  const handleBackClick = () => {
    window.history.back();
  };

  const BackButton = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <Button
        onClick={handleBackClick}
        variant="ghost"
        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full"
      >
        {t.back}
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f5] to-white py-24">
      <div className="container mx-auto px-6">
        {/* Clinicians Section */}
        <section id="clinicians" className="mb-32 scroll-mt-32">
          <BackButton />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6 text-gray-900">{t.clinicians.title}</h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-4">{t.clinicians.subtitle}</p>
            <p className="text-gray-500 max-w-3xl mx-auto">{t.clinicians.description}</p>
          </motion.div>

          {/* Section 1: Accelerate Decision-Making */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600"
                alt="Doctor analyzing brain scan"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-400 mb-2">{t.clinicians.section1.title}</div>
              <h3 className="text-3xl mb-6 text-gray-900">{t.clinicians.section1.subtitle}</h3>
              <ul className="space-y-3">
                {t.clinicians.section1.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Section 2: Expedite Patient Transfers */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="text-sm text-gray-400 mb-2">{t.clinicians.section2.title}</div>
              <h3 className="text-3xl mb-6 text-gray-900">{t.clinicians.section2.subtitle}</h3>
              <ul className="space-y-3">
                {t.clinicians.section2.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600"
                alt="Patient transfer"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>

          {/* Stats Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(t.clinicians.stats).map(([key, stat]) => (
                <Card key={key} className="p-6 text-center bg-white border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                  <div className="text-2xl mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Care Teams Section */}
        <section id="careTeams" className="mb-32 scroll-mt-32 bg-gray-50 -mx-6 px-6 py-20">
          <div className="container mx-auto">
            <BackButton />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl mb-6 text-gray-900">{t.careTeams.title}</h2>
              <p className="text-gray-600 max-w-4xl mx-auto mb-4">{t.careTeams.subtitle}</p>
              <p className="text-gray-500 max-w-3xl mx-auto">{t.careTeams.description}</p>
            </motion.div>
          </div>

          {/* Section 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462353-36b215702253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Care team collaboration"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-400 mb-2">{t.careTeams.section1.title}</div>
              <h3 className="text-3xl mb-6 text-gray-900">{t.careTeams.section1.subtitle}</h3>
              <p className="text-gray-600">{t.careTeams.section1.description}</p>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="text-sm text-gray-400 mb-2">{t.careTeams.section2.title}</div>
              <h3 className="text-3xl mb-6 text-gray-900">{t.careTeams.section2.subtitle}</h3>
              <p className="text-gray-600">{t.careTeams.section2.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462749-a95ce1bd7f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Medical team meeting"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Administrators Section */}
        <section id="administrators" className="mb-20 scroll-mt-32">
          <BackButton />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6 text-gray-900">{t.administrators.title}</h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-4">{t.administrators.subtitle}</p>
            <p className="text-gray-500 max-w-3xl mx-auto">{t.administrators.description}</p>
          </motion.div>

          {/* Section 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
                alt="Hospital administrator"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-400 mb-2">{t.administrators.section1.title}</div>
              <h3 className="text-3xl mb-6 text-gray-900">{t.administrators.section1.subtitle}</h3>
              <p className="text-gray-600">{t.administrators.section1.description}</p>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="text-sm text-gray-400 mb-2">{t.administrators.section2.title}</div>
              <h3 className="text-3xl mb-6 text-gray-900">{t.administrators.section2.subtitle}</h3>
              <p className="text-gray-600">{t.administrators.section2.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600"
                alt="Team collaboration"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
