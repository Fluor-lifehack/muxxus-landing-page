
import React, { memo } from "react";
import AccountAbout from "@/components/muxxus/AccountAbout";
import MuxxusProcess from "@/components/muxxus/MuxxusProcess";
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
  theme: "style-3",
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
    image: "/assets/imgs/works/img-s-9.jpg",
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

  // Données pour MuxxusProcess
  const processData = {
    title: "How Business Accounts Work",
    subtitle: "SETUP PROCESS",
    description: "Simple steps to get your business account up and running with our streamlined process",
    steps: [
      {
        number: "1",
        title: "Apply Online",
        description: "Complete our simple online application in just a few minutes with instant verification"
      },
      {
        number: "2",
        title: "Quick Verification",
        description: "Our team verifies your business details within 24 hours with automated checks"
      },
      {
        number: "3",
        title: "Start Banking",
        description: "Access your account immediately and start managing your global finances"
      }
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
            
            {/* Section À propos avec AccountAbout */}
            <AccountAbout {...aboutData} />

           

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