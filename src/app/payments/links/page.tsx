import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import DetailHero from "@/components/hero/DetailHero";
import MuxxusColumns from "@/components/muxxus/MuxxusColumns";
import MuxxusSteps from "@/components/muxxus/MuxxusSteps";
import MuxxusListers from "@/components/muxxus/MuxxusListers";
import MuxxusSecurity from "@/components/muxxus/MuxxusSecurity";
import { MuxxusCenteredSection } from '@/components/muxxus';
import MuxxusAiSection2 from '@/components/muxxus/MuxxusAiSection2';
import MuxxusCardSection from '@/components/muxxus/MuxxusCardSection';

// Métadonnées Next.js
export const metadata: Metadata = {
  title: "Payment Links | No-Code Payment Acceptance | Muxxus",
  description: "Accept payments instantly with Payment Links. Easily create, customize, and share Payment Links over social media, email, and more - no website or coding required.",
  keywords: ["payment links", "no-code payments", "payment acceptance", "social media payments", "email payments", "global payments"],
  openGraph: {
    title: "Payment Links | No-Code Payment Acceptance | Muxxus",
    description: "Accept payments instantly with Payment Links. Easily create, customize, and share Payment Links over social media, email, and more - no website or coding required.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Links | No-Code Payment Acceptance | Muxxus",
    description: "Accept payments instantly with Payment Links.",
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
  title: "Accept payments instantly with Payment Links",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img6.jpg",
    dark: "/assets/imgs/muxxus/image/img6.jpg"
  },
  customers: "160+ payment methods, 200+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img6.jpg",
      dark: "/assets/imgs/muxxus/image/img6.jpg"
    },
    description: "Easily create, customize, and share Payment Links over social media, email, and more - no website or coding required.",
    action_btn: {
      label: "Get started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img6.jpg",
  feature_text: "Payment Links Solutions"
};

// Données pour les steps
const stepsData = {
  title: "How it works",
  subtitle: "Collect payments in minutes, without a single line of code",
  steps: [
    {
      title: "Generate your link",
      description: "Create a secure one-time or reusable Payment Link directly in Muxxus and instantly download a corresponding QR code if needed.",
      image: "/assets/imgs/muxxus/image/img5.jpg",
      icon: "/assets/imgs/icon/link.png"
    },
    {
      title: "Share your link",
      description: "Share your Payment Link or QR code via email, social media, SMS, and more, or embed it into your invoices alongside your branding.",
      image: "/assets/imgs/muxxus/image/img6.jpg",
      icon: "/assets/imgs/icon/share.png"
    },
    {
      title: "Get paid",
      description: "Track payments and get notified by email when you receive a payment. Funds can directly settle into your Muxxus account.",
      image: "/assets/imgs/muxxus/image/img4.jpg",
      icon: "/assets/imgs/icon/money.png"
    }
  ]
};


const apiSolutionsData = {
  title: "Generate Payment Links at scale",
  description: [
    "Link the Payments Links API to your internal systems to generate a payment link every time a new order comes through, a new invoice gets sent out, or whenever you email a new customer."
  ],
  action_btn: {
    label: "Explore the docs",
    link: "#"
  }
};



// Données pour MuxxusSecurity - End-to-End Financial Operations
const financialOperationsSecurityData = {
  title: "End-to-End Financial Operations",
  subtitle: "Benefit from Muxxus's unified financial platform",
  description: "Our platform provides comprehensive financial operations to help you manage multiple currencies, pay suppliers globally, and streamline company spending with multi-currency solutions.",
  image: "/assets/imgs/muxxus/image/img3.jpg",
  items: [
    {
      icon: "/assets/imgs/icon/currency.png",
      title: "Manage multiple currencies and FX conversions",
      description: "Settle payments directly into your Muxxus multi-currency wallet and securely hold funds for future payments to suppliers. Earn a competitive return on balances as your business grows."
    },
    {
      icon: "/assets/imgs/icon/suppliers.png",
      title: "Pay suppliers around the world in local currency",
      description: "Make fast, cost-effective transfers to global suppliers in 200+ countries. 95% of funds arrive within the same day or a few hours. Pay in local currency to avoid costly FX conversion fees."
    },
    {
      icon: "/assets/imgs/icon/cards.png",
      title: "Streamline company spending with multi-currency cards",
      description: "Instantly issue multi-currency corporate cards to smartly pay for corporate purchases and expenses. Save on international fees and get a real time view of company spend in one place."
    }
  ]
};



// Données pour les sections FAQ
const faqData = {
  faq_title: "Payment Links FAQ",
  faq_description: "Common questions about our no-code Payment Links service",
  faqs: [
    {
      question: "What are Payment Links?",
      answer: "Payment Links are a fast, simple way to accept cards and other payment methods from your customers. They can be created in a few clicks and shared via email, on social, or embedded into your invoices and don't require you to have a website."
    },
    {
      question: "Why should I use Payment Links?",
      answer: "Payment Links are the fastest way to start accepting payments from your customers. Simply input your currency and the amount you would like to charge your customer and a link will be generated. Links can be personalised with your own domain, logo and name in the linked payment experience."
    },
    {
      question: "How much do Payment Links cost?",
      answer: "Payment Links fees are charged per transaction and depend on the card and payment method used. For more information visit the pricing page."
    },
    {
      question: "Can I customize Payment Links with my branding?",
      answer: "Yes, you can create a branded payment experience by using your own domain, logo, and name in the linked payment experience to elevate your brand and build trust with customers."
    }
  ]
};

