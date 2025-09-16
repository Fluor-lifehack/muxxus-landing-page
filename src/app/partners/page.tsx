import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaHandshake, FaGlobe, FaUsers, FaRocket, FaChartLine, FaShieldAlt, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const PartnersPage = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Integrate with leading platforms and tools",
      icon: FaRocket,
      count: 45,
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      title: "Financial Institutions",
      description: "Global banking and payment networks",
      icon: FaBuilding,
      count: 28,
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      title: "Consulting Firms",
      description: "Expert guidance for global expansion",
      icon: FaUsers,
      count: 32,
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      title: "Regulatory Partners",
      description: "Compliance and legal expertise",
      icon: FaShieldAlt,
      count: 18,
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    }
  ];

  const featuredPartners = [
    {
      name: "Stripe",
      logo: "/assets/imgs/client/client-1.png",
      category: "Payment Processing",
      description: "Leading payment platform for internet businesses",
      partnership: "Payment Gateway Integration",
      year: "2022"
    },
    {
      name: "Shopify",
      logo: "/assets/imgs/client/client-2.png",
      category: "E-commerce Platform",
      description: "Complete commerce solution for online stores",
      partnership: "Multi-currency Checkout",
      year: "2021"
    },
    {
      name: "Salesforce",
      logo: "/assets/imgs/client/client-3.png",
      category: "CRM Platform",
      description: "Customer relationship management software",
      partnership: "Financial Data Integration",
      year: "2023"
    },
    {
      name: "Deloitte",
      logo: "/assets/imgs/client/client-4.png",
      category: "Consulting",
      description: "Global professional services network",
      partnership: "Regulatory Compliance",
      year: "2022"
    },
    {
      name: "AWS",
      logo: "/assets/imgs/client/client-5.png",
      category: "Cloud Infrastructure",
      description: "Cloud computing platform",
      partnership: "Infrastructure & Security",
      year: "2021"
    },
    {
      name: "PwC",
      logo: "/assets/imgs/client/client-6.png",
      category: "Professional Services",
      description: "Global network of firms",
      partnership: "Tax & Advisory Services",
      year: "2023"
    }
  ];

  const partnershipBenefits = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Access to 150+ countries through our partner network"
    },
    {
      icon: FaChartLine,
      title: "Revenue Growth",
      description: "Average 40% increase in customer acquisition through partnerships"
    },
    {
      icon: FaShieldAlt,
      title: "Risk Mitigation",
      description: "Shared compliance and regulatory expertise"
    },
    {
      icon: FaUsers,
      title: "Customer Access",
      description: "Direct access to our combined customer base"
    }
  ];

  const successStories = [
    {
      partner: "TechFlow Solutions",
      industry: "SaaS",
      result: "Expanded to 12 new markets in 8 months",
      metrics: "300% revenue increase, 50% faster market entry"
    },
    {
      partner: "Global Retail Corp",
      industry: "E-commerce",
      result: "Launched operations in 8 European countries",
      metrics: "2.5x customer base growth, 60% cost reduction"
    },
    {
      partner: "FinTech Innovations",
      industry: "Financial Services",
      result: "Secured regulatory approval in 5 jurisdictions",
      metrics: "90% faster compliance process, 40% cost savings"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Partners", href: "/partners", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Partner with Muxxus
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our global network of technology partners, financial institutions, and consulting firms. 
              Together, we're building the future of global business banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Become a Partner" 
                href="#partnership"
                className="bg-indigo-600 hover:bg-indigo-700"
              />
              <CircleFillButton 
                text="View Partners" 
                href="#featured"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Categories</h2>
            <p className="text-lg text-gray-600">Choose the partnership model that fits your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${category.iconColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-indigo-600 font-semibold">{category.count} partners</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-lg text-gray-600">Leading companies trust Muxxus for global business solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                    <span className="text-sm text-gray-500">{partner.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Partnership:</span>
                    <span className="font-medium">{partner.partnership}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Since:</span>
                    <span className="font-medium">{partner.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2>
            <p className="text-lg text-gray-600">Discover the advantages of joining our partner ecosystem</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Success Stories</h2>
            <p className="text-lg text-gray-600">Real results from our collaborative partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                    {story.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.partner}</h3>
                <p className="text-gray-600 mb-4">{story.result}</p>
                <div className="text-sm text-gray-500">
                  <strong>Key Metrics:</strong> {story.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section id="partnership" className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Join our network of successful partners and help businesses go global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Apply for Partnership" 
              href="/contact"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            />
            <CircleFillButton 
              text="Schedule a Call" 
              href="/contact"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default PartnersPage;

