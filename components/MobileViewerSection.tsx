import { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, Shield, FileImage, MessageSquare, Bell, Activity } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MobileViewerSectionProps {
  language: 'ko' | 'en';
}

export default function MobileViewerSection({ language }: MobileViewerSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  const content = {
    ko: {
      title: '모바일 뷰어',
      subtitle: '언제 어디서나 의료 영상에 접근',
      description: 'Purple AI의 모바일 뷰어를 통해 의료 전문가는 스마트폰이나 태블릿에서 실시간으로 환자 영상 및 AI 분석 결과를 확인할 수 있습니다.',
      features: [
        {
          icon: Smartphone,
          title: '모바일 최적화',
          description: 'iOS 및 Android 기기에서 원활한 경험',
          mobileContent: {
            crossPlatform: '크로스 플랫폼',
            optimized: '모든 기기에 최적화',
            ios: 'iOS',
            iosDevices: 'iPhone & iPad',
            android: 'Android',
            androidDevices: '모든 기기',
          },
        },
        {
          icon: Zap,
          title: '실시간 알림',
          description: '중증 케이스에 대한 즉각적인 경고',
          mobileContent: {
            criticalAlert: '중증 경고',
            now: '지금',
            ichDetected: 'ICH 감지됨 - 환자 ID: 12847',
            view: '보기',
            dismiss: '닫기',
            newCase: '새 케이스',
            minutesAgo: '분 전',
            aneurysmSuspected: '뇌동맥류 의심',
            analysisComplete: '분석 완료',
            noAbnormalities: '이상 소견 없음',
          },
        },
        {
          icon: FileImage,
          title: '모바일 DICOM 뷰어',
          description: '스마트폰의 DICOM 뷰어를 사용하여 언제 어디서나 환자 상태를 분석하세요.',
        },
        {
          icon: MessageSquare,
          title: '앱 내 팀 커뮤니케이션',
          description: '메시징 및 초대 기능을 통해 의료진과 원활하게 협업하세요.',
          mobileContent: {
            ichCaseReview: 'ICH 케이스 즉시 검토 필요',
            onItChecking: '확인 중입니다',
            joinConsultation: '상담에 참여하겠습니다',
            isTyping: '님이 입력 중...',
            typeMessage: '메시지를 입력하세요...',
          },
        },
        {
          icon: Shield,
          title: '보안 연결',
          description: 'HIPAA 준수 암호화 통신',
          mobileContent: {
            hipaaCompliant: 'HIPAA 준수',
            endToEndEncryption: '엔드투엔드 암호화',
            aesEncryption: '256-bit AES 암호화',
            secureAuth: '보안 인증',
            auditLogs: '감사 로그',
          },
        },
      ],
    },
    en: {
      title: 'Mobile Viewer',
      subtitle: 'Access Medical Imaging Anytime, Anywhere',
      description: 'Purple AI\'s mobile viewer enables medical professionals to view patient images and AI analysis results in real-time on smartphones or tablets.',
      features: [
        {
          icon: Smartphone,
          title: 'Mobile Optimized',
          description: 'Seamless experience on iOS and Android devices',
          mobileContent: {
            crossPlatform: 'Cross-Platform',
            optimized: 'Optimized for all devices',
            ios: 'iOS',
            iosDevices: 'iPhone & iPad',
            android: 'Android',
            androidDevices: 'All Devices',
          },
        },
        {
          icon: Zap,
          title: 'Real-time Notifications',
          description: 'Instant alerts for critical cases',
          mobileContent: {
            criticalAlert: 'Critical Alert',
            now: 'Now',
            ichDetected: 'ICH detected - Patient ID: 12847',
            view: 'View',
            dismiss: 'Dismiss',
            newCase: 'New Case',
            minutesAgo: 'm ago',
            aneurysmSuspected: 'Brain aneurysm suspected',
            analysisComplete: 'Analysis Complete',
            noAbnormalities: 'No abnormalities detected',
          },
        },
        {
          icon: FileImage,
          title: 'Mobile DICOM Viewer',
          description: 'Analyze patient conditions anytime, anywhere using a DICOM viewer on your smartphone.',
        },
        {
          icon: MessageSquare,
          title: 'In-App Team Communication',
          description: 'Collaborate seamlessly with medical staff through messaging and invitation features.',
          mobileContent: {
            ichCaseReview: 'ICH case needs immediate review',
            onItChecking: 'On it. Checking now',
            joinConsultation: 'I\'ll join the consultation',
            isTyping: 'is typing...',
            typeMessage: 'Type a message...',
          },
        },
        {
          icon: Shield,
          title: 'Secure Connection',
          description: 'HIPAA-compliant encrypted communication',
          mobileContent: {
            hipaaCompliant: 'HIPAA Compliant',
            endToEndEncryption: 'End-to-end encryption',
            aesEncryption: '256-bit AES Encryption',
            secureAuth: 'Secure Authentication',
            auditLogs: 'Audit Logs',
          },
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a1a] to-[#1a1a2e]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-2xl text-white/70 mb-4">{t.subtitle}</p>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">{t.description}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Left: iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-[340px] h-[680px] bg-black rounded-[3.5rem] border-[14px] border-gray-900 shadow-2xl overflow-hidden relative">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl z-20" />
                
                {/* Screen Content */}
                <div className="relative h-full overflow-hidden">
                  {/* Mobile Optimized - Feature 0 */}
                  {activeFeature === 0 && (
                    <motion.div
                      key="feature-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full bg-gradient-to-b from-gray-900 to-black"
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1659353888242-e7c29b331c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB1c2luZyUyMHRhYmxldCUyMG1lZGljYWx8ZW58MXx8fHwxNzYxMTk3ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Mobile Optimized"
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/50">
                          <Smartphone className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-white text-2xl mb-3">{t.features[0].mobileContent?.crossPlatform || 'Cross-Platform'}</h3>
                        <p className="text-white/70 text-center text-sm mb-8">{t.features[0].mobileContent?.optimized || 'Optimized for all devices'}</p>
                        <div className="space-y-3 w-full max-w-[280px]">
                          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-xl">📱</span>
                              </div>
                              <div>
                                <div className="text-white text-sm">{t.features[0].mobileContent?.ios || 'iOS'}</div>
                                <div className="text-white/60 text-xs">{t.features[0].mobileContent?.iosDevices || 'iPhone & iPad'}</div>
                              </div>
                            </div>
                            <div className="text-green-400 text-xs">✓</div>
                          </div>
                          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-xl">🤖</span>
                              </div>
                              <div>
                                <div className="text-white text-sm">{t.features[0].mobileContent?.android || 'Android'}</div>
                                <div className="text-white/60 text-xs">{t.features[0].mobileContent?.androidDevices || 'All Devices'}</div>
                              </div>
                            </div>
                            <div className="text-green-400 text-xs">✓</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Real-time Notifications - Feature 1 */}
                  {activeFeature === 1 && (
                    <motion.div
                      key="feature-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full bg-gradient-to-b from-gray-900 to-black"
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1606495813362-8efff01b8573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWxlcnQlMjBub3RpZmljYXRpb24lMjBtb2JpbGV8ZW58MXx8fHwxNzYxMTk3ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Real-time Notifications"
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex flex-col items-start justify-start p-6 pt-16">
                        {/* Notification Cards */}
                        <div className="w-full space-y-3">
                          {/* Critical Alert */}
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-red-500/90 backdrop-blur-xl border border-red-400/50 rounded-2xl p-4 shadow-xl"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <Bell className="w-5 h-5 text-white animate-pulse" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-white text-sm">{t.features[1].mobileContent?.criticalAlert || 'Critical Alert'}</span>
                                  <span className="text-white/80 text-xs">{t.features[1].mobileContent?.now || 'Now'}</span>
                                </div>
                                <p className="text-white/90 text-xs mb-2">{t.features[1].mobileContent?.ichDetected || 'ICH detected - Patient ID: 12847'}</p>
                                <div className="flex gap-2">
                                  <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs">{t.features[1].mobileContent?.view || 'View'}</button>
                                  <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs">{t.features[1].mobileContent?.dismiss || 'Dismiss'}</button>
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Warning Alert */}
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-orange-500/80 backdrop-blur-xl border border-orange-400/50 rounded-2xl p-4 shadow-lg"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <Activity className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-white text-sm">{t.features[1].mobileContent?.newCase || 'New Case'}</span>
                                  <span className="text-white/80 text-xs">2{t.features[1].mobileContent?.minutesAgo || 'm ago'}</span>
                                </div>
                                <p className="text-white/90 text-xs">{t.features[1].mobileContent?.aneurysmSuspected || 'Brain aneurysm suspected'}</p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Info Alert */}
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-purple-500/70 backdrop-blur-xl border border-purple-400/50 rounded-2xl p-4 shadow-lg"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <Zap className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-white text-sm">{t.features[1].mobileContent?.analysisComplete || 'Analysis Complete'}</span>
                                  <span className="text-white/80 text-xs">5{t.features[1].mobileContent?.minutesAgo || 'm ago'}</span>
                                </div>
                                <p className="text-white/90 text-xs">{t.features[1].mobileContent?.noAbnormalities || 'No abnormalities detected'}</p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Mobile DICOM Viewer - Feature 2 */}
                  {activeFeature === 2 && (
                    <motion.div 
                      key="feature-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full w-full bg-black overflow-hidden flex items-center justify-center"
                    >
                      <div className="h-full w-full flex items-center justify-center p-2">
                        <img
                          src="/figma/9252271cd52d5d2f80297f6b2b4866cef571205c.png"
                          alt="Mobile DICOM Viewer"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* In-App Team Communication - Feature 3 */}
                  {activeFeature === 3 && (
                    <motion.div 
                      key="feature-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full bg-gradient-to-b from-gray-900 to-black overflow-hidden"
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1659353887211-1a3aa8426aa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hhdCUyMGFwcCUyMG1lc3NhZ2luZ3xlbnwxfHx8fDE3NjEyMDA3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="In-App Team Communication"
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex flex-col items-start justify-start p-6 pt-16">
                        {/* Chat Interface */}
                        <div className="w-full space-y-3">
                          {/* Message from Dr. Kim */}
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 text-white text-xs">
                              KJ
                            </div>
                            <div className="flex-1">
                              <div className="bg-purple-500/90 backdrop-blur-xl border border-purple-400/50 rounded-2xl rounded-tl-none p-3 shadow-lg">
                                <div className="text-white/80 text-xs mb-1">Dr. Kim</div>
                                <p className="text-white text-sm">{t.features[3].mobileContent?.ichCaseReview || 'ICH case needs immediate review'}</p>
                              </div>
                              <span className="text-white/40 text-xs ml-2">2:34 PM</span>
                            </div>
                          </motion.div>

                          {/* Message from Dr. Lee */}
                          <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-end gap-2 flex-row-reverse"
                          >
                            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 text-white text-xs">
                              LS
                            </div>
                            <div className="flex-1 flex flex-col items-end">
                              <div className="bg-gray-700/90 backdrop-blur-xl border border-gray-600/50 rounded-2xl rounded-tr-none p-3 shadow-lg max-w-[85%]">
                                <p className="text-white text-sm">{t.features[3].mobileContent?.onItChecking || 'On it. Checking now'}</p>
                              </div>
                              <span className="text-white/40 text-xs mr-2">2:35 PM</span>
                            </div>
                          </motion.div>

                          {/* Message from Dr. Park */}
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 text-white text-xs">
                              PH
                            </div>
                            <div className="flex-1">
                              <div className="bg-purple-500/90 backdrop-blur-xl border border-purple-400/50 rounded-2xl rounded-tl-none p-3 shadow-lg">
                                <div className="text-white/80 text-xs mb-1">Dr. Park</div>
                                <p className="text-white text-sm">{t.features[3].mobileContent?.joinConsultation || 'I\'ll join the consultation'}</p>
                              </div>
                              <span className="text-white/40 text-xs ml-2">2:36 PM</span>
                            </div>
                          </motion.div>

                          {/* Typing indicator */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-2 ml-10"
                          >
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </div>
                            <span className="text-white/40 text-xs">Dr. Lee {t.features[3].mobileContent?.isTyping || 'is typing...'}</span>
                          </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-3 flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-purple-400" />
                            <input 
                              type="text" 
                              placeholder={t.features[3].mobileContent?.typeMessage || 'Type a message...'} 
                              className="flex-1 bg-transparent text-white text-sm outline-none"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Secure Connection - Feature 4 */}
                  {activeFeature === 4 && (
                    <motion.div 
                      key="feature-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full bg-gradient-to-b from-gray-900 to-black"
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758983308742-f4ba1f8c8cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzZWN1cml0eSUyMGxvY2t8ZW58MXx8fHwxNzYxMTk3MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Secure Connection"
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/50">
                          <Shield className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-white text-2xl mb-3">{t.features[4].mobileContent?.hipaaCompliant || 'HIPAA Compliant'}</h3>
                        <p className="text-white/70 text-center text-sm mb-8">{t.features[4].mobileContent?.endToEndEncryption || 'End-to-end encryption'}</p>
                        <div className="space-y-3 w-full max-w-[280px]">
                          <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg p-3 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-white text-sm">{t.features[4].mobileContent?.aesEncryption || '256-bit AES Encryption'}</span>
                          </div>
                          <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg p-3 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-white text-sm">{t.features[4].mobileContent?.secureAuth || 'Secure Authentication'}</span>
                          </div>
                          <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg p-3 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-white text-sm">{t.features[4].mobileContent?.auditLogs || 'Audit Logs'}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-30" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-[3.5rem] blur-3xl -z-10 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 rounded-[3.5rem] blur-2xl -z-10 animate-pulse" />
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <Card className={`p-6 bg-[#1a1a2e]/80 backdrop-blur-xl border-[#2a2a3e] hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all group ${
                  activeFeature === i ? 'border-purple-500 shadow-lg shadow-purple-500/30' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 flex items-center justify-center flex-shrink-0 transition-all ${
                      activeFeature === i ? 'bg-purple-500/40' : ''
                    }`}>
                      <feature.icon className={`w-6 h-6 text-purple-400 group-hover:text-purple-300 ${
                        activeFeature === i ? 'text-purple-300' : ''
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-lg mb-1 text-white group-hover:text-purple-300 transition-colors ${
                        activeFeature === i ? 'text-purple-300' : ''
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
