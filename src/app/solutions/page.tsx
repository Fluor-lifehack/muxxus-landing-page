"use client";

import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';

// Composants
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";  
import SolutionHero from "../../components/hero/SolutionHero";


// Métadonnées Next.js (supprimées car "use client")

// Données pour les différents secteurs
const heroDataEcomerce = {
  title: "E-commerce Global Banking",
  description: "Streamline your online business with multi-currency accounts designed for e-commerce platforms.",
  bg_video: "/assets/videos/ecommerce-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }

};

const heroDataTravel = {
  title: "Travel & Tourism Banking",
  description: "Manage international payments and currency exchanges for your travel business with ease.",
  bg_video: "/assets/videos/travel-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }
};

const heroDataSoftware = {
  title: "Software & Tech Banking",
  description: "Scale your software business globally with our AI-powered banking solutions.",
  bg_video: "/assets/videos/software-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }
};

const heroDataWholesale = {
  title: "Wholesale & Distribution",
  description: "Optimize your wholesale operations with our comprehensive global banking platform.",
  bg_video: "/assets/videos/wholesale-hero.mp4",
  action_btn: {
    label: "See more",
    link: "#"
  }
};


// Données pour les sections FAQ
const faqData = {
  faq_title: "Global Accounts FAQ",
  faq_description: "Common questions about our global multi-currency business accounts",
  faqs: [
    {
      question: "How quickly can I open a global account?",
      answer: "Global accounts can be opened within 3-5 business days with our streamlined international onboarding process."
    },
    {
      question: "What currencies are supported globally?",
      answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies."
    },
    {
      question: "Are there minimum balance requirements?",
      answer: "No minimum balance requirements for most global account types. We believe in accessible global banking with transparent pricing."
    }
  ]
};

// Composant principal de la page
export default function SolutionsPage() {
  return (
    <ReactFullpage
      // Configuration
      scrollingSpeed={1000}
      easingcss3="ease-in-out"
      scrollBar={false}
      autoScrolling={true}
      fitToSection={false}
      fitToSectionDelay={0}
      scrollOverflow={false}
      normalScrollElements={'.normal-scroll'}
      credits={{ enabled: false }}
      responsiveWidth={0}
      responsiveHeight={0}
      paddingTop="0px"
      paddingBottom="0px"
      
      // Callbacks
      onLeave={(origin, destination) => {
        console.log('Leaving section:', origin.index, 'Going to:', destination.index);
      }}
      
      afterLoad={(origin, destination) => {
        console.log('Loaded section:', destination.index);
      }}
      
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {/* Hero Sections */}
            <div className="section">
              <SolutionHero {...heroDataEcomerce} />
            </div>
            <div className="section">
              <SolutionHero {...heroDataTravel} />
            </div>
            <div className="section">
              <SolutionHero {...heroDataSoftware} />
            </div>
            <div className="section">
              <SolutionHero {...heroDataWholesale} />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
