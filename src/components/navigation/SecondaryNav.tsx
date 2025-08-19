"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type SecondaryNavItem = {
  title: string;
  href: string;
  description: string;
  iconName?: string;
  features?: string[];
};

interface SecondaryNavProps {
  title: string;
  description: string;
  items: SecondaryNavItem[];
  currentPath: string;
  className?: string;
}

const SecondaryNav = ({ title, description, items, currentPath, className = "" }: SecondaryNavProps) => {
  const pathname = usePathname();

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "Building2": return "🏢";
      case "CreditCard": return "💳";
      case "Zap": return "⚡";
      case "Shield": return "🛡️";
      case "Users": return "👥";
      case "Globe": return "🌍";
      default: return "📋";
    }
  };

  return (
    <section className={cn("bg-gray-50 border-b border-gray-200", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group block p-6 rounded-xl border-2 transition-all duration-200",
                  isActive
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
                )}
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={cn(
                    "p-3 rounded-lg transition-colors text-2xl",
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                  )}>
                    {getIcon(item.iconName)}
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-lg font-semibold transition-colors",
                      isActive
                        ? "text-blue-700"
                        : "text-gray-900 group-hover:text-blue-700"
                    )}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                {item.features && (
                  <ul className="text-xs text-gray-600 space-y-1">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className={cn(
                          "mr-2",
                          isActive ? "text-blue-500" : "text-gray-400 group-hover:text-blue-400"
                        )}>
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Active Indicator */}
                {isActive && (
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                    <span>Current page</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondaryNav;
