import type { Metadata } from 'next';
import React from "react";
import SolutionHero from "@/components/hero/SolutionHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import FeatureSection from "@/components/muxxus/FeatureSection";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";

// Métadonnées Next.js
export const metadata: Metadata = {
  title: "Compliance | Muxxus Regulatory Compliance & Standards | Muxxus",
  description: "Learn about Muxxus's regulatory compliance, certifications, and adherence to global financial standards including PCI DSS, SOC 2, and ISO 27001.",
  keywords: ["compliance", "regulatory compliance", "PCI DSS", "SOC 2", "ISO 27001", "financial regulations", "muxxus compliance"],
  openGraph: {
    title: "Compliance | Muxxus Regulatory Compliance & Standards | Muxxus",
    description: "Learn about Muxxus's regulatory compliance, certifications, and adherence to global financial standards.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance | Muxxus Regulatory Compliance & Standards | Muxxus",
    description: "Learn about Muxxus's regulatory compliance, certifications, and adherence to global financial standards.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Données pour les composants
const componentData = {
  keyBenefitsSection2: {
    title: "Regulatory Compliance",
    description: [
      "We maintain the highest standards of regulatory compliance across all jurisdictions where we operate.",
      "Our comprehensive compliance program ensures adherence to global financial regulations and industry standards."
    ],
    leftImage: "/assets/images/compliance/img-1.jpg",
    items: [
      {
        title: "PCI DSS Compliance",
        description: "Level 1 PCI DSS certified for secure payment processing and card data protection."
      },
      {
        title: "SOC 2 Type II",
        description: "SOC 2 Type II certified for security, availability, and confidentiality controls."
      },
      {
        title: "ISO 27001",
        description: "ISO 27001 certified for information security management systems and practices."
      },
      {
        title: "Global Regulations",
        description: "Compliant with GDPR, CCPA, AML, KYC, and other global financial regulations."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Compliance FAQ",
  faq_description: "Common questions about Muxxus compliance",
  faqs: [
    {
      question: "What compliance certifications does Muxxus have?",
      answer: "Muxxus is PCI DSS Level 1 certified, SOC 2 Type II certified, and ISO 27001 certified. We also maintain compliance with GDPR, CCPA, AML, and KYC regulations."
    },
    {
      question: "How often are compliance audits conducted?",
      answer: "We undergo annual compliance audits for all major certifications and maintain continuous monitoring throughout the year. Third-party audits are conducted by certified auditors."
    },
    {
      question: "What regulatory frameworks does Muxxus follow?",
      answer: "We follow multiple regulatory frameworks including PCI DSS for payment security, SOC 2 for service controls, ISO 27001 for information security, and various financial regulations like AML and KYC."
    },
    {
      question: "How does Muxxus ensure ongoing compliance?",
      answer: "We have a dedicated compliance team, regular training programs, continuous monitoring systems, and quarterly compliance reviews to ensure ongoing adherence to all requirements."
    }
  ]
};

// Composant principal de la page
export default function CompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Compliance"
        description="We maintain the highest standards of regulatory compliance across all jurisdictions where we operate. Learn about our certifications and adherence to global financial standards."
        bg_video=""
        bg_image="/assets/images/compliance/img-1.jpg"
        action_btn={{ label: "View Certifications", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Certifications Section */}
      <FeatureSection
        title="Industry Certifications"
        subtitle="Recognized by leading standards"
        description="Our certifications demonstrate our commitment to security, privacy, and operational excellence. We maintain the highest industry standards and undergo regular audits to ensure continued compliance."
        buttonText="Download Certificates"
        buttonLink="#"
        imageSrc="/assets/images/compliance/img-2.jpg"
        imageAlt="Certifications"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Regulatory Framework Section */}
      <FeatureSection
        title="Regulatory Framework"
        subtitle="Comprehensive compliance program"
        description="Our compliance program covers all major regulatory frameworks including payment security, data protection, anti-money laundering, and know-your-customer requirements across global markets."
        buttonText="Learn About Our Framework"
        buttonLink="#"
        imageSrc="/assets/images/compliance/img-3.jpg"
        imageAlt="Regulatory Framework"
        imageFirst={false}
        className="bg-white"
      />

      {/* FAQ Section */}
      <ServiceDetailsFaq 
        faqs={faqData.faqs} 
        faqTitle={faqData.faq_title} 
      />

      {/* Newsletter et Footer */}
      <MuxxusNewsletter />
      <MuxxusFooter />
    </>
  );
}