import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaChartLine, FaGlobe, FaUsers, FaCreditCard, FaBuilding } from "react-icons/fa";
import Link from "next/link";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      icon: FaChartLine,
      title: "Authentic Vacations",
      industry: "Travel Agency",
      description: "Saved $10k a month on FX with automated global payments and competitive rates.",
      path: "/case-studies/authentic-vacations",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600",
      metrics: ["$10k/month savings", "50% faster payments", "Global expansion"]
    },
    {
      icon: FaUsers,
      title: "TechCorp",
      industry: "SaaS Platform",
      description: "Integrated global payments in weeks, not months, with our developer-friendly APIs.",
      path: "/case-studies/techcorp",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600",
      metrics: ["80% faster integration", "30+ countries", "Multi-currency support"]
    },
    {
      icon: FaBuilding,
      title: "Global Manufacturing",
      industry: "Manufacturing",
      description: "Streamlined international supplier payments across 25 countries with real-time FX rates.",
      path: "/case-studies/global-manufacturing",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600",
      metrics: ["25 countries", "Real-time FX", "Automated payments"]
    }
  ];

  const industries = [
    "Travel & Hospitality",
    "eCommerce & Retail",
    "SaaS & Technology",
    "Manufacturing",
    "Financial Services",
    "Professional Services"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Case Studies", href: "/case-studies", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how businesses across industries are transforming their operations with Muxxus. Real results from real customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View All Stories" 
                href="#case-studies"
                className="bg-orange-600 hover:bg-orange-700"
              />
              <CircleFillButton 
                text="Share Your Story" 
                href="/contact"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Featured Success Stories"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {caseStudies.map((study, index) => (
              <Link key={index} href={study.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${study.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 h-full`}>
                  <div className={`w-16 h-16 ${study.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{study.industry}</p>
                  <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors">
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Across Industries</h2>
            <p className="text-lg text-gray-600">We help businesses in every sector achieve their goals</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaBuilding className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses that have transformed their operations with Muxxus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Get Started Today" 
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700"
            />
            <CircleFillButton 
              text="Schedule a Demo" 
              href="/contact"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
