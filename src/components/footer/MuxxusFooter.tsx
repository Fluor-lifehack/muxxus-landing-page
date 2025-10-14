"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import Link from "next/link";
import Logo from "@/components/elements/logo/Logo";
import MuxxusButton from "@/components/elements/button/MuxxusButton";
import siteConfig from "@/config/siteConfig.json";

const MuxxusFooter = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { social } = siteConfig;

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  // Navigation optimisée avec useMemo pour éviter les recalculs
  const muxxusNavigation = useMemo(() => [
    {
      title: "Products",
      links: [
        { name: "Global Accounts", href: "/accounts/global-accounts" },
        { name: "FX & Transfers", href: "/accounts/fx-transfers" },
        { name: "Corporate Cards", href: "/spend/corporate-cards" },
        { name: "Expense Management", href: "/spend/expense-management" },
        { name: "Bill Pay", href: "/spend/bill-pay" },
        { name: "Checkout", href: "/payments/checkout" },
      ]
    },
    {
      title: "Payments",
      links: [
        { name: "Payment Plugins", href: "/payments/plugins" },
        { name: "Payment Links", href: "/payments/links" },
        { name: "Payments API", href: "/platform-apis/payments" },
      ]
    },
    {
      title: "Platform APIs",
      links: [
        { name: "Connected Accounts", href: "/platform-apis/connected-accounts" },
        { name: "Accounts API", href: "/platform-apis/accounts" },
        { name: "Payments API", href: "/platform-apis/payments" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        // { name: "Careers", href: "/careers" },
        // { name: "Press", href: "/press" },
        // { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        // { name: "Blog", href: "/blog" },
      ]
    },
    {
      title: "Support",
      links: [
      //   { name: "Help Center", href: "/help" },
      //   { name: "Contact Support", href: "/support" },
      //   { name: "Status", href: "/status" },
      //   { name: "Security", href: "/security" },
      //   { name: "Compliance", href: "/compliance" },
      //   { name: "Trust Center", href: "/trust" },
      ]
    }
  ], []);

  // Composant de lien optimisé
  const FooterLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link
      href={href}
      className={`text-gray-400 hover:text-white transition-colors duration-200 text-sm ${className}`}
    >
      {children}
    </Link>
  );

  // Types pour la navigation
  type NavigationLink = {
    name: string;
    href: string;
  };

  type NavigationSection = {
    title: string;
    links: NavigationLink[];
  };

  // Composant de section de navigation optimisé
  const NavigationSectionComponent = ({ section, index }: { section: NavigationSection; index: number }) => (
    <div key={index} className="has_fade_anim">
      <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
        {section.title}
      </h3>
      <ul className="space-y-3">
        {section.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <FooterLink href={link.href}>
              {link.name}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo light={true} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Global financial infrastructure for modern businesses. 
                Multi-currency accounts, payments, and FX solutions that scale with you.
              </p>
              <div className="flex space-x-4">
                {social?.map((item, index) => {
                  const getSocialIcon = (name: string) => {
                    switch (name.toLowerCase()) {
                      case 'fb':
                        return (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        );
                      case 'tw':
                        return (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        );
                      case 'in':
                        return (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                          </svg>
                        );
                      case 'db':
                        return (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 4.093-3.8 4.393-6.87zm-6.115 7.808c-.126-1.7-1.241-4.75-2.676-8.124-2.932.5-5.05.953-5.67 1.11a9.98 9.98 0 008.346 7.014zm-11.62-2.847c.64-.157 2.738-.61 5.67-1.11-1.435 3.374-2.55 6.424-2.676 8.124a9.98 9.98 0 01-2.994-7.014zm2.676-8.124c1.435-3.374 2.55-6.424 2.676-8.124a9.98 9.98 0 00-2.994 7.014c-.64.157-2.738.61-5.67 1.11zm6.115-7.808c-.126 1.7-1.241 4.75-2.676 8.124 2.932-.5 5.05-.953 5.67-1.11a9.98 9.98 0 00-2.994-7.014z"/>
                          </svg>
                        );
                      case 'li':
                        return (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        );
                      default:
                        return (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        );
                    }
                  };

                  return (
                    <Link
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label={`Follow us on ${item.name || 'social media'}`}
                    >
                      {/* {getSocialIcon(item.name)} */}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Navigation - Optimisée avec composants réutilisables */}
            {muxxusNavigation.map((section, index) => (
              <NavigationSectionComponent key={index} section={section} index={index} />
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4 has_text_mov_anim">
              Ready to go global?
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Muxxus to manage their global finances.
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
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Muxxus Financial Services Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/compliance">Compliance</FooterLink>
              <FooterLink href="/trust">Trust Center</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MuxxusFooter;
