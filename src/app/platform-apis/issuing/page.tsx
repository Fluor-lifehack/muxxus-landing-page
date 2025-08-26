import { Metadata } from "next";
import DetailHero from "@/components/hero/DetailHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";
import FeatureSection from "@/components/muxxus/FeatureSection";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Issuing API | Global Card Issuance Platform | Muxxus",
  description: "Create multi-currency cards for a variety of use cases with our Issuing API. Issue virtual and physical cards instantly with spending controls and lifecycle management.",
  keywords: "issuing API, card issuance, virtual cards, physical cards, multi-currency cards, fintech API, card management"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Create multi-currency cards for a variety of use cases",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img6.jpg",
    dark: "/assets/imgs/muxxus/image/img6.jpg"
  },
  customers: "50+ currencies, 190+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img6.jpg",
      dark: "/assets/imgs/muxxus/image/img6.jpg"
    },
    description: "Issue virtual and physical cards instantly, set spending controls, manage card lifecycle, and integrate with your existing card programs seamlessly.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img6.jpg",
  feature_text: "Issuing API"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Card Intelligence & Fraud Prevention",
    description: [
      "Our AI-driven platform automatically detects fraudulent transactions, analyzes spending patterns, and provides real-time risk assessment across all card activities.",
      "Reduce card fraud by 95% with intelligent spending controls, automated risk monitoring, and predictive analytics for card usage patterns."
    ],
    action_btn: {
      label: "Discover Our AI Solutions",
      link: "#"
    },
    shape_img: "/assets/imgs/shape/img-s-29.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    }
  },
  
  muxxusSection2: {
    title: "Global card issuance for modern platforms",
    description: [
      "Build comprehensive card solutions",
      "Create, manage, and control cards programmatically with our powerful API, supporting multiple card types and currencies."
    ],
    leftImage: "/assets/imgs/muxxus/image/img1.jpg",
    items: [
      {
        icon: "💳",
        title: "Instant Card Creation",
        description: "Create virtual and physical cards instantly with real-time activation and immediate usability across global networks."
      },
      {
        icon: "🌍",
        title: "Multi-Currency Support",
        description: "Issue cards in 50+ currencies with automatic FX conversion and local banking infrastructure support."
      },
      {
        icon: "🔒",
        title: "Advanced Controls",
        description: "Implement sophisticated spending limits, merchant restrictions, and geographic controls at the card level."
      }
    ],
    action_btn: {
      label: "Start Building",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Streamline your card operations with intelligent issuance and management",
    description: [
      "Our Issuing API enables you to create and manage cards programmatically, eliminating manual processes and providing real-time control over your card programs.",
      "From instant card creation to automated lifecycle management, we provide everything you need to scale your card issuance operations."
    ],
    leftImage: "/assets/imgs/muxxus/image/img2.jpg",
    items: [
      {
        icon: "🚀",
        title: "Global Card Network",
        description: "Issue cards accepted worldwide with Visa and Mastercard networks, providing seamless payment capabilities across all major markets."
      },
      {
        icon: "💱",
        title: "Multi-Currency Cards",
        description: "Create cards in 50+ currencies with competitive FX rates and automatic currency conversion capabilities."
      },
      {
        icon: "🔒",
        title: "Enterprise Security",
        description: "Bank-grade security with real-time fraud detection, spending controls, and compliance with international standards."
      },
      {
        icon: "📊",
        title: "Real-Time Analytics",
        description: "Get comprehensive insights into card performance, spending patterns, and usage analytics across your entire portfolio."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global card issuance network",
    description: "Our Issuing API supports card creation across major markets worldwide, providing global acceptance and multi-currency capabilities.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'High acceptance', 'Real-time FX', 'Local compliance']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'High acceptance', 'Real-time rates', 'Local banking']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'High acceptance', 'Real-time FX', 'Secure processing']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'Good acceptance', 'Real-time FX', '24/7 processing']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'Good acceptance', 'Real-time FX', 'Local banking']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'Good acceptance', 'Real-time FX', '24/7 support']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'Good acceptance', 'Real-time FX', 'Local compliance']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard', 'Good acceptance', 'Real-time rates', '24/7 support']
      }
    ],
    accountExample: {
      title: "Global Card Issuance Platform",
      description: "Create and manage cards worldwide with real-time controls and automated lifecycle management.",
      capabilities: [
        "Instant card creation",
        "Real-time controls",
        "Multi-currency support",
        "Advanced security"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, API deposits, and instant funding"
      }
    }
  },
  
  testimonials: {
    title: "What Our Issuing API Customers Say",
    description: "Discover how our customers use our Issuing API to create and manage cards globally and scale their operations",
    testimonials: [
      {
        quote: "The Issuing API has transformed our card operations. We can now create cards for customers in 50+ countries with local currencies, dramatically improving our user experience and reducing operational costs.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Robert Chen",
        designation: "CTO, GlobalCards",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Managing multi-currency cards across 30+ countries used to be a nightmare. With Muxxus's Issuing API, we have real-time control over all our cards and can implement sophisticated spending controls programmatically.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Lisa Thompson",
        designation: "Head of Product, MultiCard Inc",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "The instant card creation and real-time controls have given us a competitive advantage. Our customers can now get cards in seconds instead of days, and we have complete visibility into all card activities.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Michael Rodriguez",
        designation: "VP of Operations, CardFlow",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Issuing API FAQ",
  faq_description: "Common questions about our Issuing API and global card issuance",
  faqs: [
    {
      question: "What types of cards can I create?",
      answer: "We support virtual cards, physical cards, and tokenized cards. You can create debit cards, prepaid cards, and corporate cards with various spending controls and restrictions."
    },
    {
      question: "How quickly can I create new cards?",
      answer: "Virtual cards are created instantly and can be used immediately. Physical cards are created instantly but require shipping time. All cards come with real-time activation and immediate usability."
    },
    {
      question: "What currencies are supported for card issuance?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
    },
    {
      question: "How do spending controls work?",
      answer: "Our API provides flexible endpoints for implementing spending limits, merchant restrictions, geographic controls, and time-based restrictions. All controls are applied in real-time."
    },
    {
      question: "What compliance features are included?",
      answer: "Built-in compliance features include automated KYC/AML checks, transaction monitoring, audit trails, and regulatory reporting. All features comply with international banking standards."
    },
    {
      question: "Can I integrate with existing card programs?",
      answer: "Yes, our API provides comprehensive endpoints for integrating with existing card programs, implementing custom workflows, and connecting with your existing systems and processes."
    }
  ]
};

// Composant principal de la page
export default function IssuingPage() {
  return (
    <>
      {/* Hero Section */}
      <DetailHero {...heroData} />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
        backgroundVideo="/assets/videos/world-globe.mp4"
      />

      {/* API Features Section */}
      <MuxxusSection2 
        {...componentData.muxxusSection2} 
        fullWidthHeader={true} 
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />

      {/* Customer Testimonials Section */}
      <TestimonialsSection {...componentData.testimonials} />

      {/* API Integration Section */}
      <FeatureSection
        title="API Integration"
        subtitle="Build comprehensive card solutions"
        description="Integrate our Issuing API into your platform with comprehensive documentation, SDKs, and dedicated support. Start building in minutes with our developer-friendly endpoints."
        buttonText="View Documentation"
        buttonLink="/developers/docs"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="API Integration"
        badgeColor="white"
        imageFirst={false}
        className="bg-gray-900 text-white"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

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