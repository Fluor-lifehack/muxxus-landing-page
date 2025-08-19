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
  Search,
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
          href: "/service/accounts/business",
          // href: "/service/business-accounts",
          icon: Building2,
          features: [
            { title: "Global Accounts", href: "/service/accounts/global" },
            { title: "FX & Transfers", href: "/service/accounts/fx-transfers" },
            { title: "Multi-currency", href: "/service/accounts/multi" },
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
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl"
            : "bg-white/80 backdrop-blur-lg border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Logo light={false} customWidth={120} customHeight={50} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
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
                      className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl z-[9999]"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={() => handleMouseLeave(item.name)}
                    >
                      <div className="max-w-7xl mx-auto px-8 py-12">
                        {/* Header Section */}
                        <div className="mb-10 text-center">
                          <h2 className="text-3xl font-bold text-gray-900 mb-3">{item.name}</h2>
                          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our comprehensive solutions designed to scale your business globally</p>
                        </div>

                        {/* Content Grid - Items + Image */}
                        <div className="grid grid-cols-3 gap-10">
                          {/* Left Column - Menu Items */}
                          <div className="col-span-2">
                            <div className="grid grid-cols-2 gap-6">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="group block p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                  {/* Icône et titre */}
                                  <div className="flex items-start space-x-4 mb-5">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                      <subItem.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {subItem.title}
                                      </h3>
                                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Features List */}
                                  <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                    {subItem.features.map((feature) => (
                                      <li key={feature.title} className="flex items-center">
                                        <span className="mr-3 text-blue-500 font-bold">•</span>
                                        <Link
                                          href={feature.href}
                                          className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                                        >
                                          {feature.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>

                                  {/* Learn More Link */}
                                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Column - Featured Image */}
                          <div className="col-span-1">
                            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 h-full flex flex-col justify-center border border-gray-100">
                              <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                  <div className="w-10 h-10 text-white font-bold text-2xl">
                                    {item.name.charAt(0)}
                                  </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  {item.name} Solutions
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                  Transform your business with our cutting-edge {item.name.toLowerCase()} services and global reach
                                </p>
                                <button
                                  onClick={handleModalOpen}
                                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                  Get Started
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA Section */}
                        <div className="mt-10 pt-8 border-t border-gray-200/50">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Need help choosing?</p>
                              <p className="text-lg font-semibold text-gray-900">Our experts are here to guide you</p>
                            </div>
                            <div className="flex space-x-4">
                              <button className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                                Contact Sales
                              </button>
                              <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
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
              {/* Search Button */}
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <button className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>

              {/* CTA Buttons */}
              <button
                onClick={handleModalOpen}
                className="hidden lg:inline-flex px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </button>
              <button className="hidden lg:inline-flex px-6 py-2.5 text-sm font-semibold border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                Contact Sales
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMobileMenuToggle}
                className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
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