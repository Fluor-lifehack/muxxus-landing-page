import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import SolutionHero from "../../components/hero/SolutionHero";
import { Separator } from "@/components/ui/separator";


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

// Données pour les différents secteurs
const heroDataEcomerce = {
  title: "E-commerce Global Banking",
  description: "Streamline your online business with multi-currency accounts designed for e-commerce platforms.",
  bg_video: "/assets/videos/ecommerce-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }

};

const heroDataTravel = {
  title: "Travel & Tourism Banking",
  description: "Manage international payments and currency exchanges for your travel business with ease.",
  bg_video: "/assets/videos/travel-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }
};

const heroDataSoftware = {
  title: "Software & Tech Banking",
  description: "Scale your software business globally with our AI-powered banking solutions.",
  bg_video: "/assets/videos/software-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }
};

const heroDataWholesale = {
  title: "Wholesale & Distribution",
  description: "Optimize your wholesale operations with our comprehensive global banking platform.",
  bg_video: "/assets/videos/wholesale-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }
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
      <SolutionHero {...heroDataEcomerce} />
      <Separator />
      <SolutionHero {...heroDataTravel} />
      <Separator />
      <SolutionHero {...heroDataSoftware} />
      <Separator />
      <SolutionHero {...heroDataWholesale} />
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
