import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCheck, FaGlobe, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      price: "$99",
      period: "per month",
      features: [
        "Up to 5 team members",
        "Basic multi-currency accounts",
        "Standard FX rates",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      popular: false,
      color: "from-blue-50 to-blue-100",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with global operations",
      price: "$299",
      period: "per month",
      features: [
        "Up to 25 team members",
        "Advanced multi-currency accounts",
        "Competitive FX rates",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom workflows",
        "Dedicated account manager"
      ],
      popular: true,
      color: "from-emerald-50 to-emerald-100",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: "Custom",
      period: "contact us",
      features: [
        "Unlimited team members",
        "Custom multi-currency solutions",
        "Best FX rates",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security features",
        "Compliance tools",
        "White-label options"
      ],
      popular: false,
      color: "from-purple-50 to-purple-100",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  const addOns = [
    {
      name: "Additional Team Members",
      price: "$15",
      period: "per member/month",
      description: "Add more users to your team as you grow"
    },
    {
      name: "Advanced Analytics",
      price: "$50",
      period: "per month",
      description: "Get deeper insights into your financial operations"
    },
    {
      name: "Custom Integrations",
      price: "$200",
      period: "one-time",
      description: "Connect Muxxus with your existing tools and systems"
    },
    {
      name: "Priority Support",
      price: "$100",
      period: "per month",
      description: "Get faster response times and dedicated support"
    }
  ];

  const features = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Operate in 150+ countries with local banking infrastructure"
    },
    {
      icon: FaShieldAlt,
      title: "Bank-Grade Security",
      description: "Enterprise-level security with SOC 2 compliance"
    },
    {
      icon: FaChartLine,
      title: "Real-Time Analytics",
      description: "Monitor your global operations with live dashboards"
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description: "Work together seamlessly across borders and time zones"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Pricing", href: "/pricing", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business needs. All plans include our core 
              features with no hidden fees or surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View Plans" 
                href="#pricing-plans"
                className="bg-emerald-600 hover:bg-emerald-700"
              />
              <CircleFillButton 
                text="Contact Sales" 
                href="/contact"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Choose Your Plan"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-emerald-500 shadow-xl scale-105' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheck className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <CircleFillButton 
                    text={plan.name === "Enterprise" ? "Contact Sales" : "Get Started"} 
                    href={plan.name === "Enterprise" ? "/contact" : "#"}
                    className={plan.buttonColor}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Customize your plan with these add-ons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-emerald-600">{addon.price}</span>
                  <span className="text-gray-600 ml-1">{addon.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
            <p className="text-lg text-gray-600">All plans come with these essential features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common pricing questions</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan at any time?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees for any of our plans. You only pay the monthly subscription fee.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, bank transfers, and PayPal for annual plans.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">Yes, annual plans come with a 20% discount compared to monthly billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses already using Muxxus for their global operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Start Free Trial" 
              href="#"
              className="bg-emerald-600 hover:bg-emerald-700"
            />
            <CircleFillButton 
              text="Schedule a Demo" 
              href="/contact"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default PricingPage;
