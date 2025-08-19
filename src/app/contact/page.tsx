import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaHeadset } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "hello@muxxus.com",
      availability: "Response within 4 hours",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: FaHeadset,
      title: "Live Chat",
      description: "Get instant help online",
      contact: "Available on website",
      availability: "24/7 availability",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-100 text-purple-600"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      country: "United States",
      address: "123 Business Ave, Suite 100",
      zipCode: "NY 10001",
      phone: "+1 (555) 123-4567",
      email: "nyc@muxxus.com"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Finance Street, Floor 3",
      zipCode: "EC2A 1BR",
      phone: "+44 20 1234 5678",
      email: "london@muxxus.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Tech Boulevard, Level 5",
      zipCode: "018956",
      phone: "+65 6123 4567",
      email: "singapore@muxxus.com"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with global financial services? 
              Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Schedule a Call" 
                href="#contact-form"
                className="bg-emerald-600 hover:bg-emerald-700"
              />
              <CircleFillButton 
                text="View Office Locations" 
                href="#locations"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="How to Reach Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${method.iconColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-emerald-600 font-semibold mb-2">{method.contact}</div>
                <div className="text-sm text-gray-500">{method.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">Tell us about your business needs and we'll get back to you quickly</p>
          </div>
          <form className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Tell us about your business needs, challenges, or questions..."
              ></textarea>
            </div>
            <div className="text-center">
              <CircleFillButton 
                text="Send Message" 
                href="#"
                className="bg-emerald-600 hover:bg-emerald-700"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-lg text-gray-600">Find us around the world</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{office.city}</h3>
                    <p className="text-sm text-gray-600">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.zipCode}</p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="w-3 h-3" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="w-3 h-3" />
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how Muxxus can help your business go global
          </p>
          <CircleFillButton 
            text="Schedule a Consultation" 
            href="#contact-form"
            className="bg-emerald-600 hover:bg-emerald-700"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 