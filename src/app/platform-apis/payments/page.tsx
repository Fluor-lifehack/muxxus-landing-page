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
  description: "Securely collect one time or recurring payments from your customers in their preferred currencies and local payment methods, boost global acceptance rates, save with like-for-like settlement, and more.",
  keywords: "payments API, global payments, multi-currency payments, payment processing, fintech API, international payments, like-for-like settlement"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Global payments, made local",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img3.jpg",
    dark: "/assets/imgs/muxxus/image/img3.jpg"
  },
  customers: "160+ payment methods, 190+ countries",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img3.jpg",
      dark: "/assets/imgs/muxxus/image/img3.jpg"
    },
    description: "Securely collect one time or recurring payments from your customers in their preferred currencies and local payment methods, boost global acceptance rates, save with like-for-like settlement, and more.",
    action_btn: {
      label: "Contact Sales",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img3.jpg",
  feature_text: "Payments API"
};

// Données pour les composants
const componentData = {
  keyBenefitsSection2: {
    title: "Grow and safeguard your global revenue",
    description: [
      "Businesses of all shapes and sizes – from eCommerce stores and subscription businesses to online marketplaces and platforms – rely on Muxxus to reach new global customers, eliminate unnecessary currency conversion fees, and protect against fraud."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "💳",
        title: "Accept 160+ payment methods worldwide",
        description: "Boost checkout rates by pricing in local currency and letting customers pay with their preferred payment methods."
      },
      {
        icon: "💰",
        title: "Avoid costly FX fees with like-for-like settlement",
        description: "Collect and settle funds in the same currency without the hassle of setting up multiple entities or paying hidden conversion fees."
      },
      {
        icon: "🔒",
        title: "Reduce chargebacks with built-in fraud prevention",
        description: "Automatically identify suspicious transactions and reduce chargebacks with built-in fraud detection and dispute management."
      },
      {
        icon: "📈",
        title: "Boost conversion and acceptance rates",
        description: "Benefit from Muxxus's ML-powered optimisation engine, 3DS logic, and local acquiring to improve acceptance rates."
      }
    ]
  },
  
  muxxusSection2: {
    title: "Borderless Commerce",
    description: [
      "Powerful out-of-box features to boost your conversions"
    ],
    leftImage: "/assets/imgs/muxxus/image/img5.jpg",
    items: [
      {
        icon: "🚀",
        title: "Adaptive success rate optimisation",
        description: "Muxxus's ML-powered optimisation engine includes smart MCC assignment, automatic retries, ISO message optimisations, and more to improve acceptance rates."
      },
      {
        icon: "🔐",
        title: "Smart 3DS optimisation",
        description: "Maximise global acceptance while staying compliant with local regulations. Our 3DS engine picks the best strategy based on transaction risk, applicable regulatory exemptions, and policies."
      },
      {
        icon: "⚙️",
        title: "Adjustable risk thresholds",
        description: "Customise your risk appetite based on your business model, set specific rules for 3D Secure, build alerts lists, and have the option to do manual reviews when needed."
      }
    ]
  },

  additionalFeatures: {
    title: "Additional features to drive performance",
    description: [
      "Network tokenisation, saved payment details, and direct network integrations"
    ],
    leftImage: "/assets/imgs/muxxus/image/img3.jpg",
    items: [
      {
        icon: "🔗",
        title: "Network tokenisation",
        description: "Muxxus replaces PANs with network-issued tokens to improve card acceptance rates and reduce processing costs."
      },
      {
        icon: "💾",
        title: "Saved payment details",
        description: "Drive repeat sales by initiating payments based on your customers' saved payment details."
      },
      {
        icon: "🌐",
        title: "Direct network integrations",
        description: "Benefit from our full-stack payments platform that directly integrates with all major card scheme networks."
      }
    ]
  },

  likeForLikeSettlement: {
    title: "Like-for-like Settlement",
    description: [
      "Save on costly FX fees with like-for-like settlement"
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "💸",
        title: "Get paid without hidden fees",
        description: "Settle funds from your customers in the same currencies they pay in, avoiding costly FX conversions back to your home currency."
      },
      {
        icon: "🏦",
        title: "Store funds in your multi-currency wallet",
        description: "Settle payments directly into your multi-currency wallet and securely hold funds for future payments to local suppliers."
      },
      {
        icon: "🌍",
        title: "Pay suppliers in local currency",
        description: "Make fast, cost-effective transfers to local suppliers or easily make purchases with your Muxxus Borderless corporate cards."
      }
    ]
  },

  integrationMethods: {
    title: "Integration Methods",
    description: [
      "Choose the integration path that's right for you"
    ],
    leftImage: "/assets/imgs/muxxus/image/img5.jpg",
    items: [
      {
        icon: "🔌",
        title: "No-code eCommerce Plugins",
        description: "Access our simple plug-and-play integrations with popular platforms like Shopify, WooCommerce, and Magento."
      },
      {
        icon: "🌐",
        title: "Hosted payment page",
        description: "Save on development resources by redirecting customers to a Muxxus-hosted page on your own web store. We take care of the whole payments journey."
      },
      {
        icon: "🧩",
        title: "Drop-ins and embedded elements",
        description: "Use our pre-built UI components to easily design and show a unified payment methods list on your checkout page or show payment methods separately under different blocks."
      },
      {
        icon: "📱",
        title: "API or mobile SDK",
        description: "Take full control over your checkout experience by building directly via our API in the back end or accept payments in your iOS or Android app using our mobile SDKs."
      }
    ]
  },

  applications: {
    title: "Applications that adapt to your business model",
    description: [
      "Billing, subscriptions, and invoices"
    ],
    leftImage: "/assets/imgs/muxxus/image/img3.jpg",
    items: [
      {
        icon: "📊",
        title: "Billing",
        description: "Set up and automate your billing logic, from simple to complex usage-based pricing models."
      },
      {
        icon: "🔄",
        title: "Subscriptions",
        description: "Accept recurring customer payments with a built-in tool to manage subscription logic."
      },
      {
        icon: "📄",
        title: "Invoices",
        description: "Collect payments on invoices created by your accounting software."
      }
    ]
  },

  paymentsForPlatforms: {
    title: "Payments for Platforms",
    description: [
      "Embed payments into your platform or marketplace"
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "🌐",
        title: "Frictionless global pay-in and pay-out",
        description: "Enable a frictionless global pay-in and pay-out experience for your customers."
      },
      {
        icon: "🔗",
        title: "Programmatic connected accounts",
        description: "Programmatically create connected accounts, streamline onboarding and compliance, manage fund flows without requiring PayFac registration."
      },
      {
        icon: "💰",
        title: "Instant fund routing",
        description: "Instantly split proceeds and route funds to sellers after deducting your platform fee."
      }
    ],
    action_btn: {
      label: "Learn more",
      link: "#"
    }
  },

  forDevelopers: {
    title: "FOR DEVELOPERS",
    description: [
      "Designed for developers, by developers."
    ],
    leftImage: "/assets/imgs/muxxus/image/img5.jpg",
    items: [
      {
        icon: "⚙️",
        title: "Best-in-class developer tools",
        description: "Integrate in a fraction of the time with our high-quality developer capabilities, libraries, and APIs."
      },
      {
        icon: "🚀",
        title: "Complex use cases made easy",
        description: "Our comprehensive APIs and proprietary financial infrastructure can be tailored to suit your most complex requirements, all supported by our world-class technical teams."
      },
      {
        icon: "🔗",
        title: "Accelerated integrations",
        description: "We've partnered with the likes of Shopify, Xero, and NetSuite to engineer prebuilt integrations to help you get started quickly."
      }
    ],
    action_btn: {
      label: "See the docs",
      link: "#"
    }
  },
  
  supportedCountries: {
    title: "Grow your revenue by accepting a wide array of popular global and local payment methods",
    description: "Accept local payments from a wide range of popular payment methods. Availability dependent on merchant entity location.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XX-XX-XX-XXXX-XXXX-XX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Visa', 'Mastercard', 'American Express', 'Apple Pay', 'Google Pay']
      }
    ],
    accountExample: {
      title: "Global Payment Processing",
      description: "Accept payments worldwide with real-time processing and automated settlement.",
      capabilities: [
        "160+ payment methods",
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
      answer: "We support 160+ payment methods including credit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay), bank transfers, and alternative payment methods like Klarna and UnionPay. Support varies by country and local market requirements."
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
      question: "How does like-for-like settlement work?",
      answer: "Like-for-like settlement allows you to collect and settle funds in the same currency your customers pay in, avoiding costly FX conversions back to your home currency."
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

      {/* Borderless Commerce Section */}
      <MuxxusSection2 
        {...componentData.muxxusSection2} 
        fullWidthHeader={true} 
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />

      {/* Additional Features Section */}
      <MuxxusSection2 
        {...componentData.additionalFeatures} 
        fullWidthHeader={true} 
        backgroundColor="bg-gray-50"
        textColor="text-gray-900"
      />

      {/* Like-for-like Settlement Section */}
      <MuxxusSection2 
        {...componentData.likeForLikeSettlement} 
        fullWidthHeader={true} 
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />

      {/* Integration Methods Section */}
      <MuxxusSection2 
        {...componentData.integrationMethods} 
        fullWidthHeader={true} 
        backgroundColor="bg-gray-50"
        textColor="text-gray-900"
      />

      {/* Applications Section */}
      <MuxxusSection2 
        {...componentData.applications} 
        fullWidthHeader={true} 
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />

      {/* Payments for Platforms Section */}
      <MuxxusSection2 
        {...componentData.paymentsForPlatforms} 
        fullWidthHeader={true} 
        backgroundColor="bg-gray-50"
        textColor="text-gray-900"
      />

      {/* For Developers Section */}
      <MuxxusSection2 
        {...componentData.forDevelopers} 
        fullWidthHeader={true} 
        backgroundColor="bg-white"
        textColor="text-gray-900"
        buttonClassName="bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
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