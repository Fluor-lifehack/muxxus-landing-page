import { Metadata } from "next";
import SolutionHero from "@/components/hero/SolutionHero";
import MuxxusSection2 from "@/components/muxxus/MuxxusSection2";
import TestimonialsSection from "@/components/muxxus/TestimonialsSection";
import FeatureSection from "@/components/muxxus/FeatureSection";
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import SectionDivider from "@/components/ui/SectionDivider";



// Métadonnées de la page
export const metadata: Metadata = {
  title: "Bill Pay | Automated Accounts Payable Management | Muxxus",
  description: "Conveniently automate your online bill pay processes in one place. Upload, approve, pay, and reconcile your domestic and international bills all within your Muxxus account.",
  keywords: "bill pay, accounts payable, invoice management, vendor payments, automated payments, expense reconciliation, bill automation"
};

// Données pour le composant DetailHero
const heroData = {
  title: "Conveniently automate your online bill pay processes in one place",
  shape: {
    light: "/assets/imgs/shape/img-s-29.png",
    dark: "/assets/imgs/shape/img-s-29-light.png"
  },
  client_img: {
    light: "/assets/imgs/muxxus/image/img6.jpg",
    dark: "/assets/imgs/muxxus/image/img6.jpg"
  },
  customers: "200+ countries, 60+ currencies",
  info: {
    thumb: {
      light: "/assets/imgs/muxxus/image/img6.jpg",
      dark: "/assets/imgs/muxxus/image/img6.jpg"
    },
    description: "Upload, approve, pay, and reconcile your domestic and international bills all within your Muxxus account.",
    action_btn: {
      label: "Get Started",
      link: "#"
    }
  },
  image: "/assets/imgs/muxxus/image/img6.jpg",
  feature_text: "Bill Pay Solutions"
};

