import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaGlobe, FaShoppingCart, FaCode, FaTruck, FaStore, FaCloud, FaChartLine, FaUsers, FaVideo } from "react-icons/fa";
import Link from "next/link";

const SolutionsPage = () => {
  const solutions = [
    {
      icon: FaGlobe,
      title: "Travel",
      description: "Agencies, tour operators, hospitality",
      path: "/solutions/travel",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaShoppingCart,
      title: "eCommerce and Retail",
      description: "Online and in-store retail",
      path: "/solutions/ecommerce-retail",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaCode,
      title: "Software and Technology",
      description: "B2B and B2C software",
      path: "/solutions/software-technology",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaTruck,
      title: "Wholesale and Trade",
      description: "Wholesalers, manufacturing, logistics",
      path: "/solutions/wholesale-trade",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaStore,
      title: "Marketplaces",
      description: "Goods and services marketplaces",
      path: "/solutions/marketplaces",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaCloud,
      title: "SaaS Platforms",
      description: "Integrated SaaS offerings",
      path: "/solutions/saas-platforms",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: FaChartLine,
      title: "Fintechs and Financial Services",
      description: "Fintechs, lending, banks",
      path: "/solutions/fintechs-financial-services",
      color: "from-teal-50 to-teal-100",
      iconColor: "bg-teal-100 text-teal-600"
    },
    {
      icon: FaUsers,
      title: "Professional Services",
      description: "People-based businesses",
      path: "/solutions/professional-services",
      color: "from-pink-50 to-pink-100",
      iconColor: "bg-pink-100 text-pink-600"
    },
    {
      icon: FaVideo,
      title: "Digital and Creator",
      description: "Social, streaming, creator economy",
      path: "/solutions/digital-creator",
      color: "from-yellow-50 to-yellow-100",
      iconColor: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
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
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="View All Solutions" 
                href="#solutions"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${solution.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                  <div className={`w-16 h-16 ${solution.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We work with businesses of all sizes to create tailored financial solutions
          </p>
          <CircleFillButton 
            text="Contact Our Team" 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700"
          />
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage; 