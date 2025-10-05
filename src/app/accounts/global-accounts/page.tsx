import type { Metadata } from 'next';
import React from "react";

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import FeatureSection from "@/components/muxxus/FeatureSection";
import SectionDivider from "@/components/ui/SectionDivider";
import MuxxusAiSection2 from "@/components/muxxus/MuxxusAiSection2";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import SupportedCountriesSection from "@/components/muxxus/SupportedCountriesSection";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";
import SolutionHero from "@/components/hero/SolutionHero";

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
  title: "Global Multi-Currency Business Accounts | Muxxus",
  description: "Open a global multi-currency account for international business payments in minutes. Support for 50+ currencies and 13+ countries with no hidden fees.",
  keywords: ["global accounts", "multi-currency", "international banking", "FX trading", "business accounts", "global payments"],
  openGraph: {
    title: "Global Multi-Currency Business Accounts | Muxxus",
    description: "Open a global multi-currency account for international business payments in minutes. Support for 50+ currencies and 13+ countries.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Multi-Currency Business Accounts | Muxxus",
    description: "Open a global multi-currency account for international business payments in minutes.",
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


// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "Artificial Intelligence at the Service of Global Banking",
    description: [
      "Our platform uses AI to optimize your international banking operations, offering competitive exchange rates and real-time intelligent risk management.",
      "Artificial intelligence analyzes global financial markets to offer you the best trading and currency conversion opportunities."
    ],
    action_btn: {
      label: "Discover Our AI Solutions",
      link: "#"
    },
    shape_img: "/assets/imgs/shape/img-s-30.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    }
  },
  
  muxxusSection2: {
    title: "Global Banking Made Simple",
    description: [
      "Experience seamless international banking with our innovative platform that connects you to financial markets worldwide.",
      "From multi-currency accounts to real-time FX trading, we provide everything you need to succeed in global commerce."
    ],
    leftImage: "/assets/images/about/img-1.jpg",
    items: [
      {
        // icon: "/assets/imgs/shape/icon-s-18.png",
        title: "Global Coverage",
        description: "Access banking services in 13+ countries with local account details and instant setup."
      },
      {
        // icon: "/assets/imgs/shape/icon-s-19.png",
        title: "Multi-Currency",
        description: "Hold and manage 50+ currencies in a single platform with competitive exchange rates."
      },
      {
        // icon: "/assets/imgs/shape/icon-s-20.png",
        title: "Instant Access",
        description: "Open accounts in minutes, not days. Start trading and receiving payments immediately."
      },
      {
        // icon: "/assets/imgs/shape/icon-s-21.png",
        title: "Bank-Grade Security",
        description: "Enterprise-level security with end-to-end encryption and regulatory compliance."
      }
    ],
    // action_btn: {
    //   label: "Get Started Today",
    //   link: "#"
    // }
  },
  
  keyBenefitsSection2: {
    title: "Global accounts hassle-free with local banking details",
    description: [
      "Avoid the queues and tedious paperwork typically involved in creating local currency accounts worldwide.",
      "Open an online multi-currency business account and collect international payments from global customers in their preferred currency."
    ],
    leftImage: "/assets/images/about/img-2.jpg",
    items: [
      {
        title: "Save on unnecessary banking fees",
        description: "No account opening fees, monthly maintenance fees, or minimum transaction requirements."
      },
      {
        title: "Simplify your global cash management",
        description: "Convert balances held in different currencies with a few clicks and review your global transactions in a single view."
      },
      {
        title: "Know that your funds are safe and secure",
        description: "Rest easy knowing that your money is secured and protected with end-to-end encryption and bank-level security."
      },
      {
        title: "Avoid costly conversion fees",
        description: "Eliminate unnecessary conversion fees by receiving payments in the same currencies your customers pay in."
      }
    ]
  },
  
  supportedCurrencies: {
    title: "Supported Currencies",
    description: "Hold and manage 50+ currencies in a single platform with competitive exchange rates and instant conversion capabilities.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 USD = 1.00 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['ACH transfers', 'Wire transfers', 'Online banking', 'Real-time conversion']
      },
      {
        name: 'European Union',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 USD = 0.92 EUR',
        bankCode: 'EU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['SEPA transfers', 'Direct debits', 'Online banking', 'Instant conversion']
      },
      {
        name: 'West Africa',
        currency: 'XOF',
        currencyName: 'West African CFA Franc',
        exchangeRate: '1 USD = 610 XOF',
        bankCode: 'WA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Mobile money', 'No monthly fees', 'Competitive rates']
      }
    ]
  },
  
  testimonials: {
    title: "What Our Customers Say",
    description: "Discover how our customers use our global accounts to optimize their international operations",
    testimonials: [
      {
        quote: "We use Muxxus to open accounts in new markets quickly and now have bank accounts in every country where we operate. This allows us to very easily move funds from our US account to our other local currency accounts in various markets in seconds.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Charlie Bullock",
        designation: "CEO and Co-Founder, Scan.com",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Muxxus provides us with flexibility and savings in our international transactions. We used Muxxus to receive our recent global funding round and pay international suppliers and save at least 5% per dollar transferred compared to major banks.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "George van Dyck",
        designation: "Finance Manager, Zoomo",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "Muxxus saves us €40,000 annually on the costs of collecting our Amazon sales, which represent the majority of our sales in the US market. This also allows us to 'reuse' our international currencies. For example, if we sell in Europe, we can pay European suppliers in euros.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Edward Agaba",
        designation: "Controller, Dalstrong",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
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
  ]
};

// Composant principal de la page
export default function GlobalAccountsPage() {
  return (
    <>
      {/* Hero Section */}

      <SolutionHero
        title="Global Accounts"
        description="Open a global multi-currency account for international business payments in minutes."
        bg_video=""
        bg_image="/assets/images/about/img-1.jpg"
        action_btn={{ label: "Get Started", link: "#" }}
      />
 
      {/* Key Benefits Section avec vidéo */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
        // backgroundVideo="/assets/videos/world-globe.mp4" 
      />

      {/* Customer Testimonials Section */}
      <TestimonialsSection {...componentData.testimonials} />

      {/* Supported Currencies Section */}
      <SupportedCountriesSection {...componentData.supportedCurrencies} />

      {/* API Solutions Section */}
      <FeatureSection
        title="API Solutions"
        subtitle="Manage global accounts at scale with our platform API"
        description="Companies rely on our API to manage their most complex requirements. Programmatically create global accounts, authorize direct debit deductions for one-time or recurring purchases, generate account statements, and more."
        buttonText="View Documentation"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="API Solutions"
        badgeColor="white"
        imageFirst={false}
        className={pageStyles.colors.light}
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* FX & Transfers Section */}
      <FeatureSection
        title="FX & Transfers"
        subtitle="End-to-end global money management"
        description="When a payment is sent to one of your global accounts, those funds are instantly visible in your Muxxus wallet. Easily convert currencies at interbank rates and use Muxxus FX & Transfers to make fast and cost-effective domestic and international transfers."
        buttonText="Learn More"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img6.jpg"
        imageAlt="FX & Transfers"
        imageFirst={true}
        className={pageStyles.colors.dark}
          // backgroundColor="bg-background-3"
      />
      <MuxxusAiSection2 {...componentData.muxxusAiSection} />
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
