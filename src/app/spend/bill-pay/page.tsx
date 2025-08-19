import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import { CreditCard, Receipt, Zap, Shield, Users, Building2 } from "lucide-react";

export default function BillPayPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Spend", href: "/spend" },
    { label: "Bill Pay", isActive: true }
  ];

  const billPayFeatures = [
    {
      title: "Automated Bill Processing",
      description: "Automatically process and pay recurring bills on time",
      icon: Zap,
      features: ["Scheduled payments", "Auto-approval rules", "Payment reminders", "Late fee prevention"]
    },
    {
      title: "Vendor Management",
      description: "Centralized vendor database with payment history",
      icon: Users,
      features: ["Vendor profiles", "Payment history", "Contract management", "Performance tracking"]
    },
    {
      title: "Expense Control",
      description: "Set spending limits and approval workflows",
      icon: Shield,
      features: ["Budget controls", "Approval workflows", "Spending limits", "Policy enforcement"]
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
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Receipt className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bill Pay
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your bill payment process with automated workflows, vendor management, and expense control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
                Get Started
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
                Powerful Bill Pay Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage and automate your bill payments efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {billPayFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600" />
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

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why choose our Bill Pay solution?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for businesses that want to streamline their payment processes and reduce manual work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
                <p className="text-gray-600">Automate repetitive tasks and focus on strategic decisions.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Risk Reduction</h3>
                <p className="text-gray-600">Prevent late payments and maintain vendor relationships.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                <p className="text-gray-600">Grow your business without increasing administrative overhead.</p>
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