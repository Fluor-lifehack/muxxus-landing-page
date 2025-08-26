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
  title: "Connected Accounts API | Programmatic Account Creation | Muxxus",
  description: "Create and manage business accounts programmatically with our Connected Accounts API. Automate KYC/AML processes and scale your onboarding at speed.",
  keywords: "connected accounts, API, programmatic onboarding, KYC automation, business accounts, fintech API"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Create business accounts programmatically in 190+ countries",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img1.jpg",
    dark: "/assets/imgs/muxxus/image/img1.jpg"
  },
  customers: "190+ countries, 50+ currencies",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img1.jpg",
      dark: "/assets/imgs/muxxus/image/img1.jpg"
    },
    description: "Automate business account creation with our Connected Accounts API. Create accounts in seconds, not days, with built-in KYC/AML automation and global compliance.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img1.jpg",
  feature_text: "Connected Accounts API"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered KYC & Compliance Automation",
    description: [
      "Our AI-driven platform automatically verifies business information, performs risk assessments, and ensures compliance across 190+ jurisdictions.",
      "Reduce manual review time by 80% with intelligent document processing, automated identity verification, and real-time compliance monitoring."
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
    title: "Programmatic account creation for fintech platforms",
    description: [
      "Build embedded banking experiences",
      "Create business accounts programmatically with our comprehensive API, supporting multiple business types and jurisdictions worldwide."
    ],
    leftImage: "/assets/imgs/muxxus/image/img2.jpg",
    items: [
      {
        icon: "⚡",
        title: "Instant Account Creation",
        description: "Create business accounts in under 5 seconds with our streamlined API endpoints and automated verification processes."
      },
      {
        icon: "🌍",
        title: "Global Business Support",
        description: "Support businesses from 190+ countries with local compliance requirements and multi-currency capabilities."
      },
      {
        icon: "🔒",
        title: "Automated Compliance",
        description: "Built-in KYC/AML checks with real-time verification and automated risk assessment for faster onboarding."
      }
    ],
    action_btn: {
      label: "Start Building",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Transform your customer onboarding with automated account creation",
    description: [
      "Our Connected Accounts API enables you to create business accounts programmatically, eliminating manual processes and accelerating your customer acquisition.",
      "From instant verification to automated compliance checks, we provide everything you need to scale your onboarding operations."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "🚀",
        title: "80% Faster Onboarding",
        description: "Reduce onboarding time from days to minutes with automated account creation and instant verification."
      },
      {
        icon: "📊",
        title: "Scale Without Limits",
        description: "Handle thousands of account creations simultaneously with our high-performance API infrastructure."
      },
      {
        icon: "💳",
        title: "Multi-Currency Ready",
        description: "Create accounts in 50+ currencies with automatic FX capabilities and local banking infrastructure."
      },
      {
        icon: "🔐",
        title: "Enterprise Security",
        description: "Bank-grade security with end-to-end encryption, multi-factor authentication, and compliance with international standards."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global business support network",
    description: "Our Connected Accounts API supports businesses from around the world, providing local compliance and banking infrastructure in major markets.",
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
      title: "Connected Account Creation",
      description: "Programmatically create business accounts with automated verification and compliance checks.",
      capabilities: [
        "Instant account creation",
        "Automated KYC/AML",
        "Multi-currency support",
        "Real-time verification"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, digital wallets, and instant deposits"
      }
    }
  },
  
  testimonials: {
    title: "What Our Connected Accounts Customers Say",
    description: "Discover how our customers use our Connected Accounts API to streamline their onboarding and scale their operations",
    testimonials: [
      {
        quote: "The Connected Accounts API has transformed our onboarding process. We can now create accounts for new customers in seconds instead of days, dramatically improving our customer experience and reducing operational costs.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Sarah Chen",
        designation: "CTO, FinFlow",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Muxxus's API is incredibly reliable and fast. We've processed over 10,000 account creations without any downtime, and the automated compliance checks have saved us countless hours of manual verification.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Michael Rodriguez",
        designation: "Head of Engineering, PayTech Solutions",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "The global reach of Muxxus's Connected Accounts API is impressive. We can now onboard customers from anywhere in the world with local banking infrastructure and multi-currency support.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Emma Thompson",
        designation: "Product Manager, GlobalPay",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Connected Accounts FAQ",
  faq_description: "Common questions about our Connected Accounts API and programmatic account creation",
  faqs: [
    {
      question: "How quickly can I create accounts through the API?",
      answer: "Account creation through our API typically takes 2-5 seconds for basic verification. Full KYC/AML compliance checks may take 24-48 hours depending on business complexity and jurisdiction requirements."
    },
    {
      question: "What business types are supported?",
      answer: "We support various business types including sole proprietorships, partnerships, LLCs, corporations, and non-profits. Support varies by jurisdiction and compliance requirements."
    },
    {
      question: "How does the automated KYC process work?",
      answer: "Our AI-powered KYC system automatically verifies business information, checks against global databases, and performs risk assessments. High-risk cases are flagged for manual review by our compliance team."
    },
    {
      question: "Can I customize the onboarding flow?",
      answer: "Yes, our API provides flexible endpoints to customize the onboarding experience. You can collect additional information, implement custom verification steps, and integrate with your existing systems."
    },
    {
      question: "What compliance standards do you follow?",
      answer: "We maintain compliance with international standards including AML, KYC, and local banking regulations. Our platform is regularly audited and certified for security and compliance."
    },
    {
      question: "How do I handle API rate limits?",
      answer: "Standard plans include generous rate limits. Enterprise plans offer custom limits and dedicated infrastructure. All plans include comprehensive monitoring and alerting tools."
    }
  ]
};

// Composant principal de la page
export default function ConnectedAccountsPage() {
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
        subtitle="Build seamless onboarding experiences"
        description="Integrate our Connected Accounts API into your platform with comprehensive documentation, SDKs, and dedicated support. Start building in minutes with our developer-friendly endpoints."
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