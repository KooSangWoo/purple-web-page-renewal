"use client";

import HyperInsightICH from "@/components/HyperInsightICH";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface IchELabelProps {
  language: "ko" | "en";
}

function IchELabelContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("language");

  const validLanguage =
    langParam === "ko" || langParam === "en" ? langParam : "en";
  return <IchELabelPage language={validLanguage} />;
}

export default function IchELabelPage({ language }: IchELabelProps) {
  return (
    // min-h-screen으로 화면 전체를 채우고, 텍스트 기본 색상을 밝게 설정
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] text-gray-300 pb-20">
      {/* === 1. e-Label (FDA 제품 정보) 섹션 === */}
      <section className="container mx-auto px-6 pt-[40px] md:pt-[80px]">
        {/* 메인 타이틀과 로고 영역 */}
        <div className="flex items-end gap-4 mb-10 md:mb-16 border-b border-gray-800 pb-6">
          <h1 className="font-bold text-3xl md:text-5xl text-white leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Hyper Insight-ICH™
            </span>{" "}
            e-Label
          </h1>
          {/* 필요하다면 여기에 Image 컴포넌트 추가 */}
        </div>

        {/* Disclaimer 박스 */}
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-12">
          <h2 className="font-semibold text-lg md:text-2xl text-purple-200">
            Disclaimer: Identification of suspected intracranial hemorrhage is
            for notification purposes only, not diagnostic purposes.
          </h2>
        </div>

        <div className="space-y-16">
          {/* Device Identification */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Device Identification
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>
                  <strong className="text-white">Product Name:</strong> Hyper
                  Insight-ICH™
                </li>
                <li>
                  <strong className="text-white">Device Type:</strong>{" "}
                  Radiological Computer-Assisted Triage and Notification
                  Software
                </li>
                <li>
                  <strong className="text-white">Regulation Number:</strong> 21
                  CFR 892.2080
                </li>
                <li>
                  <strong className="text-white">FDA Product Code:</strong> QAS
                </li>
                <li>
                  <strong className="text-white">510(k) Number:</strong>{" "}
                  K240353, cleared July 1, 2024
                </li>
                <li>
                  <strong className="text-white">Version:</strong> v1.0.0
                </li>
                <li>
                  <strong className="text-white">
                    Software release date (company):{" "}
                  </strong>{" "}
                  2023-06-30 (informational; not FDA-related).
                </li>
              </ul>
            </div>
          </div>

          {/* Intended Use */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Intended Use / Indications for Use
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>
                  Hyper Insight-ICH™ is a software-only device intended to aid
                  in the prioritization and triage of non-contrast head CT
                  images for patients suspected of intracranial hemorrhage
                  (ICH).
                </li>
                <li>
                  The device analyzes images and notifies qualified clinicians
                  of suspected ICH findings to assist in workflow
                  prioritization.
                </li>
                <li>
                  It is not intended to replace the interpretation of a
                  qualified medical professional nor to provide a diagnosis.
                </li>
              </ul>
            </div>
          </div>

          {/* Warnings and Precautions */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Warnings and Precautions
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>For use by qualified radiologists and clinicians only.</li>
                <li>
                  Do not use the notification results as the sole basis for
                  diagnosis or treatment.
                </li>
                <li>
                  Ensure image quality and patient metadata accuracy before
                  processing.
                </li>
                <li>
                  Performance may be affected by atypical anatomy or
                  non-standard scanning protocols.
                </li>
              </ul>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Performance Summary (Clinical Validation)
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>
                  <strong className="text-white">Trial Design:</strong>{" "}
                  multicenter retrospective study (13 U.S. sites)
                </li>
                <li>
                  <strong className="text-white">AUC:</strong> 0.9864
                </li>
                <li>
                  <strong className="text-white">Sensitivity:</strong> 95.45%
                  (95% CI 91.55–97.90)
                </li>
                <li>
                  <strong className="text-white">Specificity:</strong> 98.47%
                  (95% CI 95.59 – 99.68)
                </li>
                <li>
                  <strong className="text-white">
                    Average Notification Time:
                  </strong>{" "}
                  16.4 ± 5.5 s
                </li>
              </ul>
            </div>
          </div>

          {/* Version Control and Updates */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Version Control and Updates
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>
                  Each software release includes a revision history and update
                  log.
                </li>
                <li>
                  To ensure continued compliance, verify that your installation
                  matches the current FDA-cleared version listed at{" "}
                  <a
                    href="https://www.purpleai.com/e-label/ICH"
                    className="text-purple-400 hover:underline"
                  >
                    www.purpleai.com/e-label/ICH
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>

          {/* Regulatory and Legal Information */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Regulatory and Legal Information
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>
                  <strong className="text-white">FDA Clearance:</strong> 510(k)
                  K240353 – Cleared July 1, 2024
                </li>
                <li>
                  <strong className="text-white">Device Classification:</strong>{" "}
                  Class II
                </li>
                <li>
                  <strong className="text-white">U.S. Distribution:</strong>{" "}
                  Prescription Use Only (21 CFR 801.109)
                </li>
                <li>
                  <strong className="text-white">Liability Statement:</strong>{" "}
                  Clinical responsibility rests with the treating physician.
                </li>
              </ul>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Company Info
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>Marketed by Purple AI Inc.</li>
                <li>510(k) submitter: SK Inc.</li>
                <li>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:purpleai@purple-ai.co"
                    className="text-purple-400 hover:underline"
                  >
                    purpleai@purple-ai.co
                  </a>
                </li>
                <li>
                  <strong className="text-white">Support:</strong>{" "}
                  <a
                    href="mailto:purpleai@purple-ai.co"
                    className="text-purple-400 hover:underline"
                  >
                    purpleai@purple-ai.co
                  </a>
                </li>
                <li>
                  <strong className="text-white">Website:</strong>{" "}
                  <a
                    href="https://www.purpleai.com/e-label/ICH"
                    className="text-purple-400 hover:underline"
                  >
                    www.purpleai.com/e-label/ICH
                  </a>
                </li>
                <li>
                  <strong className="text-white">Address:</strong> 3rd Floor,
                  18, Tehran-ro, 20-gil, Gangnam-gu, Seoul, Korea (06235)
                </li>
              </ul>
            </div>
          </div>

          {/* System Requirements */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              System Requirements
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>
                  <strong className="text-white">Operating System:</strong>{" "}
                  Windows 10 (64-bit) or later / Linux (Ubuntu 20.04 or later)
                </li>
                <li>
                  <strong className="text-white">Hardware:</strong> ≥ 16 vCPU, ≥
                  64 GB RAM, SSD: ≥ 1TB, No GPU Required
                </li>
                <li>
                  <strong className="text-white">Integration:</strong> Supports
                  PACS/RIS via DICOM C-STORE and C-ECHO protocols
                </li>
              </ul>
            </div>
          </div>

          {/* Installation and Activation */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              Installation and Activation
            </h2>
            <div className="pl-2 md:pl-4">
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>Download via the secure customer portal.</li>
                <li>Installation by authorized hospital IT.</li>
                <li>
                  Activate with organization-issued credentials (SSO/SAML/MFA)
                  and an authorization code provided by PurpleAI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === 구분선 === */}
      <div className="container mx-auto px-6">
        <hr className="my-16 border-gray-800" />
      </div>

      {/* === 2. 법률, 개인정보보호, 보안 (EULA, BAA) 섹션 === */}
      <section className="container mx-auto px-6">
        <div className="flex items-end gap-4 mb-10 md:mb-16 border-b border-gray-800 pb-6">
          <h1 className="font-bold text-3xl md:text-5xl text-white leading-tight">
            Terms, Privacy & Security
          </h1>
        </div>

        <div className="space-y-16">
          {/* 1. General Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              1. General Overview
            </h2>
            <div className="pl-2 md:pl-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                This document outlines the Terms of Use (EULA), Privacy Policy,
                Security Standards, and HIPAA Business Associate Agreement (BAA)
                for PurpleAI’s Hyper Insight™ – ICH software (Web and Mobile
                versions). It integrates clinical, operational, and legal
                requirements in a concise, FDA- and HIPAA-compliant format.
              </p>
            </div>
          </div>

          {/* 2. EULA */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              2. End-User License Agreement (EULA)
            </h2>
            <div className="pl-2 md:pl-4 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Scope & License
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI grants a non-exclusive, non-transferable,
                  site-limited license to use Hyper Insight – ICH solely
                  according to its Instructions for Use (IFU) and applicable
                  law. Title remains with PurpleAI.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Clinical & Regulatory Scope
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hyper Insight – ICH is classified as a Radiological
                  Computer-Assisted Triage and Notification Device (21 CFR
                  892.2080, product code QAS). It supports triage and
                  notification of suspected intracranial hemorrhage on
                  non-contrast head CT. The software is not diagnostic and must
                  be used by qualified medical professionals within validated
                  clinical workflows.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Acceptable Use & Restrictions
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Users may not reverse-engineer, resell, modify, or use the
                  software outside cleared indications. Comparative benchmarking
                  or publication of results without written consent is
                  prohibited.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-purple-300">
                  Shared Responsibilities
                </h3>
                <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                  <li>
                    <strong className="text-white">Customer:</strong>{" "}
                    Responsible for DICOM routing, compatible PACS integration,
                    access management (SSO/SAML, MFA), user training, retention
                    settings, and lawful PHI handling.
                  </li>
                  <li>
                    <strong className="text-white">Vendor:</strong> Responsible
                    for secure operation, vulnerability management, regulatory
                    compliance, and notification of material updates that could
                    impact labeling or validated workflows.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Security Baseline
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI maintains an ISO/IEC 27001-aligned security program
                  within its ISO 13485-compliant Quality Management System.
                  Security-by-design principles are applied through RBAC,
                  encryption, centralized logging, and periodic third-party
                  testing.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Data, Privacy & Roles
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Customer retains ownership of PHI. PurpleAI processes PHI only
                  to deliver services under the HIPAA BAA. De-identified data
                  may be used for safety, reliability, and quality improvement.
                  PHI is stored in US regions. For website and analytics data,
                  PurpleAI acts as a data controller in accordance with
                  CCPA/CPRA.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Updates & Material Changes
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Routine updates, recalibrations, and minor improvements are
                  provided regularly. Material changes that affect labeling or
                  validated workflows will include prior notice, updated
                  documentation, and, when feasible, deferral options for
                  customers.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Support & Service Levels
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI provides 24×7 support for critical incidents and
                  commercially reasonable uptime and response targets consistent
                  with industry standards.
                </p>
                <p className="text-lg text-purple-400 font-semibold">
                  SLA {">"} 99.9%
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Software Bill of Materials (SBOM)
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A current SBOM is available upon request for major releases or
                  material changes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Warranties & Disclaimers
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI warrants that its software conforms to published
                  documentation and IFU. All other warranties, express or
                  implied, are disclaimed. The device is for triage and
                  notification only.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Indemnity & Liability
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI defends against third-party IP infringement claims
                  (excluding misuse, combinations, or modifications). Customer
                  indemnifies PurpleAI for off-label use or legal violations.
                  Aggregate liability is limited to fees paid in the preceding
                  12 months.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Termination & Data Handling
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Upon termination, customers have 30 days to export data, if
                  any. PHI will be deleted according to BAA timelines.
                  Obligations regarding confidentiality, IP, and liability
                  survive termination.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Compliance & Governing Law
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Governed by Delaware law with venue in New York County, NY.
                  Order of precedence: BAA → EULA → IFU → Order Form.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Privacy Summary */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              3. Privacy Summary
            </h2>
            <div className="pl-2 md:pl-4 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">Roles</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI acts as a HIPAA Business Associate for PHI and as a
                  data controller for website interactions.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-purple-300">
                  Data Types
                </h3>
                <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                  <li>Operational and account data</li>
                  <li>Device and network metadata</li>
                  <li>DICOM images and derived artifacts</li>
                  <li>De-identified telemetry for reliability and safety</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Use & Sharing
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Data is used solely for service delivery, compliance, and
                  improvement. Subprocessors are bound by equivalent security
                  standards. No PHI is sold or shared for marketing purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Data Residency
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  All PHI is processed and stored within US regions.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Retention & Deletion
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Image data is retained minimally. Operational logs ≤ 12
                  months; support records ≤ 24 months. Deletion requests are
                  honored within 30 days unless legal retention is required.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  User Rights
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Website users may request access, correction, or deletion per
                  CCPA/CPRA. PHI-related rights are exercised through the
                  Covered Entity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Breach Notification
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  HITECH-compliant breach notifications will be made without
                  unreasonable delay and no later than 3 to 5 business days.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Security & Trust Center */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              4. Security & Trust Center
            </h2>
            <div className="pl-2 md:pl-4 space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                PurpleAI’s Security Program adheres to ISO 27001 and FDA
                cybersecurity guidance. Key elements include:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-lg text-gray-300 marker:text-purple-500">
                <li>Encryption (TLS 1.2+, AES-256)</li>
                <li>Role-based access control and MFA</li>
                <li>Immutable logging and centralized monitoring</li>
                <li>Vulnerability management and coordinated disclosure</li>
                <li>Business continuity and disaster recovery testing</li>
              </ul>
            </div>
          </div>

          {/* 5. HIPAA BAA */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              5. HIPAA Business Associate Agreement (BAA)
            </h2>
            <div className="pl-2 md:pl-4 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Permitted Uses & Disclosures
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI may use or disclose PHI only to perform contracted
                  services, using the minimum necessary standard.
                  De-identification is performed per 45 CFR §164.514.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Safeguards
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Administrative, physical, and technical safeguards are
                  maintained per the HIPAA Security Rule. Workforce training and
                  risk management are ongoing.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Incident Reporting
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Any incident involving unsecured PHI will be reported
                  promptly, no later than 3 to 5 business days after discovery.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Subcontractors
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  All subcontractors handling PHI are bound by equivalent
                  contractual obligations.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Access, Amendment, and Accounting
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI supports Covered Entities in meeting patient access
                  and accounting requests.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Return or Destruction of PHI
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Upon termination, PHI will be returned or destroyed if
                  feasible; otherwise, protections continue indefinitely.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Survival
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  All confidentiality and PHI-related obligations survive
                  termination. In case of conflict, the BAA prevails.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Mobile Addendum (US) */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-gray-700 pb-3">
              6. Mobile Addendum (US)
            </h2>
            <div className="pl-2 md:pl-4 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Intended Use
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The mobile app displays triage notifications for authorized
                  clinicians. It is not for diagnostic interpretation or patient
                  use.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Authorized Users & Connectivity
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Access requires verified credentials (SSO/SAML, MFA). Use of
                  MDM/EMM is strongly recommended for policy enforcement and
                  remote wipe capability.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Privacy & Data Handling
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PHI is stored only in US regions. On-device data is encrypted
                  and temporary. No PHI appears in push notifications. Users may
                  opt-in to de-identified telemetry.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Security
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  TLS 1.2+ encryption, key management via KMS/HSM, and RBAC
                  controls are enforced. Root/jailbreak detection and periodic
                  vulnerability assessments are applied.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">
                  Service Levels
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  PurpleAI ensures reliable uptime and response aligned with
                  healthcare-grade SaaS standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
