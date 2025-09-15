    
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

const PaymentsPage = () => {
  // Données pour le breadcrumb
  const breadcrumbData = {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Payments" }
    ]
  };

  // Données pour MarketingHero
  const marketingHeroData = {
    title: "PAYMENT SOLUTIONS",
    sub_title: "GLOBAL PAYMENT ACCEPTANCE",
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
      description: "Accept payments globally with our comprehensive payment solutions designed for modern businesses.",
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
    title: "Why Choose Our Payment Solutions?",
    subtitle: "ADVANTAGES",
    description: "Our payment solutions provide the infrastructure needed to accept payments globally with confidence. Whether you're a startup looking to expand internationally or an enterprise managing operations across multiple countries, our solutions scale with your business needs.",
    image: {
      src: "/assets/imgs/muxxus/about/img.jpg",
      alt: "Global Payment Solutions"
    },
    stats: {
      number: "190+",
      label: "Countries",
      description: "Global Coverage"
    },
    features: [
      "Multi-currency payment acceptance across 50+ currencies",
      "Global compliance with international payment standards",
      "Local payment methods in 190+ countries",
      "Real-time payment processing with 24/7 availability",
      "API integration for seamless automation",
      "Dedicated support for enterprise clients"
    ]
  };

  // Données pour MarketingFeature
  const featureData = {
    title: "Key Features of Payment Solutions",
    subtitle: "FEATURES",
    description: "Discover the powerful features that make our payment solutions the ideal choice for global operations",
    image: "/assets/imgs/gallery/img-s-83.jpg",
    sub_icon: "/assets/imgs/shape/img-s-78.png",
    features: [
      {
        icon: "/assets/imgs/shape/img-s-79.png",
        title: "Multi-Currency Support",
        description: "Accept payments in 50+ currencies with competitive FX rates"
      },
      {
        icon: "/assets/imgs/shape/img-s-80.png",
        title: "Global Compliance",
        description: "Built-in compliance with international payment standards"
      },
      {
        icon: "/assets/imgs/shape/img-s-81.png",
        title: "Real-Time Processing",
        description: "24/7 payment processing with instant confirmations"
      }
    ]
  };

  // Données pour AiAbout
  const about = {
    title: "AI-Powered Payment Intelligence",
    description: [
      "Leverage advanced AI algorithms to optimize payment flows, reduce fraud, and increase conversion rates with intelligent payment routing and risk assessment.",
      "Our AI systems provide real-time fraud detection, smart payment routing, predictive analytics for payment trends, automated compliance monitoring, machine learning optimization, and intelligent dispute resolution."
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
    description: "Get answers to common questions about our payment solutions and services",
    faqs: [
      {
        question: "How quickly can I start accepting payments?",
        answer: "Most payment integrations can be completed within 24-48 hours with our streamlined onboarding process. Enterprise solutions may take 3-5 business days for enhanced due diligence and custom integrations."
      },
      {
        question: "What payment methods are supported?",
        answer: "We support 50+ major currencies and local payment methods including credit cards, bank transfers, digital wallets, and alternative payment methods. New payment methods are added regularly based on market demand."
      },
      {
        question: "Are there setup fees or monthly charges?",
        answer: "No setup fees for most payment solutions. We offer transparent pricing with competitive transaction fees and no hidden charges. Enterprise plans include volume discounts and custom pricing."
      },
      {
        question: "How secure are the payment transactions?",
        answer: "All payments feature bank-grade security with 256-bit encryption, PCI DSS compliance, real-time fraud monitoring, and compliance with international payment standards including PSD2 and SCA requirements."
      },
      {
        question: "Can I integrate with my existing eCommerce platform?",
        answer: "Yes, we offer plugins for major eCommerce platforms including Shopify, WooCommerce, Magento, and custom API integrations. All solutions include webhooks and dedicated technical support for seamless platform integration."
      }
    ]
  };

  return (
    <div 
      className={LAYOUT_CLASSES.root} 
      theme-setting={LAYOUT_CLASSES.theme}
      data-testid="payments-layout"
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

            {/* Section Checkout */}
            <MuxxusAiSection 
              title="Checkout Solutions"
              description={[
                "Conversion-optimized prebuilt payment forms designed to maximize your checkout success rates.",
                "Seamless integration with your existing checkout flow, mobile-optimized design, and intelligent payment method selection for your customers."
              ]}
              action_btn={{ label: "Learn More", link: "/payments/checkout" }}
              shape_img="/assets/imgs/brand/img-s-1.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-1.png", dark: "/assets/imgs/shape/img-s-1-light.png" }}
              imagePosition="left" 
            />

            {/* Section Payment Plugins */}
            <MuxxusAiSection 
              title="Payment Plugins & Integrations"
              description={[
                "Ready-to-use integrations with major eCommerce platforms and custom API solutions for seamless payment acceptance.",
                "Connect with Shopify, WooCommerce, Magento, and custom platforms with our comprehensive plugin ecosystem and developer-friendly APIs."
              ]}
              action_btn={{ label: "Learn More", link: "/payments/plugins" }}
              shape_img="/assets/imgs/brand/img-s-2.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-2.png", dark: "/assets/imgs/shape/img-s-2-light.png" }}
              imagePosition="right" 
            />

            {/* Section Payment Links */}
            <MuxxusAiSection 
              title="Payment Links & No-Code Solutions"
              description={[
                "Create and share payment links instantly without any coding required. Perfect for invoices, donations, and simple payment collection.",
                "Generate secure payment links, customize branding, track payments in real-time, and manage your payment collection process effortlessly."
              ]}
              action_btn={{ label: "Learn More", link: "/payments/links" }}
              shape_img="/assets/imgs/brand/img-s-3.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-3.png", dark: "/assets/imgs/shape/img-s-3-light.png" }}
              imagePosition="left" 
            />

            {/* Section FAQ avec ServiceDetailsFaq */}
            <ServiceDetailsFaq 
              faqTitle="Payment Solutions FAQ"
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
export default memo(PaymentsPage); 