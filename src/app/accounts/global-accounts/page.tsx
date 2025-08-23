"use client";

import React from "react";
import ServiceDetails from "@/components/service/accounts/ServiceDetails";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import { TServiceType } from "@/types";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";

// Import du composant hero sélectionné
import DetailHero from "@/components/hero/DetailHero";

const GlobalAccountsPage = () => {
  // Données pour la page Global Accounts
  const serviceData: TServiceType = {
    data: {
      draft: false,
      id: 1,
      title: "Global Multi-Currency Business Accounts",
      icon: "/assets/imgs/icon/global-accounts-icon.png",
      bg_video: "/assets/imgs/hero/hero-bg.mp4",
      image: "/assets/imgs/muxxus/image/img1.jpg",
      description: "Open a global multi-currency account for international business payments in minutes. Receive payments from customers in their preferred currency and say goodbye to costly conversion and transaction fees.",
      contactTitle: "Get Started with Global Accounts",
      btn_text: "Open Account",
      features: [
        "No setup fees or monthly charges",
        "Support for 50+ currencies",
        "Local banking infrastructure in 190+ countries",
        "24/7 global operations and support",
        "Advanced compliance and regulatory adherence",
        "Enterprise-grade security and API integration",
        "Real-time FX rates and currency conversion",
        "Multi-currency accounts with instant access"
      ],
      frameworks: ["Multi-Currency", "Global Banking", "FX Trading"],
      faq_title: "Global Accounts FAQ",
      faq_description: "Common questions about our global multi-currency business accounts",
      faqs: [
        {
          question: "How quickly can I open a global account?",
          answer: "Global accounts can be opened within 3-5 business days with our streamlined international onboarding process."
        },
        {
          question: "What currencies are supported globally?",
          answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies."
        },
        {
          question: "Are there minimum balance requirements?",
          answer: "No minimum balance requirements for most global account types. We believe in accessible global banking with transparent pricing."
        }
      ],
      meta: {
        meta_title: "Global Multi-Currency Business Accounts | Muxxus",
        meta_description: "Open a global multi-currency account for international business payments in minutes. Support for 50+ currencies and 190+ countries."
      }
    },
    slug: "global-accounts",
    content: null
  };

  // Données pour le composant AiHero
  const aiHeroData = {
    title: "AI-Powered Global Banking",
    shape: {
      light: "/assets/imgs/shape/img-s-29.png",
      dark: "/assets/imgs/shape/img-s-29-light.png"
    },
    client_img: {
      light: "/assets/imgs/muxxus/image/img1.jpg",
      dark: "/assets/imgs/muxxus/image/img1.jpg"
    },
    customers: "50+ Currencies",
    info: {
      thumb: {
        light: "/assets/imgs/muxxus/image/img1.jpg",
        dark: "/assets/imgs/muxxus/image/img1.jpg"
      },
      description: "Open a global multi-currency account for international business payments in minutes.",
      action_btn: {
        label: "Get Started",
        link: "#"
      }
    },
    image: "/assets/imgs/muxxus/image/img1.jpg",
    feature_text: "Global Banking Solutions"
  };

  return (
    <>
      {/* <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop /> */}
      
      {/* Hero Section avec AiHero */}
      <DetailHero {...aiHeroData} />

      {/* <ServiceDetails {...serviceData} /> */}
      <ServiceDetailsFaq faqs={serviceData.data.faqs} faqTitle={serviceData.data.faq_title} />
      <MuxxusNewsletter />
      <MuxxusFooter />
    </>
  );
};

export default GlobalAccountsPage;
