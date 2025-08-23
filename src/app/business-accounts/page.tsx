
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

const BusinessAccountsPage = () => {
  // Données pour le breadcrumb
  const breadcrumbData = {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Business Accounts" }
    ]
  };

  // Données pour MarketingHero
  const marketingHeroData = {
    title: "BUSINESS ACCOUNTS",
    sub_title: "GLOBAL FINANCIAL SOLUTIONS",
    shape_1: {
      light: "/assets/imgs/shape/img-s-29.png",
      dark: "/assets/imgs/shape/img-s-29-light.png"
    },
    shape_2: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    },
    info: {
      customers: "50+ Currencies Supported",
      client_img: {
        light: "/assets/imgs/works/img-s-9.jpg",
        dark: "/assets/imgs/works/img-s-9.jpg"
      },
      description: "Streamline your international business with our comprehensive business account solutions.",
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
    title: "Why Choose Our Business Accounts?",
    subtitle: "ADVANTAGES",
    description: "Our business accounts provide the infrastructure needed to operate internationally with confidence. Whether you're a startup looking to expand globally or an enterprise managing operations across multiple countries, our solutions scale with your business needs.",
    image: {
      src: "/assets/imgs/muxxus/about/img.jpg",
      alt: "Global Business Banking Solutions"
    },
    stats: {
      number: "190+",
      label: "Countries",
      description: "Global Coverage"
    },
    features: [
      "Multi-currency support across 50+ currencies",
      "Global compliance with international banking standards",
      "Local banking infrastructure in 190+ countries",
      "Real-time operations with 24/7 access",
      "API integration for seamless automation",
      "Dedicated support for enterprise clients"
    ]
  };

  // Données pour MarketingFeature
  const featureData = {
    title: "Key Features of Business Accounts",
    subtitle: "FEATURES",
    description: "Discover the powerful features that make our business accounts the ideal choice for global operations",
    image: "/assets/imgs/gallery/img-s-83.jpg",
    sub_icon: "/assets/imgs/shape/img-s-78.png",
    features: [
      {
        icon: "/assets/imgs/shape/img-s-79.png",
        title: "Multi-Currency Support",
        description: "Hold and manage 50+ currencies in a single account"
      },
      {
        icon: "/assets/imgs/shape/img-s-80.png",
        title: "Global Compliance",
        description: "Built-in compliance with international banking standards"
      },
      {
        icon: "/assets/imgs/shape/img-s-81.png",
        title: "Real-Time Operations",
        description: "24/7 access to your accounts and instant transactions"
      }
    ]
  };

  // Données pour AiAbout
  const about = {
    title: "AI-Powered Business Intelligence",
    description: [
      "Leverage advanced AI algorithms to gain deep insights into your business operations, identify trends, and make data-driven decisions that drive growth and efficiency.",
      "Our AI systems provide real-time data processing and analysis, predictive analytics and forecasting, automated reporting and insights, machine learning optimization, natural language processing for queries, and intelligent risk assessment."
    ],
    action_btn: {
      label: "Learn More",
      link: "/ai-services"
    }
  };

  // Données pour AiInfo
  const infoSection = {
    bg_img: "/assets/imgs/shape/img-s-75.png",
    shape_img: "/assets/imgs/shape/img-s-76.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-77.png",
      dark: "/assets/imgs/shape/img-s-77-dark.png"
    },
    info: [
      {
        title: "AI Performance Metrics",
        description: "Our AI systems deliver measurable results that transform how you understand and optimize your business operations."
      },
      {
        title: "Key Insights",
        description: "99.9% accuracy rate, 3x faster analysis, and 24/7 continuous monitoring capabilities."
      }
    ],
    tags: [
      "Machine Learning",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning",
      "Automated Decision Making"
    ]
  };

  // Données pour MuxxusFAQ
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    description: "Get answers to common questions about business accounts and our services",
    faqs: [
      {
        question: "How quickly can I open a business account?",
        answer: "Most business accounts can be opened within 24-48 hours with our streamlined onboarding process. Premium and enterprise accounts may take 3-5 business days for enhanced due diligence."
      },
      {
        question: "What currencies are supported?",
        answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
      },
      {
        question: "Are there minimum balance requirements?",
        answer: "No minimum balance requirements for most account types. We believe in accessible business banking with transparent pricing and no hidden charges."
      },
      {
        question: "How secure are the accounts?",
        answer: "All accounts feature bank-grade security with 256-bit encryption, multi-factor authentication, real-time fraud monitoring, and compliance with international banking standards."
      },
      {
        question: "Can I integrate with my existing systems?",
        answer: "Yes, all account tiers offer API access. Premium and Enterprise accounts include advanced integration features, webhooks, and dedicated technical support for seamless system integration."
      }
    ]
  };


  return (
    <div 
      className={LAYOUT_CLASSES.root} 
      theme-setting={LAYOUT_CLASSES.theme}
      data-testid="business-accounts-layout"
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

           
            {/* Section Global Account */}
            <MuxxusAiSection 
              title="Global Account Solutions"
              description={[
                "Access to 50+ currencies and markets worldwide with our comprehensive global account platform.",
                "Streamlined cross-border transactions, real-time FX rates, and multi-currency management tools designed for international businesses."
              ]}
              action_btn={{ label: "Learn More", link: "/business-accounts/global" }}
              shape_img="/assets/imgs/brand/img-s-1.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-1.png", dark: "/assets/imgs/shape/img-s-1-light.png" }}
              imagePosition="left" 
            />

            {/* Section FX Trading */}
            <MuxxusAiSection 
              title="FX Trading & Currency Management"
              description={[
                "Advanced foreign exchange trading platform with competitive spreads and real-time market data.",
                "Hedge against currency risks, execute trades 24/7, and access institutional-grade liquidity across major and emerging market currencies."
              ]}
              action_btn={{ label: "Learn More", link: "/business-accounts/fx-trading" }}
              shape_img="/assets/imgs/brand/img-s-2.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-2.png", dark: "/assets/imgs/shape/img-s-2-light.png" }}
              imagePosition="right" 
            />

            {/* Section FAQ avec ServiceDetailsFaq */}
            <ServiceDetailsFaq 
              faqTitle="Service Details FAQ"
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
export default memo(BusinessAccountsPage); 