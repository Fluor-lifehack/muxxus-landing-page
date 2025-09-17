import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaPlay, FaRocket, FaGlobe, FaCreditCard, FaChartLine, FaCog } from "react-icons/fa";

const ProductTourPage = () => {
  const tourSteps = [
    {
      icon: FaRocket,
      title: "Getting Started",
      description: "Create your account and complete verification in minutes",
      duration: "5 minutes",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaGlobe,
      title: "Global Accounts",
      description: "Set up multi-currency accounts for your business",
      duration: "10 minutes",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaCreditCard,
      title: "Payment Setup",
      description: "Configure payment methods and start accepting payments",
      duration: "15 minutes",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaChartLine,
      title: "Analytics & Reporting",
      description: "Monitor your business performance with real-time insights",
      duration: "5 minutes",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    }
  ];

  const features = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Operate in 190+ countries with local compliance"
    },
    {
      icon: FaRocket,
      title: "Fast Setup",
      description: "Get started in minutes, not days"
    },
    {
      icon: FaCog,
      title: "Easy Integration",
      description: "Connect with your existing business tools"
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
                { label: "Product Tour", href: "/product-tour", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              See Muxxus in Action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take a guided tour of our platform and discover how easy it is to go global with Muxxus. 
              From setup to success, we&apos;ll show you everything you need to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Start Tour" 
                href="#tour-steps"
                className="bg-indigo-600 hover:bg-indigo-700"
              />
              <CircleFillButton 
                text="Watch Demo" 
                href="#demo"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Steps */}
      <section id="tour-steps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Your Journey to Global Success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {tourSteps.map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${step.iconColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <span className="text-xs text-indigo-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive Platform Demo</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience Muxxus firsthand with our interactive demo
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPlay className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Walkthrough</h3>
            <p className="text-gray-600 mb-6">
              Navigate through our platform features and see how easy it is to manage global business operations
            </p>
            <CircleFillButton 
              text="Launch Demo" 
              href="/demo"
              className="bg-indigo-600 hover:bg-indigo-700"
            />
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Muxxus?</h2>
            <p className="text-lg text-gray-600">Built for modern businesses that need global reach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses that have already gone global with Muxxus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Start Free Trial" 
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700"
            />
            <CircleFillButton 
              text="Schedule Demo" 
              href="/contact"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductTourPage;