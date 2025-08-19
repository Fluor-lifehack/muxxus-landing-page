import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import { TrendingUp, Shield, Zap, Users, Globe, Building2 } from "lucide-react";

export default function FintechsFinancialServicesPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Fintechs & Financial Services", isActive: true }
  ];

  const fintechFeatures = [
    {
      title: "Regulatory Compliance",
      description: "Built-in compliance for financial services regulations",
      icon: Shield,
      features: ["KYC/AML", "GDPR compliance", "Regional regulations", "Audit trails"]
    },
    {
      title: "Real-time Processing",
      description: "Handle financial transactions in real-time",
      icon: Zap,
      features: ["Instant payments", "Live data sync", "Webhook support", "Event streaming"]
    },
    {
      title: "Global Operations",
      description: "Operate worldwide with local compliance",
      icon: Globe,
      features: ["200+ countries", "50+ currencies", "Local regulations", "Cross-border"]
    }
  ];

  const fintechSolutions = [
    {
      title: "Digital Banking",
      description: "Build modern digital banking platforms",
      icon: Building2,
      examples: ["Neobanks", "Digital wallets", "Mobile banking", "Open banking"]
    },
    {
      title: "Payment Platforms",
      description: "Create innovative payment solutions",
      icon: TrendingUp,
      examples: ["Payment gateways", "Money transfer", "Subscription billing", "P2P payments"]
    },
    {
      title: "Investment Platforms",
      description: "Build investment and wealth management tools",
      icon: Users,
      examples: ["Robo-advisors", "Trading platforms", "Portfolio management", "Crypto services"]
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
        <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Fintechs & Financial Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build the future of finance with our comprehensive solutions for fintechs and financial services companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors">
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
                Powerful Fintech Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to build, launch, and scale your financial services platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fintechFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-teal-600" />
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

        {/* Fintech Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fintech Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From digital banking to investment platforms, we support every type of fintech innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fintechSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {solution.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-600 text-center">
                          • {example}
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why choose our Fintech solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for fintechs and financial services companies that want to innovate and grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Innovation</h3>
                <p className="text-gray-600">Launch new financial products quickly with our flexible platform.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Built-in compliance for global financial regulations.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Scale</h3>
                <p className="text-gray-600">Grow from startup to enterprise without technical limitations.</p>
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