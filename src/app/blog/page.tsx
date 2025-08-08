import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Industry and product insights from the Airwallex team.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Future of Global Payments</h3>
                <p className="text-gray-600 mb-4">Exploring how technology is transforming cross-border transactions.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
            
            <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Building Scalable Financial Infrastructure</h3>
                <p className="text-gray-600 mb-4">Best practices for developing robust payment systems.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 10, 2024</span>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
            
            <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Multi-Currency Business Accounts</h3>
                <p className="text-gray-600 mb-4">How global businesses can optimize their financial operations.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 5, 2024</span>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 