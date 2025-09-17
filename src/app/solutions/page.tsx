import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import DetailHero from "@/components/hero/DetailHero";


// Métadonnées Next.js
export const metadata: Metadata = {
  title: "Global Multi-Currency Business Accounts | Muxxus",
  description: "Open a global multi-currency account for international business payments in minutes. Support for 50+ currencies and 13+ countries with no hidden fees.",
  keywords: ["global accounts", "multi-currency", "international banking", "FX trading", "business accounts", "global payments"],
  openGraph: {
    title: "Global Multi-Currency Business Accounts | Muxxus",
    description: "Open a global multi-currency account for international business payments in minutes. Support for 50+ currencies and 13+ countries.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Multi-Currency Business Accounts | Muxxus",
    description: "Open a global multi-currency account for international business payments in minutes.",
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

// Données pour le composant DetailHero
const heroData = {
  title: "AI-Powered Global Banking",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img1.jpg",
    dark: "/assets/imgs/muxxus/image/img1.jpg"
  },
  customers: "50+ Currencies",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img1.jpg",
      dark: "/assets/imgs/muxxus/image/img1.jpg"
    },
    description: "Open a global multi-currency account for international business payments in minutes.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img1.jpg",
  feature_text: "Global Banking Solutions"
};


// Données pour les sections FAQ
const faqData = {
  faq_title: "Global Accounts FAQ",
  faq_description: "Common questions about our global multi-currency business accounts",
  faqs: [
    {
      question: "How quickly can I open a global account?",
      answer: "Global accounts can be opened within 3-5 business days with our streamlined international onboarding process."
    },
    {
      question: "What currencies are supported globally?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies."
    },
    {
      question: "Are there minimum balance requirements?",
      answer: "No minimum balance requirements for most global account types. We believe in accessible global banking with transparent pricing."
    }
  ]
};

// Composant principal de la page
export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />
      <DetailHero {...heroData} />
      <DetailHero {...heroData} />
      {/* FAQ et Footer */}
      <ServiceDetailsFaq 
        faqs={faqData.faqs} 
        faqTitle={faqData.faq_title} 
      />
      <MuxxusNewsletter />
      <MuxxusFooter />
    </>
  );
}
