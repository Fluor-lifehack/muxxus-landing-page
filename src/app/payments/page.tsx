import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCreditCard, FaCode, FaLink, FaGlobe, FaShieldAlt, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const PaymentsPage = () => {
  const paymentSolutions = [
    {
      icon: FaCreditCard,
      title: "Checkout",
      description: "Conversion-optimised prebuilt payment form",
      path: "/payments/checkout",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaCode,
      title: "Payment Plugins",
      description: "Integrations with eCommerce platforms",
      path: "/payments/plugins",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaLink,
      title: "Payment Links",
      description: "No-code payment acceptance",
      path: "/payments/links",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    }
  ];

  const features = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Accept payments from 190+ countries in 50+ currencies"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Compliant",
      description: "PCI DSS Level 1 compliance with advanced fraud protection"
    },
    {
      icon: FaChartLine,
      title: "High Conversion",
      description: "Optimized checkout flows that maximize payment success"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Payments", href: "/payments", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Global Payment Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Accept payments from anywhere in the world with our comprehensive payment platform. From checkout forms to payment links, we have the solution for every business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-green-600 hover:bg-green-700"
              />
              <CircleFillButton 
                text="View Solutions" 
                href="#solutions"
                className="border-green-600 text-green-600 hover:bg-green-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Solutions Grid */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Payment Solutions for Every Business"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {paymentSolutions.map((solution, index) => (
              <Link key={index} href={solution.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${solution.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100`}>
                  <div className={`w-16 h-16 ${solution.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {solution.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Payment Platform?</h2>
            <p className="text-lg text-gray-600">Built for global businesses that need reliable, secure payments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">190+</div>
              <div className="text-gray-600">Countries Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Currencies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Accept Global Payments?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start accepting payments from customers worldwide today
          </p>
          <CircleFillButton 
            text="Get Started" 
            href="/contact"
            className="bg-green-600 hover:bg-green-700"
          />
        </div>
      </section>
    </main>
  );
};

export default PaymentsPage; 