import { motion } from "motion/react";
import { ArrowRight, Building2, Handshake, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import PartnerCarousel from "./PartnerCarousel";

interface TrustSectionProps {
  language: "ko" | "en";
}

export default function TrustSection({
  language,
}: TrustSectionProps) {

  const content = {
    ko: {
      title: "Trusted Partner",
      subtitle: "Working with diverse institutions",
      researchTitle: "Research Collaborators & Customers",
      businessTitle: "Strategic Business Partners",
      investorsTitle: "Financial Investors",
      viewAll: "전체 파트너 보기",
    },
    en: {
      title: "Trusted Partner",
      subtitle: "Working with diverse institutions",
      researchTitle: "Research Collaborators & Customers",
      businessTitle: "Strategic Business Partners",
      investorsTitle: "Financial Investors",
      viewAll: "View All Partners",
    },
  };

  const t = content[language];

  // Research Collaborators & Customers (hospitals and research institutions)
  const researchPartners = [
    {
      id: "snuh",
      name: "Seoul National University Hospital",
      logo: "/figma/aad06b0a3574be16f998da2bc63904c43557b401.png",
    },
    {
      id: "korea-univ",
      name: "Korea University Hospital",
      logo: "/figma/248c151b3983672f440cfbc6ea9bc97c3659f4e1.png",
    },
    {
      id: "severance",
      name: "Severance Hospital",
      logo: "/figma/70f3393987af8287c4f8eda0c98e5049e4a4b7f1.png",
    },
    {
      id: "knuh",
      name: "Kyungpook National University Hospital",
      logo: "/figma/7af9bc006865a28a6934e5d1f7a6322557be61aa.png",
    },
    {
      id: "cha",
      name: "CHA University Bundang Medical Center",
      logo: "/figma/8b72c515a4a1102ea4adb95823a565ea28063461.png",
    },
  ];

  // Strategic Business Partners
  const businessPartners = [
    { id: "sk", name: "SK C&C", logo: "/figma/e0be0c78cfee082066ac63ec3927b1ed9e0c8042.png" },
    { id: "samsung", name: "Samsung Electronics", logo: "https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?w=400" },
    { id: "lg", name: "LG Electronics", logo: "https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?w=400" },
    { id: "hyundai", name: "Hyundai Motor Group", logo: "https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?w=400" },
    { id: "posco", name: "POSCO", logo: "https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?w=400" },
  ];

  // Financial Investors
  const investorPartners = [
    { id: "kdb", name: "Korea Development Bank", logo: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=400" },
    { id: "kb", name: "KB Investment", logo: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=400" },
    { id: "mirae", name: "Mirae Asset", logo: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=400" },
    { id: "kic", name: "Korea Investment Corporation", logo: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=400" },
    { id: "smbc", name: "SMBC Venture Capital", logo: "https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=400" },
  ];

  const handleViewAllPartners = () => {
    // Navigate to partners page (to be implemented in Task 2)
    console.log("Navigate to /partners page");
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Top Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-white/60">{t.subtitle}</p>
        </motion.div>

        {/* Research Collaborators & Customers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Styled Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full" />
              
              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {t.researchTitle}
                </span>
              </h3>
              <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full" />
            </div>
          </div>
          <PartnerCarousel partners={researchPartners} />
        </motion.div>

        {/* Strategic Business Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Styled Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl rounded-full" />
              
              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl">
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {t.businessTitle}
                </span>
              </h3>
              <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rounded-full" />
            </div>
          </div>
          <PartnerCarousel partners={businessPartners} />
        </motion.div>

        {/* Financial Investors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Styled Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-xl rounded-full" />
              
              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {t.investorsTitle}
                </span>
              </h3>
              <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full" />
            </div>
          </div>
          <PartnerCarousel partners={investorPartners} />
        </motion.div>

        {/* CTA Button - Single button at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            onClick={handleViewAllPartners}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-6 rounded-full transition-all shadow-lg hover:shadow-purple-500/25 group"
          >
            <span className="mr-2">{t.viewAll}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}