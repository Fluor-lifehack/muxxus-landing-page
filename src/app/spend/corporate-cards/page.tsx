import { Metadata } from "next";
import SolutionHero from "@/components/hero/SolutionHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";
import FeatureSection from "@/components/muxxus/FeatureSection";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";



// Métadonnées de la page
export const metadata: Metadata = {
  title: "Corporate Cards | Multi-currency Company & Employee Cards | Muxxus",
  description: "Streamline your business spending with multi-currency corporate cards. Manage expenses, control budgets, and provide employees with flexible payment solutions worldwide.",
  keywords: "corporate cards, business cards, expense management, multi-currency cards, employee cards, company spending, business expenses"
};

// Données pour le composant DetailHero
const heroData = {
  title: "A smarter approach to spending, locally and globally",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img6.jpg",
    dark: "/assets/imgs/muxxus/image/img6.jpg"
  },
  customers: "150+ countries, 50+ currencies",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img6.jpg",
      dark: "/assets/imgs/muxxus/image/img6.jpg"
    },
    description: "Instantly create multi-currency VISA corporate cards with built-in controls, and stay on top of all purchases from a single dashboard, in real-time.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img6.jpg",
  feature_text: "Corporate Card Solutions"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Expense Management",
    description: [
      "Our platform uses artificial intelligence to optimize your corporate card operations, offering real-time expense tracking and automated reconciliation.",
      "AI algorithms analyze spending patterns to provide insights, detect anomalies, and help optimize your business expenses across all currencies."
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
    title: "For individual employee purchases like travel, employee benefits, and team offsites",
    description: [
      "Let your employees purchase on the go",
      "Allow your employees to spend in multiple currencies with virtual cards, physical cards, Apple Pay, and Google Pay."
    ],
    leftImage: "/assets/imgs/muxxus/image/img2.jpg",
    items: [
      {
        icon: "📱",
        title: "Let your employees purchase on the go",
        description: "Allow your employees to spend in multiple currencies with virtual cards, physical cards, Apple Pay, and Google Pay."
      },
      {
        icon: "🎯",
        title: "Gain more control of employee spending",
        description: "Set a variety of spend limits including daily, weekly, monthly, quarterly or annually, to better manage budgets."
      },
      {
        icon: "👁️",
        title: "Eliminate delayed visibility of purchases",
        description: "Get a real-time view of employee spend. Each card has a clear payment trail, so it's easy to track purchases."
      }
    ],
    action_btn: {
      label: "Get Your Corporate Cards",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Say goodbye to hidden fees on your international Visa card spend",
    description: [
      "Muxxus Corporate Cards allow your employees to make purchases in multiple currencies from held balances in your account. They're free to create and you can start using them immediately online.",
      "Pay for purchases anywhere Visa is accepted, both online and in store."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "🌍",
        title: "Easily issue cards to your global workforce",
        description: "Issue multi-currency Employee Cards to your team members around the world to streamline their local and global purchases."
      },
      {
        icon: "💳",
        title: "Pay directly from your held balances",
        description: "Pay global expenses directly from your Muxxus multi-currency wallet, eliminating unnecessary FX conversion fees."
      },
      {
        icon: "💰",
        title: "0% foreign card transaction fees",
        description: "Put an end to surprise foreign transaction fees and other hidden charges, so you can reinvest every dollar back into your growth."
      },
      {
        icon: "🔄",
        title: "Auto-convert at leading FX rates",
        description: "If you don't have the necessary currency balance, we'll auto-convert available funds in your home currency at our market-leading FX rates."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global card acceptance network",
    description: "Muxxus corporate cards are accepted worldwide, providing your business with seamless payment capabilities across all major markets and currencies.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa/Mastercard network', 'Real-time FX', 'Low fees', '24/7 support']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local banking', 'Real-time rates', 'Low spreads', 'Secure transactions']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['SEPA network', 'Real-time rates', 'Secure trading', 'Local compliance']
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
      title: "Corporate Card Account",
      description: "Access global payment networks with real-time spending controls and automated expense management.",
      capabilities: [
        "Multi-currency cards",
        "Real-time tracking",
        "Automated reconciliation",
        "Advanced controls"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, corporate accounts, and digital wallets"
      }
    }
  },
  
  testimonials: {
    title: "What Our Corporate Card Customers Say",
    description: "Discover how our customers use our corporate card platform to streamline their business spending and expense management",
    testimonials: [
      {
        quote: "The feature where we can monitor how much employees are spending on their Muxxus cards is incredibly useful to us. We get to have full visibility, as well as being able to set daily and per transaction budgets.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Richard Li",
        designation: "Co-founder & CEO, July",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "Having all our global SaaS subscriptions in one place has streamlined our finance processes and enabled better tracking and control of expenses. It's even better knowing that Muxxus isn't hitting us with any international transaction fees.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Warren Durling",
        designation: "Chief Operating Officer, Dovetail – Digital Agency",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "Muxxus is an innovative fintech platform with a first-class customer support team. They transformed the previously painful process of creating corporate cards and managing business accounts into something simple, convenient, and cost-effective.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Gavin Black",
        designation: "Interim CEO & Chief Financial Officer, PURE Group",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Corporate Cards FAQ",
  faq_description: "Common questions about our corporate card services and expense management",
  faqs: [
    {
      question: "What is an international corporate business card?",
      answer: "An international corporate business card is a Visa payment card you can use to make payments in multiple foreign currencies from balances in your associated business account. Muxxus Corporate cards are multi-currency cards that enable your employees to make purchases in multiple currencies from held balances in your Muxxus Wallet. This can be useful in eliminating costly and unnecessary currency conversion fees on international spend."
    },
    {
      question: "When should I use a company card vs an employee card?",
      answer: "Company cards are good for business purchases that are typically made online and on behalf of the entire company or specific teams and departments. This could include purchases such as software subscriptions, office supplies, supplier payments, and marketing expenses. Employee cards are great for individual employee purchases either made online or in person, such as travel expenses like airfare or hotels and incidental purchases like coffee or snacks."
    },
    {
      question: "What are the benefits of an international corporate business debit card?",
      answer: "Businesses paying for goods and services in more than one currency can benefit from the reduced fees associated with a multi-currency card. With Muxxus Borderless Cards, you can pay for domestic and international purchases directly from held currency balances in your Muxxus Wallet, eliminating unnecessary FX conversion fees. You'll also benefit from 0% foreign card transaction fees and no hidden charges."
    },
    {
      question: "How secure are your corporate cards?",
      answer: "We provide enterprise-level security including real-time fraud detection, spending limits, merchant restrictions, instant card freezing, multi-factor authentication, and compliance with international security standards like PCI DSS."
    },
    {
      question: "Can I set different spending limits for different employees?",
      answer: "Yes, you can customize spending limits for each card based on employee role, department, or project. Set daily, weekly, or monthly limits, and restrict spending to specific merchant categories or geographic locations."
    },
    {
      question: "How quickly can I get new cards issued?",
      answer: "New corporate cards can be issued within 24-48 hours. For urgent requests, we offer expedited processing. All cards come with instant activation and can be used immediately upon receipt."
    }
  ]
};

// Composant principal de la page
export default function CorporateCardsPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Corporate Cards"
        description="Streamline your business spending with multi-currency corporate cards. Manage expenses, control budgets, and provide employees with flexible payment solutions worldwide."
        bg_video=""
        bg_image="/assets/imgs/muxxus/image/img6.jpg"
        action_btn={{ label: "Get Started", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
        backgroundVideo="/assets/videos/world-globe.mp4"
      />

              <MuxxusSection2 
        {...componentData.muxxusSection2} 
        fullWidthHeader={true} 
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />

 
              <MuxxusSection2 
        title=""
        description={[]}
        leftImage={componentData.muxxusSection2.leftImage}
        items={[
          {
            icon: "📱",
            title: "Let your employees purchase on the go",
            description: "Allow your employees to spend in multiple currencies with virtual cards, physical cards, Apple Pay, and Google Pay."
          },
          {
            icon: "🎯",
            title: "Gain more control of employee spending",
            description: "Set a variety of spend limits including daily, weekly, monthly, quarterly or annually, to better manage budgets."
          },
          {
            icon: "👁️",
            title: "Eliminate delayed visibility of purchases",
            description: "Get a real-time view of employee spend. Each card has a clear payment trail, so it's easy to track purchases."
          }
        ]}
        action_btn={componentData.muxxusSection2.action_btn}
        fullWidthHeader={false}
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />
      {/* Customer Testimonials Section */}
      <TestimonialsSection {...componentData.testimonials} />


      {/* Company Cards Section */}
      <FeatureSection
        title="Company Cards"
        subtitle="Get more with built-in expense management"
        description="When you activate built-in expense management, you’ll experience a seamless way for employees to submit expenses and for you to track, review, and approve company spend – all from a single platform."
        buttonText="Learn More"
        buttonLink="/accounts/expense-management"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="Company Cards"
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
