"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import GetStartedModal from "@/components/modals/GetStartedModal";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DesignStudioHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" style={{ position: 'fixed' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo light={isLight} customWidth={120} customHeight={90} />
          
          <div className="hidden xl:block">
            <Menu />
          </div>
          
                      <div className="flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-4 py-3 bg-black text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300 whitespace-nowrap"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full">
                  Get Started
                </span>
                <span className="absolute inset-0 flex items-center justify-center bg-white text-black transition-transform duration-300 group-hover:translate-y-0 translate-y-full">
                  Get Started
                </span>
              </button>
              <div className="xl:hidden">
                <SideNavModal />
              </div>
            </div>
        </div>
      </div>
      
      {/* Get Started Modal */}
      <GetStartedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
};

export default DesignStudioHeader;
