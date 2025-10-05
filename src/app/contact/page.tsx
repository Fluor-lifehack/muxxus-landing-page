import type { Metadata } from 'next';
import React from "react";
import SolutionHero from "@/components/hero/SolutionHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import FeatureSection from "@/components/muxxus/FeatureSection";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";

// Métadonnées Next.js
export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Muxxus | Muxxus",
  description: "Get in touch with the Muxxus team. We're here to help you implement global financial solutions. Contact us for sales inquiries, support, or partnership opportunities.",
  keywords: ["contact", "contact us", "get in touch", "sales", "support", "partnership", "muxxus contact"],
  openGraph: {
    title: "Contact Us | Get in Touch with Muxxus | Muxxus",
    description: "Get in touch with the Muxxus team. We're here to help you implement global financial solutions.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get in Touch with Muxxus | Muxxus",
    description: "Get in touch with the Muxxus team. We're here to help you implement global financial solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Données pour les composants
const componentData = {
  keyBenefitsSection2: {
    title: "Get in Touch",
    description: [
      "Ready to transform your business with global financial services? Our team is here to help you succeed.",
      "Whether you need sales support, technical assistance, or partnership information, we're just a message away."
    ],
    leftImage: "/assets/images/contact/img-1.jpg",
    items: [
      {
        title: "Sales Inquiries",
        description: "Contact our sales team to discuss your business needs and explore Muxxus solutions."
      },
      {
        title: "Technical Support",
        description: "Get help with implementation, API integration, or technical questions from our support team."
      },
      {
        title: "Partnership Opportunities",
        description: "Interested in partnering with Muxxus? Reach out to our partnerships team."
      },
      {
        title: "General Questions",
        description: "Have questions about our services, pricing, or capabilities? We're here to help."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Contact FAQ",
  faq_description: "Common questions about contacting Muxxus",
  faqs: [
    {
      question: "How can I contact Muxxus?",
      answer: "You can reach us via email at hello@muxxus.com, through our contact form, or by scheduling a call with our sales team. We typically respond within 24 hours."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "Please include your company name, business requirements, expected transaction volumes, and any specific questions you have about our services. This helps us provide more targeted assistance."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, we offer phone support for enterprise customers and can schedule calls for sales inquiries. Contact us to arrange a call with the appropriate team member."
    },
    {
      question: "How quickly can I get started with Muxxus?",
      answer: "Our onboarding process typically takes 1-2 weeks depending on your requirements. We'll work with you to ensure a smooth implementation and go-live process."
    }
  ]
};

// Composant principal de la page
export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Contact Us"
        description="Ready to transform your business with global financial services? Our team is here to help you succeed. Get in touch for sales inquiries, support, or partnership opportunities."
        bg_image="/assets/images/contact/img-1.jpg"
        action_btn={{ label: "Send Message", link: "mailto:hello@muxxus.com" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Contact Methods Section */}
      <FeatureSection
        title="Multiple Ways to Reach Us"
        subtitle="Choose your preferred contact method"
        description="We offer multiple ways to get in touch with our team. Whether you prefer email, phone, or scheduling a call, we're here to help you with your global financial needs."
        buttonText="Contact Us Now"
        buttonLink="mailto:hello@muxxus.com"
        imageSrc="/assets/images/contact/img-2.jpg"
        imageAlt="Contact Methods"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Support Section */}
      <FeatureSection
        title="24/7 Support"
        subtitle="We're here when you need us"
        description="Our dedicated support team is available around the clock to help you with any questions or issues. From technical support to account management, we ensure your success with Muxxus."
        buttonText="Get Support"
        buttonLink="mailto:support@muxxus.com"
        imageSrc="/assets/images/contact/img-3.jpg"
        imageAlt="24/7 Support"
        imageFirst={false}
        className="bg-white"
      />

      {/* FAQ Section */}
      <ServiceDetailsFaq 
        faqs={faqData.faqs} 
        faqTitle={faqData.faq_title} 
      />

      {/* Newsletter et Footer */}
      <MuxxusNewsletter />
      <MuxxusFooter />
    </>
  );
}