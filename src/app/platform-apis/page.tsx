import React, { memo } from "react";
import AccountAbout from "@/components/muxxus/AccountAbout";
import MuxxusProductFeature from "@/components/features/muxxus/MuxxusProductFeature";
import MuxxusAiSection from "@/components/muxxus/MuxxusAiSection";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import ProductDetailHero from "@/components/hero/ProductDetailHero";
import MarketingImage from "@/components/image/MarketingImage";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
import "@/styles/design-page.css";

// Types pour une meilleure type safety

// Constantes pour éviter la recréation d'objets
const LAYOUT_CLASSES = {
  root: "beatrice-kanit root-layout",
  theme: "muxxus",
  contentWrapper: "pt-16 lg:pt-20",
} as const;

// Composants mémorisés pour éviter les re-renders inutiles
const MemoizedHeader = memo(MuxxusHeader);
const MemoizedFooter = memo(MuxxusFooter);
const MemoizedNewsletter = memo(MuxxusNewsletter);

const PlatformAPIsPage = () => {
  // Données pour le breadcrumb
  const breadcrumbData = {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Platform APIs" }
    ]
  };

  // Données pour MarketingHero
  const marketingHeroData = {
    title: "PLATFORM APIs",
    sub_title: "EMBEDDED FINANCIAL INFRASTRUCTURE",
    shape_1: {
      light: "/assets/imgs/shape/img-s-29.png",
      dark: "/assets/imgs/shape/img-s-29-light.png"
    },
    shape_2: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    },
    info: {
      customers: "190+ Countries Supported",
      client_img: {
        light: "/assets/imgs/works/img-s-9.jpg",
        dark: "/assets/imgs/works/img-s-9.jpg"
      },
      description: "Build the future of financial services with our comprehensive APIs. Embed banking, payments, and financial infrastructure directly into your platform.",
      action_btn: {
        label: "Get Started",
        link: "/contact"
      }
    }
  };

  // Données pour MarketingImage
  const marketingImageData = {
    image: "/assets/imgs/muxxus/image/img1.jpg",
    video: "/assets/imgs/hero/hero-bg.mp4"
  };

  // Données pour MuxxusAbout
  const aboutData = {
    title: "Why Choose Our Platform APIs?",
    subtitle: "ADVANTAGES",
    description: "Our platform APIs provide the infrastructure needed to build embedded financial services with confidence. Whether you're a fintech startup or an enterprise platform, our APIs scale with your business needs.",
    image: {
      src: "/assets/imgs/muxxus/about/img.jpg",
      alt: "Platform APIs Infrastructure"
    },
    stats: {
      number: "50+",
      label: "Currencies",
      description: "Global Coverage"
    },
    features: [
      "Multi-currency account management across 50+ currencies",
      "Global compliance with international financial standards",
      "Local financial infrastructure in 190+ countries",
      "Real-time API access with 99.9% uptime SLA",
      "Comprehensive SDKs and documentation",
      "Dedicated support for enterprise clients"
    ]
  };

  // Données pour MarketingFeature
  const featureData = {
    title: "Key Features of Platform APIs",
    subtitle: "FEATURES",
    description: "Discover the powerful features that make our platform APIs the ideal choice for building embedded financial services",
    image: "/assets/imgs/gallery/img-s-83.jpg",
    sub_icon: "/assets/imgs/shape/img-s-78.png",
    features: [
      {
        icon: "/assets/imgs/shape/img-s-79.png",
        title: "Developer First",
        description: "Clean, intuitive APIs with comprehensive documentation and SDKs"
      },
      {
        icon: "/assets/imgs/shape/img-s-80.png",
        title: "Enterprise Ready",
        description: "Bank-grade security, compliance, and 99.9% uptime SLA"
      },
      {
        icon: "/assets/imgs/shape/img-s-81.png",
        title: "Global Scale",
        description: "Operate in 190+ countries with 50+ currencies"
      }
    ]
  };

  // Données pour AiAbout
  const about = {
    title: "AI-Powered API Intelligence",
    description: [
      "Leverage advanced AI algorithms to optimize API performance, reduce fraud, and increase efficiency with intelligent routing and risk assessment.",
      "Our AI systems provide real-time fraud detection, smart API routing, predictive analytics for usage patterns, automated compliance monitoring, machine learning optimization, and intelligent error handling."
    ],
    action_btn: {
      label: "Learn More",
      link: "/ai-services"
    }
  };

  // Données pour MuxxusFAQ
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    description: "Get answers to common questions about our platform APIs and services",
    faqs: [
      {
        question: "How quickly can I integrate with the APIs?",
        answer: "Basic API integration can be completed within 24-48 hours with our comprehensive documentation and SDKs. Enterprise integrations with custom features typically take 1-2 weeks depending on complexity."
      },
      {
        question: "What programming languages are supported?",
        answer: "We provide SDKs for JavaScript/Node.js, Python, Java, C#, Go, and PHP. All APIs are RESTful with OpenAPI 3.0 specifications and comprehensive documentation."
      },
      {
        question: "Are there rate limits or usage quotas?",
        answer: "Standard plans include generous rate limits. Enterprise plans offer custom limits and dedicated infrastructure. All plans include comprehensive monitoring and alerting tools."
      },
      {
        question: "How secure are the API endpoints?",
        answer: "All APIs feature bank-grade security with 256-bit encryption, OAuth 2.0 authentication, API key management, real-time fraud monitoring, and compliance with international security standards."
      },
      {
        question: "Can I get dedicated support for enterprise integrations?",
        answer: "Yes, enterprise plans include dedicated technical support, custom integration assistance, white-glove onboarding, and priority response times for seamless platform integration."
      }
    ]
  };

  return (
    <div 
      className={LAYOUT_CLASSES.root} 
      theme-setting={LAYOUT_CLASSES.theme}
      data-testid="platform-apis-layout"
    >
      {/* Composants d'outils globaux */}
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      
      {/* Header fixe en dehors du ScrollSmoother pour une meilleure UX */}
      <MemoizedHeader breadcrumb={breadcrumbData} />
      
      {/* Wrapper principal avec ScrollSmoother */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Contenu principal avec padding-top ajusté */}
          <main className={LAYOUT_CLASSES.contentWrapper}>
            {/* Hero Section */}
            <ProductDetailHero {...marketingHeroData} />
            
            {/* Section Image avec MarketingImage */}
            <MarketingImage {...marketingImageData} />
            <MuxxusProductFeature {...featureData} />
            
            {/* Section À propos avec AccountAbout */}
            <AccountAbout {...aboutData} />

            {/* Section Connected Accounts */}
            <MuxxusAiSection 
              title="Connected Accounts & Onboarding"
              description={[
                "Programmatic account creation and onboarding for seamless user experience.",
                "Create accounts instantly, automate KYC/AML processes, and manage user onboarding at scale with our comprehensive connected accounts API."
              ]}
              action_btn={{ label: "Learn More", link: "/platform-apis/connected-accounts" }}
              shape_img="/assets/imgs/brand/img-s-1.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-1.png", dark: "/assets/imgs/shape/img-s-1-light.png" }}
              imagePosition="left" 
            />

            {/* Section Accounts Management */}
            <MuxxusAiSection 
              title="Multi-Currency Account Management"
              description={[
                "Scale your account management with our powerful accounts API supporting 50+ currencies.",
                "Create, manage, and monitor accounts programmatically with real-time balance updates, transaction history, and automated account lifecycle management."
              ]}
              action_btn={{ label: "Learn More", link: "/platform-apis/accounts" }}
              shape_img="/assets/imgs/brand/img-s-2.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-2.png", dark: "/assets/imgs/shape/img-s-2-light.png" }}
              imagePosition="right" 
            />

            {/* Section Payments API */}
            <MuxxusAiSection 
              title="Global Payment Acceptance"
              description={[
                "Accept multi-currency payments globally with our comprehensive payments API.",
                "Process payments in 50+ currencies, support multiple payment methods, and handle complex payment flows with real-time processing and settlement."
              ]}
              action_btn={{ label: "Learn More", link: "/platform-apis/payments" }}
              shape_img="/assets/imgs/brand/img-s-3.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-3.png", dark: "/assets/imgs/shape/img-s-3-light.png" }}
              imagePosition="left" 
            />

            {/* Section Transactional FX */}
            <MuxxusAiSection 
              title="Transactional FX & Currency Management"
              description={[
                "Access interbank FX rates and manage currency conversions programmatically.",
                "Get real-time exchange rates, execute currency conversions, and manage multi-currency positions with institutional-grade liquidity and competitive pricing."
              ]}
              action_btn={{ label: "Learn More", link: "/platform-apis/transactional-fx" }}
              shape_img="/assets/imgs/brand/img-s-4.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-4.png", dark: "/assets/imgs/shape/img-s-4-light.png" }}
              imagePosition="right" 
            />

            {/* Section Payouts */}
            <MuxxusAiSection 
              title="Programmatic Global Payouts"
              description={[
                "Make fast and cost-effective payouts to users worldwide with our payouts API.",
                "Send money to 190+ countries in 50+ currencies with competitive fees, real-time tracking, and automated compliance checks for seamless global operations."
              ]}
              action_btn={{ label: "Learn More", link: "/platform-apis/payouts" }}
              shape_img="/assets/imgs/brand/img-s-5.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-5.png", dark: "/assets/imgs/shape/img-s-5-light.png" }}
              imagePosition="left" 
            />

            {/* Section Card Issuing */}
            <MuxxusAiSection 
              title="Global Card Issuance Platform"
              description={[
                "Create multi-currency cards for a variety of use cases with our issuing API.",
                "Issue virtual and physical cards instantly, set spending controls, manage card lifecycle, and integrate with your existing card programs seamlessly."
              ]}
              action_btn={{ label: "Learn More", link: "/platform-apis/issuing" }}
              shape_img="/assets/imgs/brand/img-s-6.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-6.png", dark: "/assets/imgs/shape/img-s-6-light.png" }}
              imagePosition="right" 
            />

            {/* Section FAQ avec ServiceDetailsFaq */}
            <ServiceDetailsFaq 
              faqTitle="Platform APIs FAQ"
              faqs={faqData.faqs}
            />
          </main>
          
          {/* Sections de contenu */}
          <MemoizedNewsletter />
          <MemoizedFooter />
        </div>
      </div>
    </div>
  );
};

// Mémorisation du composant pour éviter les re-renders inutiles
export default memo(PlatformAPIsPage);