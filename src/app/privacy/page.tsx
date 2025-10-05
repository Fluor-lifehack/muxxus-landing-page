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
  title: "Privacy Policy | Muxxus Data Protection & Privacy | Muxxus",
  description: "Learn about Muxxus's privacy policy, data protection practices, and how we safeguard your personal information. Transparent, secure, and compliant with global regulations.",
  keywords: ["privacy policy", "data protection", "privacy", "GDPR", "data security", "personal information", "muxxus privacy"],
  openGraph: {
    title: "Privacy Policy | Muxxus Data Protection & Privacy | Muxxus",
    description: "Learn about Muxxus's privacy policy, data protection practices, and how we safeguard your personal information.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Muxxus Data Protection & Privacy | Muxxus",
    description: "Learn about Muxxus's privacy policy, data protection practices, and how we safeguard your personal information.",
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
    title: "Your Privacy Matters",
    description: [
      "We are committed to protecting your privacy and personal information with industry-leading security measures.",
      "Our privacy policy is transparent, comprehensive, and designed to give you full control over your data."
    ],
    leftImage: "/assets/images/privacy/img-1.jpg",
    items: [
      {
        title: "Transparency",
        description: "We are clear about what data we collect, how we use it, and who we share it with."
      },
      {
        title: "Security",
        description: "Your data is protected with bank-grade security measures and encryption protocols."
      },
      {
        title: "Control",
        description: "You have full control over your personal information and can manage your preferences anytime."
      },
      {
        title: "Compliance",
        description: "We adhere to global privacy regulations including GDPR, CCPA, and other data protection laws."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Privacy Policy FAQ",
  faq_description: "Common questions about our privacy practices",
  faqs: [
    {
      question: "What personal information does Muxxus collect?",
      answer: "We collect information necessary to provide our services, including contact details, business information, transaction data, and usage analytics. We never collect more information than necessary for our legitimate business purposes."
    },
    {
      question: "How does Muxxus protect my personal information?",
      answer: "We use industry-standard encryption, secure data centers, access controls, and regular security audits to protect your information. All data is encrypted in transit and at rest."
    },
    {
      question: "Can I control how my data is used?",
      answer: "Yes, you have full control over your personal information. You can access, update, delete, or restrict the use of your data through your account settings or by contacting our privacy team."
    },
    {
      question: "Does Muxxus share my data with third parties?",
      answer: "We only share your data with third parties when necessary to provide our services, comply with legal obligations, or with your explicit consent. We never sell your personal information."
    }
  ]
};

// Composant principal de la page
export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Privacy Policy"
        description="We are committed to protecting your privacy and personal information with industry-leading security measures. Learn about our transparent data practices and your rights."
        bg_video=""
        bg_image="/assets/images/privacy/img-1.jpg"
        action_btn={{ label: "Contact Privacy Team", link: "mailto:privacy@muxxus.com" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Data Protection Section */}
      <FeatureSection
        title="Data Protection & Security"
        subtitle="How we safeguard your information"
        description="We implement comprehensive data protection measures including encryption, access controls, regular audits, and compliance with global privacy regulations. Your information is protected with bank-grade security."
        buttonText="Learn More About Security"
        buttonLink="/security"
        imageSrc="/assets/images/privacy/img-2.jpg"
        imageAlt="Data Protection"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Your Rights Section */}
      <FeatureSection
        title="Your Privacy Rights"
        subtitle="Full control over your data"
        description="You have comprehensive rights over your personal information including access, correction, deletion, and portability. We make it easy to exercise these rights through our platform and support team."
        buttonText="Manage Your Data"
        buttonLink="#"
        imageSrc="/assets/images/privacy/img-3.jpg"
        imageAlt="Privacy Rights"
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