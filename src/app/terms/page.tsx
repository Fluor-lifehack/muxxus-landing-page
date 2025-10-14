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
  title: "Terms of Service | Muxxus Legal Terms & Conditions | Muxxus",
  description: "Read Muxxus's terms of service, legal terms and conditions for using our global financial infrastructure platform. Clear, fair, and transparent terms.",
  keywords: ["terms of service", "terms and conditions", "legal terms", "user agreement", "muxxus terms", "service agreement"],
  openGraph: {
    title: "Terms of Service | Muxxus Legal Terms & Conditions | Muxxus",
    description: "Read Muxxus's terms of service, legal terms and conditions for using our global financial infrastructure platform.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Muxxus Legal Terms & Conditions | Muxxus",
    description: "Read Muxxus's terms of service, legal terms and conditions for using our global financial infrastructure platform.",
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
    title: "Terms of Service",
    description: [
      "Our terms of service are designed to be clear, fair, and transparent for all users of our platform.",
      "We believe in building trust through honest communication and straightforward legal agreements."
    ],
    leftImage: "/assets/images/terms/img-1.jpg",
    items: [
      {
        title: "Clear & Fair Terms",
        description: "Our terms are written in plain language and designed to be fair to all parties."
      },
      {
        title: "Transparent Policies",
        description: "We clearly explain what you can expect from us and what we expect from you."
      },
      {
        title: "Regular Updates",
        description: "We keep our terms current and notify users of any significant changes."
      },
      {
        title: "Legal Compliance",
        description: "Our terms comply with applicable laws and regulations in all jurisdictions we operate."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Terms of Service FAQ",
  faq_description: "Common questions about our terms of service",
  faqs: [
    {
      question: "What are the key terms I should know about?",
      answer: "Key terms include our service availability commitments, user responsibilities, data usage policies, and dispute resolution procedures. We recommend reading the full terms for complete understanding."
    },
    {
      question: "How often do you update your terms?",
      answer: "We update our terms as needed to reflect changes in our services, legal requirements, or business practices. We notify users of significant changes with advance notice."
    },
    {
      question: "What happens if I don't agree to the terms?",
      answer: "If you don't agree to our terms, you cannot use our services. We encourage you to contact us if you have concerns about specific terms so we can address them."
    },
    {
      question: "Are there different terms for different services?",
      answer: "Some services may have additional terms or conditions specific to that service. These are clearly communicated when you sign up for those services."
    }
  ]
};

// Composant principal de la page
export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Terms of Service"
        description="Our terms of service are designed to be clear, fair, and transparent for all users of our global financial infrastructure platform. Read our legal terms and conditions."
        bg_video=""
        bg_image="/assets/images/terms/img-1.jpg"
        action_btn={{ label: "Contact Legal Team", link: "mailto:legal@muxxus.com" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Legal Framework Section */}
      <FeatureSection
        title="Legal Framework"
        subtitle="Comprehensive legal protection"
        description="Our terms of service provide a comprehensive legal framework that protects both you and us while ensuring clear expectations for our business relationship. We're committed to fair and transparent legal practices."
        buttonText="View Full Terms"
        buttonLink="#"
        imageSrc="/assets/images/terms/img-2.jpg"
        imageAlt="Legal Framework"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* User Rights Section */}
      <FeatureSection
        title="Your Rights & Responsibilities"
        subtitle="Clear expectations for all parties"
        description="Our terms clearly outline your rights as a user, your responsibilities when using our services, and our commitments to you. We believe in mutual respect and clear communication."
        buttonText="Learn About Your Rights"
        buttonLink="#"
        imageSrc="/assets/images/terms/img-3.jpg"
        imageAlt="User Rights"
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