import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaShieldAlt, FaEye, FaLock, FaUser, FaGlobe, FaDatabase, FaCog, FaHandshake } from "react-icons/fa";

const PrivacyPage = () => {
  const privacyPrinciples = [
    {
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it",
      icon: FaEye,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Security",
      description: "Your data is protected with industry-leading security measures",
      icon: FaShieldAlt,
      color: "from-green-50 to-green-100"
    },
    {
      title: "Control",
      description: "You have full control over your personal information",
      icon: FaUser,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Compliance",
      description: "We adhere to global privacy regulations and standards",
      icon: FaGlobe,
      color: "from-orange-50 to-orange-100"
    }
  ];

  const dataCategories = [
    {
      category: "Account Information",
      examples: ["Name, email, phone number", "Company details", "Account credentials"],
      purpose: "To provide and manage your account",
      retention: "As long as your account is active"
    },
    {
      category: "Financial Data",
      examples: ["Transaction history", "Payment information", "Account balances"],
      purpose: "To process transactions and provide financial services",
      retention: "7 years (regulatory requirement)"
    },
    {
      category: "Usage Data",
      examples: ["Login times", "Feature usage", "Device information"],
      purpose: "To improve our services and security",
      retention: "2 years"
    },
    {
      category: "Communication Data",
      examples: ["Support tickets", "Email correspondence", "Chat logs"],
      purpose: "To provide customer support",
      retention: "3 years"
    }
  ];

  const yourRights = [
    {
      right: "Access",
      description: "Request a copy of your personal data",
      icon: FaEye
    },
    {
      right: "Rectification",
      description: "Correct inaccurate or incomplete data",
      icon: FaCog
    },
    {
      right: "Erasure",
      description: "Request deletion of your personal data",
      icon: FaDatabase
    },
    {
      right: "Portability",
      description: "Receive your data in a portable format",
      icon: FaHandshake
    },
    {
      right: "Restriction",
      description: "Limit how we process your data",
      icon: FaLock
    },
    {
      right: "Objection",
      description: "Object to certain types of processing",
      icon: FaUser
    }
  ];

  const securityMeasures = [
    {
      measure: "Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption",
      icon: FaLock
    },
    {
      measure: "Access Controls",
      description: "Multi-factor authentication and role-based access controls",
      icon: FaShieldAlt
    },
    {
      measure: "Regular Audits",
      description: "Third-party security audits and penetration testing",
      icon: FaEye
    },
    {
      measure: "Data Centers",
      description: "SOC 2 Type II certified data centers with 99.9% uptime",
      icon: FaDatabase
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy", href: "/privacy", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring the security 
              of your personal information. Learn how we collect, use, and protect your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Read Policy" 
                href="#privacy-policy"
                className="bg-indigo-600 hover:bg-indigo-700"
              />
              <CircleFillButton 
                text="Contact DPO" 
                href="/contact"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Our Privacy Principles"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <principle.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section id="privacy-policy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data We Collect</h2>
            <p className="text-lg text-gray-600">Understanding what information we collect and why</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dataCategories.map((data, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.category}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {data.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-sm text-gray-600">{data.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Retention:</h4>
                    <p className="text-sm text-gray-600">{data.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-lg text-gray-600">You have control over your personal information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yourRights.map((right, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <right.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{right.right}</h3>
                <p className="text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Protect Your Data</h2>
            <p className="text-lg text-gray-600">Industry-leading security measures to keep your information safe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <measure.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{measure.measure}</h3>
                </div>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sharing & Third Parties</h2>
            <p className="text-lg text-gray-600">We are transparent about when and how we share your data</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">We DO NOT sell your personal data</h3>
                <p className="text-gray-600">Your personal information is never sold to third parties for marketing purposes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited sharing for essential services</h3>
                <p className="text-gray-600">We only share data with trusted partners when necessary to provide our services, such as banking partners and regulatory authorities.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Your consent is required</h3>
                <p className="text-gray-600">Any additional data sharing beyond essential services requires your explicit consent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Privacy?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Data Protection Officer is here to help with any privacy-related questions 
            or to exercise your data rights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Contact DPO" 
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700"
            />
            <CircleFillButton 
              text="Exercise Your Rights" 
              href="/contact"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            />
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Last updated: December 1, 2024</p>
            <p>Version: v4.1</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
