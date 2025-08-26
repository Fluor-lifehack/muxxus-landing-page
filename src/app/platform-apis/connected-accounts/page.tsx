import { Metadata } from "next";
import DetailHero from "@/components/hero/DetailHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";
import FeatureSection from "@/components/muxxus/FeatureSection";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";
import SupportedCountriesSection from "@/components/muxxus/SupportedCountriesSection";

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

// Nouvelles sections
const apiEndpointsData = {
  title: "API Endpoints & Integration",
  subtitle: "Powerful endpoints for seamless account creation",
  description: "Our RESTful API provides comprehensive endpoints for creating, managing, and monitoring business accounts programmatically.",
  endpoints: [
    {
      method: "POST",
      endpoint: "/v1/accounts",
      description: "Create a new business account",
      parameters: ["business_info", "kyc_documents", "compliance_data"]
    },
    {
      method: "GET",
      endpoint: "/v1/accounts/{id}",
      description: "Retrieve account details and status",
      parameters: ["account_id"]
    },
    {
      method: "PUT",
      endpoint: "/v1/accounts/{id}",
      description: "Update account information",
      parameters: ["account_id", "update_data"]
    },
    {
      method: "POST",
      endpoint: "/v1/accounts/{id}/verify",
      description: "Initiate KYC verification process",
      parameters: ["account_id", "verification_data"]
    }
  ]
};

const integrationStepsData = {
  title: "Integration Steps",
  subtitle: "Get started in minutes, not days",
  description: "Follow these simple steps to integrate our Connected Accounts API into your platform.",
  steps: [
    {
      number: "01",
      title: "API Key Setup",
      description: "Generate your API keys from the dashboard and configure authentication headers."
    },
    {
      number: "02",
      description: "Test Environment",
      title: "Use our sandbox environment to test account creation and verification flows."
    },
    {
      number: "03",
      title: "Production Integration",
      description: "Deploy to production with confidence using our comprehensive testing tools."
    },
    {
      number: "04",
      title: "Go Live",
      description: "Start creating accounts for your customers with real-time processing."
    }
  ]
};

const pricingData = {
  title: "Pricing & Plans",
  subtitle: "Transparent pricing for every business size",
  description: "Choose the plan that fits your needs with no hidden fees or setup costs.",
  plans: [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "Up to 100 accounts/month",
        "Basic KYC automation",
        "Email support",
        "Standard compliance"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      features: [
        "Up to 1,000 accounts/month",
        "Advanced AI verification",
        "Priority support",
        "Enhanced compliance",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited accounts",
        "Custom AI models",
        "Dedicated support",
        "Full compliance suite",
        "White-label solutions"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ]
};

const securityData = {
  title: "Security & Compliance",
  subtitle: "Bank-grade security for your peace of mind",
  description: "We maintain the highest security standards and compliance certifications to protect your business and customers.",
  features: [
    {
      icon: "🔒",
      title: "SOC 2 Type II Certified",
      description: "Annual security audits and compliance verification"
    },
    {
      icon: "🛡️",
      title: "End-to-End Encryption",
      description: "256-bit AES encryption for all data in transit and at rest"
    },
    {
      icon: "🔐",
      title: "Multi-Factor Authentication",
      description: "Advanced MFA for all API access and admin functions"
    },
    {
      icon: "📋",
      title: "GDPR & CCPA Compliant",
      description: "Full compliance with international data protection regulations"
    }
  ]
};

const performanceData = {
  title: "Performance Metrics",
  subtitle: "Enterprise-grade reliability and speed",
  description: "Our platform is built for scale with 99.99% uptime and sub-second response times.",
  metrics: [
    {
      value: "99.99%",
      label: "Uptime SLA",
      description: "Guaranteed platform availability"
    },
    {
      value: "< 200ms",
      label: "API Response Time",
      description: "Average response time for all endpoints"
    },
    {
      value: "10,000+",
      label: "Accounts/Second",
      description: "Peak processing capacity"
    },
    {
      value: "24/7",
      label: "Monitoring",
      description: "Real-time performance tracking"
    }
  ]
};

const useCasesData = {
  title: "Use Cases & Industries",
  subtitle: "Powering innovation across industries",
  description: "Discover how businesses across different sectors use our Connected Accounts API to transform their operations.",
  industries: [
    {
      name: "Fintech",
      description: "Embedded banking, neobanks, and financial platforms",
      examples: ["Digital banking apps", "Payment processors", "Investment platforms"]
    },
    {
      name: "E-commerce",
      description: "Marketplaces and online retailers with global reach",
      examples: ["Cross-border marketplaces", "Subscription services", "Digital goods platforms"]
    },
    {
      name: "SaaS",
      description: "Software companies expanding globally",
      examples: ["B2B platforms", "Freemium services", "Enterprise software"]
    },
    {
      name: "Gig Economy",
      description: "Platforms connecting workers and clients worldwide",
      examples: ["Freelance platforms", "Delivery services", "Professional networks"]
    }
  ]
};

const documentationData = {
  title: "Documentation & Resources",
  subtitle: "Everything you need to get started",
  description: "Comprehensive documentation, SDKs, and developer tools to accelerate your integration.",
  resources: [
    {
      title: "API Reference",
      description: "Complete API documentation with examples and code snippets",
      link: "/developers/api-reference",
      icon: "📚"
    },
    {
      title: "SDKs & Libraries",
      description: "Official SDKs for Node.js, Python, Java, and more",
      link: "/developers/sdks",
      icon: "⚙️"
    },
    {
      title: "Postman Collection",
      description: "Ready-to-use Postman collection for testing",
      link: "/developers/postman",
      icon: "📮"
    },
    {
      title: "Developer Support",
      description: "24/7 technical support and developer community",
      link: "/developers/support",
      icon: "💬"
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

      {/* Supported Countries Section */}
      <SupportedCountriesSection {...componentData.supportedCountries} />

      {/* API Endpoints Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{apiEndpointsData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{apiEndpointsData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{apiEndpointsData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apiEndpointsData.endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                    endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="ml-3 text-sm bg-gray-100 px-2 py-1 rounded">{endpoint.endpoint}</code>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{endpoint.description}</h3>
                <div className="text-sm text-gray-600">
                  <strong>Parameters:</strong> {endpoint.parameters.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{integrationStepsData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{integrationStepsData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{integrationStepsData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {integrationStepsData.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{pricingData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{pricingData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{pricingData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.plans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-sm border-2 ${
                plan.popular ? 'border-primary' : 'border-gray-200'
              } relative`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{securityData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{securityData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{securityData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityData.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{performanceData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{performanceData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{performanceData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {performanceData.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{useCasesData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{useCasesData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{useCasesData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCasesData.industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{documentationData.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{documentationData.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{documentationData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentationData.resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href={resource.link} className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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