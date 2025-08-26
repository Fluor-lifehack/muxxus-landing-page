import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import DetailHero from "@/components/hero/DetailHero";
import { MuxxusCenteredSection } from '@/components/muxxus';
import MuxxusCard from '@/components/muxxus/MuxxusCard';
import MuxxusAiSection2 from '@/components/muxxus/MuxxusAiSection2';
import MuxxusCardSection from '@/components/muxxus/MuxxusCardSection';
import MuxxusCTA from '@/components/muxxus/MuxxusCTA';
import MuxxusStepperRecord from '@/components/muxxus/MuxxusStepperRecord';
import MuxxusScrollImageDemo from '@/components/muxxus/MuxxusScrollImageDemo';
import MuxxusScrollImageTest from '@/components/muxxus/MuxxusScrollImageTest';
import MuxxusColumns from '@/components/muxxus/MuxxusColumns';

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

// Données pour le composant DetailHero
const heroData = {
  title: "Higher conversions, lower fees with a low-code checkout solution",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img5.jpg",
    dark: "/assets/imgs/muxxus/image/img5.jpg"
  },
  customers: "160+ payment methods, 180+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img5.jpg",
      dark: "/assets/imgs/muxxus/image/img5.jpg"
    },
    description: "Embed Muxxus's Checkout solution into your website, boosting conversion potential with multiple payment methods and currencies - while saving on processing fees.",
    action_btn: {
      label: "Get started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img5.jpg",
  feature_text: "Checkout Solutions"
};

// Données pour les steps
const stepsData = {
  title: "Accept payments quickly with our low-code solutions",
  subtitle: "Add new payment methods without code changes, maintain the look and feel of your website, and avoid hours spent on PCI compliance.",
  steps: [
    {
      title: "Drop-in Element",
      description: "Easily brand and embed a frictionless checkout UI component covering multiple payment methods. See product docs",
      image: "/assets/imgs/muxxus/image/img5.jpg",
      icon: "/assets/imgs/icon/drop-in.png"
    },
    {
      title: "Hosted Payments Page",
      description: "Save on development resources by redirecting customers to an Airwallex-hosted payment page. See product docs",
      image: "/assets/imgs/muxxus/image/img6.jpg",
      icon: "/assets/imgs/icon/hosted.png"
    }
  ]
};

// Données pour MuxxusColumns
const columnsData = [
  {
    icon: "/assets/imgs/icon/security.png",
    title: "Smart 3DS optimisation",
    description: "Maximise global acceptance while staying compliant with local regulations. Our 3DS engine automatically picks the best strategy based on transaction risk, applicable regulatory exemptions, and policies."
  },
  {
    icon: "/assets/imgs/icon/ai.png",
    title: "AI-powered fraud engine",
    description: "Our fraud engine uses AI trained on millions of transactions to detect and prevent fraud. This leads to higher payment success rates and lower fraud rates, protecting your business's revenue."
  },
  {
    icon: "/assets/imgs/icon/compliance.png",
    title: "Highest security standards",
    description: "Airwallex meets the highest international security standards including PCI DSS, SOC1, and SOC2 compliance, in addition to our local regulatory requirements."
  }
];

// Données pour l'optimisation des paiements
const paymentOptimizationData = {
  title: "Global payments",
  subtitle: "Grow into new markets and convert more customers",
  description: "Expand your business globally with our comprehensive payment solutions.",
  image: "/assets/imgs/muxxus/image/img5.jpg",
  methods: [
    {
      title: "Global and local payment methods",
      description: "Collect payments from customers in 180+ countries through 160+ payment methods, including popular local options.",
      color: "bg-blue-100",
      link: "#",
      icon: "/assets/imgs/icon/global.png"
    },
    {
      title: "Automatic currency conversion",
      description: "Airwallex will use the location you specified or the one we detected to display the payment priced in your customer's local currency with the corresponding local payment methods.",
      color: "bg-green-100",
      link: "#",
      icon: "/assets/imgs/icon/currency.png"
    },
    {
      title: "Multi-currency transfers",
      description: "Use the funds you settle into your multi-currency wallet to pay out to suppliers using Airwallex's global payout network or corporate cards.",
      color: "bg-purple-100",
      link: "#",
      icon: "/assets/imgs/icon/transfer.png"
    }
  ]
};

