import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaNewspaper, FaCalendar, FaUser, FaTag, FaArrowRight, FaSearch, FaFilter } from "react-icons/fa";

const NewsPage = () => {
  const featuredNews = [
    {
      title: "Muxxus Expands to 50 New Markets in Q4 2024",
      excerpt: "Major expansion brings our global financial services to businesses in emerging markets across Asia, Africa, and Latin America.",
      category: "Company News",
      date: "December 15, 2024",
      author: "Muxxus Team",
      readTime: "3 min read",
      image: "/images/news/expansion-news.jpg",
      featured: true
    },
    {
      title: "New AI-Powered Fraud Detection System Launches",
      excerpt: "Advanced machine learning algorithms now protect our customers with real-time fraud detection and prevention.",
      category: "Product Updates",
      date: "December 10, 2024",
      author: "Sarah Johnson",
      readTime: "4 min read",
      image: "/images/news/ai-fraud-detection.jpg",
      featured: false
    },
    {
      title: "Partnership with European Banking Consortium Announced",
      excerpt: "Strategic collaboration enables seamless cross-border payments and compliance across 27 EU member states.",
      category: "Partnerships",
      date: "December 5, 2024",
      author: "Michael Chen",
      readTime: "5 min read",
      image: "/images/news/european-partnership.jpg",
      featured: false
    }
  ];

  const newsCategories = [
    {
      name: "Company News",
      count: "25 articles",
      description: "Latest updates about Muxxus",
      color: "from-blue-50 to-blue-100"
    },
    {
      name: "Product Updates",
      count: "18 articles",
      description: "New features and improvements",
      color: "from-green-50 to-green-100"
    },
    {
      name: "Industry Insights",
      count: "32 articles",
      description: "Market trends and analysis",
      color: "from-purple-50 to-purple-100"
    },
    {
      name: "Partnerships",
      count: "12 articles",
      description: "Strategic collaborations",
      color: "from-orange-50 to-orange-100"
    }
  ];

  const recentNews = [
    {
      title: "Q4 Financial Results Exceed Expectations",
      excerpt: "Strong performance driven by increased adoption of multi-currency solutions and expansion into new markets.",
      category: "Company News",
      date: "December 12, 2024",
      author: "Finance Team",
      readTime: "2 min read"
    },
    {
      title: "Enhanced Mobile App Experience Released",
      excerpt: "New mobile app features include biometric authentication, real-time notifications, and improved user interface.",
      category: "Product Updates",
      date: "December 8, 2024",
      author: "Product Team",
      readTime: "3 min read"
    },
    {
      title: "Regulatory Compliance Update for 2025",
      excerpt: "Overview of upcoming regulatory changes and how Muxxus ensures compliance across all jurisdictions.",
      category: "Industry Insights",
      date: "December 3, 2024",
      author: "Compliance Team",
      readTime: "4 min read"
    },
    {
      title: "Customer Success: Startup Growth Stories",
      excerpt: "How three startups used Muxxus to scale internationally and achieve remarkable growth.",
      category: "Customer Stories",
      date: "November 28, 2024",
      author: "Marketing Team",
      readTime: "6 min read"
    },
    {
      title: "New API Endpoints for Developers",
      excerpt: "Enhanced API capabilities including webhook support, rate limiting improvements, and new authentication methods.",
      category: "Product Updates",
      date: "November 25, 2024",
      author: "Engineering Team",
      readTime: "3 min read"
    },
    {
      title: "Sustainability Initiatives in Global Finance",
      excerpt: "How Muxxus is leading the way in sustainable financial practices and green banking solutions.",
      category: "Industry Insights",
      date: "November 20, 2024",
      author: "Sustainability Team",
      readTime: "5 min read"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "News", href: "/news", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed about the latest developments in global finance, 
              product updates, and industry insights from Muxxus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Browse News" 
                href="#featured-news"
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="Subscribe to Updates" 
                href="#"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section id="featured-news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Featured Stories"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {featuredNews.map((news, index) => (
              <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                news.featured ? 'ring-2 ring-blue-500' : ''
              }`}>
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">📰</div>
                </div>
                <div className="p-6">
                  {news.featured && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">{news.category}</span>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{news.author}</span>
                    <span>{news.date}</span>
                  </div>
                  <CircleFillButton 
                    text="Read More" 
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">News Categories</h2>
            <p className="text-lg text-gray-600">Explore news by topic and stay updated on what matters to you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsCategories.map((category, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <FaNewspaper className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-blue-600 font-semibold">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent News</h2>
            <p className="text-lg text-gray-600">Stay current with the latest updates and announcements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">{news.category}</span>
                  <span>•</span>
                  <span>{news.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{news.author}</span>
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer group">
                  <span className="text-sm font-medium">Read More</span>
                  <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest news, product updates, and industry insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <CircleFillButton 
                text="Subscribe" 
                href="#"
                className="bg-blue-600 hover:bg-blue-700"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a Story to Share?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you a journalist or media representative? Contact our press team for interviews, 
            press releases, and media inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Contact Press Team" 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700"
            />
            <CircleFillButton 
              text="Media Kit" 
              href="#"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
