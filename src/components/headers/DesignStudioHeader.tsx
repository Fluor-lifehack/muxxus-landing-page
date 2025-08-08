"use client";

import Menu from "@/components/menu/Menu";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DesignStudioHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo light={isLight} customWidth={120} customHeight={40} />
          
          <div className="hidden xl:block">
            <Menu />
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              href="/login"
            >
              Log in
            </Link>
            <Link
              className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-purple-700 transition-colors"
              href="/demo"
            >
              See a demo
            </Link>
            <div className="xl:hidden">
              <SideNavModal />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesignStudioHeader;
