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
  title: "Careers at Muxxus | Join Our Global Team | Muxxus",
  description: "Join Muxxus and help build the future of global finance. We're looking for talented individuals to join our mission of democratizing financial services worldwide.",
  keywords: ["careers", "jobs", "muxxus careers", "fintech jobs", "global team", "remote work"],
  openGraph: {
    title: "Careers at Muxxus | Join Our Global Team | Muxxus",
    description: "Join Muxxus and help build the future of global finance. We're looking for talented individuals to join our mission.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Muxxus | Join Our Global Team | Muxxus",
    description: "Join Muxxus and help build the future of global finance.",
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
    title: "Join Our Mission",
    description: [
      "We're building the future of global finance and looking for exceptional talent to join our journey.",
      "At Muxxus, you'll work with cutting-edge technology, solve complex problems, and make a real impact on businesses worldwide."
    ],
    leftImage: "/assets/images/about/img-2.jpg",
    items: [
      {
        title: "Remote-First Culture",
        description: "Work from anywhere in the world with flexible hours and a supportive remote-first environment."
      },
      {
        title: "Competitive Benefits",
        description: "Comprehensive health coverage, equity participation, and competitive compensation packages."
      },
      {
        title: "Learning & Growth",
        description: "Continuous learning opportunities, conference attendance, and professional development support."
      },
      {
        title: "Impact-Driven Work",
        description: "Build products that directly impact businesses globally and shape the future of finance."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Careers FAQ",
  faq_description: "Common questions about working at Muxxus",
  faqs: [
    {
      question: "What types of roles are available at Muxxus?",
      answer: "We're looking for talented individuals across engineering, product, design, sales, marketing, operations, and compliance. We have both individual contributor and leadership roles available."
    },
    {
      question: "Is Muxxus a remote-first company?",
      answer: "Yes, Muxxus is a remote-first company. We believe in hiring the best talent regardless of location and provide all the tools and support needed for remote work success."
    },
    {
      question: "What is the interview process like?",
      answer: "Our interview process typically includes an initial phone screen, technical or role-specific assessments, and final interviews with team members. We aim to make the process efficient and transparent."
    },
    {
      question: "Do you offer internships or entry-level positions?",
      answer: "Yes, we offer both internships and entry-level positions for recent graduates. We're committed to developing the next generation of fintech talent."
    }
  ]
};

// Composant principal de la page
export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Careers at Muxxus"
        description="Join our mission to democratize global finance. We're looking for talented individuals to help build the future of financial infrastructure."
        bg_video=""
        bg_image="/assets/images/about/img-2.jpg"
        action_btn={{ label: "View Open Positions", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Culture Section */}
      <FeatureSection
        title="Our Culture",
        subtitle="What it's like to work at Muxxus"
        description="We foster a culture of innovation, collaboration, and continuous learning. Our team is diverse, inclusive, and passionate about solving complex problems in global finance. We value transparency, ownership, and making a meaningful impact."
        buttonText="Learn About Our Culture"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img4.jpg"
        imageAlt="Our Culture"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Open Positions Section */}
      <FeatureSection
        title="Open Positions",
        subtitle="Current opportunities"
        description="We're always looking for exceptional talent to join our team. Browse our current openings and find the perfect role to advance your career while making a global impact in fintech."
        buttonText="View All Positions"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="Open Positions"
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
