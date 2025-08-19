import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import { Code, Zap, Shield, Users, Globe, Building2 } from "lucide-react";

export default function PlatformApisPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Platform APIs", isActive: true }
  ];

  const apiFeatures = [
    {
      title: "Embedded Finance",
      description: "Integrate banking and payment services directly into your platform",
      icon: Code,
      features: ["Banking APIs", "Payment processing", "Account management", "Financial compliance"]
    },
    {
      title: "Real-time Processing",
      description: "Handle transactions and data updates in real-time",
      icon: Zap,
      features: ["Instant payments", "Live data sync", "Webhook support", "Event streaming"]
    },
    {
      title: "Global Compliance",
      description: "Built-in compliance for international operations",
      icon: Shield,
      features: ["KYC/AML", "GDPR compliance", "Regional regulations", "Audit trails"]
    }
  ];

  const apiCategories = [
    {
      title: "Banking APIs",
      description: "Create and manage bank accounts programmatically",
      icon: Building2,
      endpoints: ["Account creation", "Balance checking", "Transaction history", "Account settings"]
    },
    {
      title: "Payment APIs",
      description: "Process payments and transfers globally",
      icon: Globe,
      endpoints: ["Payment initiation", "FX conversion", "Settlement", "Refunds"]
    },
    {
      title: "Identity APIs",
      description: "Verify and authenticate users securely",
      icon: Users,
      endpoints: ["Identity verification", "Document validation", "Risk assessment", "Fraud detection"]
    }
  ];

  return (
    <>
      {/* Muxxus Header */}
      <MuxxusHeader />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Platform APIs
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Embed financial services into your platform with our comprehensive APIs. Build the future of embedded finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                Get API Keys
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful API Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to build embedded financial services into your platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Categories Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                API Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive APIs for every aspect of embedded finance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apiCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {category.endpoints.map((endpoint, endpointIndex) => (
                        <li key={endpointIndex} className="text-sm text-gray-600 text-center">
                          • {endpoint}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why choose our Platform APIs?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for developers and businesses that want to create innovative financial experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer First</h3>
                <p className="text-gray-600">Built by developers, for developers with comprehensive documentation.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
                <p className="text-gray-600">Bank-level security and compliance for production applications.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
                <p className="text-gray-600">Operate worldwide with local compliance and payment methods.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to start building?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get started with our APIs and build the future of embedded finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
              <button className="border border-indigo-300 text-indigo-700 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Muxxus Footer */}
        <MuxxusFooter />
      </main>
    </>
  );
}