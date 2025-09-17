import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaHeadset, FaBook, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";
import Link from "next/link";

const SupportPage = () => {
  const supportChannels = [
    {
      icon: FaHeadset,
      title: "24/7 Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 4 hours",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Business hours",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaBook,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      availability: "Always available",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    }
  ];

  const faqCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Muxxus",
      icon: "🚀",
      count: "12 articles"
    },
    {
      title: "Account Management",
      description: "Manage your business accounts and settings",
      icon: "💼",
      count: "18 articles"
    },
    {
      title: "Payments & Transfers",
      description: "Process payments and manage transfers",
      icon: "💳",
      count: "25 articles"
    },
    {
      title: "API & Integration",
      description: "Developer resources and API documentation",
      icon: "🔌",
      count: "30 articles"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Support", href: "/support", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              We&apos;re Here to Help
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our support team is available 24/7 to help you succeed with Muxxus. 
              From quick questions to complex integrations, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Contact Support" 
                href="#contact"
                className="bg-emerald-600 hover:bg-emerald-700"
              />
              <CircleFillButton 
                text="Browse Help Center" 
                href="#help-center"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="How Can We Help You?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {supportChannels.map((channel, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${channel.iconColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{channel.description}</p>
                <span className="text-xs text-emerald-600 font-medium">{channel.availability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center */}
      <section id="help-center" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Help Center</h2>
            <p className="text-lg text-gray-600">Find answers to common questions and learn how to use Muxxus</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Link key={index} href={`/faq#${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="group">
                <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <span className="text-xs text-emerald-600 font-medium">{category.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is ready to assist you with any questions or issues
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaComments className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-3">Start a conversation now</p>
              <CircleFillButton 
                text="Start Chat" 
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 w-full"
              />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Send Email</h3>
              <p className="text-sm text-gray-600 mb-3">Get a detailed response</p>
              <CircleFillButton 
                text="Send Email" 
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 w-full"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Or call us directly:</p>
            <div className="flex items-center justify-center gap-2">
              <FaPhone className="w-4 h-4 text-emerald-600" />
              <span className="text-lg font-semibold text-gray-900">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;