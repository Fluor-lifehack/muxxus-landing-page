"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactArea from "@/components/contact/ContactArea";
import SeoData from "@/components/tools/SeoData";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";

const ContactPage = () => {
  // Données pour ContactHero
  const heroData = {
    title: "Get in touch<br/>with our team",
    direct_contact: {
      title: "hello@muxxus.com",
      link: "mailto:hello@muxxus.com"
    },
    images: [
      "/assets/images/contact/img-1.jpg",
      "/assets/images/contact/img-2.jpg", 
      "/assets/images/contact/img-3.jpg"
    ]
  };

  // Données pour ContactArea
  const contactData = {
    header: {
      title: "Let's discuss your project",
      description: "Ready to transform your business with global financial services? Our team is here to help you succeed."
    },
    info: {
      title: "We're here to help",
      contact_list: {
        phone: "1 (555) 123-4567",
        email: "hello@muxxus.com",
        address: "123 Business Ave<br/>Suite 100, NY 10001"
      }
    }
  };

  // Données pour ContactBanner


  return (
    <main>

      <SeoData
        title="Contact - Muxxus"
        meta_title="Contact Muxxus"
        description="Get in touch with Muxxus for global financial services and solutions."
      />

      <ContactHero {...heroData} />


      {/* Contact Area with Form */}
      <ContactArea {...contactData} />

      <MuxxusNewsletter />
      
      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default ContactPage; 