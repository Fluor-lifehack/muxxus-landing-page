import Image from "next/image";
import ServiceDetails from "@/app/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/elements/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaArrowRight, FaGlobe, FaShieldAlt, FaClock, FaCreditCard } from "react-icons/fa";
import Link from "next/link";

const BusinessAccountsPage = () => {
  const service = {
    title: "Business Accounts",
    subtitle: "Multi-currency business accounts for global operations",
    description: "Streamline your international business with our comprehensive business account solutions. Manage multiple currencies, process global payments, and optimize your financial operations.",
    features: [
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
    ],
    faqs: [
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
    ],
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "No hidden fees, no surprises",
      plans: [
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
      ]
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { name: "Home", path: "/" },
                { name: "Products", path: "#" },
                { name: "Business Accounts", path: "/business-accounts" }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {service.description}
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
                variant="outline"
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
            subtitle="Built for modern businesses that operate globally"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {service.features.map((feature, index) => (
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

      {/* Service Details */}
      <ServiceDetails {...service} />

      {/* FAQ Section */}
      <ServiceDetailsFaq faqs={service.faqs} faqTitle="Frequently Asked Questions" />

      {/* Client Area */}
      <ClientArea />

      {/* Pricing Section */}
      <PricingArea {...service.pricing} />

      {/* Contact Banner */}
      <ContactBanner 
        contactTitle="Ready to Get Started?"
        btn_text="Contact Us Today"
      />
    </main>
  );
};

export default BusinessAccountsPage; 