// Données pour l'optimisation des paiements
const paymentOptimizationData = {
  title: "Payment Optimisation",
  subtitle: "Attract new customers, locally and globally",
  description: "Optimize your payment processes to increase conversions and reduce fraud while expanding your global reach.",
  methods: [
    {
      title: "Convert more customers worldwide",
      description: "Enable customers to pay through 160+ payment methods, including popular local options. Save with like-for-like settlement.",
      icon: "/assets/imgs/icon/global.png",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Boost conversions with always-on optimisation",
      description: "Leverage our machine-learning powered engine that constantly works in the background to improve payment success rates.",
      icon: "/assets/imgs/icon/optimization.png",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "Safeguard against fraud with 3DS",
      description: "Customise your risk appetite, set custom rules, build alerts lists, and have the option to do manual reviews when needed.",
      icon: "/assets/imgs/icon/fraud.png",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};

// Données pour les méthodes d'intégration
const integrationMethodsData = {
  title: "INTEGRATION METHODS",
  subtitle: "More options to accept payments",
  description: "Choose the integration that best suits your needs. In addition to Payment Links, you can explore other no-code, low-code, and full API integration paths.",
  methods: [
    {
      title: "Payment Plugins",
      description: "Access no-code plug-and-play integrations with popular platforms like Shopify, WooCommerce, Magento, and more.",
      icon: "/assets/imgs/icon/plugins.png",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Checkout",
      description: "Embed a low-code payment form into your website or redirect customers to a Muxxus-hosted page.",
      icon: "/assets/imgs/icon/checkout.png",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "Subscriptions",
      description: "Accept recurring customer payments across various billing schedules with a built-in tool to manage subscription logic.",
      icon: "/assets/imgs/icon/subscriptions.png",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};



// Données pour MuxxusColumns
const columnsData = [
  {
    icon: "🎨",
    title: "Create a branded payment experience",
    description: "Elevate your brand and build trust with customers by using your own domain, logo, and name in the linked payment experience."
  },
  {
    icon: "🔗",
    title: "Generate one-time or reusable links",
    description: "Generate a secure link that's valid for a single payment or make it reusable to share it with multiple customers."
  },
  {
    icon: "💰",
    title: "Save on costly payment processing and FX fees",
    description: "Enjoy competitive processing fees on transactions and avoid forced FX fees by settling in the same currency your customers pay in."
  },
  {
    icon: "📄",
    title: "Embed links within your invoices",
    description: "Create Payment Links that can be directly embedded into invoices created by your accounting software."
  }
];

const centeredSectionData = {
  title: "RESOURCES",
  subtitle: "Get started with Payment Links today",
  description: "Access our guide to learn more about using Muxxus Payment Links to expand your customer base and grow your revenue.",
  image: "/assets/imgs/muxxus/image/img3.jpg",
  buttonText: "Read more",
  buttonLink: "#"
};

// Données pour MuxxusCardSection
const cardSectionData = {
  title: "INTEGRATION METHODS",
  subtitle: "More options to accept payments",
  description: "Choose the integration that best suits your needs. In addition to Payment Links, you can explore other no-code, low-code, and full API integration paths.",
  cards: [
    {
      title: "Payment Plugins",
      description: "Access no-code plug-and-play integrations with popular platforms like Shopify, WooCommerce, Magento, and more.",
      image: "/assets/imgs/icon/plugins.png",
      url: "/payments/plugins"
    },
    {
      title: "Checkout",
      description: "Embed a low-code payment form into your website or redirect customers to a Muxxus-hosted page.",
      image: "/assets/imgs/icon/checkout.png",
      url: "/payments/checkout"
    },
    {
      title: "Subscriptions",
      description: "Accept recurring customer payments across various billing schedules with a built-in tool to manage subscription logic.",
      image: "/assets/imgs/icon/subscriptions.png",
      url: "/payments/subscriptions"
    }
  ]
};

// Composant principal de la page
export default function PaymentLinksPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />

      <MuxxusColumns data={columnsData} />

      <MuxxusSteps {...stepsData} />

      <MuxxusSecurity {...financialOperationsSecurityData} />

      <MuxxusListers {...paymentOptimizationData} />

      <MuxxusListers {...integrationMethodsData} />

      <MuxxusCenteredSection {...centeredSectionData} />


      {/* AI Section */}
      <MuxxusAiSection2 {...apiSolutionsData} backgroundColor="bg-gray-50" />
      <MuxxusCardSection {...cardSectionData} />

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
