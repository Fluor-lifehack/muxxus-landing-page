import Link from "next/link";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaUsers, FaHandshake, FaNewspaper, FaQuestionCircle, FaHeadset, FaGlobe } from "react-icons/fa";

const CompanyPage = () => {
  const companySections = [
    {
      icon: FaUsers,
      title: "Who We Are",
      description: "A snapshot of Muxxus - our mission, vision, and the team behind our success",
      path: "/company/who-we-are",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaHandshake,
      title: "Operating Principles",
      description: "What matters to us - the values and principles that guide everything we do",
      path: "/company/operating-principles",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaNewspaper,
      title: "Newsroom",
      description: "Latest news on Muxxus - press releases, announcements, and company updates",
      path: "/company/newsroom",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: FaHandshake,
      title: "Partnership Program",
      description: "Explore and join our partnership program to grow together",
      path: "/company/partnership-program",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: FaQuestionCircle,
      title: "FAQ",
      description: "Answers to common questions about our company and services",
      path: "/faq",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: FaHeadset,
      title: "Support",
      description: "Connect with our team for help and assistance",
      path: "/support",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  const stats = [
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Businesses Helped" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Company", href: "/company", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              About Muxxus
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We&apos;re building the future of global financial services, making it easier for businesses to operate internationally with confidence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Learn More" 
                href="#about"
                className="bg-slate-600 hover:bg-slate-700"
              />
              <CircleFillButton 
                text="Join Our Team" 
                href="/career"
                className="border-slate-600 text-slate-600 hover:bg-slate-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Sections Grid */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Learn More About Muxxus"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {companySections.map((section, index) => (
              <Link key={index} href={section.path} className="group">
                <div className={`p-8 rounded-xl bg-gradient-to-br ${section.color} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100`}>
                  <div className={`w-16 h-16 ${section.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Muxxus by the Numbers</h2>
            <p className="text-lg text-gray-600">Our impact in numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaGlobe className="w-10 h-10 text-slate-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            To democratize global financial services by making international business operations accessible, 
            efficient, and secure for businesses of all sizes. We believe every business should have the 
            tools to compete globally.
          </p>
          <CircleFillButton 
            text="Join Us" 
            href="/career"
            className="bg-slate-600 hover:bg-slate-700"
          />
        </div>
      </section>
    </main>
  );
};

export default CompanyPage; 