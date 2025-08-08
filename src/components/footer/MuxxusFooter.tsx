"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import Link from "next/link";
import Logo from "@/components/elements/logo/Logo";
import MuxxusButton from "@/components/elements/button/MuxxusButton";
import siteConfig from "@/config/siteConfig.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  footerNav?: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

const MuxxusFooter = ({ footerNav }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info, social, site_info } = siteConfig;
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  // Navigation inspirée d'Airwallex
  const airwallexNavigation = [
    {
      title: "Products",
      links: [
        { name: "Business Accounts", href: "/products/business-accounts" },
        { name: "Spend", href: "/products/spend" },
        { name: "Payments", href: "/products/payments" },
        { name: "Platform APIs", href: "/products/platform-apis" },
        { name: "FX & Transfers", href: "/products/fx-transfers" },
        { name: "Corporate Cards", href: "/products/corporate-cards" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "E-commerce", href: "/solutions/ecommerce" },
        { name: "Marketplaces", href: "/solutions/marketplaces" },
        { name: "Travel", href: "/solutions/travel" },
        { name: "SaaS", href: "/solutions/saas" },
        { name: "Fintech", href: "/solutions/fintech" },
        { name: "Enterprise", href: "/solutions/enterprise" },
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", href: "/developers/docs" },
        { name: "API Reference", href: "/developers/api" },
        { name: "SDKs", href: "/developers/sdks" },
        { name: "Webhooks", href: "/developers/webhooks" },
        { name: "Status", href: "/developers/status" },
        { name: "Support", href: "/developers/support" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Contact Support", href: "/support/contact" },
        { name: "Status", href: "/status" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" },
        { name: "Trust Center", href: "/trust" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900" ref={containerRef}>
      <div className="container2">
        {/* Section principale */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-12">
            {/* Logo et description */}
            <div className="lg:col-span-2">
              <Logo
                light={isLight}
                customWidth={150}
                customHeight={110}
                className="mb-6"
              />
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-8">
                Secure your business with enterprise-grade protection. 
                Trusted by companies worldwide for their most critical data.
              </p>
              <div className="flex space-x-4">
                {social?.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link || "#"}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.107-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation inspirée d'Airwallex - 5 colonnes sur la même ligne */}
            {airwallexNavigation.map((section, index) => (
              <div key={index} className="has_fade_anim">
                <h3 className="text-white font-semibold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4 has_text_mov_anim">
              Ready to secure your business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get started with enterprise-grade security solutions designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MuxxusButton
                href="/contact"
                variant="primary"
                size="lg"
              >
                Get Started
              </MuxxusButton>
              <MuxxusButton
                href="/contact"
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Contact Sales
              </MuxxusButton>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {footer_info?.copyright?.label}{" "}
              <Link
                href={footer_info?.copyright?.link || "#"}
                target="_blank"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {footer_info?.copyright?.company}
              </Link>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Security
              </Link>
              <Link href="/compliance" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Compliance
              </Link>
              <Link href="/trust" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Trust Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MuxxusFooter;
