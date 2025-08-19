import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaExchangeAlt, FaGlobe, FaShieldAlt, FaClock, FaChartLine, FaUsers, FaBuilding } from "react-icons/fa";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const FxTransfersPage = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Global Coverage",
      description: "Transfer funds to 150+ countries with competitive exchange rates"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Transfers",
      description: "Bank-grade security and compliance for all international transfers"
    },
    {
      icon: FaClock,
      title: "Fast Processing",
      description: "Most transfers complete within 1-2 business days"
    },
    {
      icon: FaChartLine,
      title: "Real-time Rates",
      description: "Get live FX rates and lock in the best prices"
    }
  ];

  const faqs = [
    {
      question: "How long do international transfers take?",
      answer: "Most transfers complete within 1-2 business days, depending on the destination country and banking system."
    },
    {
      question: "What are the fees for FX transfers?",
      answer: "Our fees are transparent and competitive. You'll see the exact cost before confirming any transfer."
    },
    {
      question: "Can I set up recurring transfers?",
      answer: "Yes, you can schedule regular international transfers to automate your global payments."
    },
    {
      question: "What currencies do you support?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, AUD, CAD, and many more."
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
                { label: "Business Accounts", href: "/business-accounts" },
                { label: "FX & Transfers", href: "/service/accounts/fx-transfers", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              FX & International Transfers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Send money globally with competitive exchange rates, fast processing, 
              and bank-grade security. Manage your international payments efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="View Rates" 
                href="#"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Why Choose Muxxus for FX Transfers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How FX Transfers Work</h2>
            <p className="text-lg text-gray-600">Simple steps to send money internationally</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Up Transfer</h3>
              <p className="text-gray-600">Enter recipient details, amount, and select your preferred currency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lock in Rate</h3>
              <p className="text-gray-600">Get real-time exchange rates and confirm your transfer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track & Complete</h3>
              <p className="text-gray-600">Monitor your transfer status and receive confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about FX transfers</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Transferring?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses using Muxxus for their international payment needs
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

export default FxTransfersPage;
