import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import SecondaryNav from "@/components/navigation/SecondaryNav";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Products", isActive: true }
  ];

  const productCategories = [
    {
      title: "Business Accounts",
      href: "/business-accounts",
      description: "Multi-currency accounts for global business",
      iconName: "Building2",
      features: ["Global Accounts", "FX & Transfers", "Multi-currency"]
    },
    {
      title: "Spend Management",
      href: "/spend",
      description: "Corporate cards and expense management",
      iconName: "CreditCard",
      features: ["Corporate Cards", "Expense Management", "Bill Pay"]
    },
    {
      title: "Payments",
      href: "/payments",
      description: "Accept payments globally with ease",
      iconName: "Zap",
      features: ["Checkout", "Payment Links", "Plugins"]
    },
    {
      title: "Platform APIs",
      href: "/platform-apis",
      description: "Build financial products with our APIs",
      iconName: "Shield",
      features: ["REST APIs", "SDKs", "Webhooks"]
    },
    {
      title: "Solutions",
      href: "/solutions",
      description: "Industry-specific solutions",
      iconName: "Users",
      features: ["E-commerce", "Fintech", "Marketplaces"]
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Products
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive financial solutions for global businesses. From multi-currency accounts to payment processing, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <SecondaryNav
        title="Our Product Suite"
        description="Choose the right financial tools for your business needs"
        items={productCategories}
        currentPath="/products"
      />

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why choose our products?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for scale, designed for simplicity, trusted by global businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Operate in 200+ countries with local infrastructure.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Instant setup and real-time processing.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
}
