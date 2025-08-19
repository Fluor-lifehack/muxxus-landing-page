import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import { getMainPage } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/MDXContent";
import ServiceDetails from "@/app/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/app/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaArrowRightLong, FaGlobe, FaShieldAlt, FaClock, FaCreditCard } from "react-icons/fa";
import Link from "next/link";

export default function GlobalAccountsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Global Accounts Service
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Multi-Currency Business Banking
          </h2>
          <p className="text-blue-800 mb-4">
            Open accounts in 50+ currencies across 200+ countries with local banking infrastructure.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Standard Account</h3>
            <p className="text-gray-600 mb-4">Perfect for businesses starting their global journey.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Multi-currency support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Global compliance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Email support
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Premium Account</h3>
            <p className="text-gray-600 mb-4">Advanced features for growing businesses.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Enhanced compliance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                API access
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
