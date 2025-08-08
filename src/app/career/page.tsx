import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Come join us! We're hiring talented individuals to help build the future of global financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              View Openings
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Learn About Culture
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
              <p className="text-gray-600 mb-4">Build scalable financial infrastructure</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">San Francisco, CA</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Apply →
                </button>
              </div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Product Manager</h3>
              <p className="text-gray-600 mb-4">Drive product strategy and execution</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">London, UK</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Apply →
                </button>
              </div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Sales Representative</h3>
              <p className="text-gray-600 mb-4">Help businesses grow globally</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">New York, NY</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Apply →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 