
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
import { MuxxusAiSection } from '@/components/muxxus';
import MuxxusStepperRecord from '@/components/muxxus/MuxxusStepperRecord';

// Métadonnées Next.js
export const metadata: Metadata = {
  title: "Payment Plugins | eCommerce Integration | Muxxus",
  description: "Boost your global eCommerce sales with our payment plugins. Easily connect to Shopify, WooCommerce, Magento and more - no coding required.",
  keywords: ["payment plugins", "ecommerce integration", "shopify", "woocommerce", "magento", "payment methods", "global payments"],
  openGraph: {
    title: "Payment Plugins | eCommerce Integration | Muxxus",
    description: "Boost your global eCommerce sales with our payment plugins. Easily connect to Shopify, WooCommerce, Magento and more - no coding required.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Plugins | eCommerce Integration | Muxxus",
    description: "Boost your global eCommerce sales with our payment plugins.",
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
  title: "Boost your global eCommerce sales",
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
    description: "Easily connect Muxxus Payments to online stores built on popular platforms like Shopify, WooCommerce, Magento, and more - no coding required.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img6.jpg",
  feature_text: "Payment Plugin Solutions"
};

// Données pour les steps
const stepsData = {
  title: "How it works",
  subtitle: "Follow a few simple steps to get started with Muxxus Payment Plugins",
  steps: [
    {
      title: "Download the plugin",
      description: "After verifying your business, download the Muxxus Payments app for your preferred plugin and connect to your Muxxus account.",
      image: "/assets/imgs/muxxus/image/img5.jpg",
      icon: "/assets/imgs/icon/download.png"
    },
    {
      title: "Select payment methods",
      description: "Select the card network and payment methods you would like to display during checkout.",
      image: "/assets/imgs/muxxus/image/img6.jpg",
      icon: "/assets/imgs/icon/payment.png"
    },
    {
      title: "Start getting paid",
      description: "Once live, you'll be able to track all payments within the Muxxus app and start accepting global payments.",
      image: "/assets/imgs/muxxus/image/img4.jpg",
      icon: "/assets/imgs/icon/money.png"
    }
  ]
};

// Données pour MuxxusListers
const listersData = {
  title: "Payment Methods",
  subtitle: "Improve checkout rates with a locally-optimised experience",
  description: "Enhance your checkout experience with modern payment methods and local optimization to increase conversion rates.",
  image: "/assets/imgs/muxxus/image/img6.jpg",
  methods: [
    {
      title: "Express checkout via Apple Pay and Google Pay",
      description: "Offer express checkout with Apple Pay and Google Pay so that your customers can make their purchases with a single tap.",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Local payment methods and currencies",
      description: "Collect payments through 160+ payment methods worldwide and automatically display pricing in local currency.",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "More flexibility for your customers",
      description: "Seamlessly add new payment methods via the Muxxus app, including cards, wallets, bank transfers, and buy now pay later options.",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};
const apiSolutionsData = {
  title: "Offer a superior global payment experience",
  description: [
    "Leverage our Payments APIs to build a checkout flow designed to convert more customers locally and globally. Choose the integration path that best suits your needs, including hosted payment pages, pre-built UI components, and mobile SDKs. Lock in FX rates for up to 72 hours when you price in local currency to safeguard against FX fluctuations."
  ],
  action_btn: {
    label: "Explore doc API",
    link: "#"
  },
  shape_img: "",
  small_shape: {
    light: "/assets/imgs/shape/img-s-30.png",
    dark: "/assets/imgs/shape/img-s-30-light.png"
  }
};

// Données pour End-to-End Financial Operations
const financialOperationsData = {
  title: "End-to-End Financial Operations",
  subtitle: "Benefit from Muxxus's unified financial platform",
  description: "Streamline your financial operations with our comprehensive platform that handles multiple currencies, global payments, and corporate spending.",
  image: "/assets/imgs/muxxus/image/img4.jpg",
  methods: [
    {
      title: "Manage multiple currencies and FX conversions",
      description: "Settle payments directly into your Muxxus multi-currency wallet and securely hold funds for future payments to suppliers. Earn a competitive return on balances as your business grows.",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Pay suppliers around the world in local currency",
      description: "Make fast, cost-effective transfers to global suppliers in 200+ countries. 95% of funds arrive within the same day or a few hours. Pay in local currency to avoid costly FX conversion fees.",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "Streamline spending with multi-currency cards",
      description: "Instantly issue multi-currency corporate cards to smartly pay for corporate purchases and expenses. Save on international fees and get a real time view of company spend in one place.",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};

// Données pour MuxxusSecurity
const securityData = {
  title: "Fraud Prevention",
  subtitle: "Safeguard your global revenue",
  description: "Muxxus's fraud engine is fully integrated into our Payments platform to help you reduce chargebacks and stop fraud before it even occurs. It leverages our own models combined with external data sources to discern fraudulent transactions from legitimate ones.",
  image: "/assets/imgs/muxxus/image/img4.jpg",
  methods: [
    {
      title: "Smart 3DS optimisation",
      description: "Maximise acceptance while staying compliant with local regulations. Our 3DS engine picks the best strategy based on transaction risk, applicable regulatory exemptions, and policies.",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "AI-powered fraud engine",
      description: "Our fraud engine uses AI trained on millions of transactions to detect and prevent fraud and is designed to help you achieve higher payment success rates and lower fraud rates.",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "Highest security standards",
      description: "Muxxus meets the highest international security standards including PCI DSS, SOC1, and SOC2 compliance, in addition to local regulatory requirements.",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Payment Plugins FAQ",
  faq_description: "Common questions about our eCommerce payment plugin integration services",
  faqs: [
    {
      question: "What are payment plugins?",
      answer: "Payment plugins are integrations that connect your eCommerce platform to payment processors, allowing you to accept online payments from customers. With Muxxus, you can easily connect to Shopify, WooCommerce, Magento and more - no coding required."
    },
    {
      question: "How quickly can I get started with payment plugins?",
      answer: "With Muxxus, you can get up and running in just minutes. After verifying your business, download the Muxxus Payments app for your preferred plugin and connect to your Muxxus account. Test your configuration before going live, and once live, you'll be able to track all payments within the Muxxus app."
    },
    {
      question: "How many payment methods and countries do you support?",
      answer: "We support 160+ payment methods in 200+ countries worldwide. Our global network ensures you get the fastest and most cost-effective payment options for your specific needs, with local payment methods and currencies for better conversion rates."
    },
    {
      question: "What are the fees for using payment plugins?",
      answer: "Our fees are transparent and competitive. You'll see the exact cost before confirming any payment. We offer bank-beating rates no matter the transaction size and avoid hidden transaction fees. Plus, you can settle funds in the same currency your customers pay in, avoiding forced FX conversion fees."
    }
  ]
};

// Données pour MuxxusColumns
const columnsData = [
  {
    icon: "🚀",
    title: "Get up and running in just minutes",
    description: "Link your Muxxus Payments account to your eCommerce platform for a seamless no-code plug-and-play integration."
  },
  {
    icon: "💱",
    title: "Boost conversions with a locally-optimised flow",
    description: "Use built-in currency switching to localise your checkout experience and keep shoppers on your storefront."
  },
  {
    icon: "💳",
    title: "Access a wide range of payment methods",
    description: "Accept 160+ global and local payment methods including cards, Apple Pay, Google Pay, Klarna, Afterpay, and more."
  },
  {
    icon: "💰",
    title: "Reduce costly forced FX conversion fees",
    description: "Settle funds in the same currency your customers pay in, avoiding forced FX conversion fees that eat into your margins."
  }
];

// Composant principal de la page
export default function PaymentPluginsPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />

      <MuxxusColumns data={columnsData} />

      <MuxxusSteps {...stepsData} />
      {/* <MuxxusListers {...financialOperationsData} /> */}
      <MuxxusStepperRecord {...financialOperationsData} />

      <MuxxusStepperRecord {...securityData} />

      <MuxxusStepperRecord {...listersData} />

      <MuxxusAiSection {...apiSolutionsData} />

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
