import Link from "next/link";
import { Building2, Globe, Zap, CreditCard, Shield, Users } from "lucide-react";

const BusinessAccountsLinks = () => {
  const quickLinks = [
    {
      title: "Account Types",
      links: [
        { name: "Global Accounts", href: "/business-accounts/global", icon: Globe },
        { name: "FX & Transfers", href: "/business-accounts/fx-transfers", icon: Zap },
        { name: "Multi-currency", href: "/business-accounts", icon: Building2 },
      ]
    },
    {
      title: "Related Products",
      links: [
        { name: "Corporate Cards", href: "/products/corporate-cards", icon: CreditCard },
        { name: "Spend Management", href: "/products/spend", icon: Shield },
        { name: "Platform APIs", href: "/products/platform-apis", icon: Users },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/developers/docs", icon: Building2 },
        { name: "API Reference", href: "/developers/api", icon: Zap },
        { name: "Support", href: "/support", icon: Users },
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access to Business Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate quickly to related products, services, and resources for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                      >
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing the right solution?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Sales
            </Link>
            <Link
              href="/support"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors inline-block"
            >
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAccountsLinks;
