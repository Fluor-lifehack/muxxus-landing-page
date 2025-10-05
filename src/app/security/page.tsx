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
  title: "Security | Muxxus Bank-Grade Security & Protection | Muxxus",
  description: "Learn about Muxxus's comprehensive security measures, bank-grade encryption, fraud protection, and compliance with global security standards.",
  keywords: ["security", "bank-grade security", "encryption", "fraud protection", "data security", "muxxus security", "financial security"],
  openGraph: {
    title: "Security | Muxxus Bank-Grade Security & Protection | Muxxus",
    description: "Learn about Muxxus's comprehensive security measures, bank-grade encryption, fraud protection, and compliance with global security standards.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security | Muxxus Bank-Grade Security & Protection | Muxxus",
    description: "Learn about Muxxus's comprehensive security measures, bank-grade encryption, fraud protection, and compliance with global security standards.",
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
    title: "Bank-Grade Security",
    description: [
      "Your financial data and transactions are protected with industry-leading security measures and bank-grade infrastructure.",
      "We implement multiple layers of security to ensure your information remains safe and secure at all times."
    ],
    leftImage: "/assets/images/security/img-1.jpg",
    items: [
      {
        title: "End-to-End Encryption",
        description: "All data is encrypted in transit and at rest using industry-standard encryption protocols."
      },
      {
        title: "Real-Time Monitoring",
        description: "24/7 fraud detection and threat monitoring with advanced machine learning algorithms."
      },
      {
        title: "Multi-Factor Authentication",
        description: "Advanced authentication methods including biometric verification and hardware tokens."
      },
      {
        title: "Compliance Standards",
        description: "SOC 2, PCI DSS, and ISO 27001 certified with regular security audits and assessments."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Security FAQ",
  faq_description: "Common questions about Muxxus security",
  faqs: [
    {
      question: "What security certifications does Muxxus have?",
      answer: "Muxxus is SOC 2 Type II certified, PCI DSS compliant, and ISO 27001 certified. We undergo regular third-party security audits and assessments to maintain these standards."
    },
    {
      question: "How is my data encrypted?",
      answer: "We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All sensitive data is encrypted using industry-standard protocols and key management systems."
    },
    {
      question: "What fraud protection measures do you have?",
      answer: "We use advanced machine learning algorithms, real-time transaction monitoring, behavioral analytics, and risk scoring to detect and prevent fraudulent activities."
    },
    {
      question: "How do you handle security incidents?",
      answer: "We have a comprehensive incident response plan that includes immediate containment, investigation, notification procedures, and recovery measures. Our security team is available 24/7."
    }
  ]
};

// Composant principal de la page
export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Security"
        description="Your financial data and transactions are protected with industry-leading security measures and bank-grade infrastructure. Learn about our comprehensive security framework."
        bg_video=""
        bg_image="/assets/images/security/img-1.jpg"
        action_btn={{ label: "Security Report", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Security Infrastructure Section */}
      <FeatureSection
        title="Security Infrastructure",
        subtitle="Multiple layers of protection"
        description="Our security infrastructure includes advanced encryption, secure data centers, access controls, and continuous monitoring. We invest heavily in security technology and expertise to protect your business."
        buttonText="Learn About Our Infrastructure"
        buttonLink="#"
        imageSrc="/assets/images/security/img-2.jpg"
        imageAlt="Security Infrastructure"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Compliance Section */}
      <FeatureSection
        title="Compliance & Certifications",
        subtitle="Meeting the highest standards"
        description="We maintain compliance with global security standards including SOC 2, PCI DSS, and ISO 27001. Our certifications demonstrate our commitment to security excellence and regulatory compliance."
        buttonText="View Certifications"
        buttonLink="/compliance"
        imageSrc="/assets/images/security/img-3.jpg"
        imageAlt="Compliance"
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
};