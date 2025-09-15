import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCode, FaShoppingCart, FaChartLine, FaUsers, FaCog, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const IntegrationsPage = () => {
  const integrations = [
    {
      icon: FaShoppingCart,
      title: "eCommerce Platforms",
      description: "Seamlessly integrate with popular eCommerce solutions",
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaCode,
      title: "Developer Tools",
      description: "SDKs and libraries for popular programming languages",
      platforms: ["Node.js", "Python", "PHP", "Java", "Go"],
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaChartLine,
      title: "Accounting Software",
      description: "Sync with your existing accounting and ERP systems",
      platforms: ["QuickBooks", "Xero", "Sage", "NetSuite"],
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaUsers,
      title: "CRM Systems",
      description: "Connect customer data with payment information",
      platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"],
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaCog,
      title: "Business Tools",
      description: "Integrate with essential business applications",
      platforms: ["Slack", "Zapier", "Microsoft Teams", "Notion"],
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaGlobe,
      title: "Payment Gateways",
      description: "Connect with existing payment infrastructure",
      platforms: ["Stripe", "PayPal", "Adyen", "Square"],
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Integrations", href: "/integrations", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Integrations & Partnerships
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect Muxxus with your favorite tools and platforms. From eCommerce to accounting, we integrate with the tools you already use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View All Integrations" 
                href="#integrations"
                className="bg-teal-600 hover:bg-teal-700"
              />
              <CircleFillButton 
                text="Request Integration" 
                href="/contact"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Popular Integrations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {integrations.map((integration, index) => (
              <div key={index} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${integration.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100`}>
                  <div className={`w-16 h-16 ${integration.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <integration.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {integration.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                    {integration.description}
                  </p>
                  <div className="space-y-2">
                    {integration.platforms.map((platform, platformIndex) => (
                      <div key={platformIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Integrate with Muxxus?</h2>
            <p className="text-lg text-gray-600">Seamless connections that power your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Setup</h3>
              <p className="text-gray-600">Get up and running in minutes with our simple integration process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">Access global markets through our extensive network of partners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Sync</h3>
              <p className="text-gray-600">Keep your data synchronized across all your business tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Integration?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We can build custom integrations for your specific needs
          </p>
          <CircleFillButton 
            text="Contact Our Team" 
            href="/contact"
            className="bg-teal-600 hover:bg-teal-700"
          />
        </div>
      </section>
    </main>
  );
};

export default IntegrationsPage;