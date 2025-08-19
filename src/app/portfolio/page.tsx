import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaGlobe, FaIndustry, FaUsers, FaChartLine, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "Authentic Vacations",
      industry: "Travel & Hospitality",
      description: "Multi-currency payment solution for international travel bookings",
      results: ["$10k/month FX savings", "50% faster payments", "Global expansion"],
      image: "/assets/imgs/works/work-1.jpg",
      slug: "authentic-vacations",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      title: "TechCorp Solutions",
      industry: "SaaS & Technology",
      description: "Embedded financial services for B2B platform",
      results: ["80% faster integration", "30+ countries", "Multi-currency support"],
      image: "/assets/imgs/works/work-2.jpg",
      slug: "techcorp-solutions",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      title: "Global Manufacturing Co",
      industry: "Manufacturing & Trade",
      description: "International supplier payment optimization",
      results: ["25 countries", "Real-time FX", "Automated payments"],
      image: "/assets/imgs/works/work-3.jpg",
      slug: "global-manufacturing",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      title: "E-Commerce Plus",
      industry: "eCommerce & Retail",
      description: "Global payment acceptance and multi-currency management",
      results: ["190+ countries", "50+ currencies", "99.9% uptime"],
      image: "/assets/imgs/works/work-4.jpg",
      slug: "ecommerce-plus",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      title: "FinTech Innovations",
      industry: "Financial Services",
      description: "Banking as a Service platform with global reach",
      results: ["API-first approach", "Real-time processing", "Global compliance"],
      image: "/assets/imgs/works/work-5.jpg",
      slug: "fintech-innovations",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      title: "Professional Services Hub",
      industry: "Professional Services",
      description: "Multi-currency invoicing and payment collection",
      results: ["Automated billing", "FX optimization", "Client satisfaction"],
      image: "/assets/imgs/works/work-6.jpg",
      slug: "professional-services-hub",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  const industries = [
    "All Industries",
    "Travel & Hospitality",
    "SaaS & Technology",
    "Manufacturing & Trade",
    "eCommerce & Retail",
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
                { label: "Portfolio", href: "/portfolio", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how businesses across industries are transforming their operations with Muxxus. 
              Real results from real customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View All Stories" 
                href="#portfolio"
                className="bg-amber-600 hover:bg-amber-700"
              />
              <CircleFillButton 
                text="Share Your Story" 
                href="/contact"
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Featured Success Stories"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {portfolioItems.map((item, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="aspect-video bg-gray-200 rounded-t-xl mb-6"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      {item.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {item.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/portfolio/${item.slug}`}
                    className="text-amber-600 hover:text-amber-800 font-medium text-sm flex items-center gap-1"
                  >
                    Read Full Case Study
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-gray-600">Real results from businesses using Muxxus</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">1000+</div>
              <div className="text-gray-600">Businesses Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">$50M+</div>
              <div className="text-gray-600">FX Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">190+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
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
              className="bg-amber-600 hover:bg-amber-700"
            />
            <CircleFillButton 
              text="Schedule a Consultation" 
              href="/contact"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
