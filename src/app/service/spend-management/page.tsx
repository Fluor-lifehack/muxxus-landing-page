import Image from "next/image";
import ServiceDetails from "@/app/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/app/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

export default function SpendManagementPage() {
  // Static service data for Spend Management
  const service = {
    slug: "spend-management",
    data: {
      draft: false,
      id: 1,
      title: "Spend Management",
      icon: "/assets/imgs/icon/icon-s-3-light.png",
      bg_video: "/assets/video/video.mp4",
      image: "/assets/imgs/gallery/img-sd-89.png",
      description: "Comprehensive spend management solutions for businesses. Control expenses, automate approvals, and gain real-time insights into your spending patterns.",
      contactTitle: "Ready to optimize your spend management?",
      btn_text: "Get Started",
      features: [
        "Expense automation",
        "Real-time tracking",
        "Approval workflows",
        "Spend analytics",
        "Vendor management",
        "Policy compliance"
      ],
      faq_title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How quickly can I implement spend management?",
          answer: "Basic setup can be completed within 24-48 hours. Full implementation with custom workflows and integrations typically takes 1-2 weeks depending on your business complexity."
        },
        {
          question: "What types of expenses can be managed?",
          answer: "We support all expense types including travel, office supplies, software subscriptions, vendor payments, and custom categories. Our system is flexible and can be customized to your specific needs."
        },
        {
          question: "Are there monthly maintenance fees?",
          answer: "Standard plans start at $29/month per user, Professional plans cost $79/month per user, and Enterprise plans have custom pricing. All plans include full feature access and support."
        },
        {
          question: "How secure is the expense data?",
          answer: "All data is protected by bank-level security including 256-bit encryption, multi-factor authentication, real-time fraud monitoring, and compliance with international security standards."
        },
        {
          question: "Can I integrate with my existing accounting systems?",
          answer: "Yes, we offer integrations with major accounting platforms including QuickBooks, Xero, Sage, and NetSuite. Enterprise plans include custom API access for seamless system integration."
        }
      ],
      meta: {
        meta_title: "Spend Management - Expense Control & Analytics | MUXXUS",
        meta_description: "Comprehensive spend management solutions for businesses. Control expenses, automate approvals, and gain real-time insights into your spending patterns with enterprise-grade security."
      }
    },
    content: `
# Comprehensive Spend Management Solutions

Our spend management platform provides businesses with complete control over their expenses while automating processes and providing real-time insights. Whether you're a startup looking to control costs or an enterprise managing complex spending across multiple departments, our solutions scale with your business needs.

## Why Choose Spend Management?

- **Expense Automation:** Streamline expense submission and approval processes
- **Real-time Tracking:** Monitor spending in real-time across all categories
- **Policy Compliance:** Ensure all expenses follow company policies
- **Vendor Management:** Centralize vendor relationships and payments

## Service Types

### Corporate Cards
Streamlined corporate card management with real-time spending controls and automated reconciliation.

**Features:**
- Virtual and physical cards
- Spending limits and controls
- Real-time transaction alerts
- Automated expense categorization

### Expense Management
Comprehensive expense tracking and approval workflows for all business expenses.

**Features:**
- Mobile expense submission
- Automated approval workflows
- Receipt capture and storage
- Policy compliance checks

### Budget Controls
Advanced budgeting and forecasting tools to keep spending on track.

**Features:**
- Departmental budgets
- Real-time budget tracking
- Forecasting and planning
- Variance analysis

### Spend Analytics
Powerful reporting and analytics to optimize spending decisions.

**Features:**
- Custom dashboards
- Trend analysis
- Vendor performance metrics
- Cost optimization insights

## Getting Started

Implementing spend management is straightforward. Our streamlined onboarding process ensures you can start controlling expenses within 24-48 hours for basic setup, or 1-2 weeks for full implementation.

## Key Benefits

Our platform delivers measurable results:
- **30% reduction** in processing time
- **25% decrease** in policy violations
- **40% improvement** in spend visibility
- **50% faster** expense approvals

## Security & Compliance

All features are built with enterprise-grade security:
- 256-bit encryption
- Multi-factor authentication
- Real-time fraud monitoring
- SOC 2 Type II compliance
- Regular security audits
    `
  };

  // Pricing data
  const pricingData = {
    pricing: {
      title: "Spend Management Pricing",
      cards: [
        {
          tag: "Starter",
          price: "$29",
          feature_list: [
            { text: "Basic expense tracking" },
            { text: "Mobile app access" },
            { text: "Standard reporting" },
            { text: "Email support" }
          ],
          btn_title: "Start Free Trial"
        },
        {
          tag: "Professional",
          price: "$79",
          feature_list: [
            { text: "Advanced workflows" },
            { text: "Custom approvals" },
            { text: "Advanced analytics" },
            { text: "Priority support" }
          ],
          btn_title: "Get Professional"
        },
        {
          tag: "Enterprise",
          price: "Custom",
          feature_list: [
            { text: "Custom integrations" },
            { text: "White-label options" },
            { text: "Dedicated support" },
            { text: "Custom pricing" }
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
        name: "TechCorp",
        image: {
          dark: "/assets/imgs/brand/brand-1.png",
          light: "/assets/imgs/brand/brand-1.png"
        }
      },
      {
        id: 2,
        name: "Finance Ltd",
        image: {
          dark: "/assets/imgs/brand/brand-2.png",
          light: "/assets/imgs/brand/brand-2.png"
        }
      },
      {
        id: 3,
        name: "Global Inc",
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
    { label: "Spend Management", isActive: true },
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
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="container2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Comprehensive Spend Management Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our spend management platform provides businesses with complete control over their expenses 
                  while automating processes and providing real-time insights. Whether you&apos;re a startup looking 
                  to control costs or an enterprise managing complex spending, our solutions scale with your needs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">30% Faster Processing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Real-time Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Policy Compliance</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/assets/imgs/gallery/img-sd-89.png" 
                  alt="Spend Management Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">30%</div>
                    <div className="text-sm text-gray-600">Faster Processing</div>
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
                Why Choose Spend Management?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for modern businesses that need reliable, secure, and scalable expense control solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Automation" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Expense Automation</h4>
                <p className="text-gray-600">Streamline expense submission and approval processes automatically</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Tracking" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Real-time Tracking</h4>
                <p className="text-gray-600">Monitor spending in real-time across all categories and departments</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Compliance" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Policy Compliance</h4>
                <p className="text-gray-600">Ensure all expenses follow company policies automatically</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Analytics" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Spend Analytics</h4>
                <p className="text-gray-600">Powerful insights to optimize spending decisions and reduce costs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container2">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Complete Spend Management Suite
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to control, track, and optimize your business spending
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Corporate Cards" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-semibold">Corporate Cards</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Streamlined corporate card management with real-time spending controls and automated reconciliation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Virtual and physical cards</li>
                  <li>• Spending limits and controls</li>
                  <li>• Real-time transaction alerts</li>
                  <li>• Automated expense categorization</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Expense Management" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-semibold">Expense Management</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive expense tracking and approval workflows for all business expenses.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mobile expense submission</li>
                  <li>• Automated approval workflows</li>
                  <li>• Receipt capture and storage</li>
                  <li>• Policy compliance checks</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Budget Controls" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-semibold">Budget Controls</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced budgeting and forecasting tools to keep spending on track.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Departmental budgets</li>
                  <li>• Real-time budget tracking</li>
                  <li>• Forecasting and planning</li>
                  <li>• Variance analysis</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Spend Analytics" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-semibold">Spend Analytics</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Powerful reporting and analytics to optimize spending decisions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom dashboards</li>
                  <li>• Trend analysis</li>
                  <li>• Vendor performance metrics</li>
                  <li>• Cost optimization insights</li>
                </ul>
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
                  Implementing spend management is straightforward. Our streamlined onboarding process ensures 
                  you can start controlling expenses within 24-48 hours for basic setup, or 1-2 weeks for 
                  full implementation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Platform setup and configuration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <span className="text-gray-700">User training and onboarding</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <span className="text-gray-700">Go-live and optimization</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/assets/imgs/gallery/img-sd-89.png" 
                  alt="Spend Management Process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24-48h</div>
                    <div className="text-sm text-gray-600">Basic Setup</div>
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
                All features are built with the highest security standards and compliance features
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Encryption" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">256-bit Encryption</h4>
                <p className="text-gray-600">Military-grade encryption for all transactions and data</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Authentication" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Multi-Factor Auth</h4>
                <p className="text-gray-600">Multiple layers of authentication for account security</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src="/assets/imgs/icon/icon-s-3-light.png" alt="Compliance" width={32} height={32} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">SOC 2 Compliance</h4>
                <p className="text-gray-600">Industry-standard security and compliance certification</p>
              </div>
            </div>
          </div>
        </section>
        
        <ServiceDetailsFaq faqs={faqs} faqTitle={faq_title} />
        <ClientArea brands={brands.brands} />
        <ContactBanner contactTitle={contactTitle} btn_text={btn_text} />
        <PricingArea {...pricingData.pricing} />
      </div>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
}
