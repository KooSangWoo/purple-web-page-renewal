import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TopSectionProps {
  language: 'ko' | 'en';
  onNavigate: (page: string) => void;
}

export default function TopSection({ language, onNavigate }: TopSectionProps) {

  const content = {
    ko: {
      clinicians: {
        title: 'Clinicians',
        subtitle: '의사결정 기술자, 환자 이송 신속화',
        button: 'Find Out How',
        dialogTitle: '임상의를 위한 솔루션',
        dialogContent: `Purple AI의 Hyper Insight는 임상의가 더 빠르고 정확한 진단을 내릴 수 있도록 지원합니다.

**주요 기능:**
• 실시간 뇌출혈 및 뇌경색 검출
• AI 기반 자동 분석으로 진단 시간 단축
• 3D 시각화를 통한 정확한 병변 위치 파악
• 응급 상황에서의 빠른 의사결정 지원

**임상적 이점:**
• 골든타임 확보로 환자 생존율 향상
• 정확도 98% 이상의 신뢰할 수 있는 진단 보조
• 워크플로우 통합으로 업무 효율성 증대
• 24/7 자동 모니터링 및 즉각적인 알림`,
      },
      careTeams: {
        title: 'Care Teams',
        subtitle: '인재 아티너스 알림 받기',
        button: 'Find Out How',
        dialogTitle: '케어팀을 위한 솔루션',
        dialogContent: `Purple AI는 의료팀 전체의 협업과 커뮤니케이션을 향상시킵니다.

**팀 협업 기능:**
• 실시간 케이스 공유 및 협진 지원
• 자동 알림 시스템으로 중요 케이스 즉시 전달
• 통합 대시보드로 환자 상태 모니터링
• 부서 간 원활한 정보 공유

**워크플로우 개선:**
• 응급 케이스 자동 우선순위 지정
• 팀원 간 효율적인 업무 분배
• 환자 이송 시간 최소화
• 치료 프로토콜 자동 제안`,
      },
      administrators: {
        title: 'Administrators',
        subtitle: '효율성 향상, 생산성 극대, 환자 결과 개선',
        button: 'Find Out How',
        dialogTitle: '관리자를 위한 솔루션',
        dialogContent: `Purple AI는 의료 기관의 운영 효율성과 품질을 동시에 향상시킵니다.

**운영 최적화:**
• 실시간 통계 및 성과 분석 대시보드
• 자원 배분 최적화를 통한 비용 절감
• 의료 품질 지표 자동 추적
• ROI 측정 및 보고서 자동 생성

**전략적 인사이트:**
• 진단 정확도 및 처리 시간 개선 현황
• 부서별 성과 비교 분석
• 환자 만족도 향상 추적
• 규정 준수 및 인증 지원`,
      },
    },
    en: {
      clinicians: {
        title: 'Clinicians',
        subtitle: 'Decision-making technology, expedited patient transfer',
        button: 'Find Out How',
        dialogTitle: 'Solutions for Clinicians',
        dialogContent: `Purple AI's Hyper Insight empowers clinicians to make faster and more accurate diagnoses.

**Key Features:**
• Real-time detection of ICH and brain infarction
• Reduced diagnosis time with AI-powered automatic analysis
• Precise lesion localization through 3D visualization
• Quick decision support in emergency situations

**Clinical Benefits:**
• Improved patient survival rates by securing golden time
• Reliable diagnostic assistance with 98%+ accuracy
• Increased workflow efficiency through integration
• 24/7 automated monitoring and instant alerts`,
      },
      careTeams: {
        title: 'Care Teams',
        subtitle: 'Receive talent partner alerts',
        button: 'Find Out How',
        dialogTitle: 'Solutions for Care Teams',
        dialogContent: `Purple AI enhances collaboration and communication across the entire medical team.

**Team Collaboration:**
• Real-time case sharing and consultation support
• Automatic notification system for critical cases
• Integrated dashboard for patient monitoring
• Seamless information sharing between departments

**Workflow Improvement:**
• Automatic prioritization of emergency cases
• Efficient task distribution among team members
• Minimized patient transfer time
• Automatic treatment protocol suggestions`,
      },
      administrators: {
        title: 'Administrators',
        subtitle: 'Improve efficiency, maximize productivity, enhance patient outcomes',
        button: 'Find Out How',
        dialogTitle: 'Solutions for Administrators',
        dialogContent: `Purple AI simultaneously improves operational efficiency and quality of healthcare institutions.

**Operational Optimization:**
• Real-time statistics and performance analysis dashboard
• Cost reduction through resource allocation optimization
• Automatic tracking of healthcare quality metrics
• Automated ROI measurement and reporting

**Strategic Insights:**
• Diagnostic accuracy and processing time improvements
• Comparative analysis of departmental performance
• Patient satisfaction tracking
• Compliance and certification support`,
      },
    },
  };

  const t = content[language];

  const cards = [
    {
      id: 'clinicians',
      data: t.clinicians,
      gradient: 'from-blue-500/60 to-cyan-500/60',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800',
    },
    {
      id: 'careTeams',
      data: t.careTeams,
      gradient: 'from-purple-500/60 to-pink-500/60',
      image: 'https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      id: 'administrators',
      data: t.administrators,
      gradient: 'from-pink-500/60 to-red-500/60',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" data-top-section>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-80 overflow-hidden border-white/10 hover:border-white/20 transition-all cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.data.title}
                    className="w-full h-full object-cover brightness-75"
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl mb-3 text-white">{card.data.title}</h3>
                  <p className="text-white/90 mb-6 text-sm">{card.data.subtitle}</p>
                  <Button
                    onClick={() => onNavigate(card.id)}
                    className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-6 rounded-xl shadow-lg transition-all"
                  >
                    {card.data.button}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
