import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import FeatureSection from "@/components/muxxus/FeatureSection";
import SectionDivider from "@/components/ui/SectionDivider";
import DetailHero from "@/components/hero/DetailHero";
import MuxxusAiSection from "@/components/muxxus/MuxxusAiSection";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import SupportedCountriesSection from "@/components/muxxus/SupportedCountriesSection";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";

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
  title: "FX & Transfers | Global Currency Exchange | Muxxus",
  description: "Exchange currencies at interbank rates with our FX & Transfers platform. Fast, secure, and cost-effective international money transfers for businesses.",
  keywords: ["FX trading", "currency exchange", "international transfers", "forex", "money transfers", "business FX"],
  openGraph: {
    title: "FX & Transfers | Global Currency Exchange | Muxxus",
    description: "Exchange currencies at interbank rates with our FX & Transfers platform. Fast, secure, and cost-effective international money transfers for businesses.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "FX & Transfers | Global Currency Exchange | Muxxus",
    description: "Exchange currencies at interbank rates with our FX & Transfers platform.",
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
  title: "Fast, cost-effective international money transfer services",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img6.jpg",
    dark: "/assets/imgs/muxxus/image/img6.jpg"
  },
  customers: "200+ countries and regions, 60+ currencies",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img6.jpg",
      dark: "/assets/imgs/muxxus/image/img6.jpg"
    },
    description: "Streamline sending payments abroad to suppliers and employees around the world, and access market-leading international FX rates no matter the transaction size.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img6.jpg",
  feature_text: "Global Transfer Solutions"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered FX Trading & Transfers",
    description: [
      "Our platform uses artificial intelligence to optimize your currency exchange operations, offering competitive interbank rates and real-time market analysis.",
      "AI algorithms analyze global financial markets to provide you with the best trading opportunities and optimal transfer timing."
    ],
    action_btn: {
      label: "Discover Our AI FX Solutions",
      link: "#"
    },
    shape_img: "/assets/imgs/shape/img-s-29.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    }
  },
  
  muxxusSection2: {
    title: "FX Trading Made Simple",
    description: [
      "Experience seamless currency exchange with our innovative platform that connects you to global FX markets.",
      "From real-time rates to instant transfers, we provide everything you need to succeed in international currency trading."
    ],
    leftImage: "/assets/imgs/muxxus/image/img2.jpg",
    items: [
      {
        icon: "💱",
        title: "Interbank Rates",
        description: "Access the best currency exchange rates available in the market."
      },
      {
        icon: "⚡",
        title: "Instant Transfers",
        description: "Send money globally in seconds with our real-time transfer system."
      },
      {
        icon: "🌍",
        title: "Global Coverage",
        description: "Transfer to 150+ countries with 50+ supported currencies."
      },
      {
        icon: "🔒",
        title: "Bank-Grade Security",
        description: "Enterprise-level security with end-to-end encryption and compliance."
      }
    ],
    action_btn: {
      label: "Start Trading Today",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "A secure and reliable international money provider",
    description: [
      "Pay your global suppliers and employees without the expense and hassle of the traditional banking system.",
      "Have payments received in as little as one business day with the full amount on delivery guaranteed."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "🌍",
        title: "200+ countries and regions, 60+ currencies",
        description: "Have payments received in as little as one business day with the full amount on delivery guaranteed."
      },
      {
        icon: "💱",
        title: "Access interbank exchange rates",
        description: "Enjoy access to bank-beating rates no matter the transaction size and avoid hidden transaction fees."
      },
      {
        icon: "⚡",
        title: "Work smarter, not harder",
        description: "Use batch transfers to send funds in one go to multiple recipients around the world, each with a specified amount."
      },
      {
        icon: "📊",
        title: "Simplify your bookkeeping",
        description: "Connect Muxxus to your favourite accounting software in just a few clicks to automatically reconcile transfers."
      }
    ]
  },
  
  supportedCountries: {
    title: "Access our global transfer method network",
    description: "Muxxus offers you a wide array of local and global transfer options to make sure you get the fastest and most cost-effective solution.",
    countries: [
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Bank Transfer', 'BPAY', 'Real-time rates', '24/7 trading']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time FX', 'Low fees']
      },
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['ACH transfers', 'Wire transfers', 'Real-time rates']
      },
      {
        name: 'New Zealand',
        currency: 'NZD',
        currencyName: 'New Zealand Dollar',
        exchangeRate: '1 EUR = 1.78 NZD',
        bankCode: 'NZ001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time rates', 'Low spreads']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XX-XX-XX-XXXX-XXXX-XX',
        features: ['BACS transfers', 'CHAPS payments', 'Faster payments']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['FAST transfers', 'Real-time FX', 'Low fees']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['SEPA transfers', 'Real-time rates', 'Secure trading']
      },
      {
        name: 'Brazil',
        currency: 'BRL',
        currencyName: 'Brazilian Real',
        exchangeRate: '1 EUR = 5.35 BRL',
        bankCode: 'BR001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['PIX transfers', 'Real-time FX', 'Local banking']
      }
    ],
    accountExample: {
      title: "FX Trading Account",
      description: "Access global currency markets with real-time rates and instant execution capabilities.",
      capabilities: [
        "Trade 24/7",
        "Real-time rates",
        "Instant execution",
        "No hidden fees"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, cards, and digital wallets"
      }
    }
  },
  
  testimonials: {
    title: "What Our FX Customers Say",
    description: "Discover how our customers use our FX platform to optimize their international currency operations",
    testimonials: [
      {
        quote: "Muxxus will save us $150,000 to $180,000 annually in hidden FX markups compared to traditional banking service providers. They are banking and foreign currency simplified. With Muxxus, we have one website where we can do everything it took three people to do before.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Dean Beck",
        designation: "Vice President, HJS Packaging and Distribution",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Muxxus saves us about $70,000 annually just in lower bank transfer fees. They are helping us build a stronger financial foundation for a growing global company. Muxxus's platform offers speed and transparency at a lower cost.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Hari Polavarapu",
        designation: "CEO, Taxila Stone",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "Muxxus has been a game changer for us. I cannot recommend these guys enough. The forex services are super efficient and super competitive. The customer service is not gold-plated, it's solid gold.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Murray Kester",
        designation: "CEO, Cosmetics Now – eCommerce",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "FX & Transfers FAQ",
  faq_description: "Common questions about our international money transfer services",
  faqs: [
    {
      question: "What is an international money transfer?",
      answer: "An international money transfer is a money transfer to a recipient bank outside of your domestic country. You don't need to open a business account with a bank in a foreign country to send a payment overseas. With Muxxus, you can easily make fast one-time or recurring international transfers in multiple currencies at bank-beating FX rates."
    },
    {
      question: "What is the fastest way to transfer money internationally?",
      answer: "With Muxxus, you no longer have to wait several business days for your funds to reach a foreign destination. Thanks to our proprietary local payment network, you'll be able to make one-time or recurring high-speed, cost-effective international transfers. The majority of transfers made via Muxxus arrive within the same day."
    },
    {
      question: "How many countries and currencies do you support?",
      answer: "We support 200+ countries and regions with 60+ currencies. Our global network ensures you get the fastest and most cost-effective transfer options for your specific needs, with payments received in as little as one business day."
    },
    {
      question: "What are the fees for international transfers?",
      answer: "Our fees are transparent and competitive. You'll see the exact cost before confirming any transfer. We offer bank-beating rates no matter the transaction size and avoid hidden transaction fees."
    }
  ]
};

// Composant principal de la page
export default function FXTransfersPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Customer Testimonials Section */}
      <TestimonialsSection {...componentData.testimonials} />

      {/* Supported Countries Section */}
      <SupportedCountriesSection {...componentData.supportedCountries} />

      {/* API Solutions Section */}
      <FeatureSection
        title="FX Trading APIs"
        subtitle="Integrate real-time FX trading into your applications"
        description="Developers can access our FX platform through APIs to build custom trading applications, automate currency exchanges, and integrate real-time rates into their systems."
        buttonText="View API Documentation"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="FX Trading APIs"
        badgeColor="white"
        imageFirst={false}
        className={pageStyles.colors.light}
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Multi-Currency Accounts Section */}
      <FeatureSection
        title="Multi-Currency Accounts"
        subtitle="Hold and manage multiple currencies in one place"
        description="Open accounts in different currencies to avoid conversion fees, hold funds in local currencies, and optimize your international cash management strategy."
        buttonText="Learn More"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img6.jpg"
        imageAlt="Multi-Currency Accounts"
        imageFirst={true}
        className={pageStyles.colors.light}
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

    
      {/* Section MuxxusSection2 */}
      <MuxxusSection2 {...componentData.muxxusSection2} />

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
