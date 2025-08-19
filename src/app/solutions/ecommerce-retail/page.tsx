import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import { ShoppingBag, Globe, Zap, Shield, Users, Building2 } from "lucide-react";

export default function EcommerceRetailPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "E-commerce & Retail", isActive: true }
  ];

  const ecommerceFeatures = [
    {
      title: "Global Payment Processing",
      description: "Accept payments from customers worldwide in multiple currencies",
      icon: Globe,
      features: ["200+ countries", "50+ currencies", "Local payment methods", "FX conversion"]
    },
    {
      title: "Inventory Management",
      description: "Track and manage your inventory across multiple locations",
      icon: ShoppingBag,
      features: ["Real-time tracking", "Multi-location support", "Automated reordering", "Stock alerts"]
    },
    {
      title: "Customer Experience",
      description: "Provide seamless shopping experiences across all channels",
      icon: Users,
      features: ["Omnichannel support", "Personalized recommendations", "Loyalty programs", "Customer support"]
    }
  ];

  const retailSolutions = [
    {
      title: "Online Stores",
      description: "Build and scale your e-commerce presence",
      icon: ShoppingBag,
      examples: ["B2C retail", "D2C brands", "Marketplace integration", "Mobile commerce"]
    },
    {
      title: "Brick & Mortar",
      description: "Modernize your physical retail operations",
      icon: Building2,
      examples: ["POS integration", "Inventory sync", "Customer analytics", "Omnichannel retail"]
    },
    {
      title: "Omnichannel",
      description: "Unify online and offline customer experiences",
      icon: Users,
      examples: ["Unified inventory", "Cross-channel marketing", "Customer data sync", "Seamless returns"]
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
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              E-commerce & Retail Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your retail business with our comprehensive e-commerce and omnichannel solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors">
                Get Started
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful E-commerce Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to build, launch, and scale your online retail business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecommerceFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-orange-600" />
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

        {/* Retail Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Retail Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From online stores to physical retail, we have solutions for every type of retail business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {retailSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {solution.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-600 text-center">
                          • {example}
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
                Why choose our E-commerce solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for retailers who want to grow their business online and offline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
                <p className="text-gray-600">Get your online store up and running in days, not weeks.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
                <p className="text-gray-600">Bank-level security with global compliance standards.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scalable Growth</h3>
                <p className="text-gray-600">Grow from startup to enterprise without technical limitations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Muxxus Footer */}
        <MuxxusFooter />
      </main>
    </>
  );
}