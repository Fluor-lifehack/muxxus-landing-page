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
  title: "Expense Management | Automated Expense Tracking | Muxxus",
  description: "Automated expense tracking, approval workflows, and reimbursement processing. Streamline your expense management with intelligent automation and real-time insights.",
  keywords: ["expense management", "expense tracking", "approval workflows", "receipt capture", "policy compliance", "business expenses"],
  openGraph: {
    title: "Expense Management | Automated Expense Tracking | Muxxus",
    description: "Automated expense tracking, approval workflows, and reimbursement processing.",
    type: "website",
    locale: "fr_FR",
    siteName: "Muxxus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expense Management | Automated Expense Tracking | Muxxus",
    description: "Automated expense tracking, approval workflows, and reimbursement processing.",
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
    title: "Automated Expense Management",
    description: [
      "Streamline your expense management with intelligent automation and real-time insights.",
      "From receipt capture to approval workflows, our platform handles the entire expense lifecycle."
    ],
    leftImage: "/assets/imgs/gallery/img-sd-89.png",
    items: [
      {
        title: "Automated Expense Tracking",
        description: "AI-powered categorization ensures accurate expense classification without manual input from corporate cards and bank transactions."
      },
      {
        title: "Approval Workflows",
        description: "Create custom approval chains based on amount thresholds, expense categories, employee roles, and project codes."
      },
      {
        title: "Receipt Capture & OCR",
        description: "Employees can submit expenses through mobile app by taking photos of receipts with automatic data extraction."
      },
      {
        title: "Policy Compliance",
        description: "Automated policy enforcement ensures all expenses meet company guidelines before approval."
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Expense Management FAQ",
  faq_description: "Common questions about our expense management solution",
  faqs: [
    {
      question: "How does automated expense tracking work?",
      answer: "Our system automatically captures expenses from corporate cards, bank transactions, and uploaded receipts. AI-powered categorization ensures accurate expense classification without manual input."
    },
    {
      question: "Can I customize approval workflows?",
      answer: "Yes, you can create custom approval chains based on amount thresholds, expense categories, employee roles, and project codes. Workflows can be as simple or complex as your business needs."
    },
    {
      question: "How do employees submit expenses?",
      answer: "Employees can submit expenses through our mobile app by taking photos of receipts, scanning documents, or manually entering details. All submissions are automatically routed through your approval workflow."
    },
    {
      question: "Does it integrate with accounting software?",
      answer: "Yes, our expense management system integrates with major accounting platforms including QuickBooks, Xero, Sage, and NetSuite. Expenses are automatically synced and categorized in your accounting system."
    }
  ]
};

// Composant principal de la page
export default function ExpenseManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Expense Management"
        description="Automated expense tracking, approval workflows, and reimbursement processing. Streamline your expense management with intelligent automation and real-time insights."
        bg_video=""
        bg_image="/assets/imgs/gallery/img-sd-89.png"
        action_btn={{ label: "Get Started", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
      />

      {/* Features Section */}
      <FeatureSection
        title="Real-Time Reporting & Analytics"
        subtitle="Gain insights into your spending patterns"
        description="Access comprehensive dashboards with real-time expense data, spending analytics, and policy compliance reports. Make informed decisions with detailed insights into your company's spending patterns."
        buttonText="View Analytics"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img4.jpg"
        imageAlt="Real-Time Reporting"
        imageFirst={true}
        className="bg-gray-50"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />

      {/* Integration Section */}
      <FeatureSection
        title="Seamless Integrations"
        subtitle="Connect with your existing tools"
        description="Integrate with major accounting software, ERP systems, and corporate card providers. Our platform works seamlessly with QuickBooks, Xero, Sage, NetSuite, and more."
        buttonText="View Integrations"
        buttonLink="#"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="Seamless Integrations"
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
};