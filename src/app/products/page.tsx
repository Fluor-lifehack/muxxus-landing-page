import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaBuilding, FaCreditCard, FaGlobe, FaCode, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const ProductsPage = () => {
  const productCategories = [
    {
      icon: FaBuilding,
      title: "Business Accounts",
      description: "Multi-currency business accounts for global operations",
      path: "/business-accounts",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600",
      features: ["Global reach", "Multi-currency", "Real-time processing", "Secure & compliant"]
    },
    {
      icon: FaCreditCard,
      title: "Spend Management",
      description: "Corporate cards and bill pay solutions for business spending",
      path: "/spend",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600",
      features: ["Corporate cards", "Bill pay automation", "Expense tracking", "Spending controls"]
    },
    {
      icon: FaGlobe,
      title: "Payments",
      description: "Global payment solutions for businesses of all sizes",
      path: "/payments",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600",
      features: ["Checkout forms", "Payment plugins", "Payment links", "Global acceptance"]
    },
    {
      icon: FaCode,
      title: "Platform APIs",
      description: "Embedded finance APIs for developers and platforms",
      path: "/platform-apis",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600",
      features: ["Connected accounts", "Multi-currency management", "Global payments", "Card issuance"]
    }
  ];

  const solutions = [
    {
      title: "Travel & Hospitality",
      description: "Multi-currency accounts and global payments for travel businesses",
      icon: "✈️"
    },
    {
      title: "eCommerce & Retail",
      description: "Global payment acceptance and multi-currency management",
      icon: "🛒"
    },
    {
      title: "SaaS & Technology",
      description: "Embedded financial services and global payment infrastructure",
      icon: "💻"
    },
    {
      title: "Manufacturing & Trade",
      description: "International supplier payments and FX management",
      icon: "🏭"
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
                { label: "Products", href: "/products", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Financial Products for Global Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From multi-currency accounts to global payments, our comprehensive suite of financial products 
              empowers businesses to operate internationally with confidence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-violet-600 hover:bg-violet-700"
              />
              <CircleFillButton 
                text="View All Products" 
                href="#products"
                className="border-violet-600 text-violet-600 hover:bg-violet-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Our Product Suite"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {productCategories.map((category, index) => (
              <Link key={index} href={category.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${category.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 h-full`}>
                  <div className={`w-16 h-16 ${category.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Every Industry</h2>
            <p className="text-lg text-gray-600">Tailored financial solutions that address industry-specific challenges</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600">Built for modern businesses that need global reach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Scale</h3>
              <p className="text-gray-600">Operate in 190+ countries with local compliance and support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">Instant transactions and real-time data synchronization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer First</h3>
              <p className="text-gray-600">Comprehensive APIs and SDKs for seamless integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Go Global?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start using our products today and transform your international business operations
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

export default ProductsPage;
