import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import BusinessAccountsLinks from "@/components/elements/bottomSection/BusinessAccountsLinks";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import { Globe, CreditCard, Shield, Users, Zap, Building2 } from "lucide-react";

export default function GlobalAccountsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Business Accounts", href: "/business-accounts" },
    { label: "Global Accounts", isActive: true },
  ];

  const accountTypes = [
    {
      title: "Standard Global Account",
      description: "Essential global banking with multi-currency support and basic international features.",
      icon: Globe,
      features: ["Multi-currency support", "International transfers", "Basic reporting", "Mobile banking"],
      price: "Free",
      cta: "Get Started",
      href: "/contact"
    },
    {
      title: "Premium Global Account",
      description: "Advanced global banking with enhanced features, better rates, and priority support.",
      icon: CreditCard,
      features: ["Better exchange rates", "Priority support", "Advanced analytics", "Custom limits"],
      price: "$29/month",
      cta: "Upgrade Now",
      href: "/contact"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom enterprise solutions with dedicated support, custom limits, and API integration.",
      icon: Building2,
      features: ["Custom limits", "API integration", "Dedicated support", "White-label options"],
      price: "Custom pricing",
      cta: "Contact Sales",
      href: "/contact"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Global Accounts
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Multi-currency business accounts for global operations. Manage your international business finances with ease and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Open Account
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Global Account Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the account that best fits your global business needs and scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => {
              const IconComponent = account.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{account.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{account.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{account.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {account.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    {account.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why choose Global Accounts?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for businesses that operate internationally and need reliable global banking solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Operate in 200+ countries with local banking infrastructure and compliance.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-gray-600">Get started in minutes with our streamlined onboarding process.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support team specialized in global banking operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <BusinessAccountsLinks />

      {/* Muxxus Footer */}
      <MuxxusFooter />
    </main>
  );
} 