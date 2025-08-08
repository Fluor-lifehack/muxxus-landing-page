import DesignStudioHeader from "@/components/headers/DesignStudioHeader";
import BottomSection from "@/components/elements/bottomSection/BottomSection";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <DesignStudioHeader />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Answers to common questions about Airwallex products and services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">How do I get started with Airwallex?</h3>
              <p className="text-gray-600">
                Getting started is easy! Simply sign up for an account, complete the verification process, 
                and you'll be able to create multi-currency accounts and start making global payments.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">What currencies do you support?</h3>
              <p className="text-gray-600">
                We support 50+ currencies including major currencies like USD, EUR, GBP, AUD, and many more. 
                Check our documentation for the complete list.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">How long do international transfers take?</h3>
              <p className="text-gray-600">
                Most international transfers are completed within 1-2 business days, depending on the 
                destination country and currency.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">What are your fees?</h3>
              <p className="text-gray-600">
                Our fees are transparent and competitive. We offer volume-based pricing with no hidden fees. 
                Contact our sales team for detailed pricing information.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">Is Airwallex secure?</h3>
              <p className="text-gray-600">
                Yes, security is our top priority. We use bank-level encryption and comply with global 
                security standards including PCI DSS and SOC 2.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">Do you offer API access?</h3>
              <p className="text-gray-600">
                Yes! We provide comprehensive APIs for developers to integrate our services into their 
                applications. Check our developer documentation for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomSection />
    </main>
  );
} 