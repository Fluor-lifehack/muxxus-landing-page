  
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

const SpendManagementPage = () => {
  // Données pour le breadcrumb
  const breadcrumbData = {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Spend Management" }
    ]
  };

  // Données pour MarketingHero
  const marketingHeroData = {
    title: "SPEND MANAGEMENT",
    sub_title: "CORPORATE CARDS & BILL PAY",
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
      description: "Control business spending with our comprehensive corporate card and bill payment solutions designed for modern enterprises.",
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
    title: "Why Choose Our Spend Management Solutions?",
    subtitle: "ADVANTAGES",
    description: "Our spend management solutions provide the infrastructure needed to control business expenses with confidence. Whether you're a startup looking to manage costs or an enterprise managing spending across multiple departments, our solutions scale with your business needs.",
    image: {
      src: "/assets/imgs/muxxus/about/img.jpg",
      alt: "Spend Management Solutions"
    },
    stats: {
      number: "190+",
      label: "Countries",
      description: "Global Coverage"
    },
    features: [
      "Multi-currency corporate cards across 50+ currencies",
      "Global compliance with international financial standards",
      "Local payment infrastructure in 190+ countries",
      "Real-time spending controls with 24/7 monitoring",
      "API integration for seamless automation",
      "Dedicated support for enterprise clients"
    ]
  };

  // Données pour MarketingFeature
  const featureData = {
    title: "Key Features of Spend Management",
    subtitle: "FEATURES",
    description: "Discover the powerful features that make our spend management solutions the ideal choice for business expense control",
    image: "/assets/imgs/gallery/img-s-83.jpg",
    sub_icon: "/assets/imgs/shape/img-s-78.png",
      features: [
      {
        icon: "/assets/imgs/shape/img-s-79.png",
        title: "Multi-Currency Support",
        description: "Manage expenses in 50+ currencies with competitive FX rates"
      },
      {
        icon: "/assets/imgs/shape/img-s-80.png",
        title: "Global Compliance",
        description: "Built-in compliance with international financial standards"
      },
      {
        icon: "/assets/imgs/shape/img-s-81.png",
        title: "Real-Time Controls",
        description: "24/7 spending monitoring with instant alerts and controls"
      }
    ]
  };


  // Données pour MuxxusFAQ
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    description: "Get answers to common questions about our spend management solutions and services",
      faqs: [
        {
          question: "How quickly can I implement spend management?",
          answer: "Basic setup can be completed within 24-48 hours. Full implementation with custom workflows and integrations typically takes 1-2 weeks depending on your business complexity."
        },
        {
          question: "What types of expenses can be managed?",
          answer: "We support all expense types including travel, office supplies, software subscriptions, vendor payments, and custom categories. Our system is flexible and can be customized to your specific needs."
        },
        {
          question: "Are there monthly maintenance fees?",
          answer: "Standard plans start at $29/month per user, Professional plans cost $79/month per user, and Enterprise plans have custom pricing. All plans include full feature access and support."
        },
        {
          question: "How secure is the expense data?",
          answer: "All data is protected by bank-level security including 256-bit encryption, multi-factor authentication, real-time fraud monitoring, and compliance with international security standards."
        },
        {
          question: "Can I integrate with my existing accounting systems?",
          answer: "Yes, we offer integrations with major accounting platforms including QuickBooks, Xero, Sage, and NetSuite. Enterprise plans include custom API access for seamless system integration."
      }
    ]
  };

  return (
    <div 
      className={LAYOUT_CLASSES.root} 
      theme-setting={LAYOUT_CLASSES.theme}
      data-testid="spend-management-layout"
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

            {/* Section Corporate Cards */}
            <MuxxusAiSection 
              title="Corporate Cards & Employee Management"
              description={[
                "Multi-currency company and employee cards with real-time spending controls and automated reconciliation.",
                "Streamlined corporate card management with virtual and physical cards, spending limits, real-time alerts, and automated expense categorization for your entire team."
              ]}
              action_btn={{ label: "Learn More", link: "/spend/corporate-cards" }}
              shape_img="/assets/imgs/brand/img-s-1.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-1.png", dark: "/assets/imgs/shape/img-s-1-light.png" }}
              imagePosition="left" 
            />

            {/* Section Bill Pay */}
            <MuxxusAiSection 
              title="Bill Pay & Accounts Payable"
              description={[
                "Automated accounts payable management for efficient vendor payments and expense control.",
                "Streamline your bill processing, vendor payments, approval workflows, and payment scheduling with multi-currency support and accounting system integration."
              ]}
              action_btn={{ label: "Learn More", link: "/spend/bill-pay" }}
              shape_img="/assets/imgs/brand/img-s-2.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-2.png", dark: "/assets/imgs/shape/img-s-2-light.png" }}
              imagePosition="right" 
            />

            {/* Section Expense Management */}
            <MuxxusAiSection 
              title="Expense Management & Analytics"
              description={[
                "Comprehensive expense tracking and approval workflows with powerful analytics and reporting.",
                "Mobile expense submission, automated approval workflows, receipt capture, policy compliance checks, and detailed spend analytics to optimize your business costs."
              ]}
              action_btn={{ label: "Learn More", link: "/spend/expense-management" }}
              shape_img="/assets/imgs/brand/img-s-3.png"
              small_shape={{ light: "/assets/imgs/shape/img-s-3.png", dark: "/assets/imgs/shape/img-s-3-light.png" }}
              imagePosition="left" 
            />

            {/* Section FAQ avec ServiceDetailsFaq */}
            <ServiceDetailsFaq 
              faqTitle="Spend Management FAQ"
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
export default memo(SpendManagementPage); 