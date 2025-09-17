import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaFileAlt, FaShieldAlt, FaUser, FaGlobe, FaLock, FaGavel, FaEye } from "react-icons/fa";

const TermsPage = () => {
  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "General terms and conditions for using Muxxus services",
      lastUpdated: "December 1, 2024",
      version: "v3.2",
      icon: FaFileAlt,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      lastUpdated: "December 1, 2024",
      version: "v4.1",
      icon: FaShieldAlt,
      color: "from-green-50 to-green-100"
    },
    {
      title: "Acceptable Use Policy",
      description: "Guidelines for acceptable use of our platform and services",
      lastUpdated: "November 15, 2024",
      version: "v2.0",
      icon: FaUser,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Data Processing Agreement",
      description: "Terms for processing personal data under GDPR compliance",
      lastUpdated: "November 1, 2024",
      version: "v2.3",
      icon: FaGlobe,
      color: "from-orange-50 to-orange-100"
    }
  ];

  const keyTerms = [
    {
      term: "Service Provider",
      definition: "Muxxus Financial Services Ltd., the company providing the financial services platform"
    },
    {
      term: "User",
      definition: "Any individual or entity that accesses or uses our services"
    },
    {
      term: "Platform",
      definition: "The Muxxus website, mobile applications, and API services"
    },
    {
      term: "Services",
      definition: "Financial services including multi-currency accounts, FX trading, and payment processing"
    },
    {
      term: "Account",
      definition: "A user account created on our platform for accessing services"
    },
    {
      term: "Compliance",
      definition: "Adherence to applicable laws, regulations, and industry standards"
    }
  ];

  const updates = [
    {
      date: "December 1, 2024",
      version: "v3.2",
      changes: [
        "Updated data retention policies",
        "Enhanced security requirements",
        "New compliance measures for EU markets"
      ]
    },
    {
      date: "November 1, 2024",
      version: "v3.1",
      changes: [
        "Revised fee structure",
        "Updated dispute resolution process",
        "Enhanced privacy protections"
      ]
    },
    {
      date: "October 1, 2024",
      version: "v3.0",
      changes: [
        "Major terms restructuring",
        "New service offerings included",
        "Updated liability limitations"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Terms", href: "/terms", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Terms & Legal Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Important legal information about using Muxxus services. Please read these 
              documents carefully before using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View Documents" 
                href="#legal-documents"
                className="bg-gray-700 hover:bg-gray-800"
              />
              <CircleFillButton 
                text="Contact Legal Team" 
                href="/contact"
                className="border-gray-700 text-gray-700 hover:bg-gray-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section id="legal-documents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Legal Documents"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {legalDocuments.map((document, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${document.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <document.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{document.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{document.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span className="font-medium">{document.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Updated:</span>
                    <span className="font-medium">{document.lastUpdated}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CircleFillButton 
                    text="View" 
                    href="#"
                    className="bg-gray-700 hover:bg-gray-800 flex-1"
                  />
                  <CircleFillButton 
                    text="Download" 
                    href="#"
                    className="border-gray-700 text-gray-700 hover:bg-gray-50 flex-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Terms & Definitions</h2>
            <p className="text-lg text-gray-600">Important terms you should understand when using our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{term.term}</h3>
                <p className="text-gray-600">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Updates</h2>
            <p className="text-lg text-gray-600">Stay informed about changes to our terms and policies</p>
          </div>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <FaEye className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Version {update.version}</h3>
                      <p className="text-gray-600">Updated on {update.date}</p>
                    </div>
                  </div>
                  <CircleFillButton 
                    text="View Changes" 
                    href="#"
                    className="bg-gray-700 hover:bg-gray-800"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Changes:</h4>
                  <ul className="space-y-2">
                    {update.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Information</h2>
            <p className="text-lg text-gray-600">Essential details about our terms and your rights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaLock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Protection</h3>
              <p className="text-gray-600">We are committed to protecting your personal data and maintaining your privacy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaGavel className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">Our services comply with applicable laws and regulations in all jurisdictions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Standards</h3>
              <p className="text-gray-600">We maintain industry-leading security standards to protect your information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Legal Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Terms?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our legal team is here to help clarify any questions about our terms, 
            policies, or legal requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Contact Legal Team" 
              href="/contact"
              className="bg-gray-700 hover:bg-gray-800"
            />
            <CircleFillButton 
              text="Request Clarification" 
              href="/contact"
              className="border-gray-700 text-gray-700 hover:bg-gray-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
