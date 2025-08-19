import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaDownload, FaFilePdf, FaFileAlt, FaCode, FaMobile, FaDesktop, FaGlobe, FaShield } from "react-icons/fa";

const DownloadsPage = () => {
  const downloadCategories = [
    {
      name: "Mobile Apps",
      description: "Download our mobile applications for iOS and Android",
      count: "4 downloads",
      icon: FaMobile,
      color: "from-blue-50 to-blue-100"
    },
    {
      name: "Desktop Software",
      description: "Windows and macOS applications for desktop users",
      count: "3 downloads",
      icon: FaDesktop,
      color: "from-green-50 to-green-100"
    },
    {
      name: "API Documentation",
      description: "Complete API reference and integration guides",
      count: "8 downloads",
      icon: FaCode,
      color: "from-purple-50 to-purple-100"
    },
    {
      name: "Resources & Guides",
      description: "PDFs, templates, and educational materials",
      count: "25+ downloads",
      icon: FaFileAlt,
      color: "from-orange-50 to-orange-100"
    }
  ];

  const featuredDownloads = [
    {
      title: "Muxxus Mobile App",
      description: "Manage your global finances on the go with our comprehensive mobile application",
      version: "v2.1.0",
      size: "45.2 MB",
      platform: "iOS & Android",
      downloads: "50,000+",
      icon: FaMobile,
      featured: true
    },
    {
      title: "API Integration Kit",
      description: "Complete toolkit for developers to integrate Muxxus services into their applications",
      version: "v3.0.0",
      size: "12.8 MB",
      platform: "Cross-platform",
      downloads: "15,000+",
      icon: FaCode,
      featured: false
    },
    {
      title: "Global Business Guide",
      description: "Comprehensive guide to expanding your business internationally with Muxxus",
      version: "2024 Edition",
      size: "8.5 MB",
      platform: "PDF",
      downloads: "25,000+",
      icon: FaFileAlt,
      featured: false
    }
  ];

  const mobileApps = [
    {
      name: "Muxxus for iOS",
      version: "v2.1.0",
      size: "45.2 MB",
      requirements: "iOS 13.0 or later",
      features: ["Multi-currency accounts", "Real-time FX rates", "Secure transactions", "Push notifications"],
      icon: FaMobile,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Muxxus for Android",
      version: "v2.1.0",
      size: "42.8 MB",
      requirements: "Android 8.0 or later",
      features: ["Multi-currency accounts", "Real-time FX rates", "Secure transactions", "Push notifications"],
      icon: FaMobile,
      color: "from-green-500 to-green-600"
    }
  ];

  const desktopApps = [
    {
      name: "Muxxus Desktop for Windows",
      version: "v1.5.2",
      size: "156.7 MB",
      requirements: "Windows 10 or later",
      features: ["Advanced reporting", "Bulk operations", "Offline access", "Multi-monitor support"],
      icon: FaDesktop,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Muxxus Desktop for macOS",
      version: "v1.5.2",
      size: "142.3 MB",
      requirements: "macOS 11.0 or later",
      features: ["Advanced reporting", "Bulk operations", "Offline access", "Multi-monitor support"],
      icon: FaDesktop,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      type: "PDF",
      size: "2.1 MB",
      description: "Step-by-step guide for new Muxxus users",
      downloads: "12,000+"
    },
    {
      title: "API Reference Manual",
      type: "PDF",
      size: "5.8 MB",
      description: "Complete API documentation with examples",
      downloads: "8,500+"
    },
    {
      title: "Compliance Checklist",
      type: "Excel",
      size: "0.8 MB",
      description: "Template for regulatory compliance tracking",
      downloads: "6,200+"
    },
    {
      title: "Brand Assets",
      type: "ZIP",
      size: "15.2 MB",
      description: "Logos, icons, and marketing materials",
      downloads: "3,800+"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Downloads", href: "/downloads", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Downloads & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access our latest software, mobile apps, API documentation, and resources 
              to help you succeed with Muxxus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Browse Downloads" 
                href="#download-categories"
                className="bg-green-600 hover:bg-green-700"
              />
              <CircleFillButton 
                text="View Release Notes" 
                href="#"
                className="border-green-600 text-green-600 hover:bg-green-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Featured Downloads"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {featuredDownloads.map((download, index) => (
              <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                download.featured ? 'ring-2 ring-green-500' : ''
              }`}>
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <download.icon className="w-16 h-16 text-green-600" />
                </div>
                <div className="p-6">
                  {download.featured && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{download.title}</h3>
                  <p className="text-gray-600 mb-4">{download.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex justify-between">
                      <span>Version:</span>
                      <span className="font-medium">{download.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="font-medium">{download.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform:</span>
                      <span className="font-medium">{download.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Downloads:</span>
                      <span className="font-medium">{download.downloads}</span>
                    </div>
                  </div>
                  <CircleFillButton 
                    text="Download Now" 
                    href="#"
                    className="bg-green-600 hover:bg-green-700 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Categories */}
      <section id="download-categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Categories</h2>
            <p className="text-lg text-gray-600">Find the right tools and resources for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadCategories.map((category, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-green-600 font-semibold">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Applications</h2>
            <p className="text-lg text-gray-600">Take Muxxus with you wherever you go</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileApps.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center`}>
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-gray-600">Version {app.version}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>File Size:</span>
                    <span className="font-medium">{app.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Requirements:</span>
                    <span className="font-medium">{app.requirements}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <CircleFillButton 
                  text="Download for Free" 
                  href="#"
                  className="bg-green-600 hover:bg-green-700 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Desktop Applications</h2>
            <p className="text-lg text-gray-600">Powerful desktop tools for advanced users</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {desktopApps.map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center`}>
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-gray-600">Version {app.version}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>File Size:</span>
                    <span className="font-medium">{app.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Requirements:</span>
                    <span className="font-medium">{app.requirements}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <CircleFillButton 
                  text="Download for Free" 
                  href="#"
                  className="bg-green-600 hover:bg-green-700 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Guides</h2>
            <p className="text-lg text-gray-600">Educational materials and helpful resources</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaFileAlt className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">{resource.type}</span>
                    <span className="text-sm text-gray-500"> • {resource.size}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                  <CircleFillButton 
                    text="Download" 
                    href="#"
                    className="bg-green-600 hover:bg-green-700 text-sm px-3 py-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Getting Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help you with installation, setup, and any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Contact Support" 
              href="/support"
              className="bg-green-600 hover:bg-green-700"
            />
            <CircleFillButton 
              text="View Documentation" 
              href="/developers"
              className="border-green-600 text-green-600 hover:bg-green-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DownloadsPage;
