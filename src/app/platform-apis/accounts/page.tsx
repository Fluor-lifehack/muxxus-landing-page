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
  title: "Accounts API | Multi-Currency Account Management | Muxxus",
  description: "Manage multi-currency accounts at scale with our Accounts API. Create, monitor, and control business accounts programmatically across 50+ currencies.",
  keywords: "accounts API, multi-currency accounts, account management, business accounts, fintech API, global banking"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Manage global accounts at scale with our platform API",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img2.jpg",
    dark: "/assets/imgs/muxxus/image/img2.jpg"
  },
  customers: "50+ currencies, 190+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img2.jpg",
      dark: "/assets/imgs/muxxus/image/img2.jpg"
    },
    description: "Scale your account management with our powerful Accounts API supporting 50+ currencies and global operations.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img2.jpg",
  feature_text: "Accounts API"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Account Intelligence & Risk Management",
    description: [
      "Our AI-driven platform automatically monitors account activities, detects suspicious patterns, and provides real-time risk assessment across your entire portfolio.",
      "Reduce fraud losses by 90% with intelligent anomaly detection, automated compliance monitoring, and predictive analytics for account performance."
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
    title: "Multi-currency account management for enterprise platforms",
    description: [
      "Build comprehensive banking solutions",
      "Create, manage, and monitor accounts programmatically with real-time balance updates and automated lifecycle management."
    ],
    leftImage: "/assets/imgs/muxxus/image/img3.jpg",
    items: [
      {
        icon: "💳",
        title: "Account Lifecycle Management",
        description: "Create, activate, suspend, and close accounts programmatically with full audit trails and compliance controls."
      },
      {
        icon: "💰",
        title: "Real-Time Balance Monitoring",
        description: "Track account balances, transactions, and currency positions in real-time across all your global accounts."
      },
      {
        icon: "🔒",
        title: "Advanced Security Controls",
        description: "Implement multi-factor authentication, spending limits, and merchant restrictions at the account level."
      }
    ],
    action_btn: {
      label: "Start Building",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Streamline your global account operations with programmatic management",
    description: [
      "Our Accounts API enables you to manage thousands of business accounts programmatically, eliminating manual processes and providing real-time visibility into your global financial operations.",
      "From instant account creation to automated compliance monitoring, we provide everything you need to scale your account management operations."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "🚀",
        title: "Scale Without Limits",
        description: "Manage thousands of accounts simultaneously with our high-performance API infrastructure and automated workflows."
      },
      {
        icon: "🌍",
        title: "Global Currency Support",
        description: "Support 50+ currencies with automatic FX capabilities, local banking infrastructure, and real-time exchange rates."
      },
      {
        icon: "📊",
        title: "Real-Time Analytics",
        description: "Get comprehensive insights into account performance, transaction patterns, and currency exposure across your entire portfolio."
      },
      {
        icon: "🔐",
        title: "Enterprise Security",
        description: "Bank-grade security with end-to-end encryption, role-based access controls, and compliance with international standards."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global account management network",
    description: "Our Accounts API supports account management across major markets worldwide, providing local banking infrastructure and multi-currency capabilities.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['ACH transfers', 'Wire transfers', 'Real-time FX', 'Local compliance']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XX-XX-XX-XXXX-XXXX-XX',
        features: ['BACS transfers', 'CHAPS payments', 'Real-time rates', 'Local banking']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['SEPA network', 'Local transfers', 'Real-time FX', 'Secure trading']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time FX', 'Low fees', '24/7 trading']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['FAST network', 'Real-time FX', 'Low fees', 'Local banking']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time FX', 'Low fees', '24/7 support']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Interac network', 'Real-time FX', 'Low spreads', 'Local compliance']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local banking', 'Real-time rates', 'Secure transactions', '24/7 support']
      }
    ],
    accountExample: {
      title: "Multi-Currency Account Management",
      description: "Programmatically manage business accounts with real-time monitoring and automated controls.",
      capabilities: [
        "Account lifecycle management",
        "Real-time balance monitoring",
        "Multi-currency support",
        "Advanced security controls"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, API deposits, and instant funding"
      }
    }
  },
  
  testimonials: {
    title: "What Our Accounts API Customers Say",
    description: "Discover how our customers use our Accounts API to manage their global account operations at scale",
    testimonials: [
      {
        quote: "The Accounts API has revolutionized how we manage our global operations. We can now monitor thousands of accounts in real-time, automate compliance checks, and provide our customers with instant account insights.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "David Kim",
        designation: "VP of Engineering, GlobalBank",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Managing multi-currency accounts across 30+ countries used to be a nightmare. With Muxxus's Accounts API, we have complete visibility and control over all our accounts from a single dashboard.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Lisa Wang",
        designation: "Head of Treasury, MultiCorp",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "The real-time balance monitoring and automated compliance features have saved us countless hours of manual work. Our finance team can now focus on strategic decisions instead of operational tasks.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "James Wilson",
        designation: "CFO, TechFlow",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Accounts API FAQ",
  faq_description: "Common questions about our Accounts API and multi-currency account management",
  faqs: [
    {
      question: "How many accounts can I manage through the API?",
      answer: "Our API is designed to handle enterprise-scale operations. Standard plans support up to 10,000 accounts, while enterprise plans offer unlimited account management with dedicated infrastructure."
    },
    {
      question: "What currencies are supported for account creation?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
    },
    {
      question: "How does real-time balance monitoring work?",
      answer: "Our API provides webhook notifications and real-time endpoints for instant balance updates. You can also set up automated alerts for specific balance thresholds or transaction types."
    },
    {
      question: "Can I implement custom account controls?",
      answer: "Yes, our API provides flexible endpoints for implementing custom spending limits, merchant restrictions, geographic controls, and multi-factor authentication requirements."
    },
    {
      question: "What compliance features are included?",
      answer: "Built-in compliance features include automated KYC/AML checks, transaction monitoring, audit trails, and regulatory reporting. All features comply with international banking standards."
    },
    {
      question: "How do I handle high-volume account operations?",
      answer: "Enterprise plans include dedicated infrastructure, custom rate limits, and priority processing for high-volume operations. Our API is designed to handle millions of API calls per day."
    }
  ]
};

// Composant principal de la page
export default function AccountsPage() {
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
        subtitle="Build comprehensive banking solutions"
        description="Integrate our Accounts API into your platform with comprehensive documentation, SDKs, and dedicated support. Start building in minutes with our developer-friendly endpoints."
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