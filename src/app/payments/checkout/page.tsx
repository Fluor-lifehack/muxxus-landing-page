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
  title: "Checkout | Low-Code Payment Forms | Muxxus",
  description: "Embed low-code payment forms into your website or redirect customers to Muxxus-hosted checkout pages. Optimize conversions with our conversion-focused payment solution.",
  keywords: ["checkout", "payment forms", "low-code payments", "payment integration", "conversion optimization", "global payments"],
  openGraph: {
    title: "Checkout | Low-Code Payment Forms | Muxxus",
    description: "Embed low-code payment forms into your website or redirect customers to Muxxus-hosted checkout pages.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout | Low-Code Payment Forms | Muxxus",
    description: "Embed low-code payment forms into your website.",
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
    title: "Low-Code Checkout Solutions",
    description: [
      "Embed payment forms into your website or redirect customers to Muxxus-hosted checkout pages.",
      "Boost conversion potential with multiple payment methods and currencies while saving on processing fees."
    ],
    leftImage: "/assets/imgs/muxxus/image/img1.jpg",
    items: [
      {
        title: "Drop-in Element",
        description: "Easily brand and embed a frictionless checkout UI component covering multiple payment methods."
      },
      {
        title: "Hosted Payments Page",
        description: "Save on development resources by redirecting customers to an optimized payment page."
      },
      {
        title: "Custom API Integration",
        description: "Build fully customized checkout experiences with our comprehensive APIs and SDKs."
      },
      {
        title: "High Conversion Rates",
        description: "Machine learning optimization and smart 3DS engine for maximum success rates."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Checkout FAQ",
  faq_description: "Common questions about our checkout solutions",
  faqs: [
    {
      question: "How quickly can I integrate the checkout solution?",
      answer: "Our drop-in element can be integrated in minutes, while hosted pages require no integration at all. Custom API integration typically takes 1-2 weeks depending on complexity."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support 160+ payment methods including credit cards, digital wallets, bank transfers, and local payment methods across 180+ countries."
    },
    {
      question: "How do you ensure high conversion rates?",
      answer: "Our checkout uses machine learning optimization, smart 3DS engine, and A/B testing to maximize conversion rates while maintaining security."
    }
  ]
};

// Composant principal de la page
export default function CheckoutPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Checkout"
        description="Higher conversions, lower fees with a low-code checkout solution. Embed payment forms into your website with multiple payment methods and currencies."
        bg_video=""
        bg_image="/assets/imgs/muxxus/image/img1.jpg"
        action_btn={{ label: "Get Started", link: "/contact" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Features Section */}
      <FeatureSection
        title="Global Payment Processing"
        subtitle="Accept payments from anywhere in the world"
        description="Process payments in 50+ currencies with advanced fraud protection, real-time settlement, and PCI DSS compliance. Our global infrastructure ensures fast and secure transactions."
        buttonText="Learn More"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img2.jpg"
        imageAlt="Global Payment Processing"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Security Section */}
      <FeatureSection
        title="Advanced Security & Compliance"
        subtitle="Bank-grade security for your payments"
        description="PCI DSS, SOC1, and SOC2 compliance with advanced fraud protection. Our security measures protect both you and your customers with end-to-end encryption and real-time monitoring."
        buttonText="View Security Details"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img3.jpg"
        imageAlt="Security & Compliance"
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