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
  title: "Trust Center | Muxxus Security, Compliance & Trust | Muxxus",
  description: "Explore Muxxus's Trust Center for comprehensive information about our security, compliance, privacy, and trust practices. Your trusted partner in global finance.",
  keywords: ["trust center", "security", "compliance", "privacy", "trust", "muxxus trust", "financial trust"],
  openGraph: {
    title: "Trust Center | Muxxus Security, Compliance & Trust | Muxxus",
    description: "Explore Muxxus's Trust Center for comprehensive information about our security, compliance, privacy, and trust practices.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Center | Muxxus Security, Compliance & Trust | Muxxus",
    description: "Explore Muxxus's Trust Center for comprehensive information about our security, compliance, privacy, and trust practices.",
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
    title: "Building Trust Through Transparency",
    description: [
      "Trust is the foundation of everything we do. Our Trust Center provides comprehensive information about our security, compliance, and privacy practices.",
      "We believe in transparency and accountability, providing you with the information you need to make informed decisions about your financial infrastructure."
    ],
    leftImage: "/assets/images/trust/img-1.jpg",
    items: [
      {
        title: "Security Excellence",
        description: "Bank-grade security with comprehensive protection measures and continuous monitoring."
      },
      {
        title: "Regulatory Compliance",
        description: "Full compliance with global regulations including PCI DSS, SOC 2, and ISO 27001."
      },
      {
        title: "Privacy Protection",
        description: "Transparent privacy practices with full control over your personal information."
      },
      {
        title: "Operational Excellence",
        description: "99.9% uptime SLA with robust infrastructure and disaster recovery capabilities."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Trust Center FAQ",
  faq_description: "Common questions about Muxxus trust and security",
  faqs: [
    {
      question: "What makes Muxxus trustworthy?",
      answer: "Muxxus is trustworthy because of our bank-grade security, comprehensive compliance certifications, transparent privacy practices, and operational excellence. We undergo regular third-party audits and maintain the highest industry standards."
    },
    {
      question: "How can I verify Muxxus's security claims?",
      answer: "You can verify our security through our published certifications (PCI DSS, SOC 2, ISO 27001), security reports, and third-party audit results. We also provide detailed documentation about our security practices."
    },
    {
      question: "What happens if there's a security incident?",
      answer: "We have a comprehensive incident response plan that includes immediate containment, investigation, notification procedures, and recovery measures. We notify affected customers promptly and provide regular updates throughout the process."
    },
    {
      question: "How does Muxxus ensure data privacy?",
      answer: "We implement comprehensive data privacy measures including encryption, access controls, data minimization, and compliance with global privacy regulations. You have full control over your personal information."
    }
  ]
};

// Composant principal de la page
export default function TrustCenterPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Trust Center"
        description="Trust is the foundation of everything we do. Explore our comprehensive information about security, compliance, privacy, and operational excellence."
        bg_video=""
        bg_image="/assets/images/trust/img-1.jpg"
        action_btn={{ label: "Download Trust Report", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Security & Compliance Section */}
      <FeatureSection
        title="Security & Compliance"
        subtitle="Comprehensive protection and certification"
        description="Our security and compliance program includes bank-grade encryption, comprehensive certifications, and adherence to global regulations. We maintain the highest standards to protect your business and data."
        buttonText="Learn About Security"
        buttonLink="/security"
        imageSrc="/assets/images/trust/img-2.jpg"
        imageAlt="Security & Compliance"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Privacy & Transparency Section */}
      <FeatureSection
        title="Privacy & Transparency"
        subtitle="Your data, your control"
        description="We believe in transparent privacy practices and giving you full control over your personal information. Our privacy policy is clear, comprehensive, and designed to protect your rights."
        buttonText="Learn About Privacy"
        buttonLink="/privacy"
        imageSrc="/assets/images/trust/img-3.jpg"
        imageAlt="Privacy & Transparency"
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