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
  title: "Blog | Muxxus Insights & Fintech News | Muxxus",
  description: "Stay updated with the latest insights, trends, and news in fintech and global finance. Read expert analysis, product updates, and industry insights from the Muxxus team.",
  keywords: ["blog", "fintech blog", "financial technology", "insights", "news", "industry trends", "muxxus blog"],
  openGraph: {
    title: "Blog | Muxxus Insights & Fintech News | Muxxus",
    description: "Stay updated with the latest insights, trends, and news in fintech and global finance.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Muxxus Insights & Fintech News | Muxxus",
    description: "Stay updated with the latest insights, trends, and news in fintech and global finance.",
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
    title: "Insights & Analysis",
    description: [
      "Stay ahead of the curve with expert insights on fintech trends, global finance, and industry developments.",
      "Our blog covers everything from product updates to market analysis, helping you make informed decisions."
    ],
    leftImage: "/assets/images/blog/img-1.jpg",
    items: [
      {
        title: "Industry Trends",
        description: "Expert analysis of the latest trends shaping the fintech and global finance landscape."
      },
      {
        title: "Product Updates",
        description: "Stay informed about new features, improvements, and capabilities in the Muxxus platform."
      },
      {
        title: "Market Insights",
        description: "Deep dives into global markets, currency trends, and economic factors affecting businesses."
      },
      {
        title: "Best Practices",
        description: "Practical guidance on implementing global financial solutions and optimizing your operations."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Blog FAQ",
  faq_description: "Common questions about our blog and content",
  faqs: [
    {
      question: "How often do you publish new blog posts?",
      answer: "We publish new content regularly, typically 2-3 times per week. Subscribe to our newsletter to stay updated with the latest posts."
    },
    {
      question: "Can I suggest topics for blog posts?",
      answer: "Absolutely! We welcome topic suggestions from our community. Feel free to reach out to us with ideas or questions you'd like us to address."
    },
    {
      question: "Do you accept guest posts?",
      answer: "We occasionally accept guest posts from industry experts and thought leaders. Please contact our content team to discuss potential collaboration opportunities."
    },
    {
      question: "How can I stay updated with new blog posts?",
      answer: "You can subscribe to our newsletter, follow us on social media, or bookmark our blog page. We also offer RSS feeds for easy content consumption."
    }
  ]
};

// Composant principal de la page
export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Blog & Insights"
        description="Stay updated with the latest insights, trends, and news in fintech and global finance. Expert analysis, product updates, and industry insights from the Muxxus team."
        bg_video=""
        bg_image="/assets/images/blog/img-1.jpg"
        action_btn={{ label: "Subscribe to Newsletter", link: "#newsletter" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Latest Posts Section */}
      <FeatureSection
        title="Latest Posts",
        subtitle="Recent insights from our team"
        description="Discover our latest blog posts covering fintech trends, product updates, market analysis, and best practices for global financial operations."
        buttonText="View All Posts"
        buttonLink="#"
        imageSrc="/assets/images/blog/img-2.jpg"
        imageAlt="Latest Posts"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Categories Section */}
      <FeatureSection
        title="Content Categories",
        subtitle="Explore topics that matter to you"
        description="Our blog covers a wide range of topics including industry trends, product updates, market insights, and best practices. Find content relevant to your business needs and interests."
        buttonText="Browse Categories"
        buttonLink="#"
        imageSrc="/assets/images/blog/img-3.jpg"
        imageAlt="Content Categories"
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
