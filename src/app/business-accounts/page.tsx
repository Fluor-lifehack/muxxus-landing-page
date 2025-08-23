
import MuxxusAbout from "@/components/muxxus/MuxxusAbout";
import MuxxusProcess from "@/components/muxxus/MuxxusProcess";
import MuxxusFAQ from "@/components/muxxus/MuxxusFAQ";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusHeader from "@/components/headers/MuxxusHeader";

// Import des composants hero sélectionnés
import MarketingHero from "@/components/hero/MarketingHero";
import AiHero from "@/components/hero/Ai/AiHero";
import ProductDetailHero from "@/components/hero/ProductDetailHero";

// Import des composants supplémentaires
import MarketingImage from "@/components/image/MarketingImage";
import AiAbout from "@/components/about/AiAbout";
import AiInfo from "@/components/info/AiInfo";

const BusinessAccountsPage = () => {
  // Données pour le breadcrumb
  const breadcrumbData = {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Business Accounts" }
    ]
  };

  // Données pour MarketingHero
  const marketingHeroData = {
    title: "BUSINESS ACCOUNTS",
    sub_title: "GLOBAL FINANCIAL SOLUTIONS",
    shape_1: {
      light: "/assets/imgs/shape/img-s-29.png",
      dark: "/assets/imgs/shape/img-s-29-light.png"
    },
    shape_2: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    },
    info: {
      customers: "50+ Currencies Supported",
      client_img: {
        light: "/assets/imgs/works/img-s-9.jpg",
        dark: "/assets/imgs/works/img-s-9.jpg"
      },
      description: "Streamline your international business with our comprehensive business account solutions.",
      action_btn: {
        label: "Get Started",
        link: "/contact"
      }
    }
  };

  // Données pour AiHero
  const aiHeroData = {
    title: "BUSINESS ACCOUNTS",
    shape: {
      light: "/assets/imgs/shape/img-s-64.png",
      dark: "/assets/imgs/shape/img-s-64-dark.png"
    },
    client_img: {
      light: "/assets/imgs/works/img-s-9.jpg",
      dark: "/assets/imgs/works/img-s-9.jpg"
    },
    customers: "50+",
    info: {
      thumb: {
        light: "/assets/imgs/icon/icon-s-1.png",
        dark: "/assets/imgs/icon/icon-s-1.png"
      },
      description: "Streamline your international business with our comprehensive business account solutions.",
      action_btn: {
        enable: true,
        label: "Get Started",
        link: "/contact"
      }
    },
    image: "/assets/imgs/works/img-s-9.jpg",
    feature_text: "Trusted by businesses worldwide"
  };

  // Données pour MarketingImage
  const marketingImageData = {
    image: "/assets/imgs/works/img-s-9.jpg",
    video: "/assets/imgs/hero/hero-bg.mp4"
  };

  // Données pour AiAbout
  const aiAboutData = {
    title: "Why Choose Our Business Accounts?",
    description: [
      "Our business accounts provide the infrastructure needed to operate internationally with confidence. Whether you're a startup looking to expand globally or an enterprise managing operations across multiple countries, our solutions scale with your business needs.",
      "We offer multi-currency support across 50+ currencies, global compliance with international banking standards, and local banking infrastructure in 190+ countries.",
      "With real-time operations, 24/7 access, API integration for seamless automation, and dedicated support for enterprise clients, we ensure your business thrives in the global marketplace."
    ],
    action_btn: {
      enable: true,
      label: "Learn More",
      link: "#features"
    }
  };

  // Données pour AiInfo
  const aiInfoData = {
    bg_img: "/assets/imgs/shape/img-s-64.png",
    shape_img: "/assets/imgs/shape/img-s-65.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-66.png",
      dark: "/assets/imgs/shape/img-s-66-dark.png"
    },
    info: [
      {
        title: "Multi-Currency Support",
        description: "Access accounts in 50+ currencies across 190+ countries with local banking infrastructure"
      },
      {
        title: "Global Compliance",
        description: "Bank-grade security with full regulatory compliance and 256-bit encryption"
      },
      {
        title: "Real-time Processing",
        description: "Instant account updates and transaction processing with 24/7 access"
      }
    ],
    tags: ["Multi-currency", "Global reach", "Real-time", "Compliance", "Security", "API access"]
  };

  // Données pour MuxxusAbout
  const aboutData = {
    title: "Why Choose Our Business Accounts?",
    subtitle: "ADVANTAGES",
    description: "Our business accounts provide the infrastructure needed to operate internationally with confidence. Whether you're a startup looking to expand globally or an enterprise managing operations across multiple countries, our solutions scale with your business needs.",
    features: [
      "Multi-currency support across 50+ currencies",
      "Global compliance with international banking standards",
      "Local banking infrastructure in 190+ countries",
      "Real-time operations with 24/7 access",
      "API integration for seamless automation",
      "Dedicated support for enterprise clients"
    ],
    actionButton: {
      text: "Explore Features",
      href: "#features"
    }
  };

  // Données pour MuxxusProcess
  const processData = {
    title: "How Business Accounts Work",
    subtitle: "SETUP PROCESS",
    description: "Simple steps to get your business account up and running with our streamlined process",
    steps: [
      {
        number: "1",
        title: "Apply Online",
        description: "Complete our simple online application in just a few minutes with instant verification"
      },
      {
        number: "2",
        title: "Quick Verification",
        description: "Our team verifies your business details within 24 hours with automated checks"
      },
      {
        number: "3",
        title: "Start Banking",
        description: "Access your account immediately and start managing your global finances"
      }
    ]
  };

  // Données pour MuxxusFAQ
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    description: "Get answers to common questions about business accounts and our services",
    faqs: [
      {
        question: "How quickly can I open a business account?",
        answer: "Most business accounts can be opened within 24-48 hours with our streamlined onboarding process. Premium and enterprise accounts may take 3-5 business days for enhanced due diligence."
      },
      {
        question: "What currencies are supported?",
        answer: "We support 50+ major currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, and many emerging market currencies. New currencies are added regularly based on business demand."
      },
      {
        question: "Are there minimum balance requirements?",
        answer: "No minimum balance requirements for most account types. We believe in accessible business banking with transparent pricing and no hidden charges."
      },
      {
        question: "How secure are the accounts?",
        answer: "All accounts feature bank-grade security with 256-bit encryption, multi-factor authentication, real-time fraud monitoring, and compliance with international banking standards."
      },
      {
        question: "Can I integrate with my existing systems?",
        answer: "Yes, all account tiers offer API access. Premium and Enterprise accounts include advanced integration features, webhooks, and dedicated technical support for seamless system integration."
      }
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Header avec breadcrumb */}
      <MuxxusHeader breadcrumb={breadcrumbData} />
      <ProductDetailHero {...marketingHeroData} />
      
      {/* Section Image avec MarketingImage */}
      <MarketingImage {...marketingImageData} />
      
      {/* Section À propos avec MuxxusAbout */}
      <MuxxusAbout {...aboutData} />

      {/* Section Processus avec MuxxusProcess */}
      <MuxxusProcess {...processData} />

      {/* Section FAQ avec MuxxusFAQ */}
      <MuxxusFAQ {...faqData} />

      {/* Footer */}
      <MuxxusFooter />
    </main>
  );
};

export default BusinessAccountsPage; 