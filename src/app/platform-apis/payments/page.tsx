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
  title: "Payments API | Global Multi-Currency Payment Acceptance | Muxxus",
  description: "Accept multi-currency payments globally with our comprehensive Payments API. Process payments in 50+ currencies with real-time processing and settlement.",
  keywords: "payments API, global payments, multi-currency payments, payment processing, fintech API, international payments"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Accept payments globally with our comprehensive Payments API",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img3.jpg",
    dark: "/assets/imgs/muxxus/image/img3.jpg"
  },
  customers: "50+ currencies, 190+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img3.jpg",
      dark: "/assets/imgs/muxxus/image/img3.jpg"
    },
    description: "Process payments in 50+ currencies, support multiple payment methods, and handle complex payment flows with real-time processing and settlement.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img3.jpg",
  feature_text: "Payments API"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Payment Intelligence & Fraud Prevention",
    description: [
      "Our AI-driven platform automatically detects fraudulent transactions, optimizes payment routing, and provides real-time risk assessment across all payment methods.",
      "Reduce chargeback rates by 85% with intelligent fraud detection, smart payment routing, and automated compliance monitoring."
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
    title: "Global payment acceptance for modern platforms",
    description: [
      "Build seamless payment experiences",
      "Accept payments from customers worldwide with our comprehensive API, supporting multiple payment methods and currencies."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "💳",
        title: "Multi-Payment Method Support",
        description: "Accept credit cards, bank transfers, digital wallets, and alternative payment methods from customers worldwide."
      },
      {
        icon: "🌍",
        title: "Global Currency Support",
        description: "Process payments in 50+ currencies with automatic FX conversion and local banking infrastructure."
      },
      {
        icon: "⚡",
        title: "Real-Time Processing",
        description: "Instant payment processing with real-time settlement and immediate confirmation notifications."
      }
    ],
    action_btn: {
      label: "Start Building",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Streamline your global payment operations with intelligent processing",
    description: [
      "Our Payments API enables you to accept payments from customers worldwide, eliminating payment barriers and providing seamless checkout experiences.",
      "From instant processing to automated settlement, we provide everything you need to scale your global payment operations."
    ],
    leftImage: "/assets/imgs/muxxus/image/img5.jpg",
    items: [
      {
        icon: "🚀",
        title: "Global Reach",
        description: "Accept payments from customers in 190+ countries with local payment methods and compliance requirements."
      },
      {
        icon: "💱",
        title: "Multi-Currency Processing",
        description: "Process payments in 50+ currencies with competitive FX rates and automatic currency conversion."
      },
      {
        icon: "🔒",
        title: "Advanced Security",
        description: "Bank-grade security with PCI DSS compliance, fraud detection, and end-to-end encryption."
      },
      {
        icon: "📊",
        title: "Real-Time Analytics",
        description: "Get comprehensive insights into payment performance, success rates, and customer behavior patterns."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global payment acceptance network",
    description: "Our Payments API supports payment acceptance across major markets worldwide, providing local payment methods and multi-currency capabilities.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Credit cards', 'ACH transfers', 'Digital wallets', 'Local compliance']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XX-XX-XX-XXXX-XXXX-XX',
        features: ['Credit cards', 'BACS transfers', 'Digital wallets', 'Local banking']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['Credit cards', 'SEPA transfers', 'Digital wallets', 'Secure processing']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Credit cards', 'Local transfers', 'Digital wallets', '24/7 processing']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Credit cards', 'FAST network', 'Digital wallets', 'Local banking']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Credit cards', 'Local transfers', 'Digital wallets', '24/7 support']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Credit cards', 'Interac network', 'Digital wallets', 'Local compliance']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Credit cards', 'Local banking', 'Digital wallets', '24/7 support']
      }
    ],
    accountExample: {
      title: "Global Payment Processing",
      description: "Accept payments worldwide with real-time processing and automated settlement.",
      capabilities: [
        "Multi-payment methods",
        "Real-time processing",
        "Multi-currency support",
        "Advanced security"
      ],
      depositMethods: {
        title: "Multiple payment methods",
        description: "Credit cards, bank transfers, digital wallets, and more"
      }
    }
  },
  
  testimonials: {
    title: "What Our Payments API Customers Say",
    description: "Discover how our customers use our Payments API to accept payments globally and scale their operations",
    testimonials: [
      {
        quote: "The Payments API has transformed our global expansion. We can now accept payments from customers in 50+ countries with local payment methods, dramatically improving our conversion rates and customer experience.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Alex Johnson",
        designation: "CTO, GlobalEcommerce",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Processing payments in multiple currencies used to be a nightmare. With Muxxus's Payments API, we have seamless multi-currency support, real-time processing, and competitive FX rates.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Maria Garcia",
        designation: "Head of Payments, MultiCorp",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "The fraud detection and security features have given us peace of mind. We can focus on growing our business while Muxxus handles the complex payment security and compliance requirements.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Robert Chen",
        designation: "VP of Operations, SecurePay",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Payments API FAQ",
  faq_description: "Common questions about our Payments API and global payment acceptance",
  faqs: [
    {
      question: "What payment methods are supported?",
      answer: "We support credit cards, debit cards, bank transfers, digital wallets (Apple Pay, Google Pay), and alternative payment methods. Support varies by country and local market requirements."
    },
    {
      question: "How quickly are payments processed?",
      answer: "Most payments are processed instantly with real-time confirmation. Settlement typically occurs within 1-3 business days depending on the payment method and jurisdiction."
    },
    {
      question: "What currencies can I accept?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
    },
    {
      question: "How does fraud detection work?",
      answer: "Our AI-powered fraud detection system analyzes payment patterns in real-time, using machine learning to identify suspicious transactions and protect your business from fraudulent activities."
    },
    {
      question: "What compliance standards do you follow?",
      answer: "We maintain compliance with PCI DSS, SOC 2, and local regulatory requirements in all markets. Our platform is regularly audited and certified for security and compliance."
    },
    {
      question: "Can I customize the payment flow?",
      answer: "Yes, our API provides flexible endpoints for customizing payment flows, implementing custom checkout experiences, and integrating with your existing systems and workflows."
    }
  ]
};

// Composant principal de la page
export default function PaymentsPage() {
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
        subtitle="Build seamless payment experiences"
        description="Integrate our Payments API into your platform with comprehensive documentation, SDKs, and dedicated support. Start building in minutes with our developer-friendly endpoints."
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