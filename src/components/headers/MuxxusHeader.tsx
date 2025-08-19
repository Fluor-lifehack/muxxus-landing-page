"use client";

import { useState, useRef } from "react";
import {
  ChevronDown,
  Search,
  Globe,
  ArrowRight,
  X,
} from "lucide-react";

// Import des données de navigation
import navigationConfig from "@/config/navigation.json";

export default function MuxxusHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Refs for better event handling
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  // Event handlers
  const handleDropdownToggle = (itemName: string) => {
    if (activeDropdown === itemName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRefs.current[itemName]) {
      clearTimeout(timeoutRefs.current[itemName]);
      timeoutRefs.current[itemName] = null;
    }
    
    if (navigationConfig.header.find(item => item.name === itemName)?.hasChildren) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = (itemName: string) => {
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
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 w-full bg-white border-b border-gray-200/50 shadow-sm`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-32 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600">
                <span className="text-white font-bold text-xl">Muxxus</span>
              </div>
            </div>

            {/* Desktop Navigation - Prend toute la largeur disponible */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1">
                {navigationConfig.header.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasChildren ? (
                      <button
                        className={`flex items-center space-x-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeDropdown === item.name
                            ? "text-blue-600 bg-blue-50" 
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={() => handleMouseLeave(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="flex items-center space-x-1 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        <span>{item.name}</span>
                      </a>
                    )}

                    {/* Mega Menu - Design simple et naturel */}
                    {item.hasChildren && activeDropdown === item.name && (
                      <div
                        className="fixed top-[64px] left-0 w-screen bg-white border-t border-gray-200 z-[9999]"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={() => handleMouseLeave(item.name)}
                      >
                        <div className="max-w-7xl mx-auto px-8 py-6">
                          {/* Header Section - Simple */}
                          <div className="mb-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h2>
                            <p className="text-gray-600">
                              Tools and services for your business
                            </p>
                          </div>

                          {/* Content Grid */}
                          <div className="grid grid-cols-5 gap-6">
                            {/* Colonne gauche - Catégories simples */}
                            <div className="col-span-4">
                              <div className="space-y-6">
                                {item.children?.filter(category => 
                                  'children' in category && 
                                  category.children && 
                                  category.children.length > 0
                                ).map((category) => (
                                  <div key={category.id} className="pb-4 last:pb-0">
                                    <div className="flex items-center gap-2 mb-3">
                                      <span className="text-lg">{('icon' in category && category.icon) || "💼"}</span>
                                      <a href={category.path} className="group">
                                        <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600">
                                          {category.name}
                                        </h3>
                                      </a>
                                      <span className="text-blue-600">›</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                      {('children' in category && category.children) && category.children.map((product) => (
                                        <div key={product.id}>
                                          <a
                                            href={product.path}
                                            className="block p-3 hover:bg-gray-50 rounded"
                                          >
                                            <div className="flex items-center gap-1 mb-1">
                                              <h4 className="text-sm font-medium text-gray-900">
                                                {product.name}
                                              </h4>
                                              <span className="text-blue-600 text-xs">›</span>
                                            </div>
                                            <p className="text-xs text-gray-600">
                                              {product.description}
                                            </p>
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Colonne droite - Section simple */}
                            <div className="col-span-1">
                              <div className="bg-gray-50 p-4 rounded">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mx-auto mb-3">
                                    <span className="text-white text-lg">💼</span>
                                  </div>
                                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                                    Need help?
                                  </h3>
                                  <button
                                    onClick={handleModalOpen}
                                    className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                                  >
                                    Contact us
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <button className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>

              {/* Login Link */}
              <a
                href="/login"
                className="hidden lg:inline-flex px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Log in
              </a>

              {/* Get Started Button */}
              <button
                onClick={handleModalOpen}
                className="hidden lg:inline-flex px-6 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <button
                onClick={handleMobileMenuToggle}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
                    <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
                    <div className="w-5 h-0.5 bg-gray-700"></div>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-6 py-4 space-y-4">
                {navigationConfig.header.map((item) => (
                  <div key={item.name}>
                    {item.hasChildren ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="mt-2 ml-4 space-y-4">
                            {item.children?.map((category) => {
                              if (!('hasChildren' in category) || !category.hasChildren || !('children' in category) || !category.children || ('isHeading' in category && category.isHeading)) {
                                return null;
                              }
                              
                              return (
                                <div key={category.id} className="space-y-3">
                                  <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">{('icon' in category && category.icon) || "💼"}</span>
                                    <h4 className="text-sm font-semibold text-gray-700">{category.name}</h4>
                                  </div>
                                  <div className="grid grid-cols-1 gap-2">
                                    {category.children.map((product) => (
                                      <a
                                        key={product.id}
                                        href={product.path}
                                        className="flex items-start gap-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                      >
                                        <div className="flex-1">
                                          <div className="font-medium text-gray-900 mb-1">{product.name}</div>
                                          <div className="text-xs text-gray-500">{product.description}</div>
                                        </div>
                                        <ArrowRight className="w-3 h-3 text-gray-400 mt-1" />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modal placeholder */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Get Started</h3>
            <p className="text-gray-600 mb-6">Contact us to get started with Muxxus solutions.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <a
                href="/contact"
                className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}