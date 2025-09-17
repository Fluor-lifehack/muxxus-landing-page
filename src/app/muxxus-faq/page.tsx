import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaHeadset } from "react-icons/fa";

const MuxxusFAQPage = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Muxxus",
      icon: "🚀",
      count: 12,
      questions: [
        {
          question: "How do I create my first business account?",
          answer: "Creating your first business account is simple. Visit our signup page, provide your business information, complete the verification process, and you'll be ready to go within 24-48 hours."
        },
        {
          question: "What documents do I need to verify my business?",
          answer: "You'll need your business registration documents, proof of address, identification documents for directors, and potentially additional documents depending on your business type and location."
        },
        {
          question: "How long does account verification take?",
          answer: "Most business accounts are verified within 24-48 hours. Complex cases may take up to 5 business days. We'll keep you updated throughout the process."
        }
      ]
    },
    {
      title: "Account Management",
      description: "Manage your business accounts and settings",
      icon: "💼",
      count: 18,
      questions: [
        {
          question: "Can I have multiple currencies in one account?",
          answer: "Yes! Our business accounts support multiple currencies. You can hold, send, and receive funds in 50+ currencies from a single account."
        },
        {
          question: "How do I add team members to my account?",
          answer: "You can add team members through your dashboard. Set individual permissions and spending limits for each team member to maintain control over your business finances."
        },
        {
          question: "What are the account limits?",
          answer: "Account limits vary based on your business type and verification level. Contact our team to discuss your specific needs and we can customize limits accordingly."
        }
      ]
    },
    {
      title: "Payments & Transfers",
      description: "Process payments and manage transfers",
      icon: "💳",
      count: 25,
      questions: [
        {
          question: "How fast are international transfers?",
          answer: "Most international transfers complete within 2-24 hours. Major corridors often complete in minutes. We provide real-time tracking for all transfers."
        },
        {
          question: "What are the fees for international payments?",
          answer: "Our fees are transparent and competitive. We offer interbank rates with minimal markup, typically 0.1-0.5% above the mid-market rate."
        },
        {
          question: "Can I set up recurring payments?",
          answer: "Yes! You can set up recurring payments for regular expenses like subscriptions, rent, or supplier payments. Schedule them daily, weekly, monthly, or custom intervals."
        }
      ]
    },
    {
      title: "API & Integration",
      description: "Developer resources and API documentation",
      icon: "🔌",
      count: 30,
      questions: [
        {
          question: "How do I get API keys?",
          answer: "API keys are available in your dashboard once your account is verified. Navigate to the Developers section to generate and manage your API keys."
        },
        {
          question: "What programming languages do you support?",
          answer: "We provide SDKs for Node.js, Python, PHP, Java, and Go. Our REST APIs can be used with any programming language that supports HTTP requests."
        },
        {
          question: "Is there a sandbox environment for testing?",
          answer: "Yes! We provide a comprehensive sandbox environment where you can test all our APIs without processing real transactions."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "FAQ", href: "/faq", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about Muxxus. Can&apos;t find what you&apos;re looking for? 
              Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Contact Support" 
                href="/support"
                className="bg-rose-600 hover:bg-rose-700"
              />
              <CircleFillButton 
                text="Browse Categories" 
                href="#faq-categories"
                className="border-rose-600 text-rose-600 hover:bg-rose-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section id="faq-categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Browse by Category"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {faqCategories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="text-xs text-rose-600 font-medium">{category.count} articles</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaHeadset className="w-10 h-10 text-rose-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Contact Support" 
              href="/support"
              className="bg-rose-600 hover:bg-rose-700"
            />
            <CircleFillButton 
              text="Browse Documentation" 
              href="/developers/docs"
              className="border-rose-600 text-rose-600 hover:bg-rose-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MuxxusFAQPage;
