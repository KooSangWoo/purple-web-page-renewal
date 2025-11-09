import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  language: "ko" | "en";
}

export default function Footer({ language }: FooterProps) {
  const content = {
    ko: {
      tagline: "모두에게 이로운 AI를 만듭니다",
      contact: "문의",
      company: "Company",
      products: "Products",
      resources: "Resources",
      about: "About",
      careers: "Careers",
      partners: "Partners",
      ich: "Hyper Insight - ICH",
      infarct: "Hyper Insight - Infarct",
      anuerysm: "Hyper Insight - Aneurysm",
      contactUs: "Contact Us",
      customerSupport: "Customer Support",
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      securityPolicy: "Security Policy",
      copyright: "© 2025 Purple AI. All rights reserved.",
    },
    en: {
      tagline: "Creating AI for Everyone's Benefit",
      contact: "Contact",
      company: "Company",
      products: "Products",
      resources: "Resources",
      about: "About",
      careers: "Careers",
      partners: "Partners",
      ich: "Hyper Insight - ICH",
      infarct: "Hyper Insight - Infarct",
      anuerysm: "Hyper Insight - Aneurysm",
      contactUs: "Contact Us",
      customerSupport: "Customer Support",
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      securityPolicy: "Security Policy",
      copyright: "© 2025 Purple AI. All rights reserved.",
    },
  };

  const t = content[language];

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a1a]/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="md:max-w-[45%]">
            <div className="mb-4">
              <Image
                src="/figma/6666b180758aa24c274692483f8c7f91011274f8.png"
                alt="Purple AI Logo"
                width={120}
                height={32}
                className="h-8 mb-4"
              />
            </div>
            <p className="text-white/60 mb-6">
              The Future of Cerebrovascular Disease Care through AI
              <br />
              Clinical Decision Support for Better Patient Outcomes.
            </p>
            <div className="space-y-3">
              <p className="text-white/80">PurpleAI Inc.</p>
              <div className="flex items-start gap-3 text-white/50 hover:text-white/70 transition-colors">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  3rd Floor, 18, Teheran-ro 20-gil, Gangnam-gu, Seoul, Korea
                  (06235)
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50 hover:text-white/70 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">purpleai@purple-ai.co</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-12 md:gap-16">
            {/* Company */}
            <div>
              <h4 className="text-white mb-4">{t.company}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.about}
                  </a>
                </li>
                {/* TODO : 채용 섹션 활성화 */}
                {/* <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.careers}
                  </a>
                </li> */}
                <li>
                  <a
                    href="/partners"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.partners}
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white mb-4">{t.products}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/ich"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.ich}
                  </a>
                </li>
                <li>
                  <a
                    href="/infarct"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.infarct}
                  </a>
                </li>
                <li>
                  <a
                    href="/aneurysm"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.anuerysm}
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white mb-4">{t.resources}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="contact-us"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.contactUs}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.customerSupport}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.termsOfUse}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.privacyPolicy}
                  </a>
                </li>
                <li>
                  <a
                    href="/security-policy"
                    className="text-white/60 hover:text-white/80 transition-colors text-sm"
                  >
                    {t.securityPolicy}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-white/40 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
