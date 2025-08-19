import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaArrowRight, FaGlobe, FaShieldAlt, FaClock, FaCreditCard } from "react-icons/fa";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const BusinessAccountsPage = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Access accounts in 50+ currencies across 190+ countries"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Compliant",
      description: "Bank-grade security with full regulatory compliance"
    },
    {
      icon: FaClock,
      title: "Real-time Processing",
      description: "Instant account updates and transaction processing"
    },
    {
      icon: FaCreditCard,
      title: "Integrated Solutions",
      description: "Seamless integration with your existing business tools"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I open a business account?",
      answer: "Most business accounts can be opened within 24-48 hours with our streamlined onboarding process."
    },
    {
      question: "What currencies are supported?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, and many more."
    },
    {
      question: "Are there minimum balance requirements?",
      answer: "No minimum balance requirements for most account types. We believe in accessible business banking."
    },
    {
      question: "How secure are the accounts?",
      answer: "All accounts feature bank-grade security with 256-bit encryption and multi-factor authentication."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Up to 5 currencies", "Basic reporting", "Email support", "Standard processing"]
    },
    {
      name: "Professional",
      price: "$29/month",
      features: ["Up to 20 currencies", "Advanced reporting", "Priority support", "Faster processing"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited currencies", "Custom reporting", "Dedicated support", "Instant processing"]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "#" },
                { label: "Business Accounts", href: "/business-accounts", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Business Accounts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your international business with our comprehensive business account solutions. 
              Manage multiple currencies, process global payments, and optimize your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="Learn More" 
                href="#features"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Why Choose Our Business Accounts?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Business Accounts Work</h2>
            <p className="text-lg text-gray-600">Simple steps to get your business account up and running</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply Online</h3>
              <p className="text-gray-600">Complete our simple online application in just a few minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Verification</h3>
              <p className="text-gray-600">Our team verifies your business details within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Banking</h3>
              <p className="text-gray-600">Access your account and start managing your global finances</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about business accounts</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">No hidden fees, no surprises</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaArrowRight className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <CircleFillButton 
                    text="Get Started" 
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses using Muxxus for their global financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Open Account" 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700"
            />
            <CircleFillButton 
              text="Contact Sales" 
              href="/contact"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default BusinessAccountsPage; 