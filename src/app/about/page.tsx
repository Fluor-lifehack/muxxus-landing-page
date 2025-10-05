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
  title: "About Muxxus | Global Financial Infrastructure | Muxxus",
  description: "Learn about Muxxus, the global financial infrastructure platform that enables businesses to manage multi-currency accounts, payments, and FX solutions worldwide.",
  keywords: ["about muxxus", "company", "financial infrastructure", "global banking", "fintech", "company mission"],
  openGraph: {
    title: "About Muxxus | Global Financial Infrastructure | Muxxus",
    description: "Learn about Muxxus, the global financial infrastructure platform that enables businesses to manage multi-currency accounts, payments, and FX solutions worldwide.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muxxus | Global Financial Infrastructure | Muxxus",
    description: "Learn about Muxxus, the global financial infrastructure platform.",
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
    title: "Building the Future of Global Finance",
    description: [
      "Muxxus is revolutionizing how businesses manage their global finances with innovative technology and deep financial expertise.",
      "We're creating a world where every business can operate seamlessly across borders, currencies, and markets."
    ],
    leftImage: "/assets/images/about/img-1.jpg",
    items: [
      {
        title: "Global Reach",
        description: "Serving businesses in 180+ countries with local banking infrastructure and compliance."
      },
      {
        title: "Multi-Currency Solutions",
        description: "Supporting 50+ currencies with real-time exchange rates and instant conversion."
      },
      {
        title: "Enterprise Security",
        description: "Bank-grade security with PCI DSS compliance and advanced fraud protection."
      },
      {
        title: "Developer-First APIs",
        description: "Comprehensive APIs and SDKs for seamless integration into any business workflow."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "About Muxxus FAQ",
  faq_description: "Common questions about our company and mission",
  faqs: [
    {
      question: "What is Muxxus?",
      answer: "Muxxus is a global financial infrastructure platform that provides businesses with multi-currency accounts, payment processing, FX trading, and comprehensive financial APIs to operate seamlessly across borders."
    },
    {
      question: "When was Muxxus founded?",
      answer: "Muxxus was founded with the vision of democratizing global financial services, enabling businesses of all sizes to access enterprise-grade financial infrastructure."
    },
    {
      question: "Where is Muxxus headquartered?",
      answer: "Muxxus operates globally with teams across multiple continents, serving customers worldwide with 24/7 support and local compliance expertise."
    },
    {
      question: "What makes Muxxus different?",
      answer: "We combine deep financial expertise with cutting-edge technology to provide businesses with the tools they need to succeed in the global economy, backed by bank-grade security and regulatory compliance."
    }
  ]
};

// Composant principal de la page
export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="About Muxxus"
        description="Building the future of global finance. We're creating a world where every business can operate seamlessly across borders, currencies, and markets."
        bg_video=""
        bg_image="/assets/images/about/img-1.jpg"
        action_btn={{ label: "Join Our Mission", link: "/careers" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Mission Section */}
      <FeatureSection
        title="Our Mission & Vision",
        subtitle="Empowering businesses worldwide"
        description="Our mission is to democratize access to global financial services by providing businesses with the infrastructure they need to operate seamlessly across borders. We envision a world where financial barriers no longer limit business growth and innovation."
        buttonText="Learn More"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img2.jpg"
        imageAlt="Our Mission"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Values Section */}
      <FeatureSection
        title="Our Values",
        subtitle="What drives us forward"
        description="We are committed to transparency, security, and innovation. Our values guide everything we do, from building secure financial infrastructure to providing exceptional customer support and maintaining the highest standards of compliance."
        buttonText="View Our Values"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img3.jpg"
        imageAlt="Our Values"
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