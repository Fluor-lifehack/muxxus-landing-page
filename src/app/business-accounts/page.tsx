import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import SecondaryNav from "@/components/navigation/SecondaryNav";
import BottomSection from "@/components/elements/bottomSection/BottomSection";
import { Building2, Globe, CreditCard, Zap } from "lucide-react";

export default function BusinessAccountsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Business Accounts", isActive: true }
  ];

  const secondaryNavItems = [
    {
      title: "Global Accounts",
      href: "/business-accounts/global",
      description: "Multi-currency accounts for global business",
      iconName: "Globe",
      features: ["50+ Currencies", "Instant Setup", "Global Compliance"]
    },
    {
      title: "FX & Transfers",
      href: "/business-accounts/fx-transfers",
      description: "Foreign exchange and international transfers",
      iconName: "Zap",
      features: ["Competitive Rates", "200+ Countries", "Real-time FX"]
    },
    {
      title: "Multi-currency",
      href: "/business-accounts",
      description: "Manage multiple currencies in one platform",
      iconName: "Building2",
      features: ["Unified Dashboard", "Currency Conversion", "Risk Management"]
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

      {/* Secondary Navigation */}
      <SecondaryNav
        title="Business Accounts"
        description="Multi-currency accounts for global business operations"
        items={secondaryNavItems}
        currentPath="/business-accounts"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Business Accounts
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Multi-currency accounts to receive funds from anywhere in the world with competitive rates and global compliance.
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why choose our Business Accounts?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for global businesses that need flexibility, speed, and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Operate in 200+ countries with local banking infrastructure.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Currency</h3>
              <p className="text-gray-600">Hold and manage 50+ currencies in a single account.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-gray-600">Get started in minutes with our streamlined onboarding.</p>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 