import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaUsers, FaGlobe, FaRocket, FaHeart, FaLightbulb, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const MuxxusCareerPage = () => {
  const jobCategories = [
    {
      title: "Engineering",
      description: "Build the future of global financial services",
      icon: "💻",
      count: "15 open positions",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      title: "Product & Design",
      description: "Create amazing user experiences",
      icon: "🎨",
      count: "8 open positions",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      title: "Sales & Business Development",
      description: "Help businesses grow globally",
      icon: "🚀",
      count: "12 open positions",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      title: "Operations & Support",
      description: "Ensure smooth business operations",
      icon: "⚙️",
      count: "10 open positions",
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-100 text-orange-600"
    }
  ];

  const benefits = [
    {
      icon: FaGlobe,
      title: "Global Team",
      description: "Work with talented people from around the world"
    },
    {
      icon: FaRocket,
      title: "Career Growth",
      description: "Fast-paced environment with rapid advancement opportunities"
    },
    {
      icon: FaHeart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: FaLightbulb,
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve complex problems."
    },
    {
      title: "Customer Obsessed",
      description: "Everything we do is driven by our customers' success and satisfaction."
    },
    {
      title: "Global Mindset",
      description: "We think globally and act locally, embracing diverse perspectives."
    },
    {
      title: "Team Collaboration",
      description: "We believe the best results come from working together as one team."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Career", href: "/career", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us build the future of global financial services. We &apos;re looking for passionate, 
              talented individuals who want to make a difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View Open Positions" 
                href="#open-positions"
                className="bg-cyan-600 hover:bg-cyan-700"
              />
              <CircleFillButton 
                text="Learn About Culture" 
                href="#culture"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Open Positions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {jobCategories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="text-xs text-cyan-600 font-medium">{category.count}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CircleFillButton 
              text="View All Positions" 
              href="/career/positions"
              className="bg-cyan-600 hover:bg-cyan-700"
            />
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="culture" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at Muxxus?</h2>
            <p className="text-lg text-gray-600">We take care of our team so you can focus on doing your best work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaHandshake className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our open positions and find the perfect role for your next career move
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Browse Openings" 
              href="/career/positions"
              className="bg-cyan-600 hover:bg-cyan-700"
            />
            <CircleFillButton 
              text="Contact Recruiting" 
              href="/contact"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MuxxusCareerPage;