// Données pour les composants
const componentData = {
  muxxusAiSection: {
    title: "AI-Powered Bill Management",
    description: [
      "Our platform uses artificial intelligence to optimize your bill pay operations, offering automated data extraction and intelligent approval workflows.",
      "AI algorithms analyze payment patterns to provide insights, detect anomalies, and help optimize your accounts payable processes across all currencies."
    ],
    action_btn: {
      label: "Discover Our AI Solutions",
      link: "#"
    },
    shape_img: "/assets/imgs/shape/img-s-29.png",
    small_shape: {
      light: "/assets/imgs/shape/img-s-30.png",
      dark: "/assets/imgs/shape/img-s-30-light.png"
    }
  },
  
  muxxusSection2: {
    title: "Free your finance team from manual, time-consuming bill payments",
    description: [
      "Muxxus makes it easy to automate your accounts payable and pay your invoices from one place.",
      "Customised approval workflows and notifications give you more control to manage your company spend."
    ],
    leftImage: "/assets/imgs/muxxus/image/img2.jpg",
    items: [
      {
        icon: "📄",
        title: "Say goodbye to manual data entry",
        description: "Upload or email bills and Muxxus will automatically extract all relevant data using OCR technology, saving you time while reducing errors."
      },
      {
        icon: "🛡️",
        title: "Manage risk and ensure oversight",
        description: "Create multi-layer approval workflows across specific roles to stay in line with company spend policies."
      },
      {
        icon: "🌍",
        title: "Easily pay vendors across the globe",
        description: "Directly pay bills in multiple currencies at market-leading FX rates without having to manually enter payment details into your bank."
      },
      {
        icon: "📊",
        title: "Reconcile faster with accounting integrations",
        description: "Import data such as chart of accounts and sync bills and payments back to your accounting software."
      }
    ],
    action_btn: {
      label: "Get Started with Bill Pay",
      link: "#"
    }
  },
  
  keyBenefitsSection2: {
    title: "Free your finance team from manual, time-consuming bill payments",
    description: [
      "Muxxus makes it easy to automate your accounts payable and pay your invoices from one place.",
      "Customised approval workflows and notifications give you more control to manage your company spend."
    ],
    leftImage: "/assets/imgs/muxxus/image/img4.jpg",
    items: [
      {
        icon: "📄",
        title: "Say goodbye to manual data entry",
        description: "Upload or email bills and Muxxus will automatically extract all relevant data using OCR technology, saving you time while reducing errors."
      },
      {
        icon: "🛡️",
        title: "Manage risk and ensure oversight",
        description: "Create multi-layer approval workflows across specific roles to stay in line with company spend policies."
      },
      {
        icon: "🌍",
        title: "Easily pay vendors across the globe",
        description: "Directly pay bills in multiple currencies at market-leading FX rates without having to manually enter payment details into your bank."
      },
      {
        icon: "📊",
        title: "Reconcile faster with accounting integrations",
        description: "Import data such as chart of accounts and sync bills and payments back to your accounting software."
      }
    ]
  },
  
  supportedCountries: {
    title: "Global bill payment network",
    description: "Muxxus bill pay solution works worldwide, providing your business with seamless payment capabilities across all major markets and currencies.",
    countries: [
      {
        name: 'United States',
        currency: 'USD',
        currencyName: 'US Dollar',
        exchangeRate: '1 EUR = 1.08 USD',
        bankCode: 'US001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['ACH transfers', 'Wire transfers', 'Real-time FX', 'Low fees']
      },
      {
        name: 'United Kingdom',
        currency: 'GBP',
        currencyName: 'British Pound',
        exchangeRate: '1 EUR = 0.86 GBP',
        bankCode: 'GB001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['BACS transfers', 'CHAPS payments', 'Real-time rates', 'Low spreads']
      },
      {
        name: 'Germany',
        currency: 'EUR',
        currencyName: 'Euro',
        exchangeRate: '1 EUR = 1.00 EUR',
        bankCode: 'DE001',
        accountFormat: 'DE89-XXXX-XXXX-XXXX-XXXX-XX',
        features: ['SEPA transfers', 'Real-time rates', 'Secure payments', 'Local compliance']
      },
      {
        name: 'Australia',
        currency: 'AUD',
        currencyName: 'Australian Dollar',
        exchangeRate: '1 EUR = 1.65 AUD',
        bankCode: 'AU001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['BPAY transfers', 'Real-time FX', 'Low fees', '24/7 support']
      },
      {
        name: 'Singapore',
        currency: 'SGD',
        currencyName: 'Singapore Dollar',
        exchangeRate: '1 EUR = 1.46 SGD',
        bankCode: 'SG001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['FAST transfers', 'Real-time FX', 'Low fees', 'Local banking']
      },
      {
        name: 'Hong Kong SAR',
        currency: 'HKD',
        currencyName: 'Hong Kong Dollar',
        exchangeRate: '1 EUR = 8.45 HKD',
        bankCode: 'HK001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local transfers', 'Real-time FX', 'Low fees', '24/7 support']
      },
      {
        name: 'Canada',
        currency: 'CAD',
        currencyName: 'Canadian Dollar',
        exchangeRate: '1 EUR = 1.47 CAD',
        bankCode: 'CA001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Interac transfers', 'Real-time FX', 'Low spreads', 'Local compliance']
      },
      {
        name: 'Japan',
        currency: 'JPY',
        currencyName: 'Japanese Yen',
        exchangeRate: '1 EUR = 160.5 JPY',
        bankCode: 'JP001',
        accountFormat: 'XXXX-XXXX-XXXX-XXXX',
        features: ['Local banking', 'Real-time rates', 'Secure payments', '24/7 support']
      }
    ],
    accountExample: {
      title: "Bill Pay Account",
      description: "Access global payment networks with automated bill processing and real-time payment tracking.",
      capabilities: [
        "Automated bill processing",
        "Multi-currency payments",
        "Approval workflows",
        "Accounting integrations"
      ],
      depositMethods: {
        title: "Multiple funding methods",
        description: "Bank transfers, corporate accounts, and digital wallets"
      }
    }
  },
  
  testimonials: {
    title: "What Our Bill Pay Customers Say",
    description: "Discover how our customers use our bill pay platform to streamline their accounts payable and vendor management",
    testimonials: [
      {
        quote: "Muxxus Bill Pay has given us better control over our finances, and has helped us roll up important strategic budgeting and forecasting capabilities. It's also improved our relationship with our suppliers, because we now never miss a beat with paying them on time.",
        icon: "/assets/imgs/icon/quote-1.png",
        author: "Joel Stehr",
        designation: "Chief Operating Officer, Bilue",
        avatar: "/assets/imgs/team/img-s-1.jpg"
      },
      {
        quote: "The feature where we can monitor how much employees are spending on their Muxxus cards is incredibly useful to us. We get to have full visibility, as well as being able to set daily and per transaction budgets.",
        icon: "/assets/imgs/icon/quote-2.png",
        author: "Richard Li",
        designation: "Co-founder & CEO, July",
        avatar: "/assets/imgs/team/img-s-10.jpg"
      },
      {
        quote: "Having all our global SaaS subscriptions in one place has streamlined our finance processes and enabled better tracking and control of expenses. It's even better knowing that Muxxus isn't hitting us with any international transaction fees.",
        icon: "/assets/imgs/icon/quote-3.png",
        author: "Warren Durling",
        designation: "Chief Operating Officer, Dovetail – Digital Agency",
        avatar: "/assets/imgs/team/img-s-15.jpg"
      }
    ]
  }
};