// Données pour les méthodes d'intégration
const integrationMethodsData = {
  title: "INTEGRATION METHODS",
  subtitle: "More options to accept payments",
  description: "Choose the integration that best suits your needs. In addition to Muxxus Checkout, you can explore other no-code, low-code, and full API integration paths.",
  image: "/assets/imgs/muxxus/image/img6.jpg",
  methods: [
    {
      title: "Payment Plugins",
      description: "Access plug-and-play integrations with Shopify, WooCommerce, Magento, and more.",
      color: "bg-blue-100",
      link: "/payments/plugins"
    },
    {
      title: "Checkout",
      description: "Embed a low-code payment form into your website or redirect customers to a Muxxus-hosted page.",
      color: "bg-green-100",
      link: "/payments/checkout"
    },
    {
      title: "Subscriptions",
      description: "Accept recurring customer payments across various billing schedules with a built-in tool to manage subscription logic.",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};

// Données pour MuxxusAiSection2
const apiSolutionsData = {
  title: "Build custom checkout experiences",
  description: [
    "Leverage our Checkout APIs to create fully customized payment flows that integrate seamlessly with your existing systems and workflows."
  ],
  action_btn: {
    label: "Explore the docs",
    link: "#"
  }
};

// Données pour MuxxusCardSection
const cardSectionData = {
  title: "Integration Methods",
  subtitle: "More options to accept payments",
  description: "Choose the integration that best suits your needs. In addition to Airwallex Checkout, you can explore other no-code, low-code, and full API integration paths.",
  cards: [
    {
      title: "Payment Plugins",
      description: "Access plug-and-play integrations with Shopify, WooCommerce, Magento, and more.",
      image: "/assets/imgs/icon/plugins.png",
      url: "/payments/plugins"
    },
    {
      title: "Payment Links",
      description: "Create, customise, and share payment links in a few clicks over social media, email, and more.",
      image: "/assets/imgs/icon/links.png",
      url: "/payments/links"
    },
    {
      title: "Embedded Elements",
      description: "Use prebuilt UI components, choosing how each payment method is presented.",
      image: "/assets/imgs/icon/elements.png",
      url: "#"
    },
    {
      title: "API and Mobile SDK",
      description: "Fully customise your checkout with our API and accept payments in your iOS or Android app.",
      image: "/assets/imgs/icon/api.png",
      url: "#"
    },
    {
      title: "Subscriptions",
      description: "Accept recurring customer payments with a built-in tool to manage subscription logic.",
      image: "/assets/imgs/icon/subscriptions.png",
      url: "#"
    },
    {
      title: "Invoices",
      description: "Collect payments on invoices created by your accounting software.",
      image: "/assets/imgs/icon/invoices.png",
      url: "#"
    }
  ]
};

// Données pour la section Conversion Optimisation
const conversionOptimizationData = {
  title: "Conversion Optimisation",
  subtitle: "Boost conversion and acceptance rates across markets with out-of-the-box optimisations",
  description: "Our checkout solution is designed to convert more customers with intelligent optimization and seamless user experience.",
  image: "/assets/imgs/muxxus/image/img4.jpg",
  methods: [
    {
      title: "Make it easier for customers to pay",
      description: "Localise and tailor your checkout experience to individual customers with automatic local payment methods, local language, and local currencies.",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Strengthen trust with customers",
      description: "Enhance customer confidence by displaying your brand and verifying card details with PCI DSS, SOC1, and SOC2 compliance.",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "Reduce failed payments",
      description: "Improve acceptance rates with machine learning optimisation, smart 3DS engine, and descriptive error messages.",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};

// Données pour la section Global Payments
const globalPaymentsData = {
  title: "Global payments",
  subtitle: "Grow into new markets and convert more customers",
  description: "Expand your business globally with our comprehensive payment solutions.",
  image: "/assets/imgs/muxxus/image/img5.jpg",
  methods: [
    {
      title: "Global and local payment methods",
      description: "Collect payments from customers in 180+ countries through 160+ payment methods, including popular local options.",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Automatic currency conversion",
      description: "Muxxus will use the location you specified or the one we detected to display the payment priced in your customer's local currency with the corresponding local payment methods.",
      color: "bg-green-100",
      link: "#"
    },
    {
      title: "Multi-currency transfers",
      description: "Use the funds you settle into your multi-currency wallet to pay out to suppliers using Muxxus's global payout network or corporate cards.",
      color: "bg-purple-100",
      link: "#"
    }
  ]
};

// Données pour la section Use Cases
const useCasesData = {
  title: "Use Cases",
  subtitle: "Tailor your checkout to your business model",
  description: "Our checkout solution adapts to various business models and payment scenarios.",
  image: "/assets/imgs/muxxus/image/img6.jpg",
  methods: [
    {
      title: "One-time payments",
      description: "Accept single payments for products, services, or donations with our secure checkout.",
      color: "bg-blue-100",
      link: "#",
      icon: "/assets/imgs/icon/payment.png"
    },
    {
      title: "Saved payment details",
      description: "Saved payment details for recurring purchases",
      color: "bg-green-100",
      link: "#",
      icon: "/assets/imgs/icon/save.png"
    },
    {
      title: "Subscriptions and trials",
      description: "Subscriptions and trials",
      color: "bg-purple-100",
      link: "#",
      icon: "/assets/imgs/icon/subscription.png"
    },
    {
      title: "Platform and marketplace payments",
      description: "Platform and marketplace payments",
      color: "bg-orange-100",
      link: "#",
      icon: "/assets/imgs/icon/platform.png"
    }
  ]
};

// Données pour la section Fraud Prevention
const fraudPreventionData = {
  title: "Fraud Prevention",
  subtitle: "Safeguard your global revenue",
  description: "Airwallex's fraud engine is fully integrated into our Payments platform, and helps you stop fraud before it occurs. It leverages our own models combined with external data sources to discern fraudulent transactions from legitimate ones.",
  image: "/assets/imgs/muxxus/image/img4.jpg",
  methods: [
    {
      title: "Smart 3DS optimisation",
      description: "Maximise global acceptance while staying compliant with local regulations. Our 3DS engine automatically picks the best strategy based on transaction risk, applicable regulatory exemptions, and policies.",
      color: "bg-blue-100",
      link: "#",
      icon: "/assets/imgs/icon/security.png"
    },
    {
      title: "AI-powered fraud engine",
      description: "Our fraud engine uses AI trained on millions of transactions to detect and prevent fraud. This leads to higher payment success rates and lower fraud rates, protecting your business's revenue.",
      color: "bg-green-100",
      link: "#",
      icon: "/assets/imgs/icon/ai.png"
    },
    {
      title: "Highest security standards",
      description: "Muxxus meets the highest international security standards including PCI DSS, SOC1, and SOC2 compliance, in addition to our local regulatory requirements.",
      color: "bg-purple-100",
      link: "#",
      icon: "/assets/imgs/icon/compliance.png"
    }
  ]
};

// Données pour la section Processing Fees
const processingFeesData = {
  title: "Processing Fees",
  subtitle: "Say goodbye to unnecessary fees",
  description: "Transparent pricing with no hidden costs.",
  image: "/assets/imgs/muxxus/image/img5.jpg",
  methods: [
    {
      title: "Save on costly processing fees",
      description: "Enjoy competitive processing fees on both domestic and foreign transactions.",
      color: "bg-blue-100",
      link: "#"
    },
    {
      title: "Like-for-like settlement",
      description: "Avoid unnecessary currency conversion fees when you receive funds in the same currency that your customers pay in.",
      color: "bg-green-100",
      link: "#"
    }
  ]
};

// Données pour MuxxusCenteredSection
const centeredSectionData = {
  title: "RESOURCES",
  subtitle: "Get started with Checkout today",
  description: "Access our comprehensive guides and documentation to integrate checkout solutions and optimize your payment conversions.",
  image: "/assets/imgs/muxxus/image/img4.jpg",
  buttonText: "Read more",
  buttonLink: "#"
};

// Données pour la section CTA
const ctaData = {
  title: "Create a Muxxus account today",
  description: "Get started with our checkout solution and start accepting payments globally.",
  buttons: [
    {
      text: "Get started",
      href: "#",
      variant: 'primary' as const
    }
  ]
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Checkout FAQ",
  faq_description: "Common questions about our checkout and payment form solutions",
  faqs: [
    {
      question: "What is the difference between Drop-in Element and Hosted Payments Page?",
      answer: "Drop-in Element is a UI component you embed directly into your website, while Hosted Payments Page redirects customers to our optimized payment page. Drop-in gives you more control, Hosted saves development time."
    },
    {
      question: "How does the machine learning optimisation work?",
      answer: "Our ML engine uses ISO alterations, smart MCCs, and automatic retries to improve payment success rates. It learns from millions of transactions to optimize your checkout performance."
    },
    {
      question: "What is like-for-like settlement?",
      answer: "Like-for-like settlement means you receive funds in the same currency your customers pay in, eliminating hidden FX conversion fees and saving you money on international transactions."
    },
    {
      question: "How does the fraud prevention work?",
      answer: "Our AI-powered fraud engine analyzes transactions in real-time using our own models and external data sources to identify and prevent fraudulent transactions before they occur."
    },
    {
      question: "What compliance standards do you meet?",
      answer: "We meet the highest international security standards including PCI DSS, SOC1, and SOC2 compliance, in addition to local regulatory requirements in all markets where we operate."
    }
  ]
};

// Composant principal de la page
export default function CheckoutPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />


      {/* Steps Section avec MuxxusCard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{stepsData.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{stepsData.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {stepsData.steps.map((step, index) => (
              <MuxxusCard
                key={index}
                image={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.2}
                className="h-full"
                buttonText="Learn more"
                buttonLink="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interface Dynamique avec Images qui changent selon le scroll */}
      <MuxxusScrollImageDemo />
      
      <MuxxusStepperRecord {...paymentOptimizationData} />

      {/* Use Cases Section */}
      <MuxxusStepperRecord {...useCasesData} />

      {/* Fraud Prevention Section */}
      <MuxxusStepperRecord {...fraudPreventionData} />

      <MuxxusColumns 
        data={columnsData} 
        backgroundColor="bg-white" 
        align="center" 
        showIcons={false}

      />

      {/* Processing Fees Section */}
      <MuxxusStepperRecord {...processingFeesData} />

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