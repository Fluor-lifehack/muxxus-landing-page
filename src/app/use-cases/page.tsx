import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaBuilding, FaGlobe, FaCreditCard, FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

const UseCasesPage = () => {
  const useCases = [
    {
      icon: FaBuilding,
      title: "Banking as a Service",
      description: "Full featured services for fintechs and platforms",
      path: "/use-cases/banking-as-service",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600",
      features: ["Account creation", "Payment processing", "Compliance tools", "API access"]
    },
    {
      icon: FaGlobe,
      title: "Global Treasury",
      description: "Manage global funds across multiple currencies",
      path: "/use-cases/global-treasury",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600",
      features: ["Multi-currency accounts", "FX management", "Global compliance", "Risk mitigation"]
    },
    {
      icon: FaCreditCard,
      title: "Payments for Platforms",
      description: "Embed payments into your platform",
      path: "/use-cases/payments-for-platforms",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600",
      features: ["White-label solutions", "Revenue sharing", "Custom branding", "Platform integration"]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Use Cases", href: "/use-cases", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Use Cases & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how businesses across industries are using our platform to transform their financial operations and scale globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Get Started" 
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700"
              />
              <CircleFillButton 
                text="View All Use Cases" 
                href="#use-cases"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Popular Use Cases"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {useCases.map((useCase, index) => (
              <Link key={index} href={useCase.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${useCase.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 h-full`}>
                  <div className={`w-16 h-16 ${useCase.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-6">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
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

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">See how companies are transforming their business with our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaChartLine className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Authentic Vacations</h3>
                  <p className="text-sm text-gray-600">Travel Agency</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Saved $10k a month on FX with automated global payments and competitive rates."
              </p>
              <Link href="/case-studies/authentic-vacations" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Read Case Study →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaUsers className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">TechCorp</h3>
                  <p className="text-sm text-gray-600">SaaS Platform</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Integrated global payments in weeks, not months, with our developer-friendly APIs."
              </p>
              <Link href="/case-studies" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our solutions can help you scale globally
          </p>
          <CircleFillButton 
            text="Schedule a Consultation" 
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
      </section>
    </main>
  );
};

export default UseCasesPage;
