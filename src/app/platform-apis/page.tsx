import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCode, FaUsers, FaCreditCard, FaGlobe, FaChartLine, FaShieldAlt, FaCog } from "react-icons/fa";
import Link from "next/link";

const PlatformAPIsPage = () => {
  const apis = [
    {
      icon: FaUsers,
      title: "Connected Accounts",
      description: "Programmatic account creation & onboarding",
      path: "/platform-apis/connected-accounts",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaCog,
      title: "Accounts",
      description: "Multi-currency account management, at scale",
      path: "/platform-apis/accounts",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaCreditCard,
      title: "Payments",
      description: "Global multi-currency payment acceptance",
      path: "/platform-apis/payments",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaGlobe,
      title: "Transactional FX",
      description: "Interbank FX rates & currency management",
      path: "/platform-apis/transactional-fx",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaChartLine,
      title: "Payouts",
      description: "Programmatic, cost-effective global payouts",
      path: "/platform-apis/payouts",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaShieldAlt,
      title: "Issuing",
      description: "Global card issuance for a variety of use cases",
      path: "/platform-apis/issuing",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Platform APIs", href: "/platform-apis", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold mt-8 mb-6">
              Platform APIs & Embedded Finance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of financial services with our comprehensive APIs. Embed banking, payments, and financial infrastructure directly into your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
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

      {/* APIs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Comprehensive API Suite"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {apis.map((api, index) => (
              <Link key={index} href={api.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${api.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100`}>
                  <div className={`w-16 h-16 ${api.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <api.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {api.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {api.description}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform APIs?</h2>
            <p className="text-lg text-gray-600">Built for scale, security, and simplicity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer First</h3>
              <p className="text-gray-600">Clean, intuitive APIs with comprehensive documentation and SDKs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Ready</h3>
              <p className="text-gray-600">Bank-grade security, compliance, and 99.9% uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Scale</h3>
              <p className="text-gray-600">Operate in 190+ countries with 50+ currencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Integrate?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start building with our APIs today and transform your platform
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
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlatformAPIsPage;