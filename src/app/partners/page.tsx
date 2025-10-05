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
  title: "Partners | Muxxus Partner Network | Muxxus",
  description: "Join the Muxxus partner network and help businesses access global financial infrastructure. Explore partnership opportunities for technology, financial institutions, and consulting firms.",
  keywords: ["partners", "partnership", "muxxus partners", "fintech partners", "integration partners", "reseller program"],
  openGraph: {
    title: "Partners | Muxxus Partner Network | Muxxus",
    description: "Join the Muxxus partner network and help businesses access global financial infrastructure.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Muxxus Partner Network | Muxxus",
    description: "Join the Muxxus partner network and help businesses access global financial infrastructure.",
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
    title: "Partner with Muxxus",
    description: [
      "Join our global partner network and help businesses access world-class financial infrastructure.",
      "Whether you're a technology provider, financial institution, or consulting firm, we have partnership opportunities that can drive mutual growth."
    ],
    leftImage: "/assets/images/about/img-4.jpg",
    items: [
      {
        title: "Technology Partners",
        description: "Integrate Muxxus APIs into your platform and offer comprehensive financial services to your customers."
      },
      {
        title: "Financial Institutions",
        description: "Partner with us to expand your reach and offer innovative financial products to businesses worldwide."
      },
      {
        title: "Consulting Partners",
        description: "Help your clients implement global financial solutions with our comprehensive partner program."
      },
      {
        title: "Reseller Program",
        description: "Earn recurring revenue by reselling Muxxus solutions to businesses in your network."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Partnership FAQ",
  faq_description: "Common questions about partnering with Muxxus",
  faqs: [
    {
      question: "What types of partnerships does Muxxus offer?",
      answer: "We offer several partnership types including technology integrations, financial institution partnerships, consulting partnerships, and reseller programs. Each partnership type has specific benefits and requirements."
    },
    {
      question: "How do I become a Muxxus partner?",
      answer: "To become a partner, please contact our partnerships team at partners@muxxus.com. We'll review your application and guide you through our onboarding process."
    },
    {
      question: "What support do partners receive?",
      answer: "Partners receive comprehensive support including technical documentation, dedicated account management, marketing resources, and co-marketing opportunities."
    },
    {
      question: "Are there revenue sharing opportunities?",
      answer: "Yes, we offer competitive revenue sharing programs for qualified partners, with rates varying based on partnership type and volume commitments."
    }
  ]
};

// Composant principal de la page
export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Partners"
        description="Join our global partner network and help businesses access world-class financial infrastructure. Explore partnership opportunities that drive mutual growth."
        bg_image="/assets/images/about/img-4.jpg"
        action_btn={{ label: "Become a Partner", link: "mailto:partners@muxxus.com" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Partnership Types Section */}
      <FeatureSection
        title="Partnership Types"
        subtitle="Choose the right partnership for your business"
        description="We offer flexible partnership models designed to meet the needs of different organizations. From technology integrations to reseller programs, find the partnership that aligns with your business goals."
        buttonText="Learn More"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img7.jpg"
        imageAlt="Partnership Types"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Partner Benefits Section */}
      <FeatureSection
        title="Partner Benefits"
        subtitle="Why partner with Muxxus"
        description="Our partners enjoy comprehensive support, competitive revenue sharing, and access to cutting-edge financial technology. Join a network of successful partners helping businesses thrive in the global economy."
        buttonText="View Benefits"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img8.jpg"
        imageAlt="Partner Benefits"
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