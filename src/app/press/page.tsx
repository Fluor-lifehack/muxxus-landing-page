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
  title: "Press & Media | Muxxus News & Resources | Muxxus",
  description: "Stay updated with the latest news, press releases, and media resources from Muxxus. Learn about our company milestones, product launches, and industry insights.",
  keywords: ["press", "media", "news", "press releases", "muxxus news", "fintech news", "company updates"],
  openGraph: {
    title: "Press & Media | Muxxus News & Resources | Muxxus",
    description: "Stay updated with the latest news, press releases, and media resources from Muxxus.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media | Muxxus News & Resources | Muxxus",
    description: "Stay updated with the latest news, press releases, and media resources from Muxxus.",
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
    title: "Press & Media Center",
    description: [
      "Stay informed about Muxxus's latest developments, product launches, and industry insights.",
      "Access our press resources, media kit, and connect with our communications team."
    ],
    leftImage: "/assets/images/about/img-3.jpg",
    items: [
      {
        title: "Press Releases",
        description: "Official announcements about product launches, partnerships, and company milestones."
      },
      {
        title: "Media Kit",
        description: "Download logos, images, and brand assets for media coverage and publications."
      },
      {
        title: "Company Updates",
        description: "Latest news about our team, culture, and mission to democratize global finance."
      },
      {
        title: "Industry Insights",
        description: "Thought leadership content and analysis on fintech trends and global finance."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Press FAQ",
  faq_description: "Common questions about Muxxus press and media",
  faqs: [
    {
      question: "How can I get in touch with the Muxxus press team?",
      answer: "For press inquiries, please contact our communications team at press@muxxus.com. We typically respond to media requests within 24 hours."
    },
    {
      question: "Where can I find Muxxus logos and brand assets?",
      answer: "Our media kit includes high-resolution logos, brand guidelines, and approved imagery. You can download these resources from our press center."
    },
    {
      question: "Does Muxxus participate in industry events and conferences?",
      answer: "Yes, Muxxus regularly participates in fintech conferences, industry events, and speaking engagements. Check our press releases for upcoming appearances."
    },
    {
      question: "Can I interview Muxxus executives?",
      answer: "We welcome interview requests from qualified media outlets. Please reach out to our press team with your specific requirements and we'll work to accommodate your request."
    }
  ]
};

// Composant principal de la page
export default function PressPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Press & Media"
        description="Stay updated with the latest news, press releases, and media resources from Muxxus. Access our press kit and connect with our communications team."
        bg_image="/assets/images/about/img-3.jpg"
        action_btn={{ label: "Contact Press Team", link: "mailto:press@muxxus.com" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Latest News Section */}
      <FeatureSection
        title="Latest News & Updates"
        subtitle="Stay informed about Muxxus"
        description="Read our latest press releases, company announcements, and industry insights. We regularly share updates about our product development, partnerships, and thought leadership in fintech."
        buttonText="View All News"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img6.jpg"
        imageAlt="Latest News"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Media Resources Section */}
      <FeatureSection
        title="Media Resources"
        subtitle="Everything you need for coverage"
        description="Access our comprehensive media kit including logos, brand guidelines, product screenshots, and executive headshots. All assets are available in high resolution for print and digital use."
        buttonText="Download Media Kit"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img1.jpg"
        imageAlt="Media Resources"
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