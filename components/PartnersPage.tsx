import { Handshake, Building2, TrendingUp, Plus } from 'lucide-react';

interface PartnersPageProps {
  language: 'ko' | 'en';
}

export default function PartnersPage({ language }: PartnersPageProps) {
  const content = {
    ko: {
      hero: {
        subtitle: 'PARTNERS',
        title: 'Our Partners',
        description: 'Building the future of AI healthcare together with leading institutions, strategic partners, and visionary investors.',
      },
      sections: {
        collaborators: {
          title: 'Research Collaborators & Customers',
          subtitle: 'Leading medical institutions and healthcare organizations',
          description: 'We collaborate with top-tier hospitals and research institutions to develop and deploy cutting-edge AI solutions.',
        },
        strategic: {
          title: 'Strategic Business Partners',
          subtitle: 'Technology and business alliances',
          description: 'Strategic partnerships that amplify our reach and enhance our technological capabilities.',
        },
        investors: {
          title: 'Financial Investors',
          subtitle: 'Backing innovation in healthcare AI',
          description: 'Visionary investors supporting our mission to transform cerebrovascular care.',
        },
      },
      // Research Collaborators & Customers (20+ logos)
      collaborators: [
        { name: 'Asan Medical Center', category: 'Major Hospital' },
        { name: 'Seoul National University Hospital', category: 'Major Hospital' },
        { name: 'Ajou University Hospital', category: 'Major Hospital' },
        { name: 'Samsung Medical Center', category: 'Major Hospital' },
        { name: 'Severance Hospital', category: 'Major Hospital' },
        { name: 'Seoul St. Mary\'s Hospital', category: 'Major Hospital' },
        { name: 'Bundang Seoul National University Hospital', category: 'Major Hospital' },
        { name: 'Gangnam Severance Hospital', category: 'Major Hospital' },
        { name: 'Kyungpook National University Hospital', category: 'Major Hospital' },
        { name: 'Chonnam National University Hospital', category: 'Major Hospital' },
        { name: 'Pusan National University Hospital', category: 'Major Hospital' },
        { name: 'Chungnam National University Hospital', category: 'Major Hospital' },
        { name: 'Hanyang University Hospital', category: 'Major Hospital' },
        { name: 'Korea University Anam Hospital', category: 'Major Hospital' },
        { name: 'Ewha Womans University Medical Center', category: 'Major Hospital' },
        { name: 'Hallym University Medical Center', category: 'Major Hospital' },
        { name: 'Inha University Hospital', category: 'Major Hospital' },
        { name: 'Chung-Ang University Hospital', category: 'Major Hospital' },
        { name: 'Soonchunhyang University Hospital', category: 'Major Hospital' },
        { name: 'Konkuk University Medical Center', category: 'Major Hospital' },
        { name: 'Dongguk University Ilsan Hospital', category: 'Major Hospital' },
        { name: 'Gachon University Gil Medical Center', category: 'Major Hospital' },
      ],
      // Strategic Business Partners (3 logos)
      strategic: [
        { name: 'Yuhan Medical', category: 'Medical Equipment' },
        { name: 'Microsoft Azure', category: 'Cloud Platform' },
        { name: 'SK C&C', category: 'Technology Partner' },
      ],
      // Financial Investors (4 logos)
      investors: [
        { name: 'SK Group', category: 'Strategic Investor' },
        { name: 'Korea Investment Partners', category: 'Venture Capital' },
        { name: 'Mirae Asset Venture', category: 'Venture Capital' },
        { name: 'KB Investment', category: 'Strategic Investor' },
      ],
    },
    en: {
      hero: {
        subtitle: 'PARTNERS',
        title: 'Our Partners',
        description: 'Building the future of AI healthcare together with leading institutions, strategic partners, and visionary investors.',
      },
      sections: {
        collaborators: {
          title: 'Research Collaborators & Customers',
          subtitle: 'Leading medical institutions and healthcare organizations',
          description: 'We collaborate with top-tier hospitals and research institutions to develop and deploy cutting-edge AI solutions.',
        },
        strategic: {
          title: 'Strategic Business Partners',
          subtitle: 'Technology and business alliances',
          description: 'Strategic partnerships that amplify our reach and enhance our technological capabilities.',
        },
        investors: {
          title: 'Financial Investors',
          subtitle: 'Backing innovation in healthcare AI',
          description: 'Visionary investors supporting our mission to transform cerebrovascular care.',
        },
      },
      // Research Collaborators & Customers (20+ logos)
      collaborators: [
        { name: 'Asan Medical Center', category: 'Major Hospital' },
        { name: 'Seoul National University Hospital', category: 'Major Hospital' },
        { name: 'Ajou University Hospital', category: 'Major Hospital' },
        { name: 'Samsung Medical Center', category: 'Major Hospital' },
        { name: 'Severance Hospital', category: 'Major Hospital' },
        { name: 'Seoul St. Mary\'s Hospital', category: 'Major Hospital' },
        { name: 'Bundang Seoul National University Hospital', category: 'Major Hospital' },
        { name: 'Gangnam Severance Hospital', category: 'Major Hospital' },
        { name: 'Kyungpook National University Hospital', category: 'Major Hospital' },
        { name: 'Chonnam National University Hospital', category: 'Major Hospital' },
        { name: 'Pusan National University Hospital', category: 'Major Hospital' },
        { name: 'Chungnam National University Hospital', category: 'Major Hospital' },
        { name: 'Hanyang University Hospital', category: 'Major Hospital' },
        { name: 'Korea University Anam Hospital', category: 'Major Hospital' },
        { name: 'Ewha Womans University Medical Center', category: 'Major Hospital' },
        { name: 'Hallym University Medical Center', category: 'Major Hospital' },
        { name: 'Inha University Hospital', category: 'Major Hospital' },
        { name: 'Chung-Ang University Hospital', category: 'Major Hospital' },
        { name: 'Soonchunhyang University Hospital', category: 'Major Hospital' },
        { name: 'Konkuk University Medical Center', category: 'Major Hospital' },
        { name: 'Dongguk University Ilsan Hospital', category: 'Major Hospital' },
        { name: 'Gachon University Gil Medical Center', category: 'Major Hospital' },
      ],
      // Strategic Business Partners (3 logos)
      strategic: [
        { name: 'Yuhan Medical', category: 'Medical Equipment' },
        { name: 'Microsoft Azure', category: 'Cloud Platform' },
        { name: 'SK C&C', category: 'Technology Partner' },
      ],
      // Financial Investors (4 logos)
      investors: [
        { name: 'SK Group', category: 'Strategic Investor' },
        { name: 'Korea Investment Partners', category: 'Venture Capital' },
        { name: 'Mirae Asset Venture', category: 'Venture Capital' },
        { name: 'KB Investment', category: 'Strategic Investor' },
      ],
    },
  };

  const t = content[language];

  // Partner Logo Card Component
  const PartnerCard = ({ name, category, large = false }: { name: string; category: string; large?: boolean }) => (
    <div
      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all group ${
        large ? 'p-8' : 'p-6'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        {/* Logo Placeholder - Replace with actual logo */}
        <div
          className={`${
            large ? 'w-24 h-24' : 'w-20 h-20'
          } rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
        >
          <Building2 className={`${large ? 'w-12 h-12' : 'w-10 h-10'} text-purple-400`} />
        </div>
        <h3 className={`text-white mb-2 ${large ? '' : 'text-sm'}`}>{name}</h3>
        <span className="text-purple-400 text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
          {category}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Handshake className="w-4 h-4 text-purple-400" />
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

      {/* Section 1: Research Collaborators & Customers */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-purple-400">{t.sections.collaborators.title}</h2>
                <p className="text-white/60">{t.sections.collaborators.subtitle}</p>
              </div>
            </div>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              {t.sections.collaborators.description}
            </p>
          </div>

          {/* Grid for 20+ partners - easily scalable */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {t.collaborators.map((partner, index) => (
              <PartnerCard key={index} name={partner.name} category={partner.category} />
            ))}
            
            {/* Add More Card */}
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 border-dashed p-6 flex flex-col items-center justify-center text-center hover:border-purple-500/40 transition-all cursor-pointer group">
              <div className="w-20 h-20 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                <Plus className="w-10 h-10 text-purple-400" />
              </div>
              <span className="text-white/60 text-sm">Add Partner</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 text-center">
              <div className="text-purple-400 mb-2">40+</div>
              <p className="text-white/60 text-sm">Major Hospitals</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 text-center">
              <div className="text-cyan-400 mb-2">100,000+</div>
              <p className="text-white/60 text-sm">Scans Analyzed</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 text-center">
              <div className="text-purple-400 mb-2">24/7</div>
              <p className="text-white/60 text-sm">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Strategic Business Partners */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-cyan-400">{t.sections.strategic.title}</h2>
                <p className="text-white/60">{t.sections.strategic.subtitle}</p>
              </div>
            </div>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              {t.sections.strategic.description}
            </p>
          </div>

          {/* Grid for 3 strategic partners - larger cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.strategic.map((partner, index) => (
              <PartnerCard key={index} name={partner.name} category={partner.category} large={true} />
            ))}
          </div>

          {/* Partnership Highlights */}
          <div className="mt-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-8">
            <h3 className="text-white mb-6">Partnership Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Medical Equipment Integration</h4>
                  <p className="text-white/60 text-sm">Seamless integration with leading PACS and medical imaging systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Cloud Infrastructure</h4>
                  <p className="text-white/60 text-sm">Global deployment powered by Microsoft Azure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Strategic Backing</h4>
                  <p className="text-white/60 text-sm">Supported by SK C&C\'s healthcare technology expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Financial Investors */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-purple-400">{t.sections.investors.title}</h2>
                <p className="text-white/60">{t.sections.investors.subtitle}</p>
              </div>
            </div>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              {t.sections.investors.description}
            </p>
          </div>

          {/* Grid for 4 investors - larger cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.investors.map((investor, index) => (
              <PartnerCard key={index} name={investor.name} category={investor.category} large={true} />
            ))}
          </div>

          {/* Investor Confidence Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12 text-center">
            <h3 className="text-white mb-4">Backed by Leading Investors</h3>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Our investors believe in our mission to transform cerebrovascular healthcare through AI innovation. Their support enables us to accelerate research, expand our reach, and deliver life-saving solutions to medical professionals worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="text-purple-400 mb-1">Strong Capital</div>
                <p className="text-white/60 text-sm">Funded for sustained growth and innovation</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="text-cyan-400 mb-1">Strategic Guidance</div>
                <p className="text-white/60 text-sm">Leveraging investor expertise and networks</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="text-purple-400 mb-1">Market Validation</div>
                <p className="text-white/60 text-sm">Proven business model and growth trajectory</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
