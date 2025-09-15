import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaShieldAlt, FaLock, FaEye, FaUserCheck, FaServer, FaCertificate } from "react-icons/fa";
import Link from "next/link";

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: FaShieldAlt,
      title: "Bank-Grade Security",
      description: "Enterprise-level security protocols and infrastructure",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaLock,
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaEye,
      title: "Real-Time Monitoring",
      description: "24/7 fraud detection and threat monitoring",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaUserCheck,
      title: "Multi-Factor Authentication",
      description: "Advanced identity verification and access control",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaServer,
      title: "Secure Infrastructure",
      description: "SOC 2 Type II certified data centers",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaCertificate,
      title: "Compliance & Certifications",
      description: "PCI DSS, GDPR, and regulatory compliance",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  const complianceStandards = [
    {
      name: "PCI DSS Level 1",
      description: "Highest level of payment card security",
      status: "Certified"
    },
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality",
      status: "Certified"
    },
    {
      name: "GDPR",
      description: "European data protection compliance",
      status: "Compliant"
    },
    {
      name: "ISO 27001",
      description: "Information security management",
      status: "Certified"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Security", href: "/security", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold mt-8 mb-6">
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your business security is our top priority. We implement bank-level security measures 
              to protect your data and ensure compliance with global standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Learn More" 
                href="#security-features"
                className="bg-blue-600 hover:bg-blue-700"
              />
              <CircleFillButton 
                text="Security Report" 
                href="#compliance"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security-features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Security Features"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${feature.iconColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section id="compliance" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Certifications</h2>
            <p className="text-lg text-gray-600">Meeting the highest industry standards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{standard.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">256-bit</div>
              <div className="text-gray-600">Encryption</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-gray-600">Security Breaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Security Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our security team is available to answer your questions and provide detailed information
          </p>
          <CircleFillButton 
            text="Contact Security Team" 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700"
          />
        </div>
      </section>
    </main>
  );
};

export default SecurityPage;
