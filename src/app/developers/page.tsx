import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Developer Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build the future of global financial services with our powerful APIs and infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              View API Docs
            </button>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Documentation & API References
              </h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Product Documentation</h3>
                  <p className="text-gray-600 mb-4">Review detailed product information to get the most from your integration.</p>
                  <a href="/developers/docs" className="text-purple-600 hover:text-purple-700 font-medium">
                    View Documentation →
                  </a>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                  <p className="text-gray-600 mb-4">Explore the full flexibility and power of our Airwallex API.</p>
                  <a href="/developers/api" className="text-purple-600 hover:text-purple-700 font-medium">
                    View API Reference →
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <div className="space-y-4">
                <a href="/developers/connected-accounts" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-1">Connected Accounts</h3>
                  <p className="text-sm text-gray-600">Programmatic account creation and onboarding</p>
                </a>
                
                <a href="/developers/accounts" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-1">Accounts</h3>
                  <p className="text-sm text-gray-600">Multi-currency account management, at scale</p>
                </a>
                
                <a href="/developers/payments" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-1">Payments</h3>
                  <p className="text-sm text-gray-600">Accept multi-currency payments globally</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 