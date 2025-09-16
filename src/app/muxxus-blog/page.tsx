import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const MuxxusBlogPage = () => {
  const featuredPosts = [
    {
      title: "The Future of Global Payments: Trends to Watch in 2024",
      excerpt: "Discover the key trends shaping the future of international payments and how businesses can prepare for the changing landscape.",
      author: "Sarah Johnson",
      date: "January 15, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
      image: "/assets/imgs/blog/blog-1.jpg",
      slug: "future-of-global-payments-2024"
    },
    {
      title: "How to Optimize Your Business for Multi-Currency Operations",
      excerpt: "Learn the best practices for managing multiple currencies and reducing FX costs in your international business.",
      author: "Michael Chen",
      date: "January 12, 2024",
      category: "Business Tips",
      readTime: "7 min read",
      image: "/assets/imgs/blog/blog-2.jpg",
      slug: "optimize-multi-currency-operations"
    },
    {
      title: "Building Trust in Cross-Border Commerce",
      excerpt: "Explore strategies for building customer trust when operating internationally and handling foreign payments.",
      author: "Emma Rodriguez",
      date: "January 10, 2024",
      category: "Customer Experience",
      readTime: "6 min read",
      image: "/assets/imgs/blog/blog-3.jpg",
      slug: "building-trust-cross-border-commerce"
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights",
    "Business Tips",
    "Customer Experience",
    "Technology",
    "Compliance",
    "Case Studies"
  ];

  const recentPosts = [
    {
      title: "Understanding FX Risk Management for Small Businesses",
      excerpt: "Essential strategies for small businesses to manage foreign exchange risk effectively.",
      date: "January 8, 2024",
      category: "Business Tips"
    },
    {
      title: "The Impact of AI on Financial Services",
      excerpt: "How artificial intelligence is transforming the financial services industry and what it means for businesses.",
      date: "January 5, 2024",
      category: "Technology"
    },
    {
      title: "Compliance Checklist for International Operations",
      excerpt: "A comprehensive guide to staying compliant when expanding your business globally.",
      date: "January 3, 2024",
      category: "Compliance"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed about the latest trends in global business, payments, and financial technology. 
              Expert insights to help your business succeed internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Subscribe to Newsletter" 
                href="#newsletter"
                className="bg-slate-600 hover:bg-slate-700"
              />
              <CircleFillButton 
                text="Browse Articles" 
                href="#featured-posts"
                className="border-slate-600 text-slate-600 hover:bg-slate-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-slate-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured-posts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Featured Articles"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-xl mb-6"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaUser className="w-3 h-3" />
                      <span>{post.author}</span>
                      <FaCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-slate-600 hover:text-slate-800 font-medium text-sm flex items-center gap-1"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">Latest insights and updates from our team</p>
          </div>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-slate-600 hover:text-slate-800 font-medium text-sm flex items-center gap-1"
                >
                  Read More
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
              <CircleFillButton 
                text="Subscribe" 
                href="#"
                className="bg-slate-600 hover:bg-slate-700"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MuxxusBlogPage;
