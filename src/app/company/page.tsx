import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Airwallex
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Building the future of global financial services with innovative technology and a customer-first approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Join Our Team
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Airwallex
              </h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Who we are</h3>
                  <p className="text-gray-600 mb-4">A snapshot of Airwallex</p>
                  <a href="/company/who-we-are" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn more →
                  </a>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Operating principles</h3>
                  <p className="text-gray-600 mb-4">What matters to us</p>
                  <a href="/company/operating-principles" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Us
              </h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Careers</h3>
                  <p className="text-gray-600 mb-4">Come join us! We're hiring</p>
                  <a href="/career" className="text-purple-600 hover:text-purple-700 font-medium">
                    View Openings →
                  </a>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Partnership program</h3>
                  <p className="text-gray-600 mb-4">Explore and join our partnership program</p>
                  <a href="/company/partnership-program" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-gray-600 mb-4">Industry and product insights</p>
              <a href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                Read Blog →
              </a>
            </div>
            
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Newsroom</h3>
              <p className="text-gray-600 mb-4">Latest news on Airwallex</p>
              <a href="/company/newsroom" className="text-purple-600 hover:text-purple-700 font-medium">
                View News →
              </a>
            </div>
            
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4">Answers to common questions</p>
              <a href="/faq" className="text-purple-600 hover:text-purple-700 font-medium">
                View FAQ →
              </a>
            </div>
            
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600 mb-4">Connect with our team</p>
              <a href="/support" className="text-purple-600 hover:text-purple-700 font-medium">
                Get Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 