// Données pour les sections FAQ
const faqData = {
  faq_title: "Bill Pay FAQ",
  faq_description: "Common questions about our bill pay services and automated accounts payable management",
  faqs: [
    {
      question: "What is the Muxxus Bill Pay Solution and how does it work?",
      answer: "A bill pay solution allows you to manage multiple steps required to pay vendor invoices and bills. This includes uploading bills and extracting the relevant data, routing bills to the appropriate team members for approval prior to payment, making the payment to the vendor, and reconciling the bill and payment data. Muxxus's bill pay solution reduces hours spent in multiple tools by consolidating all of these processes into one, easy-to use workflow for both domestic and international bills, while reducing errors associated with manual tasks."
    },
    {
      question: "How do I set up custom approval workflows?",
      answer: "Custom approval workflows can easily be set up by admins according to the bill's amount and currency. Approvers can be set to the user's specific manager, specific roles, or specific users and multiple layers of approvers can be set within each workflow to ensure the right team members are reviewing spend."
    },
    {
      question: "Can I integrate Muxxus's bill pay solution with my accounting software?",
      answer: "Muxxus is integrated with Netsuite, Xero and Quickbooks. With these integrations you can import invoices directly to pay in Muxxus or code invoices created in Muxxus with your chart of accounts data. You can also sync invoices and their payments back to your accounting software for faster reconciliation."
    },
    {
      question: "How secure is the bill pay platform?",
      answer: "We provide enterprise-level security including multi-factor authentication, approval workflows, audit trails, and compliance with international security standards. All vendor data and payment information is encrypted and securely stored."
    },
    {
      question: "Can I pay bills in multiple currencies?",
      answer: "Yes, you can pay bills in multiple currencies at market-leading FX rates. The platform automatically handles currency conversion and you can pay vendors across 200+ countries without manual bank transfers."
    },
    {
      question: "How quickly can I process and pay bills?",
      answer: "Bills can be processed and paid within 24-48 hours depending on approval workflows. For urgent payments, we offer expedited processing. All payments are tracked in real-time with instant notifications."
    }
  ]
};

