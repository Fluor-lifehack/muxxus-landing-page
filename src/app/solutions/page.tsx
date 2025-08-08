import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tailored financial solutions for every industry and business type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Find Your Solution
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions for every industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From travel to fintech, we have solutions designed for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Travel</h3>
              <p className="text-gray-600 mb-4">Agencies, tour operators, hospitality</p>
              <a href="/solutions/travel" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more →
              </a>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">eCommerce & Retail</h3>
              <p className="text-gray-600 mb-4">Online and in-store retail</p>
              <a href="/solutions/ecommerce-retail" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more →
              </a>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Software & Technology</h3>
              <p className="text-gray-600 mb-4">B2B and B2C software</p>
              <a href="/solutions/software-technology" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 