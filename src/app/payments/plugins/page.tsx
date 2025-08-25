
import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import FeatureSection from "@/components/muxxus/FeatureSection";
import SectionDivider from "@/components/ui/SectionDivider";
import DetailHero from "@/components/hero/DetailHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import SupportedCountriesSection from "@/components/muxxus/SupportedCountriesSection";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";
import MuxxusColumns from "@/components/muxxus/MuxxusColumns";
import MuxxusSteps from "@/components/muxxus/MuxxusSteps";
import MuxxusListers from "@/components/muxxus/MuxxusListers";
import MuxxusSecurity from "@/components/muxxus/MuxxusSecurity";
import { MuxxusAiSection } from '@/components/muxxus';

// Configuration des styles uniformes
const pageStyles = {
  colors: {
    primary: 'bg-primary text-white',
    secondary: 'bg-background-3 text-text',
    accent: 'bg-gray-900 text-white',
    light: 'bg-background text-text',
    dark: 'bg-gray-900 text-white',
    alternate: 'bg-background-3 text-text'
  },
  spacing: {
    section: 'py-20',
    large: 'py-24',
    small: 'py-16'
  },
  typography: {
    heading: 'font-semibold text-text',
    body: 'text-text-3 font-primary',
    accent: 'text-primary font-medium'
  }
};

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

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Payment Plugin Integration",
    description: [
      "Our platform uses artificial intelligence to optimize your eCommerce payment operations, offering seamless integration and real-time payment processing.",
      "AI algorithms analyze payment patterns to provide you with the best checkout experience and optimal conversion rates."
    ],
    action_btn: {
      label: "Discover Our AI Payment Solutions",
      link: "#"
    },
    shape_img: "/assets/imgs/shape/img-s-29.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    }
  },
  
  muxxusSection2: {
    title: "Payment Plugins Made Simple",
    description: [
      "Experience seamless eCommerce integration with our innovative platform that connects you to global payment markets.",
      "From Shopify to WooCommerce, we provide everything you need to succeed in online payments."
    ],
    leftImage: "/assets/imgs/muxxus/image/img2.jpg",
    items: [
      {
        icon: "🛒",
        title: "Platform Integration",
        description: "Connect to Shopify, WooCommerce, Magento and more with no coding required."
      },
      {
        icon: "⚡",
        title: "Quick Setup",
        description: "Get up and running in just minutes with our plug-and-play integration."
      },
      {
        icon: "🌍",
        title: "Global Payments",
        description: "Accept 160+ payment methods in 200+ countries worldwide."
      },
      {
        icon: "🔒",
        title: "Secure Processing",
        description: "Enterprise-level security with PCI DSS compliance and fraud protection."
      }
    ],
    action_btn: {
      label: "Start Accepting Payments",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Boost your global eCommerce sales",
    description: [
      "Easily connect Muxxus Payments to online stores built on popular platforms like Shopify, WooCommerce, Magento, and more - no coding required.",
      "Link your Muxxus Payments account to your eCommerce platform for a seamless no-code plug-and-play integration."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "🚀",
        title: "Get up and running in just minutes",
        description: "Link your Muxxus Payments account to your eCommerce platform for a seamless no-code plug-and-play integration."
      },
      {
        icon: "💱",
        title: "Boost conversions with locally-optimised flow",
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
    ]
  },
  
  supportedCountries: {
    title: "Access our global payment method network",
    description: "Muxxus offers you a wide array of local and global payment options to make sure you get the fastest and most cost-effective solution.",
    countries: [
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Apple Pay', 'Google Pay', 'BPAY', 'Real-time processing']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local payments', 'Real-time FX', 'Low fees']
      },
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['ACH payments', 'Credit cards', 'Real-time rates']
      },
      {
        name: 'New Zealand',
        currency: 'NZD',
        currencyName: 'New Zealand Dollar',
        exchangeRate: '1 EUR = 1.78 NZD',
        bankCode: 'NZ001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local payments', 'Real-time rates', 'Low spreads']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XX-XX-XX-XXXX-XXXX-XX',
        features: ['BACS payments', 'CHAPS payments', 'Faster payments']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['FAST payments', 'Real-time FX', 'Low fees']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['SEPA payments', 'Real-time rates', 'Secure processing']
      },
      {
        name: 'Brazil',
        currency: 'BRL',
        currencyName: 'Brazilian Real',
        exchangeRate: '1 EUR = 5.35 BRL',
        bankCode: 'BR001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['PIX payments', 'Real-time FX', 'Local banking']
      }
    ],
    accountExample: {
      title: "Payment Processing Account",
      description: "Access global payment markets with real-time processing and instant settlement capabilities.",
      capabilities: [
        "Process 24/7",
        "Real-time rates",
        "Instant settlement",
        "No hidden fees"
      ],
      depositMethods: {
        title: "Multiple payment methods",
        description: "Credit cards, digital wallets, and bank transfers"
      }
    }
  },
  
  testimonials: {
    title: "What Our Payment Plugin Customers Say",
    description: "Discover how our customers use our payment plugins to boost their eCommerce sales and optimize their checkout experience",
    testimonials: [
      {
        quote: "Another feature we like about Muxxus is being able to manage several different websites as one financial group. We have five different websites for Lux Skin that serve multiple geographic areas, so being able to connect them all in one group and aggregate the funds into one account at the click of a button, has saved us so much time.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Jack Grace",
        designation: "Founder, Lux Skin",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Unlike other off-the-shelf payment service providers, Muxxus's technical solutions are developed in-house, which is more comprehensive, as the developers can investigate and fix any problems directly, and quickly.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Anthony Yau",
        designation: "Co-founder, Two More Glasses",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "With Muxxus, we were able to start accepting local payments quickly. Because the user experience is intuitive and the checkout process faster, we've actually had a 50% increase in shoppers using local payment methods.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Rebekah LeBrun",
        designation: "Business Development Director, Slowood",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
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
  steps: [
    {
      title: "Express checkout via Apple Pay and Google Pay",
      description: "Offer express checkout with Apple Pay and Google Pay so that your customers can make their purchases with a single tap.",
      image: "/assets/imgs/muxxus/image/img6.jpg",
      icon: "/assets/imgs/icon/apple-pay.png"
    },
    {
      title: "Local payment methods and currencies",
      description: "Collect payments through 160+ payment methods worldwide and automatically display pricing in local currency.",
      image: "/assets/imgs/muxxus/image/img6.jpg",
      icon: "/assets/imgs/icon/globe.png"
    },
    {
      title: "More flexibility for your customers",
      description: "Seamlessly add new payment methods via the Muxxus app, including cards, wallets, bank transfers, and buy now pay later options.",
      image: "/assets/imgs/muxxus/image/img6.jpg",
      icon: "/assets/imgs/icon/flexibility.png"
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
  }
};

// Données pour End-to-End Financial Operations
const financialOperationsData = {
  title: "End-to-End Financial Operations",
  subtitle: "Benefit from Airwallex's unified financial platform",
  steps: [
    {
      title: "Manage multiple currencies and FX conversions",
      description: "Settle payments directly into your Airwallex multi-currency wallet and securely hold funds for future payments to suppliers. Earn a competitive return on balances as your business grows.",
      image: "/assets/imgs/muxxus/image/img3.jpg",
      icon: "/assets/imgs/icon/currency.png"
    },
    {
      title: "Pay suppliers around the world in local currency",
      description: "Make fast, cost-effective transfers to global suppliers in 200+ countries. 95% of funds arrive within the same day or a few hours. Pay in local currency to avoid costly FX conversion fees.",
      image: "/assets/imgs/muxxus/image/img3.jpg",
      icon: "/assets/imgs/icon/suppliers.png"
    },
    {
      title: "Streamline spending with multi-currency cards",
      description: "Instantly issue multi-currency corporate cards to smartly pay for corporate purchases and expenses. Save on international fees and get a real time view of company spend in one place.",
      image: "/assets/imgs/muxxus/image/img3.jpg",
      icon: "/assets/imgs/icon/cards.png"
    }
  ]
};

// Données pour MuxxusSecurity
const securityData = {
  title: "Fraud Prevention",
  subtitle: "Safeguard your global revenue",
  description: "Airwallex's fraud engine is fully integrated into our Payments platform to help you reduce chargebacks and stop fraud before it even occurs. It leverages our own models combined with external data sources to discern fraudulent transactions from legitimate ones.",
  image: "/assets/imgs/muxxus/image/img4.jpg",
  items: [
    {
      icon: "/assets/imgs/icon/3ds.png",
      title: "Smart 3DS optimisation",
      description: "Maximise acceptance while staying compliant with local regulations. Our 3DS engine picks the best strategy based on transaction risk, applicable regulatory exemptions, and policies."
    },
    {
      icon: "/assets/imgs/icon/ai.png",
      title: "AI-powered fraud engine",
      description: "Our fraud engine uses AI trained on millions of transactions to detect and prevent fraud and is designed to help you achieve higher payment success rates and lower fraud rates."
    },
    {
      icon: "/assets/imgs/icon/security.png",
      title: "Highest security standards",
      description: "Airwallex meets the highest international security standards including PCI DSS, SOC1, and SOC2 compliance, in addition to local regulatory requirements."
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

// Composant principal de la page
export default function PaymentPluginsPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />

      <MuxxusColumns />

      <MuxxusSteps {...stepsData} />
      <MuxxusListers {...financialOperationsData} />

      <MuxxusSecurity {...securityData} />

      <MuxxusListers {...listersData} />

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
