import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaHandshake, FaBuilding, FaGlobe, FaChartLine, FaUsers, FaRocket, FaStar, FaAward } from "react-icons/fa";

const PartnersPage = () => {
  const partnerPrograms = [
    {
      name: "Technology Partners",
      description: "Integrate with leading tech platforms and tools",
      benefits: [
        "API access and documentation",
        "Technical support and training",
        "Co-marketing opportunities",
        "Revenue sharing program"
      ],
      icon: FaRocket,
      color: "from-blue-50 to-blue-100"
    },
    {
      name: "Financial Partners",
      description: "Collaborate with banks and financial institutions",
      benefits: [
        "White-label solutions",
        "Compliance and regulatory support",
        "Joint product development",
        "Global market access"
      ],
      icon: FaBuilding,
      color: "from-green-50 to-green-100"
    },
    {
      name: "Channel Partners",
      description: "Resell and implement Muxxus solutions",
      benefits: [
        "Certification programs",
        "Sales and technical training",
        "Marketing materials and support",
        "Competitive commission structure"
      ],
      icon: FaUsers,
      color: "from-purple-50 to-purple-100"
    }
  ];

  const successStories = [
    {
      company: "TechCorp Solutions",
      industry: "Technology Consulting",
      result: "Increased revenue by 40% through joint go-to-market initiatives",
      logo: "/images/partners/techcorp-logo.png",
      testimonial: "Partnering with Muxxus has transformed our ability to serve global clients."
    },
    {
      company: "Global Finance Group",
      industry: "Financial Services",
      result: "Expanded to 25 new markets in 12 months",
      logo: "/images/partners/global-finance-logo.png",
      testimonial: "The partnership enabled us to scale internationally faster than ever before."
    },
    {
      company: "Digital Banking Solutions",
      industry: "Fintech",
      result: "Launched new product line in 6 months",
      logo: "/images/partners/digital-banking-logo.png",
      testimonial: "Muxxus provided the infrastructure we needed to innovate quickly."
    }
  ];

  const partnershipBenefits = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Access to 150+ countries and local banking infrastructure"
    },
    {
      icon: FaChartLine,
      title: "Revenue Growth",
      description: "Multiple revenue streams and expansion opportunities"
    },
    {
      icon: FaStar,
      title: "Innovation",
      description: "Early access to new features and product launches"
    },
    {
      icon: FaAward,
      title: "Recognition",
      description: "Industry awards and thought leadership opportunities"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Partners", href: "/partners", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our global partner ecosystem and help businesses succeed with 
              innovative financial solutions worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Become a Partner" 
                href="#partner-programs"
                className="bg-purple-600 hover:bg-purple-700"
              />
              <CircleFillButton 
                text="Partner Portal" 
                href="#"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section id="partner-programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Partner Programs"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {partnerPrograms.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <CircleFillButton 
                  text="Learn More" 
                  href="#"
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
            <p className="text-lg text-gray-600">See how our partners are achieving remarkable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.company}</h3>
                    <p className="text-sm text-gray-600">{story.industry}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-purple-600 font-semibold mb-2">{story.result}</p>
                  <p className="text-gray-600 text-sm italic">"{story.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600">Discover the advantages of joining our partner ecosystem</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Resources</h2>
            <p className="text-lg text-gray-600">Everything you need to succeed as a Muxxus partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partner Portal</h3>
              <p className="text-gray-600 mb-4">Access your dashboard, resources, and performance metrics</p>
              <CircleFillButton 
                text="Access Portal" 
                href="#"
                className="bg-purple-600 hover:bg-purple-700"
              />
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Certification</h3>
              <p className="text-gray-600 mb-4">Complete training programs and earn certifications</p>
              <CircleFillButton 
                text="Start Training" 
                href="#"
                className="bg-purple-600 hover:bg-purple-700"
              />
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Resources</h3>
              <p className="text-gray-600 mb-4">Download marketing materials and campaign assets</p>
              <CircleFillButton 
                text="Browse Resources" 
                href="#"
                className="bg-purple-600 hover:bg-purple-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of successful partners worldwide and help businesses go global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Apply Now" 
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700"
            />
            <CircleFillButton 
              text="Schedule a Call" 
              href="/contact"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnersPage;
