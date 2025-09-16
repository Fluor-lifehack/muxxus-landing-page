import { notFound } from "next/navigation";
import MDXContent from "@/components/tools/MDXContent";
import ServiceDetails from "@/components/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import Image from "next/image";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

export default function GlobalAccountsPage() {
  // Static service data for Global Accounts
  const service = {
    slug: "global-accounts",
        data: {
          draft: false,
          id: 1,
      title: "Global Accounts",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
      description: "Multi-currency business accounts for global operations. Open accounts in 50+ currencies across 200+ countries with local banking infrastructure.",
      contactTitle: "Ready to open your global account?",
      btn_text: "Get Started",
          features: [
            "Multi-currency support",
            "Global compliance",
        "Local banking infrastructure",
        "Real-time operations",
            "API integration",
        "24/7 support"
      ],
      faq_title: "Frequently Asked Questions",
    faqs: [
      {
        question: "How quickly can I open a global account?",
        answer: "Standard accounts can be opened within 24-48 hours, while instant accounts provide same-day activation. Premium and enterprise accounts may take 3-5 business days for enhanced due diligence."
      },
      {
        question: "What currencies are supported?",
        answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
      },
      {
        question: "Are there monthly maintenance fees?",
        answer: "Standard accounts have a minimal monthly fee of $25, Premium accounts cost $99/month, and Enterprise accounts have custom pricing. All fees are transparent with no hidden charges."
      },
      {
        question: "How secure are global accounts?",
        answer: "All accounts are protected by bank-level security including 256-bit encryption, multi-factor authentication, real-time fraud monitoring, and compliance with international banking standards."
      },
      {
        question: "Can I integrate with my existing systems?",
        answer: "Yes, all account tiers offer API access. Premium and Enterprise accounts include advanced integration features, webhooks, and dedicated technical support for seamless system integration."
        }
      ],
      meta: {
        meta_title: "Global Accounts - Multi-currency Business Banking | MUXXUS",
        meta_description: "Open multi-currency business accounts in 50+ currencies across 200+ countries. Global compliance, local banking infrastructure, and 24/7 support for international business operations."
      }
    },
    content: `
# Comprehensive Global Banking Solutions

Our global accounts provide businesses with the infrastructure needed to operate internationally with confidence. Whether you're a startup looking to expand globally or an enterprise managing operations across multiple countries, our solutions scale with your business needs.

## Why Choose Global Accounts?

- **Multi-Currency Support:** Hold and transact in 50+ currencies
- **Global Compliance:** Built-in compliance with international banking standards
- **Local Infrastructure:** Banking infrastructure in 200+ countries
- **Real-time Operations:** 24/7 access to your global accounts

## Account Types

### Standard Global Account
Perfect for businesses starting their global journey. Includes multi-currency support, basic compliance features, and email support.

**Features:**
- Multi-currency support
- Global compliance
- Standard banking hours
- Email support
- Monthly fee: $25

### Premium Global Account
Advanced features for growing businesses including priority support, enhanced compliance, and bulk operations.

**Features:**
- Advanced multi-currency
- Priority support
- Enhanced compliance
- Bulk operations
- API access
- Monthly fee: $99

### Enterprise Global Account
Custom solutions for large organizations with dedicated support, API integration, and white-label options.

**Features:**
- Custom account limits
- API integration
- Dedicated support
- White-label solutions
- Custom pricing

### Instant Global Account
Same-day activation for businesses that need immediate global banking access.

**Features:**
- Same-day activation
- Instant multi-currency
- Real-time verification
- Immediate access
- Monthly fee: $49

## Getting Started

Opening a global account is straightforward. Our streamlined onboarding process ensures you can start transacting internationally within 24-48 hours for standard accounts, or instantly for our instant account option.

## Global Reach

Our network spans across **200+ countries** with local banking infrastructure, ensuring your business can operate seamlessly wherever you need to be.

## Compliance & Security

All accounts are built with enterprise-grade security and compliance features:
- 256-bit encryption
- Multi-factor authentication
- Real-time fraud monitoring
- International banking standards compliance
- Regular security audits
    `
  };

  // Pricing data
  const pricingData = {
    pricing: {
      title: "Global Account Pricing",
      cards: [
        {
          tag: "Standard",
          price: "$25",
          feature_list: [
            { text: "Multi-currency support" },
            { text: "Global compliance" },
            { text: "Standard support" },
            { text: "24/7 access" }
          ],
          btn_title: "Start Free Trial"
        },
        {
          tag: "Premium",
          price: "$99",
          feature_list: [
            { text: "Advanced multi-currency" },
            { text: "Priority support" },
            { text: "Enhanced compliance" },
            { text: "API access" }
          ],
          btn_title: "Get Premium"
        },
        {
          tag: "Enterprise",
          price: "Custom",
          feature_list: [
            { text: "Custom limits" },
            { text: "API integration" },
            { text: "Dedicated support" },
            { text: "White-label solutions" }
          ],
          btn_title: "Contact Sales"
        }
      ]
    }
  };

  // Client brands data
  const brands = {
    brands: [
      {
        id: 1,
        name: "Global Corp",
        image: {
          dark: "/assets/imgs/brand/brand-1.png",
          light: "/assets/imgs/brand/brand-1.png"
        }
      },
      {
        id: 2,
        name: "International Ltd",
        image: {
          dark: "/assets/imgs/brand/brand-2.png",
          light: "/assets/imgs/brand/brand-2.png"
        }
      },
      {
        id: 3,
        name: "Worldwide Inc",
        image: {
          dark: "/assets/imgs/brand/brand-3.png",
          light: "/assets/imgs/brand/brand-3.png"
        }
      }
    ]
  };

  const { title, meta, faqs, faq_title, contactTitle, btn_text } = service.data;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Accounts", href: "/service/accounts" },
    { label: "Global Accounts", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* SEO Data */}
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />

      {/* Service Details */}
      <ServiceDetails {...service} />

      {/* Service Content */}
      <div className="service-details-inner">
        {/* Hero Content Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Comprehensive Global Banking Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our global accounts provide businesses with the infrastructure needed to operate internationally 
                  with confidence. Whether you&apos;re a startup looking to expand globally or an enterprise managing 
                  operations across multiple countries, our solutions scale with your business needs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">50+ Currencies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">200+ Countries</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/assets/imgs/gallery/img-sd-89.png" 
                  alt="Global Banking Network"
                  className="rounded-lg shadow-2xl"
                  width={500}
                  height={500}
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-600">Countries Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="container2">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Global Accounts?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for modern businesses that need reliable, secure, and scalable global banking solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Multi-Currency" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Multi-Currency Support</h4>
                <p className="text-gray-600">Hold and transact in 50+ currencies with real-time exchange rates</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Compliance" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Global Compliance</h4>
                <p className="text-gray-600">Built-in compliance with international banking standards</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Infrastructure" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Local Infrastructure</h4>
                <p className="text-gray-600">Banking infrastructure in 200+ countries worldwide</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Operations" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Real-time Operations</h4>
                <p className="text-gray-600">24/7 access to your global accounts and operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Account Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container2">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Account Type
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the perfect global account solution for your business needs and scale
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Standard Account */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Standard" className="w-12 h-12 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Standard Global Account</h4>
                    <p className="text-blue-600 font-semibold">$25/month</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for businesses starting their global journey. Includes multi-currency support, 
                  basic compliance features, and email support.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Multi-currency support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Global compliance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Standard banking hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* Premium Account */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Premium" className="w-12 h-12 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Premium Global Account</h4>
                    <p className="text-blue-600 font-semibold">$99/month</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Advanced features for growing businesses including priority support, enhanced compliance, 
                  and bulk operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Advanced multi-currency
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Enhanced compliance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    API access
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Premium
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {/* Enterprise Account */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Enterprise" className="w-12 h-12 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Enterprise Global Account</h4>
                    <p className="text-blue-600 font-semibold">Custom Pricing</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Custom solutions for large organizations with dedicated support, API integration, 
                  and white-label options.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Custom account limits
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    API integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    White-label solutions
                  </li>
                </ul>
                <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                  Contact Sales
                </button>
              </div>

              {/* Instant Account */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Instant" className="w-12 h-12 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Instant Global Account</h4>
                    <p className="text-blue-600 font-semibold">$49/month</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Same-day activation for businesses that need immediate global banking access.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Same-day activation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Instant multi-currency
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Real-time verification
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Immediate access
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Instant
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-16">
          <div className="container2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Getting Started
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Opening a global account is straightforward. Our streamlined onboarding process ensures 
                  you can start transacting internationally within 24-48 hours for standard accounts, 
                  or instantly for our instant account option.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Complete online application</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <span className="text-gray-700">Document verification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <span className="text-gray-700">Account activation</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/assets/imgs/gallery/img-sd-89.png" 
                  alt="Global Banking Process"
                  className="rounded-lg shadow-2xl"
                  width={500}
                  height={500}
                />
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24-48h</div>
                    <div className="text-sm text-gray-600">Setup Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 bg-gray-50">
          <div className="container2">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All accounts are built with the highest security standards and compliance features
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Encryption" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">256-bit Encryption</h4>
                <p className="text-gray-600">Military-grade encryption for all transactions and data</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Authentication" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Multi-Factor Auth</h4>
                <p className="text-gray-600">Multiple layers of authentication for account security</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/imgs/icon/icon-s-3-light.png" alt="Monitoring" className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Real-time Monitoring</h4>
                <p className="text-gray-600">24/7 fraud detection and security monitoring</p>
              </div>
            </div>
          </div>
        </section>
        
        <ServiceDetailsFaq faqs={faqs} faqTitle={faq_title} />
        <ClientArea brands={brands.brands} />
        <ContactBanner contactTitle={contactTitle} btn_text={btn_text} />
        <PricingArea {...pricingData.pricing} />
        <MuxxusFooter />
      </div>
    </main>
  );
}
