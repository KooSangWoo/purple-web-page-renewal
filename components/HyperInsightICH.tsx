import { useState } from "react";
import { Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HyperInsightICHProps {
  language: "ko" | "en";
}

export default function HyperInsightICH({ language }: HyperInsightICHProps) {
  const [activeTab, setActiveTab] = useState<"us" | "korea">("us");
  const router = useRouter();

  const content = {
    ko: {
      title: "Hyper Insight™ - ICH Dx*",
      description:
        "AI-powered diagnostic support for rapid, accurate detection and localization of brain hemorrhages on non-contrast CT, with ROI visualization and volume quantification to help radiologists assess hemorrhagic regions.",
      worklist: {
        label: "WORKLIST",
        title: "Worklist Prioritization & Golden Time Advantage",
      },
      viewer: {
        label: "VIEWER",
        title: "AI-Driven Analysis",
      },
      report: {
        label: "REPORT",
        title: "Intuitive Reporting",
      },
      mobile: {
        label: "MOBILE",
        title: "Notifications & AI DICOM Viewer",
      },
      disclaimer1:
        "* As a Radiological Computer Aided Triage And Notification Software, Hyper Insight™ – ICH functions as a triage and notification tool – supporting, not replacing, medical judgment. Final diagnosis and treatment decisions remain the responsibility of qualified medical professionals.",
      disclaimer2:
        "* Certain features or modules described here are not cleared or approved by the US Food and Drug Administration (FDA) and are not intended for clinical use in the United States. These features are provided for research, evaluation, and educational purposes only.",
    },
    en: {
      title: "Hyper Insight™ - ICH Dx*",
      description:
        "AI-powered diagnostic support for rapid, accurate detection and localization of brain hemorrhages on non-contrast CT, with ROI visualization and volume quantification to help radiologists assess hemorrhagic regions.",
      worklist: {
        label: "WORKLIST",
        title: "Worklist Prioritization & Golden Time Advantage",
      },
      viewer: {
        label: "VIEWER",
        title: "AI-Driven Analysis",
      },
      report: {
        label: "REPORT",
        title: "Intuitive Reporting",
      },
      mobile: {
        label: "MOBILE",
        title: "Notifications & AI DICOM Viewer",
      },
      disclaimer1:
        "* As a Radiological Computer Aided Triage And Notification Software, Hyper Insight™ – ICH functions as a triage and notification tool – supporting, not replacing, medical judgment. Final diagnosis and treatment decisions remain the responsibility of qualified medical professionals.",
      disclaimer2:
        "* Certain features or modules described here are not cleared or approved by the US Food and Drug Administration (FDA) and are not intended for clinical use in the United States. These features are provided for research, evaluation, and educational purposes only.",
    },
  };

  const t = content[language];

  function handleELabel() {
    router.push("/ich/e-label");
  }

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
              <div className="flex items-end">
                <h1 className="mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Hyper Insight™
                  </span>
                  <span className="text-white"> - </span>
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    ICH Dx*
                  </span>
                </h1>
              </div>
              <p className="text-white/70 leading-relaxed max-w-5xl">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2x2 Grid Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WORKLIST Card */}
            <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all">
              <div className="p-8">
                {/* Label Badge */}
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 ml-6">
                  <span className="text-purple-300">{t.worklist.label}</span>
                </div>

                {/* Image Container */}
                <div className="bg-black/40 rounded-2xl m-6 aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="/images/ich_worklist.png"
                    alt="Worklist Interface"
                    className="w-full h-full object-fill rounded-xl"
                  />
                </div>

                {/* Title */}
                <h3 className="text-orange-400 ml-6">{t.worklist.title}</h3>
              </div>
            </div>

            {/* VIEWER Card */}
            <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all">
              <div className="p-8">
                {/* Label Badge */}
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 ml-6">
                  <span className="text-purple-300">{t.viewer.label}</span>
                </div>

                {/* Image Container */}
                <div className="bg-black/40 rounded-2xl m-6 aspect-[4/3] overflow-hidden ">
                  <ImageWithFallback
                    src="/images/MASTER_HEMORRAGE_251028.jpg"
                    alt="CT Scan Viewer"
                    className="w-full h-full object-fill rounded-xl"
                  />
                </div>

                {/* Title */}
                <h3 className="text-orange-400 ml-6">{t.viewer.title}</h3>
              </div>
            </div>

            {/* REPORT Card */}
            <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all">
              <div className="p-8">
                {/* Label Badge */}
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 ml-6">
                  <span className="text-purple-300">{t.report.label}</span>
                </div>

                {/* Image Container */}
                <div className="bg-black/40 rounded-2xl m-6 aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="/images/report_brain_hemorrhage.png"
                    alt="Medical Report"
                    className="w-full h-full object-fill rounded-xl"
                  />
                </div>

                {/* Title */}
                <h3 className="text-orange-400 ml-6">{t.report.title}</h3>
              </div>
            </div>

            {/* MOBILE Card */}
            <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all">
              <div className="p-8">
                {/* Label Badge */}
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 ml-6">
                  <span className="text-purple-300">{t.mobile.label}</span>
                </div>

                {/* Image Container */}
                <div className="flex bg-black/40 rounded-2xl p-4 m-6 aspect-[4/3]">
                  <ImageWithFallback
                    src="/images/mobile_1.jpg"
                    alt="Mobile Medical App"
                    className="w-full h-full object-contain rounded-xl"
                  />
                  <ImageWithFallback
                    src="/images/mobile_2.jpg"
                    alt="Mobile Medical App"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                {/* Title */}
                <h3 className="text-orange-400 ml-6">{t.mobile.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Validation Tabs Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button
              onClick={() => setActiveTab("us")}
              className={`px-12 py-4 rounded-full transition-all ${
                activeTab === "us"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white/5 text-white/60 border border-white/10 hover:border-purple-500/30"
              }`}
            >
              US CLINICAL VALIDATION
            </button>
            <button
              onClick={() => setActiveTab("korea")}
              className={`px-12 py-4 rounded-full transition-all ${
                activeTab === "korea"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white/5 text-white/60 border border-white/10 hover:border-purple-500/30"
              }`}
            >
              KOREA CLINICAL VALIDATION
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "us" && (
            <div className="space-y-12">
              {/* US Clinical Validation Header */}
              <div className="flex flex-row justify-between items-center w-full">
                {/* 1. 이 div가 QR 코드까지의 모든 공간을 차지하며, 밑줄이 적용됩니다. */}
                <div className="flex flex-col w-full pr-8">
                  {" "}
                  {/* w-full로 최대한 확장하고, pr-8로 QR코드와 간격 확보 */}
                  {/* 텍스트 영역 */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🇺🇸</span>
                    <h2 className="text-purple-400">US CLINICAL VALIDATION</h2>
                  </div>
                  {/* 밑줄 (텍스트 + QR 간격까지 연장) */}
                  {/* pb-6은 밑줄과 아래 텍스트 사이의 간격입니다. border-b가 w-full에 의해 확장됩니다. */}
                  <div className="mt-2 pb-6 border-b border-purple-500/30 w-full"></div>
                </div>

                {/* 2. QR 코드 이미지 (오른쪽 끝에 배치) */}
                <Image
                  src="/images/FDA.png"
                  alt="Purple AI"
                  width={400}
                  height={1}
                  className="h-20 w-34 rounded-xl mr-4"
                />

                {/* 2. QR 코드 이미지 (오른쪽 끝에 배치) */}
                <Image
                  src="/images/ich_eLabel_comment.png"
                  alt="Purple AI"
                  width={400}
                  height={1}
                  className="h-24 w-auto cursor-pointer hover:scale-110 hover:shadow-lg"
                  onClick={handleELabel}
                />
              </div>
              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                A multi-center, randomized, retrospective crossover superiority
                pivotal study, demonstrating high performance across all major
                ICH subtypes.
              </p>
              {/* Performance Metrics */}
              <div>
                <h3 className="text-orange-400 mb-6">Performance Metrics</h3>
                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-purple-600/30">
                          <th className="px-6 py-4 text-left text-white">
                            Metric
                          </th>
                          <th className="px-6 py-4 text-left text-white">
                            Performance Result
                            <br />
                            <span className="text-sm text-white/60">
                              (Patient-wise)
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Centers</td>
                          <td className="px-6 py-4 text-white/80">
                            13 US clinical sites
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">
                            Trial Size
                          </td>
                          <td className="px-6 py-4 text-white/80">
                            394 brain CT images
                            <br />
                            <span className="text-sm text-white/60">
                              (198 positive / 196 negative cases)
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">AUC</td>
                          <td className="px-6 py-4 text-white/80">98.64%</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">
                            Sensitivity
                          </td>
                          <td className="px-6 py-4 text-white/80">95.45%</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">
                            Specificity
                          </td>
                          <td className="px-6 py-4 text-white/80">98.47%</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">
                            Speed
                            <br />
                            <span className="text-sm text-white/60">
                              (Notification Seconds)
                            </span>
                          </td>
                          <td className="px-6 py-4 text-white/80">
                            Average time was
                            <br />
                            16.39 ± 5.46 seconds
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">
                            Subtype
                            <br />
                            Performance
                          </td>
                          <td className="px-6 py-4 text-white/80">
                            94.7%~100%
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">
                            Data Diversity
                          </td>
                          <td className="px-6 py-4 text-white/80">
                            The trial included diverse
                            <br />
                            racial demographics
                            <br />
                            <span className="text-sm text-white/60">
                              (Alaskan Native, Asian, Black, White, etc.)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Publication Reference */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-cyan-400 mb-3">
                  npj Digital Medicine (2023)
                </h4>
                <p className="text-white/60 text-sm">
                  Deep learning based automatic detection algorithm for acute
                  intracranial haemorrhage: a pivotal randomized clinical trial
                </p>
              </div>
              {/* Comparison vs. Peers */}
              <div>
                <h3 className="text-orange-400 mb-6">Comparison vs. Peers</h3>
                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-purple-600/30">
                          <th className="px-6 py-4 text-left text-white">
                            Device
                          </th>
                          <th className="px-6 py-4 text-center text-white">
                            Sensitivity
                          </th>
                          <th className="px-6 py-4 text-center text-white">
                            Specificity
                          </th>
                          <th className="px-6 py-4 text-center text-white">
                            AUC
                          </th>
                          <th className="px-6 py-4 text-center text-white">
                            Speed
                            <br />
                            <span className="text-sm text-white/60">
                              (seconds)
                            </span>
                          </th>
                          <th className="px-6 py-4 text-left text-white">
                            Sensitivity for Subtypes
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr className="hover:bg-white/5 bg-purple-500/5">
                          <td className="px-6 py-4 text-white">
                            Hyper Insight-ICH
                          </td>
                          <td className="px-6 py-4 text-center text-orange-400">
                            95.5 (#3)
                          </td>
                          <td className="px-6 py-4 text-center text-orange-400">
                            98.5 (#2)
                          </td>
                          <td className="px-6 py-4 text-center text-orange-400">
                            0.9864 (#1)
                          </td>
                          <td className="px-6 py-4 text-center text-orange-400">
                            16.4 (#2)
                          </td>
                          <td className="px-6 py-4 text-white/80">
                            IPH 97.3, IVH 97.67, SAH 97.65, SDH 94.69, EDH 100
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company A</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            95
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            96
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            0.97
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            29.4
                          </td>
                          <td className="px-6 py-4 text-white/60">
                            IPH 96, IVH 100, SAH 86, SDH 93, EDH 100
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company B</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            96.8
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            99.8
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            0.9863
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            39
                          </td>
                          <td className="px-6 py-4 text-white/60">
                            IPH 100, IVH 100, SAH 100, SDH 89.5
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company C</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            94.8
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            92.5
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            0.9367
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            22.2
                          </td>
                          <td className="px-6 py-4 text-white/60">N/A</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company D</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            89.2
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            91.4
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            N/A
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            50-126
                          </td>
                          <td className="px-6 py-4 text-white/60">
                            IPH 96.6, IVH 100, SAH 35.7, SDH 66.7
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company E</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            90.6
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            93.1
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            N/A
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            43
                          </td>
                          <td className="px-6 py-4 text-white/60">N/A</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company F</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            94.7
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            94.9
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            0.983
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            35
                          </td>
                          <td className="px-6 py-4 text-white/60">N/A</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company G</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            97
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            93
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            N/A
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            77
                          </td>
                          <td className="px-6 py-4 text-white/60">N/A</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company H</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            95
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            93.1
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            N/A
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            13.3
                          </td>
                          <td className="px-6 py-4 text-white/60">SAH 86.1</td>
                        </tr>
                        <tr className="hover:bg-white/5">
                          <td className="px-6 py-4 text-white/80">Company I</td>
                          <td className="px-6 py-4 text-center text-white/60">
                            92
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            95
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            N/A
                          </td>
                          <td className="px-6 py-4 text-center text-white/60">
                            41.1
                          </td>
                          <td className="px-6 py-4 text-white/60">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-white/40 text-sm p-4 text-right">
                    Based on internal analysis using FDA database and other
                    reliable sources
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "korea" && (
            <div className="space-y-12">
              {/* Korea Clinical Validation Header */}
              <div className="flex flex-row justify-between items-center w-full">
                {/* 1. 이 div가 QR 코드까지의 모든 공간을 차지하며, 밑줄이 적용됩니다. */}
                <div className="flex flex-col w-full pr-8">
                  {" "}
                  {/* w-full로 최대한 확장하고, pr-8로 QR코드와 간격 확보 */}
                  {/* 텍스트 영역 */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🇰🇷</span>
                    <h2 className="text-purple-400">
                      KOREA CLINICAL VALIDATION
                    </h2>
                  </div>
                  <div className="mt-2 pb-6 border-b border-purple-500/30 w-full"></div>
                </div>

                <Image
                  src="/images/FDA.png"
                  alt="Purple AI"
                  width={400}
                  height={1}
                  className="h-20 w-34 rounded-xl mr-4"
                />
                {/* 2. QR 코드 이미지 (오른쪽 끝에 배치) */}
                <Image
                  src="/images/MFDS.png"
                  alt="Purple AI"
                  width={400}
                  height={1}
                  className="h-20 w-34 rounded-xl"
                />
              </div>
              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                AI assistance improved diagnostic accuracy across all clinician
                levels, with the greatest benefit for nonradiologists.
              </p>

              {/* Study Overview */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-purple-400 mb-6">
                  A multi center, randomized retrospective, crossover design,
                  superiority, pivotal study
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left side - Study info */}
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-purple-400/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-purple-400">
                            Brain CTs from 296 patients
                          </h4>
                          <p className="text-white/60 text-sm">
                            146 AIH and 150 normal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-cyan-400/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">👨‍⚕️</span>
                        </div>
                        <div>
                          <h4 className="text-cyan-400">By nine reviewers</h4>
                          <p className="text-white/60 text-sm">
                            Emergency physicians (n = 3)
                            <br />
                            Board-certified radiologists (n = 3)
                            <br />
                            Neuroradiologists (n = 3)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Results */}
                  <div className="space-y-4">
                    <h4 className="text-orange-400 mb-4">
                      Performance Results
                    </h4>

                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center mb-4">
                        <div>
                          <p className="text-white/60 text-sm mb-1">
                            Without AI
                          </p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">With AI</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">P-value</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div className="text-white/70">Sensitivity</div>
                          <div className="text-center text-white/60">94.4%</div>
                          <div className="text-center text-cyan-400">97.2%</div>
                          <div className="text-center text-white/60">
                            0.0017
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div className="text-white/70">Specificity</div>
                          <div className="text-center text-white/60">95.0%</div>
                          <div className="text-center text-cyan-400">96.9%</div>
                          <div className="text-center text-white/60">
                            0.0376
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div className="text-white/70">Accuracy</div>
                          <div className="text-center text-white/60">94.7%</div>
                          <div className="text-center text-cyan-400">97.0%</div>
                          <div className="text-center text-white/60">
                            0.0075
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 rounded-lg p-3 text-center">
                        <p className="text-white/60 text-xs mb-1">
                          Non-radiologists
                        </p>
                        <p className="text-orange-400">91.9% → 94.6%</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-center">
                        <p className="text-white/60 text-xs mb-1">
                          Radiologists
                        </p>
                        <p className="text-orange-400">95.1% → 97.4%</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-center">
                        <p className="text-white/60 text-xs mb-1">
                          Neuroradiologists
                        </p>
                        <p className="text-orange-400">97.6% → 98.7%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Hemorrhage Detection */}
              <div>
                <h3 className="text-orange-400 mb-4">
                  Comprehensive Hemorrhage Detection
                </h3>
                <p className="text-white/70 mb-6">
                  All ICH Types, No Accuracy Loss
                </p>
                <div className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div
                        key={i}
                        className="bg-black/40 rounded-lg aspect-square"
                      >
                        <ImageWithFallback
                          src={`/images/brainct_hemo_${i}.png`}
                          alt={`CT Scan ${i}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Korea Multi-Center Study */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-purple-500/30">
                  <span className="text-4xl">🇰🇷</span>
                  <h3 className="text-purple-400">KOREA MULTI-CENTER STUDY</h3>
                </div>

                <p className="text-white/70 leading-relaxed mb-8">
                  It demonstrated meaningful gains in sensitivity and
                  specificity for acute intracranial hemorrhage detection in a
                  pivotal multi-center study, with consistent performance across
                  institutions, scanner types, and hemorrhage subtypes.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Study Details */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-6 border border-purple-400/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🏥</span>
                        </div>
                        <h4 className="text-purple-400">Three institutions</h4>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-cyan-400/30">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">👥</span>
                        </div>
                        <h4 className="text-cyan-400">49,841 patients</h4>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-white/70 mb-3">
                        6,442 patients showed AIH
                      </p>
                      <ul className="text-white/60 text-sm space-y-1 ml-4">
                        <li>• 2,424 cases (SAH)</li>
                        <li>• 2,738 cases (SDH)</li>
                        <li>• 371 cases (EDH)</li>
                        <li>• 1,266 cases (IVH)</li>
                        <li>• 3,367 cases (ICH)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Performance Results */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-orange-400 mb-4">
                        AI Performance in Patient-wise Analysis
                      </h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-5 gap-2 text-sm">
                          <div className="text-white/60">Accuracy</div>
                          <div className="text-white/60">Sensitivity</div>
                          <div className="text-white/60">Specificity</div>
                          <div className="text-white/60">AUC</div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-sm">
                          <div className="text-cyan-400">0.977</div>
                          <div className="text-cyan-400">0.94</div>
                          <div className="text-cyan-400">0.992</div>
                          <div className="text-cyan-400">0.992</div>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mt-4">
                        (N=49,841)
                        <br />
                        High accuracy and robustness across a large-scale,
                        multi-institutional dataset.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-orange-400 mb-4">
                        AI Sensitivity by AIH Subtype
                      </h4>
                      <div className="grid grid-cols-5 gap-2 text-sm mb-2">
                        <div className="text-white/60 text-center">SAH</div>
                        <div className="text-white/60 text-center">SDH</div>
                        <div className="text-white/60 text-center">EDH</div>
                        <div className="text-white/60 text-center">IVH</div>
                        <div className="text-white/60 text-center">IPH</div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 text-sm">
                        <div className="text-cyan-400 text-center">0.954</div>
                        <div className="text-cyan-400 text-center">0.933</div>
                        <div className="text-cyan-400 text-center">0.933</div>
                        <div className="text-cyan-400 text-center">0.994</div>
                        <div className="text-cyan-400 text-center">0.977</div>
                      </div>
                      <p className="text-white/60 text-sm mt-4">(N = 6,442)</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-orange-400 mb-4">
                        AI Accuracy by Scanner
                      </h4>
                      <div className="grid grid-cols-4 gap-2 text-sm mb-2">
                        <div className="text-white/60 text-center">GE</div>
                        <div className="text-white/60 text-center">Philips</div>
                        <div className="text-white/60 text-center">Siemens</div>
                        <div className="text-white/60 text-center">Toshiba</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-sm">
                        <div className="text-cyan-400 text-center">0.98</div>
                        <div className="text-cyan-400 text-center">
                          0.95-0.99
                        </div>
                        <div className="text-cyan-400 text-center">
                          0.94-0.98
                        </div>
                        <div className="text-cyan-400 text-center">0.99</div>
                      </div>
                      <p className="text-white/60 text-sm mt-4">(N=49,841)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl space-y-6">
          <p className="text-white/50 text-sm leading-relaxed">
            {t.disclaimer1}
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            {t.disclaimer2}
          </p>
        </div>
      </section>
    </div>
  );
}
