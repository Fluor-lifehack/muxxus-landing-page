"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "@/components/elements/logo/Logo";
import GetStartedModal from "@/components/modals/GetStartedModal";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Building2,
  CreditCard,
  Zap,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const MuxxusHeader = () => {
  // States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Refs for better event handling
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  // Navigation data
  const navigationItems = [
    {
      name: "Products",
      hasDropdown: true,
      href: "/products",
      items: [
        {
          title: "Business Accounts",
          description: "Multi-currency accounts for global business",
          href: "/business-accounts",
          icon: Building2,
          features: [
            { title: "Global Accounts", href: "/service/design/business-accounts" },
            { title: "FX & Transfers", href: "/service/design/fx-transfers" },
            { title: "Multi-currency", href: "/business-accounts" },
          ],
        },
        {
          title: "Spend Management",
          description: "Corporate cards and expense management",
          href: "/spend",
          icon: CreditCard,
          features: [
            { title: "Corporate Cards", href: "/spend/corporate-cards" },
            { title: "Expense Management", href: "/service/seo/expense-management" },
            { title: "Bill Pay", href: "/spend/bill-pay" },
          ],
        },
        {
          title: "Payments",
          description: "Accept payments globally with ease",
          href: "/payments",
          icon: Zap,
          features: [
            { title: "Global Payments", href: "/service/video/global-payments" },
            { title: "Payment Links", href: "/service/web/payment-links" },
            { title: "Plugins", href: "/service/branding/plugins" },
          ],
        },
      ],
    },
    {
      name: "Solutions",
      hasDropdown: true,
      href: "/solutions",
      items: [
        {
          title: "E-commerce",
          description: "Built for online businesses",
          href: "/solutions/ecommerce-retail",
          icon: Users,
          features: [
            { title: "Marketplaces", href: "/solutions/marketplaces" },
            { title: "Retail", href: "/solutions/ecommerce-retail" },
            { title: "Digital Creators", href: "/service/marketing/digital-creators" },
          ],
        },
        {
          title: "Fintech",
          description: "Financial services innovation",
          href: "/solutions/fintechs-financial-services",
          icon: Shield,
          features: [
            { title: "Banking as a Service", href: "/service/ai/banking-as-service" },
            { title: "Embedded Finance", href: "/platform-apis" },
          ],
        },
      ],
    },
    { name: "Developers", href: "/developers" },
    { name: "Company", href: "/company" },
  ];

  // Event handlers
  const handleDropdownToggle = (itemName: string) => {
    if (activeDropdown === itemName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseEnter = (itemName: string) => {
    // Clear any existing timeout
    if (timeoutRefs.current[itemName]) {
      clearTimeout(timeoutRefs.current[itemName]);
      timeoutRefs.current[itemName] = null;
    }
    
    if (navigationItems.find(item => item.name === itemName)?.hasDropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = (itemName: string) => {
    // Set timeout to close dropdown
    timeoutRefs.current[itemName] = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg"
            : "bg-white/90 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Logo light={false} customWidth={120} customHeight={50} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  ref={(el) => {
                    if (el) dropdownRefs.current[item.name] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={() => handleMouseLeave(item.name)}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeDropdown === item.name
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white border-t border-blue-100 shadow-xl z-[9999]"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={() => handleMouseLeave(item.name)}
                    >
                      <div className="max-w-7xl mx-auto px-8 py-10">
                        {/* Header Section */}
                        <div className="mb-8">
                          <h2 className="text-2xl font-bold text-blue-600 mb-2">{item.name}</h2>
                          <p className="text-gray-600">Discover our comprehensive solutions</p>
                        </div>

                        {/* Content Grid - Items + Image */}
                        <div className="grid grid-cols-3 gap-8">
                          {/* Left Column - Menu Items */}
                          <div className="col-span-2">
                            <div className="grid grid-cols-2 gap-6">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="group block p-5 rounded-xl border border-transparent hover:border-blue-200 hover:shadow-md transition-all duration-200 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                  {/* Icône et titre */}
                                  <div className="flex items-start space-x-4 mb-4">
                                    <div className="p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                      <subItem.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {subItem.title}
                                      </h3>
                                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Features List */}
                                  <ul className="text-xs text-gray-600 space-y-1">
                                    {subItem.features.map((feature) => (
                                      <li key={feature.title} className="flex items-center">
                                        <span className="mr-2 text-blue-600">•</span>
                                        <Link
                                          href={feature.href}
                                          className="text-blue-600 hover:text-blue-700 hover:underline"
                                        >
                                          {feature.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>

                                  {/* Learn More Link */}
                                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Column - Featured Image */}
                          <div className="col-span-1">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full flex flex-col justify-center">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <div className="w-8 h-8 text-white font-bold text-xl">
                                    {item.name.charAt(0)}
                                  </div>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                                  {item.name} Solutions
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                  Transform your business with our cutting-edge {item.name.toLowerCase()} services
                                </p>
                                <button
                                  onClick={handleModalOpen}
                                  className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                                >
                                  Get Started
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA Section */}
                        <div className="mt-8 pt-6 border-t border-blue-100">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-600">Need help choosing?</p>
                              <p className="text-base font-medium text-blue-600">Our experts are here to guide you</p>
                            </div>
                            <div className="flex space-x-3">
                              <button className="px-4 py-2 border border-blue-200 text-blue-700 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors">
                                Contact Sales
                              </button>
                              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                                Schedule Demo
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button className="hidden lg:flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>

              {/* CTA Buttons */}
              <button
                onClick={handleModalOpen}
                className="hidden lg:inline-flex px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
              <button className="hidden lg:inline-flex px-4 py-2 text-sm font-medium border border-blue-200 text-blue-700 rounded-md hover:bg-blue-50 transition">
                Contact Sales
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMobileMenuToggle}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Get Started Modal */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MuxxusHeader;