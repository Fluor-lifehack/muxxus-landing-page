import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCode, FaBook, FaCog, FaUsers, FaShieldAlt, FaGlobe, FaCreditCard, FaChartLine, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const DevelopersPage = () => {
  const developerTools = [
    {
      icon: FaBook,
      title: "Product Documentation",
      description: "Review detailed product information to get the most from your integration",
      path: "/developers/docs",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaCode,
      title: "API Reference",
      description: "Explore the full flexibility and power of our API",
      path: "/developers/api",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaUsers,
      title: "Connected Accounts",
      description: "Programmatic account creation and onboarding",
      path: "/developers/connected-accounts",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaCog,
      title: "Accounts",
      description: "Multi-currency account management, at scale",
      path: "/developers/accounts",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaCreditCard,
      title: "Payments",
      description: "Accept multi-currency payments globally",
      path: "/developers/payments",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaGlobe,
      title: "Transactional FX",
      description: "Interbank FX rates and transaction services",
      path: "/developers/transactional-fx",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: FaChartLine,
      title: "Payouts",
      description: "Make fast and cost-effective payouts",
      path: "/developers/payouts",
      color: "from-teal-50 to-teal-100",
      iconColor: "bg-teal-100 text-teal-600"
    },
    {
      icon: FaShieldAlt,
      title: "Issuing",
      description: "Create multi-currency cards",
      path: "/developers/issuing",
      color: "from-pink-50 to-pink-100",
      iconColor: "bg-pink-100 text-pink-600"
    },
    {
      icon: FaHandshake,
      title: "Banking as a Service",
      description: "Offer full-featured financial products",
      path: "/developers/banking-as-service",
      color: "from-yellow-50 to-yellow-100",
      iconColor: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Developers", href: "/developers", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold mt-8 mb-6">
              Developer Tools & APIs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build powerful financial applications with our comprehensive APIs and developer tools. Integrate global payments, accounts, and financial services into your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get API Keys" 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="View Documentation" 
                href="/developers/docs"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Developer Tools & APIs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {developerTools.map((tool, index) => (
              <Link key={index} href={tool.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${tool.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100`}>
                  <div className={`w-16 h-16 ${tool.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get up and running with our APIs in minutes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get API Keys</h3>
              <p className="text-gray-600 text-sm">Sign up and get your API keys from the dashboard</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Read Documentation</h3>
              <p className="text-gray-600 text-sm">Review our comprehensive API documentation</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Building</h3>
              <p className="text-gray-600 text-sm">Integrate our APIs into your application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Developer Support?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our developer team is here to help you succeed
          </p>
          <CircleFillButton 
            text="Contact Developer Support" 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700"
          />
        </div>
      </section>
    </main>
  );
};

export default DevelopersPage; 