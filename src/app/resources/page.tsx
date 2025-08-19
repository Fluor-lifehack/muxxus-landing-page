import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaBook, FaDownload, FaVideo, FaUsers, FaChartLine, FaRocket, FaFileAlt, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const ResourcesPage = () => {
  const featuredResources = [
    {
      type: "Guide",
      title: "Getting Started with Global Business Banking",
      description: "Learn how to set up your first multi-currency business account and start accepting international payments.",
      readTime: "8 min read",
      category: "Business Banking",
      image: "/assets/imgs/blog/blog-1.jpg",
      href: "#"
    },
    {
      type: "Case Study",
      title: "How TechCorp Expanded to 15 Countries in 6 Months",
      description: "Discover how a SaaS company used Muxxus to scale their global operations and increase revenue by 300%.",
      readTime: "12 min read",
      category: "Success Stories",
      image: "/assets/imgs/blog/blog-2.jpg",
      href: "#"
    },
    {
      type: "Whitepaper",
      title: "The Future of Cross-Border Payments in 2024",
      description: "Industry insights on emerging trends, regulatory changes, and technology innovations shaping global finance.",
      readTime: "15 min read",
      category: "Industry Insights",
      image: "/assets/imgs/blog/blog-3.jpg",
      href: "#"
    }
  ];

  const resourceCategories = [
    {
      title: "Business Guides",
      description: "Step-by-step guides to help you navigate global business banking",
      icon: FaBook,
      count: 12,
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      title: "API Documentation",
      description: "Technical documentation and integration guides for developers",
      icon: FaFileAlt,
      count: 8,
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      title: "Video Tutorials",
      description: "Visual guides and product demos to get you up and running quickly",
      icon: FaVideo,
      count: 24,
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      title: "Webinars",
      description: "Live sessions with industry experts and product specialists",
      icon: FaUsers,
      count: 6,
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      title: "Market Reports",
      description: "Quarterly insights on global payment trends and market analysis",
      icon: FaChartLine,
      count: 4,
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      title: "Developer Tools",
      description: "SDKs, code samples, and testing environments for developers",
      icon: FaRocket,
      count: 15,
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  const latestResources = [
    {
      title: "Understanding FX Risk Management for SMEs",
      type: "Article",
      date: "Dec 15, 2024",
      readTime: "6 min read",
      category: "Risk Management"
    },
    {
      title: "Setting Up Recurring Payments: Best Practices",
      type: "Tutorial",
      date: "Dec 12, 2024",
      readTime: "10 min read",
      category: "Payments"
    },
    {
      title: "Compliance Checklist for European Expansion",
      type: "Checklist",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      category: "Compliance"
    },
    {
      title: "API Rate Limits and Best Practices",
      type: "Technical",
      date: "Dec 8, 2024",
      readTime: "8 min read",
      category: "API"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to succeed with global business banking. From getting started guides to advanced technical documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Browse Resources" 
                href="#categories"
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="Subscribe to Updates" 
                href="#newsletter"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-lg text-gray-600">Handpicked content to help you get the most out of Muxxus</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image 
                    src={resource.image} 
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{resource.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <Link 
                    href={resource.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find the resources you need, organized by topic and type</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${category.iconColor} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} resources</span>
                  <Link 
                    href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Browse
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Resources</h2>
            <p className="text-lg text-gray-600">Stay up to date with our newest content and insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestResources.map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{resource.category}</span>
                  <span>•</span>
                  <span>{resource.readTime}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CircleFillButton 
              text="View All Resources" 
              href="#"
              className="bg-blue-600 hover:bg-blue-700"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 text-lg mb-8">
            Get the latest insights, product updates, and industry news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <CircleFillButton 
              text="Subscribe" 
              href="#"
              className="bg-white text-blue-600 hover:bg-gray-100"
            />
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default ResourcesPage;
