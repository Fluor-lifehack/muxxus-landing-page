import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCreditCard, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const CorporateCardsPage = () => {
  const features = [
    {
      icon: FaCreditCard,
      title: "Multi-Currency Cards",
      description: "Issue cards in 50+ currencies for global operations"
    },
    {
      icon: FaUsers,
      title: "Employee Management",
      description: "Easy card issuance and spending controls for teams"
    },
    {
      icon: FaChartLine,
      title: "Real-time Analytics",
      description: "Instant spending insights and expense tracking"
    },
    {
      icon: FaShieldAlt,
      title: "Advanced Security",
      description: "Fraud protection and spending limits per card"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get corporate cards?",
      answer: "Cards can be issued within 24-48 hours after account approval and KYC completion."
    },
    {
      question: "Can I set spending limits per employee?",
      answer: "Yes, you can set individual spending limits, daily/monthly caps, and merchant restrictions."
    },
    {
      question: "What currencies are supported?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, and many more."
    },
    {
      question: "How do I track expenses?",
      answer: "All transactions are tracked in real-time with detailed reporting and expense categorization."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Spend Management", href: "/spend" },
                { label: "Corporate Cards", href: "/spend/corporate-cards", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Corporate Cards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empower your team with flexible corporate cards that work globally. Manage spending, control budgets, and track expenses in real-time across multiple currencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Cards" 
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700"
              />
              <CircleFillButton 
                text="Learn More" 
                href="#features"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Why Choose Our Corporate Cards?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Corporate Cards</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Corporate Cards?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start managing your business spending more efficiently today
          </p>
          <CircleFillButton 
            text="Apply Today" 
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700"
          />
        </div>
      </section>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default CorporateCardsPage;
