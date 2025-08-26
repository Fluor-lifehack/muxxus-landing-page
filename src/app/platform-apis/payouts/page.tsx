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
  title: "Payouts API | Programmatic Global Payouts | Muxxus",
  description: "Make fast and cost-effective payouts to users worldwide with our Payouts API. Send money to 190+ countries in 50+ currencies with competitive fees.",
  keywords: "payouts API, global payouts, international transfers, money transfers, fintech API, cross-border payments"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Make fast and cost-effective payouts to users worldwide",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img5.jpg",
    dark: "/assets/imgs/muxxus/image/img5.jpg"
  },
  customers: "190+ countries, 50+ currencies",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img5.jpg",
      dark: "/assets/imgs/muxxus/image/img5.jpg"
    },
    description: "Send money to 190+ countries in 50+ currencies with competitive fees, real-time tracking, and automated compliance checks for seamless global operations.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img5.jpg",
  feature_text: "Payouts API"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Payout Intelligence & Compliance Automation",
    description: [
      "Our AI-driven platform automatically routes payouts through optimal channels, detects suspicious patterns, and ensures compliance across 190+ jurisdictions.",
      "Reduce payout costs by 60% with intelligent routing, automated compliance checks, and real-time fraud detection for all transactions."
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
    title: "Programmatic payouts for modern platforms",
    description: [
      "Build seamless payout experiences",
      "Send money to users worldwide with our comprehensive API, supporting multiple payout methods and currencies."
    ],
    leftImage: "/assets/imgs/muxxus/image/img6.jpg",
    items: [
      {
        icon: "💸",
        title: "Instant Payout Processing",
        description: "Process payouts instantly with real-time confirmation and immediate settlement to recipient accounts."
      },
      {
        icon: "🌍",
        title: "Global Reach",
        description: "Send money to 190+ countries with local payout methods and competitive exchange rates."
      },
      {
        icon: "🔒",
        title: "Automated Compliance",
        description: "Built-in KYC/AML checks with real-time verification and automated risk assessment for faster processing."
      }
    ],
    action_btn: {
      label: "Start Building",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Streamline your global payout operations with intelligent processing",
    description: [
      "Our Payouts API enables you to send money to users worldwide, eliminating payout barriers and providing seamless money transfer experiences.",
      "From instant processing to automated settlement, we provide everything you need to scale your global payout operations."
    ],
    leftImage: "/assets/imgs/muxxus/image/img1.jpg",
    items: [
      {
        icon: "🚀",
        title: "Global Coverage",
        description: "Send money to users in 190+ countries with local payout methods and compliance requirements."
      },
      {
        icon: "💱",
        title: "Multi-Currency Support",
        description: "Process payouts in 50+ currencies with competitive FX rates and automatic currency conversion."
      },
      {
        icon: "🔒",
        title: "Advanced Security",
        description: "Bank-grade security with real-time fraud detection, multi-factor authentication, and compliance with international standards."
      },
      {
        icon: "📊",
        title: "Real-Time Tracking",
        description: "Get comprehensive insights into payout performance, success rates, and recipient behavior patterns."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global payout network",
    description: "Our Payouts API supports money transfers across major markets worldwide, providing local payout methods and multi-currency capabilities.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['ACH transfers', 'Wire transfers', 'Digital wallets', 'Local compliance']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['BACS transfers', 'CHAPS payments', 'Digital wallets', 'Local banking']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['SEPA transfers', 'Local transfers', 'Digital wallets', 'Secure processing']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time FX', 'Digital wallets', '24/7 processing']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['FAST network', 'Real-time FX', 'Digital wallets', 'Local banking']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time FX', 'Digital wallets', '24/7 support']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Interac network', 'Real-time FX', 'Digital wallets', 'Local compliance']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local banking', 'Real-time rates', 'Digital wallets', '24/7 support']
      }
    ],
    accountExample: {
      title: "Global Payout Platform",
      description: "Send money worldwide with real-time processing and automated compliance checks.",
      capabilities: [
        "Multi-payout methods",
        "Real-time processing",
        "Multi-currency support",
        "Advanced security"
      ],
      depositMethods: {
        title: "Multiple payout methods",
        description: "Bank transfers, digital wallets, and local payout networks"
      }
    }
  },
  
  testimonials: {
    title: "What Our Payouts API Customers Say",
    description: "Discover how our customers use our Payouts API to send money globally and scale their operations",
    testimonials: [
      {
        quote: "The Payouts API has revolutionized our global operations. We can now send money to users in 190+ countries with local payout methods, dramatically improving our user experience and reducing operational costs.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Jennifer Lee",
        designation: "CTO, GlobalPay",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Processing payouts in multiple currencies used to be a nightmare. With Muxxus's Payouts API, we have seamless multi-currency support, real-time processing, and competitive FX rates.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Carlos Rodriguez",
        designation: "Head of Operations, MultiCorp",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "The automated compliance and fraud detection features have given us peace of mind. We can focus on growing our business while Muxxus handles the complex regulatory requirements.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Amanda Wilson",
        designation: "VP of Finance, SecureTransfer",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Payouts API FAQ",
  faq_description: "Common questions about our Payouts API and global money transfers",
  faqs: [
    {
      question: "What payout methods are supported?",
      answer: "We support bank transfers, digital wallets, mobile money, and local payout networks. Support varies by country and local market requirements."
    },
    {
      question: "How quickly are payouts processed?",
      answer: "Most payouts are processed instantly with real-time confirmation. Settlement typically occurs within 1-3 business days depending on the payout method and jurisdiction."
    },
    {
      question: "What currencies can I send?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
    },
    {
      question: "How does fraud detection work?",
      answer: "Our AI-powered fraud detection system analyzes payout patterns in real-time, using machine learning to identify suspicious transactions and protect your business from fraudulent activities."
    },
    {
      question: "What compliance features are included?",
      answer: "Built-in compliance features include automated KYC/AML checks, transaction monitoring, audit trails, and regulatory reporting. All features comply with international standards."
    },
    {
      question: "Can I customize the payout flow?",
      answer: "Yes, our API provides flexible endpoints for customizing payout flows, implementing custom user experiences, and integrating with your existing systems and workflows."
    }
  ]
};

// Composant principal de la page
export default function PayoutsPage() {
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
        subtitle="Build seamless payout experiences"
        description="Integrate our Payouts API into your platform with comprehensive documentation, SDKs, and dedicated support. Start building in minutes with our developer-friendly endpoints."
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