// Composant principal de la page
export default function BillPayPage() {
  return (
    <>
      {/* Hero Section */}
      <SolutionHero
        title="Bill Pay"
        description="Streamline your business bill payments with automated invoice processing, multi-layer approvals, and global payment capabilities."
        bg_video=""
        bg_image="/assets/imgs/muxxus/image/img4.jpg"
        action_btn={{ label: "Get Started", link: "#" }}
      />

      {/* Key Benefits Section */}
      <MuxxusSection2 
        {...componentData.keyBenefitsSection2} 
        fullWidthHeader={true} 
        backgroundVideo="/assets/videos/world-globe.mp4"
      />

              <MuxxusSection2 
        title="Customise invoice approvals to match your business needs"
        description={[
          "Create multi-layer approval flows",
          "Create multi-layer approvals based on bill currency and amount thresholds."
        ]}
        leftImage={componentData.muxxusSection2.leftImage}
        items={[
          {
            icon: "🔄",
            title: "Create multi-layer approval flows",
            description: "Create multi-layer approvals based on bill currency and amount thresholds."
          },
          {
            icon: "👥",
            title: "Customise approvers for each flow",
            description: "Set specific approvers or approver roles at each layer to ensure the right people are reviewing spend."
          },
          {
            icon: "🔔",
            title: "Never miss a payment",
            description: "Stay on top of bills with regular notifications when bills are waiting for approval or payment."
          }
        ]}
        action_btn={componentData.muxxusSection2.action_btn}
        fullWidthHeader={false}
        imagePosition="right"
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />

 
              <MuxxusSection2 
        title="Pay business expenses globally with Muxxus Transfers"
        description={[
          "Pay vendors from around the world",
          "Easily convert funds for bills requiring payment in a foreign currency. Pay out to 200+ countries with access to interbank rates."
        ]}
        leftImage={componentData.muxxusSection2.leftImage}
        items={[
          {
            icon: "🌍",
            title: "Pay vendors from around the world",
            description: "Easily convert funds for bills requiring payment in a foreign currency. Pay out to 200+ countries with access to interbank rates."
          },
          {
            icon: "⚡",
            title: "Pay domestic and international bills faster",
            description: "Simply pay hundreds of bills to vendors across countries and currencies in one go."
          },
          {
            icon: "🔐",
            title: "Pay with additional approvals",
            description: "Set up additional payout approvals on top of bill approval workflows for added security."
          }
        ]}
        action_btn={componentData.muxxusSection2.action_btn}
        fullWidthHeader={false}
        backgroundColor="bg-white"
        textColor="text-gray-900"
      />
            
      <MuxxusSection2 
        title="VENDOR MANAGEMENT"
        description={[
          "Keep track of all vendors, reducing errors, missed payments, and payment fraud. Sync up-to-date vendor data from your accounting software or create in Muxxus."
        ]}
        leftImage={componentData.muxxusSection2.leftImage}
        items={[
          {
            icon: "📊",
            title: "Track all vendor information in one place",
            description: "Sync up-to-date vendor data from your accounting software or create in Muxxus."
          },
          {
            icon: "🔄",
            title: "Set approval flows to manage vendor changes",
            description: "Review and control changes with a complete audit trail for each vendor."
          },
          {
            icon: "⚡",
            title: "Create and pay bills faster",
            description: "Pre-fill details like chart of accounts, tax rates, and saved payment details based on the vendor selected."
          }
        ]}
        action_btn={componentData.muxxusSection2.action_btn}
        fullWidthHeader={false}
        backgroundColor="bg-white"
        textColor="text-gray-900"
        imagePosition="right"
      />
              <MuxxusSection2 
        title="ACCOUNTING INTEGRATIONS"
        description={[
          "Automate reconciliation with a range of accounting applications and integrations",
        ]}
        leftImage={componentData.muxxusSection2.leftImage}
        items={[
          {
            icon: "📊",
            title: "Sync your accounting data and invoices",
            description: "Create and code bills with your accounting data in Muxxus or import bills directly from your accounting software to pay."
          },
          {
            icon: "⚡",
            title: "Speed up reconciliation",
            description: "Automatically sync bills and their payments back to your accounting software."
          },
          {
            icon: "🔗",
            title: "Integrate with accounting software easily",
            description: "Connect Muxxus to popular accounting platforms like NetSuite, Xero, QuickBooks in just a few simple clicks."
          }
        ]}
        action_btn={componentData.muxxusSection2.action_btn}
        fullWidthHeader={false}
        backgroundColor="bg-white"
        textColor="text-gray-900"
        imagePosition="left"
      />
      {/* Customer Testimonials Section */}
      <TestimonialsSection {...componentData.testimonials} />


      {/* Approval Workflows Section */}
      <FeatureSection
        title="Scale faster with Corporate Cards"
        subtitle=""
        description="Create multi-currency employee and company cards in minutes and stay in control of all purchases from a single dashboard, in real-time. They’re free to create and you can start using them immediately online. Avoid surprise foreign transaction fees and other hidden charges, so you can reinvest every dollar back into your growth."
        buttonText="Learn More"
        buttonLink="/accounts/corporate-cards"
        imageSrc="/assets/imgs/muxxus/image/img5.jpg"
        imageAlt="Company Cards"
        badgeColor="white"
        imageFirst={false}
        className="bg-gray-900 text-white"
      />

      <SectionDivider variant="gradient" size="lg" color="primary" />


      {/* FAQ et Footer */}
      <ServiceDetailsFaq 
        faqs={faqData.faqs} 
        faqTitle={faqData.faq_title} 
      />
      <MuxxusNewsletter />
      <MuxxusFooter />
    </>
  );
}

