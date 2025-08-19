import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import { ShoppingCart, Users, Globe, Zap, Shield, Building2 } from "lucide-react";

export default function MarketplacesPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Marketplaces", isActive: true }
  ];

  const marketplaceFeatures = [
    {
      title: "Multi-Vendor Support",
      description: "Enable multiple sellers to list and sell products on your platform",
      icon: Users,
      features: ["Vendor onboarding", "Commission management", "Seller analytics", "Payment distribution"]
    },
    {
      title: "Global Payment Processing",
      description: "Accept payments from customers worldwide in multiple currencies",
      icon: Globe,
      features: ["200+ countries", "50+ currencies", "Local payment methods", "FX conversion"]
    },
    {
      title: "Automated Operations",
      description: "Streamline marketplace operations with intelligent automation",
      icon: Zap,
      features: ["Order management", "Inventory sync", "Fulfillment tracking", "Customer support"]
    }
  ];

  const marketplaceTypes = [
    {
      title: "E-commerce Marketplaces",
      description: "Multi-vendor online stores for physical and digital products",
      icon: ShoppingCart,
      examples: ["Amazon-style platforms", "Niche product marketplaces", "Local marketplaces"]
    },
    {
      title: "Service Marketplaces",
      description: "Platforms connecting service providers with customers",
      icon: Users,
      examples: ["Freelance platforms", "Professional services", "Gig economy platforms"]
    },
    {
      title: "B2B Marketplaces",
      description: "Business-to-business trading platforms",
      icon: Building2,
      examples: ["Wholesale platforms", "Industrial supplies", "Professional equipment"]
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
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Marketplace Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build and scale your marketplace platform with our comprehensive solutions for multi-vendor commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
                Start Building
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Marketplace Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to create, launch, and scale your marketplace platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketplaceFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-purple-600" />
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

        {/* Marketplace Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Marketplaces We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From e-commerce to services, we have solutions for every type of marketplace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketplaceTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
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
                Why choose our Marketplace solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for entrepreneurs and businesses that want to create successful marketplace platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Launch</h3>
                <p className="text-gray-600">Get your marketplace up and running in weeks, not months.</p>
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
                <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
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