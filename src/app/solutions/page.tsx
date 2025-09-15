
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaGlobe, FaShoppingCart, FaCode, FaTruck, FaStore, FaCloud, FaChartLine, FaUsers, FaVideo } from "react-icons/fa";


const SolutionsPage = () => {
  const solutions = [
    {
      icon: FaGlobe,
      title: "Travel",
      description: "Agencies, tour operators, hospitality",
      details: "Streamline international payments for travel agencies, manage multi-currency bookings, and handle complex cross-border transactions with ease.",
      features: ["Multi-currency accounts", "FX optimization", "Payment processing", "Compliance support"],
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaShoppingCart,
      title: "eCommerce and Retail",
      description: "Online and in-store retail",
      details: "Accept payments globally, manage inventory across borders, and optimize conversion rates with our integrated payment solutions.",
      features: ["Global payment acceptance", "Inventory management", "Conversion optimization", "Fraud protection"],
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaCode,
      title: "Software and Technology",
      description: "B2B and B2C software",
      details: "Embed financial services into your software platform with our APIs, enabling seamless payment experiences for your users.",
      features: ["API integration", "White-label solutions", "Developer tools", "Scalable infrastructure"],
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaTruck,
      title: "Wholesale and Trade",
      description: "Wholesalers, manufacturing, logistics",
      details: "Manage complex supply chain payments, handle large volume transactions, and optimize working capital across global operations.",
      features: ["Supply chain payments", "Working capital optimization", "Trade finance", "Risk management"],
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaStore,
      title: "Marketplaces",
      description: "Goods and services marketplaces",
      details: "Enable marketplace payments, manage seller payouts, and handle complex multi-party transactions with our marketplace solutions.",
      features: ["Marketplace payments", "Seller payouts", "Multi-party transactions", "Revenue sharing"],
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaCloud,
      title: "SaaS Platforms",
      description: "Integrated SaaS offerings",
      details: "Integrate financial services into your SaaS platform, offering subscription billing, usage-based pricing, and global payment collection.",
      features: ["Subscription billing", "Usage-based pricing", "Global collections", "Revenue recognition"],
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: FaChartLine,
      title: "Fintechs and Financial Services",
      description: "Fintechs, lending, banks",
      details: "Build and scale financial products with our infrastructure, from digital banking to lending platforms and investment services.",
      features: ["Digital banking", "Lending infrastructure", "Investment services", "Regulatory compliance"],
      color: "from-teal-50 to-teal-100",
      iconColor: "bg-teal-100 text-teal-600"
    },
    {
      icon: FaUsers,
      title: "Professional Services",
      description: "People-based businesses",
      details: "Streamline invoicing, manage client payments, and handle international transactions for consulting, legal, and professional services.",
      features: ["Client invoicing", "Payment collection", "International transfers", "Expense management"],
      color: "from-pink-50 to-pink-100",
      iconColor: "bg-pink-100 text-pink-600"
    },
    {
      icon: FaVideo,
      title: "Digital and Creator",
      description: "Social, streaming, creator economy",
      details: "Monetize content globally, manage fan payments, and handle creator payouts across multiple platforms and currencies.",
      features: ["Content monetization", "Fan payments", "Creator payouts", "Multi-platform support"],
      color: "from-yellow-50 to-yellow-100",
      iconColor: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tailored financial solutions for every industry. From travel to fintech, we understand your unique challenges and provide the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-violet-600 hover:bg-violet-700"
              />
              <CircleFillButton 
                text="View All Solutions" 
                href="#solutions"
                className="border-violet-600 text-violet-600 hover:bg-violet-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Solutions for Every Industry"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${solution.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 h-full`}>
                  <div className={`w-16 h-16 ${solution.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-6">
                    {solution.description}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {solution.details}
                  </p>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Solutions?</h2>
            <p className="text-lg text-gray-600">Built for modern businesses that need industry-specific expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of sector-specific challenges and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">Solutions that grow with your business from startup to enterprise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">Easy integration with your existing systems and workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start using our industry-specific solutions today and unlock your business potential
          </p>
          <CircleFillButton 
            text="Get Started" 
            href="/contact"
            className="bg-violet-600 hover:bg-violet-700"
          />
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage; 