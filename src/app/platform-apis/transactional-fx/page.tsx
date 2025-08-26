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
  title: "Transactional FX API | Interbank FX Rates & Currency Management | Muxxus",
  description: "Access interbank FX rates and manage currency conversions programmatically. Get real-time exchange rates and execute trades with institutional-grade liquidity.",
  keywords: "transactional FX, foreign exchange, currency conversion, FX rates, interbank rates, currency management, fintech API"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Access interbank FX rates and manage currency conversions programmatically",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img4.jpg",
    dark: "/assets/imgs/muxxus/image/img4.jpg"
  },
  customers: "50+ currency pairs, 190+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img4.jpg",
      dark: "/assets/imgs/muxxus/image/img4.jpg"
    },
    description: "Get real-time exchange rates, execute currency conversions, and manage multi-currency positions with institutional-grade liquidity and competitive pricing.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img4.jpg",
  feature_text: "Transactional FX API"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered FX Intelligence & Risk Management",
    description: [
      "Our AI-driven platform automatically analyzes market patterns, detects trading opportunities, and provides real-time risk assessment across all currency pairs.",
      "Optimize FX costs by 40% with intelligent rate monitoring, automated hedging strategies, and predictive analytics for currency movements."
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
    title: "Institutional-grade FX trading for modern platforms",
    description: [
      "Build comprehensive currency solutions",
      "Access interbank rates, execute trades, and manage currency risk with our powerful API and institutional liquidity."
    ],
    leftImage: "/assets/imgs/muxxus/image/img5.jpg",
    items: [
      {
        icon: "💱",
        title: "Real-Time FX Rates",
        description: "Access live interbank exchange rates for 50+ currency pairs with millisecond precision and institutional-grade accuracy."
      },
      {
        icon: "⚡",
        title: "Instant Trade Execution",
        description: "Execute currency conversions instantly with competitive spreads and immediate confirmation notifications."
      },
      {
        icon: "📊",
        title: "Advanced Risk Management",
        description: "Implement sophisticated hedging strategies, set rate alerts, and manage currency exposure across your portfolio."
      }
    ],
    action_btn: {
      label: "Start Building",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Streamline your currency operations with institutional-grade FX capabilities",
    description: [
      "Our Transactional FX API enables you to access interbank rates and execute currency conversions programmatically, eliminating manual processes and providing real-time market access.",
      "From instant rate quotes to automated hedging, we provide everything you need to optimize your currency operations."
    ],
    leftImage: "/assets/imgs/muxxus/image/img6.jpg",
    items: [
      {
        icon: "🏦",
        title: "Interbank Liquidity",
        description: "Access institutional-grade liquidity with tight spreads and deep market depth across all major currency pairs."
      },
      {
        icon: "🌍",
        title: "Global Currency Coverage",
        description: "Trade 50+ currency pairs including major, minor, and emerging market currencies with competitive pricing."
      },
      {
        icon: "🔒",
        title: "Advanced Security",
        description: "Bank-grade security with real-time fraud detection, multi-factor authentication, and compliance with international standards."
      },
      {
        icon: "📈",
        title: "Real-Time Analytics",
        description: "Get comprehensive insights into FX performance, rate trends, and currency exposure across your entire portfolio."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global FX trading network",
    description: "Our Transactional FX API supports currency trading across major markets worldwide, providing institutional liquidity and multi-currency capabilities.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Major currency', 'High liquidity', 'Real-time rates', '24/7 trading']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Major currency', 'High liquidity', 'Real-time rates', 'London session']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Base currency', 'High liquidity', 'Real-time rates', 'Frankfurt session']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Commodity currency', 'Good liquidity', 'Real-time rates', 'Sydney session']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Regional currency', 'Good liquidity', 'Real-time rates', 'Singapore session']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Regional currency', 'Good liquidity', 'Real-time rates', 'Hong Kong session']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Commodity currency', 'Good liquidity', 'Real-time rates', 'Toronto session']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Major currency', 'High liquidity', 'Real-time rates', 'Tokyo session']
      }
    ],
    accountExample: {
      title: "FX Trading Platform",
      description: "Access institutional-grade FX rates and execute trades with real-time execution and advanced risk management.",
      capabilities: [
        "Real-time FX rates",
        "Instant trade execution",
        "Advanced risk management",
        "Multi-currency support"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, API deposits, and instant funding"
      }
    }
  },
  
  testimonials: {
    title: "What Our Transactional FX Customers Say",
    description: "Discover how our customers use our Transactional FX API to optimize their currency operations and manage FX risk",
    testimonials: [
      {
        quote: "The Transactional FX API has transformed our currency operations. We can now access interbank rates in real-time, execute trades instantly, and implement sophisticated hedging strategies that were previously impossible.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Michael Chang",
        designation: "Head of Treasury, GlobalCorp",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Managing currency risk across 25+ countries used to be a nightmare. With Muxxus's FX API, we have real-time visibility into our currency exposure and can execute hedging trades programmatically.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Sarah Williams",
        designation: "CFO, MultiCurrency Inc",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "The institutional-grade liquidity and competitive spreads have saved us millions in FX costs. Our finance team can now focus on strategic decisions while the API handles all our currency conversion needs.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "David Rodriguez",
        designation: "VP of Finance, TechFlow",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Transactional FX FAQ",
  faq_description: "Common questions about our Transactional FX API and currency management",
  faqs: [
    {
      question: "What currency pairs are supported?",
      answer: "We support 50+ currency pairs including all major pairs (EUR/USD, GBP/USD, USD/JPY), minor pairs, and emerging market currencies. New pairs are added regularly based on market demand."
    },
    {
      question: "How accurate are the FX rates?",
      answer: "Our rates are sourced directly from interbank markets with millisecond precision. We provide institutional-grade accuracy with spreads as tight as 0.1 pips on major currency pairs."
    },
    {
      question: "What is the minimum trade size?",
      answer: "Minimum trade sizes vary by currency pair. Major pairs typically have minimums of $1,000 equivalent, while exotic pairs may require larger minimums. Enterprise plans offer custom minimums."
    },
    {
      question: "How quickly are trades executed?",
      answer: "Most trades are executed within milliseconds of order placement. Real-time confirmation is provided immediately, with settlement typically occurring within 1-2 business days."
    },
    {
      question: "Can I implement automated trading strategies?",
      answer: "Yes, our API provides comprehensive endpoints for implementing automated trading strategies, including algorithmic trading, risk management, and portfolio rebalancing."
    },
    {
      question: "What risk management features are available?",
      answer: "We offer advanced risk management including position limits, stop-loss orders, take-profit orders, rate alerts, and comprehensive reporting on currency exposure and performance."
    }
  ]
};

// Composant principal de la page
export default function TransactionalFXPage() {
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
        subtitle="Build comprehensive currency solutions"
        description="Integrate our Transactional FX API into your platform with comprehensive documentation, SDKs, and dedicated support. Start building in minutes with our developer-friendly endpoints."
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