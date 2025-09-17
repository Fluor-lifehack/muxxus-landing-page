"use client";

import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import SecondaryNav from "@/components/navigation/SecondaryNav";
import BusinessAccountsLinks from "@/components/elements/bottomSection/BusinessAccountsLinks";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import { Globe, Zap, Shield, Users, ArrowRight, CheckCircle, Star, Play, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function BusinessAccountsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: "Services", href: "/service" },
    { label: "Design", href: "/service/design" },
    { label: "Business Accounts", isActive: true }
  ];

  const secondaryNavItems = [
    {
      title: "Global Accounts",
      href: "/business-accounts/global",
      description: "Multi-currency accounts for global business",
      iconName: "Globe",
      features: ["50+ Currencies", "Instant Setup", "Global Compliance"]
    },
    {
      title: "FX & Transfers",
      href: "/business-accounts/fx-transfers",
      description: "Foreign exchange and international transfers",
      iconName: "Zap",
      features: ["Competitive Rates", "200+ Countries", "Real-time FX"]
    },
    {
      title: "Multi-currency",
      href: "/business-accounts",
      description: "Manage multiple currencies in one platform",
      iconName: "Building2",
      features: ["Unified Dashboard", "Currency Conversion", "Risk Management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small businesses",
      features: ["Up to 5 currencies", "Basic reporting", "Email support", "Standard FX rates", "Mobile app access"],
      cta: "Get Started",
      popular: false,
      savings: null
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing businesses",
      features: ["Up to 20 currencies", "Advanced analytics", "Priority support", "Competitive FX rates", "API access", "Multi-user accounts"],
      cta: "Start Free Trial",
      popular: true,
      savings: "Save 20%"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited currencies", "Custom integrations", "Dedicated support", "Best FX rates", "White-label options", "SLA guarantee"],
      cta: "Contact Sales",
      popular: false,
      savings: null
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CFO",
      company: "TechFlow Inc.",
      content: "We've saved over $50,000 in FX fees since switching to this platform. The multi-currency accounts have transformed how we operate globally.",
      rating: 5,
      avatar: "/assets/imgs/team/team-1.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "Global Retail Co.",
      content: "Setting up accounts in 15 countries took just 2 weeks instead of 6 months. The compliance team loves the automated processes.",
      rating: 5,
      avatar: "/assets/imgs/team/team-2.jpg"
    },
    {
      name: "Emma Thompson",
      role: "Founder",
      company: "StartupXYZ",
      content: "As a startup, we needed global banking without the complexity. This platform made it possible to scale internationally from day one.",
      rating: 5,
      avatar: "/assets/imgs/team/team-3.jpg"
    }
  ];

  const integrations = [
    { name: "Shopify", logo: "🛍️", category: "E-commerce" },
    { name: "Stripe", logo: "💳", category: "Payments" },
    { name: "QuickBooks", logo: "📊", category: "Accounting" },
    { name: "Salesforce", logo: "☁️", category: "CRM" },
    { name: "Xero", logo: "📈", category: "Accounting" },
    { name: "WooCommerce", logo: "🛒", category: "E-commerce" },
    { name: "HubSpot", logo: "🎯", category: "Marketing" },
    { name: "Zapier", logo: "🔗", category: "Automation" }
  ];

  const faqs = [
    {
      question: "How long does it take to open a business account?",
      answer: "Most businesses can open an account in under 10 minutes. Verification typically takes 1-2 business days, and you'll have full access within 24 hours of approval."
    },
    {
      question: "What currencies do you support?",
      answer: "We support 50+ currencies including USD, EUR, GBP, JPY, AUD, CAD, CHF, and many more. New currencies are added regularly based on business demand."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees. We believe in transparent pricing. You'll see exactly what you pay for FX, transfers, and account maintenance. Many services are included free with your plan."
    },
    {
      question: "How secure are the accounts?",
      answer: "We use bank-level security with 256-bit encryption, SOC 2 Type II certification, and real-time fraud monitoring. Your funds are held in regulated financial institutions."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes! We offer REST APIs, webhooks, and pre-built integrations with major platforms like Shopify, Stripe, QuickBooks, and more. Custom integrations are available for Enterprise customers."
    }
  ];

  const stats = [
    { number: "50+", label: "Currencies Supported" },
    { number: "200+", label: "Countries Covered" },
    { number: "10,000+", label: "Businesses Trust Us" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Global Support" },
    { number: "<10min", label: "Account Setup" }
  ];

  return (
    <>
      <MuxxusHeader />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section - Design Muxxus avec noirs */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Global Business
                <span className="block text-gray-900">Banking Made Simple</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Open multi-currency business accounts in minutes. Operate globally with local banking infrastructure, competitive FX rates, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="group bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Open Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-200">
                  Schedule Demo
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Trusted by 10,000+ businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 global support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Navigation */}
        <SecondaryNav
          title="Business Account Types"
          description="Choose the account that fits your global business needs"
          items={secondaryNavItems}
          currentPath="/service/design/business-accounts"
        />

        {/* Features Grid - Design Muxxus avec noirs */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to scale globally
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for modern businesses that operate across borders and need reliable, fast, and secure financial infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <Globe className="w-8 h-8 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Banking</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Open accounts in 50+ currencies across 200+ countries</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Local banking infrastructure
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Multi-currency support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Global compliance
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <Zap className="w-8 h-8 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Setup</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Get started in minutes, not weeks</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Digital onboarding
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time verification
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Same-day activation
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <Shield className="w-8 h-8 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Bank-level security with advanced compliance</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    SOC 2 Type II certified
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    256-bit encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time monitoring
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <Users className="w-8 h-8 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Collaborate with your team seamlessly</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Role-based access
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Multi-user accounts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Activity tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See it in action
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Watch how easy it is to set up your global business accounts and start operating internationally in minutes.
              </p>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <button className="bg-white text-gray-900 p-6 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg">
                    <Play className="w-12 h-12 ml-1" />
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Platform Demo</h3>
                  <p className="text-gray-600">Learn how to open accounts, manage currencies, and integrate with your existing systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Design Muxxus avec noirs */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start free and scale as you grow. No hidden fees, no surprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-gray-900 bg-white shadow-2xl scale-105' 
                    : 'border-gray-200 bg-white hover:border-gray-900 hover:shadow-xl'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {plan.savings && (
                    <div className="absolute -top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {plan.savings}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                    {plan.price !== "Custom" && <p className="text-gray-500">per month</p>}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by businesses worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers say about their experience with global business banking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Integrate with your favorite tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect seamlessly with the platforms you already use to manage your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-200 bg-white">
                  <div className="text-4xl mb-4">{integration.logo}</div>
                  <div className="font-semibold text-gray-900 mb-2">{integration.name}</div>
                  <div className="text-sm text-gray-600">{integration.category}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                View all integrations →
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our business accounts.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Design Muxxus avec noirs */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to go global?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to scale internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <BusinessAccountsLinks />

        <MuxxusFooter />
      </main>
    </>
  );
}
