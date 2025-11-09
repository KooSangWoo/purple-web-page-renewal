import { Users, Award, Briefcase, GraduationCap, Building2, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LeadershipPageProps {
  language: 'ko' | 'en';
}

export default function LeadershipPage({ language }: LeadershipPageProps) {
  const content = {
    ko: {
      hero: {
        subtitle: 'LEADERSHIP',
        title: 'Meet Our Team',
        description: 'Visionary leaders combining medical expertise, AI innovation, and strategic excellence to revolutionize cerebrovascular healthcare.',
      },
      leaders: [
        {
          name: 'Byungjun Park',
          title: 'CEO',
          image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTY5Nzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Head of Digital Healthcare, SK C&C',
            'Member of SK Group SUPEX Council (Corporate Strategy & Audit)',
            'Expertise in Strategic Planning, Investment, and Business Development',
            'Background in Life Sciences from Pohang University of Science & Technology (POSTECH)',
          ],
        },
        {
          name: 'Hoon Na, PhD',
          title: 'CTO',
          image: 'https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNzQzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Principal AI Technology Advisor, SK C&C Vision AI',
            'Former System Development Team Leader at Kona',
            'Former Senior Researcher at NexStreaming R&D Center',
            'Ph.D. in Electrical Engineering from Korea Aerospace University',
          ],
        },
        {
          name: 'Tae Jin Yoon, MD, PhD',
          title: 'CMO',
          image: 'https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTY5NzUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Professor of Radiology, Seoul National University Hospital',
            'Incoming Chief of the Neuroradiology Section (2024)',
            'Head of PACS Division, Seoul National University Hospital',
            'Committee Member for the Hospital\'s Information and Data Committees',
            'Board Member of the Korean Society of Neuroradiology',
            'Medical Degree from Seoul National University',
          ],
        },
        {
          name: 'Jin Wook Choi, MD, PhD',
          title: 'CMO',
          image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE3Mzk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Professor of Radiology, Ajou University Hospital',
            'Chief of Neuroradiology Section',
            'Deputy Director of Medical Information and Innovation at Ajou University Hospital',
            'Director at the Korean Stroke Society',
            'Legal Committee Member at the Korean Society of Radiology',
            'Medical Degree from Kyungpook National University',
          ],
        },
      ],
    },
    en: {
      hero: {
        subtitle: 'LEADERSHIP',
        title: 'Meet Our Team',
        description: 'Visionary leaders combining medical expertise, AI innovation, and strategic excellence to revolutionize cerebrovascular healthcare.',
      },
      leaders: [
        {
          name: 'Byungjun Park',
          title: 'CEO',
          image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTY5Nzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Head of Digital Healthcare, SK C&C',
            'Member of SK Group SUPEX Council (Corporate Strategy & Audit)',
            'Expertise in Strategic Planning, Investment, and Business Development',
            'Background in Life Sciences from Pohang University of Science & Technology (POSTECH)',
          ],
        },
        {
          name: 'Hoon Na, PhD',
          title: 'CTO',
          image: 'https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNzQzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Principal AI Technology Advisor, SK C&C Vision AI',
            'Former System Development Team Leader at Kona',
            'Former Senior Researcher at NexStreaming R&D Center',
            'Ph.D. in Electrical Engineering from Korea Aerospace University',
          ],
        },
        {
          name: 'Tae Jin Yoon, MD, PhD',
          title: 'CMO',
          image: 'https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTY5NzUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Professor of Radiology, Seoul National University Hospital',
            'Incoming Chief of the Neuroradiology Section (2024)',
            'Head of PACS Division, Seoul National University Hospital',
            'Committee Member for the Hospital\'s Information and Data Committees',
            'Board Member of the Korean Society of Neuroradiology',
            'Medical Degree from Seoul National University',
          ],
        },
        {
          name: 'Jin Wook Choi, MD, PhD',
          title: 'CMO',
          image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE3Mzk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          credentials: [
            'Professor of Radiology, Ajou University Hospital',
            'Chief of Neuroradiology Section',
            'Deputy Director of Medical Information and Innovation at Ajou University Hospital',
            'Director at the Korean Stroke Society',
            'Legal Committee Member at the Korean Society of Radiology',
            'Medical Degree from Kyungpook National University',
          ],
        },
      ],
    },
  };

  const t = content[language];

  const getTitleIcon = (title: string) => {
    if (title === 'CEO') return Briefcase;
    if (title === 'CTO') return Award;
    return Building2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm">{t.hero.subtitle}</span>
            </div>
            <h1 className="mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {t.leaders.map((leader, index) => {
              const TitleIcon = getTitleIcon(leader.title);
              const gradientColors = index % 2 === 0 
                ? 'from-purple-500 to-purple-700' 
                : 'from-cyan-500 to-cyan-700';
              const borderColor = index % 2 === 0 
                ? 'border-purple-500/20 hover:border-purple-500/40' 
                : 'border-cyan-500/20 hover:border-cyan-500/40';
              const textColor = index % 2 === 0 
                ? 'text-purple-400' 
                : 'text-cyan-400';

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border ${borderColor} overflow-hidden transition-all hover:scale-[1.02] group`}
                >
                  <div className="p-8">
                    {/* Header with Image and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      {/* Profile Image */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-all`}>
                          <ImageWithFallback
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Title Badge */}
                        <div className={`absolute -bottom-3 -right-3 w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColors} flex items-center justify-center shadow-lg`}>
                          <TitleIcon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Name and Title */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-white mb-2">{leader.name}</h3>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10`}>
                          <span className={`${textColor} text-sm`}>{leader.title}</span>
                        </div>
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="space-y-3 mt-6">
                      {leader.credentials.map((credential, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'} flex-shrink-0 mt-2`}></div>
                          <span className="leading-relaxed">{credential}</span>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                          <GraduationCap className="w-4 h-4" />
                          <span>Expert in {leader.title === 'CEO' ? 'Strategy' : leader.title === 'CTO' ? 'AI Technology' : 'Medical Innovation'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Strength Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white">A Team of Excellence</h2>
            </div>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Our leadership team brings together decades of experience across strategic business development, cutting-edge AI technology, and world-class medical expertise in neuroradiology and stroke care.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <Briefcase className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-purple-400 mb-1">Strategic Vision</div>
                <p className="text-white/60 text-sm">Business excellence from SK Group leadership</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-cyan-400 mb-1">AI Innovation</div>
                <p className="text-white/60 text-sm">Deep learning expertise driving next-gen solutions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-purple-400 mb-1">Medical Authority</div>
                <p className="text-white/60 text-sm">Leading professors from top medical institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}