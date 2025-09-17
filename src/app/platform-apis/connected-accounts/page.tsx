import { Metadata } from "next";
import DetailHero from "@/components/hero/DetailHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";
import MuxxusListers from "@/components/muxxus/MuxxusListers";
import MuxxusStepperRecord from "@/components/muxxus/MuxxusStepperRecord";
import MuxxusCardSection from "@/components/muxxus/MuxxusCardSection";

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Connected Accounts API | Platform Banking & Embedded Finance | Muxxus",
  description: "Improve revenue and engagement on your platform with our Connected Accounts API. Programmatic account creation, automated KYC/AML, and multi-currency support for 50+ markets.",
  keywords: "connected accounts, platform banking, embedded finance, KYC automation, business accounts, fintech API, marketplace payments"
};

// Données consolidées pour tous les composants
const pageData = {
  // Hero Section
  hero: {
    title: "Improve revenue and engagement on your platform",
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
      description: "Equip your customers with a range of financial services, including high-speed payouts, card issuing, multi-currency account numbers, and more. We manage the full onboarding and screening process for a seamless experience.",
    action_btn: {
        label: "Contact Sales",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img1.jpg",
  feature_text: "Connected Accounts API"
  },

  // Key Benefits Section
  keyBenefits: {
    title: "Differentiate your platform or marketplace",
    description: [
      "Programmatically create connected accounts for businesses and individuals, and enable them with rich financial capabilities.",
      "Unlock new revenue streams and improve customer engagement and retention."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "💼",
        title: "More value for your customers",
        description: "Offer customers a suite of financial capabilities directly within your platform, from multi-currency wallets, accounts with local bank details, payment acceptance, high-speed transfers, and card issuing."
      },
      {
        icon: "💰",
        title: "Multiple monetisation opportunities",
        description: "Explore various ways to monetise, such as payout fees on transactions, FX fees on currency conversions, issuing interchange rebates, and platform SaaS fees."
      },
      {
        icon: "🛡️",
        title: "Streamlined onboarding and compliance",
        description: "Let Muxxus manage full KYC, AML, sanctions screening, and identity requirements on your customers, ensuring they meet regulatory requirements."
      },
      {
        icon: "📈",
        title: "Simplified reconciliation",
        description: "Benefit from a multi-currency ledgering system for each customer. Automate fund flows among connected accounts and review reports and transaction level data."
      }
    ]
  },

  // Get Started Section
  getStarted: {
    title: "Get started with Connected Accounts",
    subtitle: "Whether you're a platform or marketplace, Muxxus makes it easy for you to securely create and onboard connected accounts around the world, while complying with local regulations.",
    description: "Choose the right account type for your business needs and start creating connected accounts programmatically.",
    methods: [
      {
        title: "Ledger accounts for marketplace payouts",
        description: "Leverage an account type that further streamlines seller diligence in 200+ countries. Marketplaces using ledger accounts maintain ownership of funds prior to payout and can experience a faster go-to-market for payout needs.",
        icon: "/assets/imgs/icon/marketplace.png",
        color: "bg-blue-100",
      link: "#"
    },
      {
        title: "Full scale connected accounts",
        description: "Fully onboard customers, including in depth KYC, and provide them with their own multi-currency wallet, as well as a range of other financial services, from third-party payouts to physical and virtual card issuing.",
        icon: "/assets/imgs/icon/accounts.png",
        color: "bg-green-100",
        link: "#"
      }
    ]
  },

  // API Features Section
  apiFeatures: {
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
  
  // Onboarding Section
  onboarding: {
    title: "Onboard customers with minimal friction",
    subtitle: "HASSLE-FREE ONBOARDING",
    description: [
      "Onboard customers with minimal friction",
      "Effortlessly onboard users across the globe. Onboard customers in 50+ markets. We dynamically adjust information collection to meet local compliance requirements.",
      "Leave the heavy lifting to us. We take care of Know-Your-Customer (KYC), Anti-Money Laundering (AML), sanctions screening, and identity requirements for you.",
      "Choose the solution for your specific needs. Enjoy a faster go-to-market for payouts with ledger accounts, or opt for standard connected accounts with full KYC of sellers."
    ],
    action_btn: {
      label: "Get Started",
      link: "#"
    },
    shape_img: "/assets/imgs/muxxus/image/img3.jpg",
    small_shape: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    },
    backgroundColor: "bg-gray-50",
    textColor: "text-gray-900",
    buttonColor: "bg-primary",
    buttonTextColor: "text-white",
    buttonHoverColor: "hover:bg-primary-dark",
    accentColor: "text-primary",
    borderColor: "border-gray-200",
    shadowColor: "shadow-gray-200"
  },

  // Onboarding Stepper Record
  onboardingStepper: {
    title: "ONBOARD CUSTOMERS WITH MINIMAL FRICTION",
    subtitle: "Hassle-free onboarding process",
    description: "Our streamlined onboarding process ensures your customers can start using financial services quickly while maintaining full compliance with local regulations.",
    methods: [
      {
        title: "Effortlessly onboard users across the globe",
        description: "Onboard customers in 50+ markets with our intelligent system that dynamically adjusts information collection to meet local compliance requirements. No more manual research needed.",
        icon: "/assets/imgs/icon/globe.png"
      },
      {
        title: "Leave the heavy lifting to us",
        description: "We take care of all Know-Your-Customer (KYC), Anti-Money Laundering (AML), sanctions screening, and identity requirements for you. Focus on your business while we handle compliance.",
        icon: "/assets/imgs/icon/shield.png"
      },
      {
        title: "Choose the solution for your specific needs",
        description: "Enjoy a faster go-to-market for payouts with ledger accounts, or opt for standard connected accounts with full KYC of sellers. Flexibility that adapts to your business model.",
        icon: "/assets/imgs/icon/gear.png"
      }
    ],
    image: "/assets/imgs/muxxus/image/img3.jpg"
  },

  // API Endpoints
  apiEndpoints: [
    {
      icon: "🚀",
      title: "POST /v1/accounts",
      description: "Create a new business account with business_info, kyc_documents, and compliance_data parameters."
    },
    {
      icon: "📋",
      title: "GET /v1/accounts/{id}",
      description: "Retrieve account details and status using account_id parameter."
    },
    {
      icon: "✏️",
      title: "PUT /v1/accounts/{id}",
      description: "Update account information with account_id and update_data parameters."
    },
    {
      icon: "✅",
      title: "POST /v1/accounts/{id}/verify",
      description: "Initiate KYC verification process using account_id and verification_data."
    }
  ],

  // Key Features
  keyFeatures: [
    {
      icon: "💼",
      title: "More value for your customers",
      description: "Offer customers a suite of financial capabilities directly within your platform, from multi-currency wallets, accounts with local bank details, payment acceptance, high-speed transfers, and card issuing."
    },
    {
      icon: "💰",
      title: "Multiple monetisation opportunities",
      description: "Explore various ways to monetise, such as payout fees on transactions, FX fees on currency conversions, issuing interchange rebates, and platform SaaS fees."
    },
    {
      icon: "🔒",
      title: "Streamlined onboarding and compliance",
      description: "Let Muxxus manage full KYC, AML, sanctions screening, and identity requirements on your customers, ensuring they meet regulatory requirements."
    },
    {
      icon: "📊",
      title: "Simplified reconciliation",
      description: "Benefit from a multi-currency ledgering system for each customer. Automate fund flows among connected accounts and review reports and transaction level data."
    }
  ],

  // Account Types
  accountTypes: [
    {
      icon: "🛒",
      title: "Ledger accounts for marketplace payouts",
      description: "Leverage an account type that further streamlines seller diligence in 200+ countries. Marketplaces using ledger accounts maintain ownership of funds prior to payout and can experience a faster go-to-market for payout needs."
    },
    {
      icon: "💳",
      title: "Full scale connected accounts",
      description: "Fully onboard customers, including in depth KYC, and provide them with their own multi-currency wallet, as well as a range of other financial services, from third-party payouts to physical and virtual card issuing."
    }
  ],

  // Onboarding Options
  onboardingOptions: [
    {
      icon: "🌍",
      title: "Effortlessly onboard users across the globe",
      description: "Onboard customers in 50+ markets. Muxxus dynamically adjusts information collection to meet local compliance requirements."
    },
    {
      icon: "🛡️",
      title: "Leave the heavy lifting to us",
      description: "Muxxus takes care of Know-Your-Customer (KYC), Anti-Money Laundering (AML), sanctions screening, and identity requirements for you."
    },
    {
      icon: "⚡",
      title: "Choose the solution for your specific needs",
      description: "Enjoy a faster go-to-market for payouts with ledger accounts, or opt for standard connected accounts with full KYC of sellers."
    }
  ],

  // Onboarding Options
  onboardingOptions2: {
    title: "Choose Your Onboarding Method",
    subtitle: "Flexible onboarding solutions for every business",
    description: "Select the onboarding approach that best fits your platform's needs and user experience requirements.",
    cards: [
      {
        image: "/assets/imgs/icon/globe.png",
        title: "Hosted onboarding",
        description: "Redirect customers to a Muxxus-hosted web form to complete onboarding."
      },
      {
        image: "/assets/imgs/icon/components.png",
        title: "Embedded components",
        description: "Leverage pre-built UI elements to onboard accounts globally via an API integration."
      },
      {
        image: "/assets/imgs/icon/api.png",
        title: "Native API",
        description: "Fully customise your onboarding experience using Muxxus APIs."
      }
    ]
  },

  // Industry Use Cases
  industryUseCases: [
    {
      icon: "🛒",
      title: "Marketplaces",
      description: "Onboard sellers to streamline global payouts, and introduce additional services like physical and virtual cards. Examples: E-commerce platforms, Service marketplaces, Gig economy platforms."
    },
    {
      icon: "☁️",
      title: "SaaS platforms",
      description: "Consolidate end-to-end payments, from payment acceptance to payouts, to streamline customer experience. Examples: B2B software, Subscription services, Enterprise platforms."
    },
    {
      icon: "💳",
      title: "Fintechs and financial services",
      description: "Power global funds collection and money movement for your customers around the world. Examples: Digital banks, Payment processors, Investment platforms."
    },
    {
      icon: "🎨",
      title: "Digital and creator",
      description: "Onboard global creators and influencers, and provide a secure centralised wallet and card issuing. Examples: Content platforms, Creator marketplaces, Streaming services."
    }
  ],

  // Supported Countries
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
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['BACS transfers', 'CHAPS payments', 'Real-time rates', 'Local banking']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
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
  
  // Testimonials
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
  },

  // Connected Account Console Data
  connectedAccountConsoleData: {
    title: "CONNECTED ACCOUNT CONSOLE",
    subtitle: "Easily manage connected accounts and gain insights",
    description: "Streamline connected account management with our comprehensive console that provides full visibility and control over all your connected accounts.",
    methods: [
      {
        title: "Centrally manage operations to see all activity",
        description: "View all activity in your connected accounts, including overviews of all accounts in a single dashboard for complete operational visibility.",
        icon: "/assets/imgs/icon/dashboard.png"
      },
      {
        title: "Increase visibility for compliance processes",
        description: "View onboarding and KYC status, and respond to KYC Request for Information (RFI) on behalf of your connected accounts to speed up processes.",
        icon: "/assets/imgs/icon/compliance.png"
      },
      {
        title: "Generate reporting and tracking for your accounts",
        description: "Export dashboard data to conduct analyses and generate insights relating to connected accounts for better decision making.",
        icon: "/assets/imgs/icon/reports.png"
      }
    ],
    image: "/assets/imgs/muxxus/image/img5.jpg"
  },

  // FAQ
  faq: {
    title: "Connected Accounts FAQ",
    description: "Common questions about our Connected Accounts API and programmatic account creation",
    items: [
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
  }
};

// Composant principal de la page
export default function ConnectedAccountsPage() {
  return (
    <>
      <DetailHero {...pageData.hero} />

      <div className="py-12">
        <MuxxusSection2 
          {...pageData.keyBenefits} 
          fullWidthHeader={true} 
        />
      </div>

      <MuxxusListers {...pageData.getStarted} />
        <MuxxusStepperRecord {...pageData.onboardingStepper}  />
        <MuxxusCardSection 
          cards={pageData.onboardingOptions2.cards}
          showHeader={false}
          backgroundColor="bg-white"
        />
        <MuxxusStepperRecord {...pageData.connectedAccountConsoleData} />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* FAQ et Footer */}
      <div className="py-12">
        <ServiceDetailsFaq 
          faqs={pageData.faq.items} 
          faqTitle={pageData.faq.title} 
        />
      </div>
      
      <div className="py-8">
        <MuxxusNewsletter />
      </div>
      
      <div className="py-6">
        <MuxxusFooter />
      </div>
    </>
  );
}