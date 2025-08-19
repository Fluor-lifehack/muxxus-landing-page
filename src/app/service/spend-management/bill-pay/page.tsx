import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaReceipt, FaShieldAlt, FaClock, FaChartLine, FaAutomation } from "react-icons/fa";
import Link from "next/link";

const BillPayPage = () => {
  const features = [
    {
      icon: FaReceipt,
      title: "Automated Bill Processing",
      description: "Automatically process and pay bills with smart approval workflows"
    },
    {
      icon: FaAutomation,
      title: "Smart Automation",
      description: "Set up recurring payments and automatic bill scheduling"
    },
    {
      icon: FaChartLine,
      title: "Expense Analytics",
      description: "Track spending patterns and optimize cash flow management"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payments",
      description: "Bank-grade security with fraud protection and compliance"
    }
  ];

  const faqs = [
    {
      question: "How does automated bill pay work?",
      answer: "Our system automatically processes bills based on your rules, sends them for approval if needed, and makes payments on schedule."
    },
    {
      question: "Can I set approval workflows?",
      answer: "Yes, you can create custom approval chains based on amount thresholds, vendor categories, or specific business rules."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support ACH transfers, wire transfers, and check payments for maximum flexibility with your vendors."
    },
    {
      question: "How do I track bill payments?",
      answer: "All payments are tracked in real-time with detailed logs, receipts, and integration with your accounting software."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "#" },
                { label: "Spend Management", href: "/service/spend-management" },
                { label: "Bill Pay", href: "/service/spend-management/bill-pay", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Bill Pay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Automated accounts payable management that saves time and reduces errors. Streamline your bill processing with intelligent workflows and real-time tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700"
              />
              <CircleFillButton 
                text="Learn More" 
                href="#features"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Why Choose Our Bill Pay Solution?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-600" />
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
            <p className="text-lg text-gray-600">Everything you need to know about Bill Pay</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Automate Your Bill Pay?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start saving time and reducing errors in your accounts payable process
          </p>
          <CircleFillButton 
            text="Get Started Today" 
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700"
          />
        </div>
      </section>
    </main>
  );
};

export default BillPayPage;
