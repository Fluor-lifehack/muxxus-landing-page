import Image from "next/image";
import ServiceDetails from "@/app/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/elements/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaArrowRight, FaGlobe, FaShieldAlt, FaClock, FaCreditCard, FaExchangeAlt } from "react-icons/fa";
import Link from "next/link";

const FXTransfersPage = () => {
  const service = {
    title: "FX & Transfers",
    subtitle: "High-speed international transfers with competitive rates",
    description: "Send money globally with lightning speed and the best exchange rates. Our FX & Transfers service provides instant international payments with transparent pricing and real-time tracking.",
    features: [
      {
        icon: FaExchangeAlt,
        title: "Competitive Rates",
        description: "Get interbank exchange rates with minimal markup"
      },
      {
        icon: FaGlobe,
        title: "Global Coverage",
        description: "Send to 200+ countries in 50+ currencies"
      },
      {
        icon: FaClock,
        title: "Instant Transfers",
        description: "Most transfers complete within minutes"
      },
      {
        icon: FaShieldAlt,
        title: "Secure & Compliant",
        description: "Bank-grade security with full regulatory compliance"
      }
    ],
    faqs: [
      {
        question: "How fast are international transfers?",
        answer: "Most transfers complete within 2-24 hours, with many completing in minutes for major corridors."
      },
      {
        question: "What are the exchange rates?",
        answer: "We offer interbank rates with minimal markup, typically 0.1-0.5% above the mid-market rate."
      },
      {
        question: "Are there transfer limits?",
        answer: "Limits vary by account type and compliance requirements. Contact us for specific limits."
      },
      {
        question: "How do I track my transfer?",
        answer: "All transfers come with real-time tracking and instant notifications at each stage."
      }
    ],
    pricing: {
      title: "Transparent FX Pricing",
      subtitle: "No hidden fees, competitive rates",
      plans: [
        {
          name: "Standard",
          price: "0.5%",
          features: ["Standard processing", "2-24 hour delivery", "Email support", "Basic tracking"]
        },
        {
          name: "Priority",
          price: "0.3%",
          features: ["Faster processing", "1-4 hour delivery", "Priority support", "Advanced tracking"]
        },
        {
          name: "Enterprise",
          price: "0.1%",
          features: ["Instant processing", "Minutes delivery", "Dedicated support", "Custom solutions"]
        }
      ]
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { name: "Home", path: "/" },
                { name: "Products", path: "#" },
                { name: "Business Accounts", path: "/business-accounts" },
                { name: "FX & Transfers", path: "/service/accounts/fx-transfers" }
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
                text="Start Transfer" 
                href="/contact"
                className="bg-green-600 hover:bg-green-700"
              />
              <CircleFillButton 
                text="View Rates" 
                href="#pricing"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Why Choose Our FX & Transfers?"
            subtitle="Built for speed, efficiency, and cost-effectiveness"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {service.features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
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
        contactTitle="Ready to Start Transferring?"
        btn_text="Get Started Today"
      />
    </main>
  );
};

export default FXTransfersPage;
