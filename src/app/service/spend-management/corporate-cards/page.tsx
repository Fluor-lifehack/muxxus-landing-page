import { notFound } from "next/navigation";
import MDXContent from "@/components/tools/MDXContent";
import ServiceDetails from "@/app/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/app/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function CorporateCardsPage() {
  // Static service data for Corporate Cards
  const service = {
    slug: "corporate-cards",
    data: {
      draft: false,
      id: 1,
      title: "Corporate Cards",
      icon: "/assets/imgs/icon/icon-s-3-light.png",
      bg_video: "/assets/video/video.mp4",
      image: "/assets/imgs/gallery/img-sd-89.png",
      description: "Issue virtual and physical corporate cards for employees with real-time spending controls, automated expense tracking, and comprehensive analytics.",
      contactTitle: "Ready to issue corporate cards?",
      btn_text: "Get Started",
      features: [
        "Virtual & physical cards",
        "Real-time spending controls",
        "Automated expense tracking",
        "Employee spending limits",
        "Category-based restrictions",
        "Instant fraud detection"
      ],
      faq_title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How quickly can I issue corporate cards?",
          answer: "Virtual cards can be issued instantly, while physical cards are typically delivered within 3-5 business days. You can start using virtual cards immediately for online purchases."
        },
        {
          question: "Can I set different spending limits for different employees?",
          answer: "Yes, you can set individual spending limits per employee, daily/monthly limits, and category-based restrictions. All limits can be adjusted in real-time through our dashboard."
        },
        {
          question: "How do you handle expense reconciliation?",
          answer: "Our system automatically categorizes expenses, matches receipts, and integrates with your accounting software. Employees can upload receipts via mobile app for instant reconciliation."
        },
        {
          question: "What security features do corporate cards have?",
          answer: "All cards feature real-time fraud detection, spending alerts, card freezing capabilities, and detailed transaction monitoring. You can instantly block cards if suspicious activity is detected."
        },
        {
          question: "Can I integrate with my existing expense management system?",
          answer: "Yes, our corporate cards integrate with major expense management platforms, accounting software, and ERP systems through our comprehensive API and webhook system."
        }
      ],
      meta: {
        meta_title: "Corporate Cards - Smart Business Spending | MUXXUS",
        meta_description: "Issue virtual and physical corporate cards with real-time controls, automated expense tracking, and comprehensive analytics. Optimize your business spending today."
      }
    },
    content: `
# Corporate Cards for Smart Business Spending

Transform how your business manages employee spending with intelligent corporate cards that provide real-time control, automated expense tracking, and comprehensive analytics.

## Why Choose Corporate Cards?

- **Instant Issuance:** Virtual cards available immediately, physical cards in 3-5 days
- **Real-time Control:** Set spending limits and restrictions that update instantly
- **Automated Tracking:** Expenses are automatically categorized and reconciled
- **Fraud Protection:** Advanced detection systems with instant card freezing
- **Team Management:** Centralized control over all employee spending

## Card Types Available

### Virtual Corporate Cards
Perfect for online purchases and subscriptions. Available instantly with full spending controls.

**Features:**
- Instant issuance
- Online-only usage
- Real-time spending limits
- Automatic expense categorization
- Subscription management

### Physical Corporate Cards
Traditional cards for in-store purchases and travel expenses.

**Features:**
- Physical card delivery
- Global acceptance
- Travel benefits
- Emergency card replacement
- Contactless payments

### Single-Use Cards
Temporary cards for specific purchases or projects.

**Features:**
- One-time use
- Set amount limits
- Automatic expiration
- Project-based tracking
- Vendor-specific restrictions

## Spending Controls

### Employee-Level Controls
- Individual spending limits
- Daily/monthly budgets
- Category restrictions
- Merchant restrictions
- Time-based limits

### Category-Based Controls
- Travel expenses
- Office supplies
- Software subscriptions
- Client entertainment
- Equipment purchases

### Real-Time Monitoring
- Live transaction feeds
- Instant spending alerts
- Overspending notifications
- Fraud detection alerts
- Budget threshold warnings

## Expense Management Integration

### Automated Processing
- Receipt capture via mobile app
- Automatic categorization
- Policy compliance checking
- Approval workflow integration
- Accounting software sync

### Reporting & Analytics
- Spending by employee
- Category analysis
- Vendor spending patterns
- Budget vs. actual tracking
- Cost optimization insights

## Getting Started

1. **Account Setup:** Complete your business verification
2. **Card Configuration:** Set spending policies and limits
3. **Employee Onboarding:** Add team members and set individual limits
4. **Card Issuance:** Issue virtual cards instantly or order physical cards
5. **Go Live:** Start using cards with full monitoring and control

## Security Features

- **Real-time Fraud Detection:** AI-powered monitoring for suspicious activity
- **Card Controls:** Instant freezing, spending limits, and restrictions
- **Transaction Monitoring:** Detailed logs of all card activity
- **Compliance:** Built-in policy enforcement and audit trails
- **Insurance:** Comprehensive coverage for business losses

## Pricing

- **Setup Fee:** $0
- **Virtual Cards:** $0 per card
- **Physical Cards:** $5 per card
- **Monthly Fee:** $25 per active card
- **Transaction Fee:** 1.5% + $0.30 per transaction

## Integration Options

Our corporate cards integrate seamlessly with:
- QuickBooks, Xero, Sage
- Expensify, Concur, Ramp
- Slack, Microsoft Teams
- Custom ERP systems
- API access for custom integrations
    `
  };

  // Pricing data
  const pricingData = {
    pricing: {
      title: "Corporate Cards Pricing",
      cards: [
        {
          tag: "Starter",
          price: "$25",
          feature_list: [
            { text: "Up to 10 virtual cards" },
            { text: "Basic spending controls" },
            { text: "Expense tracking" },
            { text: "Email support" }
          ],
          btn_title: "Start Free Trial"
        },
        {
          tag: "Professional",
          price: "$99",
          feature_list: [
            { text: "Up to 50 cards" },
            { text: "Advanced controls" },
            { text: "Analytics dashboard" },
            { text: "Priority support" }
          ],
          btn_title: "Get Professional"
        },
        {
          tag: "Enterprise",
          price: "Custom",
          feature_list: [
            { text: "Unlimited cards" },
            { text: "Custom integrations" },
            { text: "Dedicated support" },
            { text: "White-label options" }
          ],
          btn_title: "Contact Sales"
        }
      ]
    }
  };

  // Client brands data
  const brands = {
    brands: [
      {
        id: 1,
        name: "TechCorp",
        image: {
          dark: "/assets/imgs/brand/brand-1.png",
          light: "/assets/imgs/brand/brand-1.png"
        }
      },
      {
        id: 2,
        name: "Global Finance",
        image: {
          dark: "/assets/imgs/brand/brand-2.png",
          light: "/assets/imgs/brand/brand-2.png"
        }
      },
      {
        id: 3,
        name: "Innovation Inc",
        image: {
          dark: "/assets/imgs/brand/brand-3.png",
          light: "/assets/imgs/brand/brand-3.png"
        }
      }
    ]
  };

  const { title, meta, faqs, faq_title, contactTitle, btn_text } = service.data;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Spend Management", href: "/service/spend-management" },
    { label: "Corporate Cards", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* SEO Data */}
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />

      {/* Service Details */}
      <ServiceDetails {...service} />

      {/* Service Content */}
      <div className="service-details-inner">
        <MDXContent content={service.content} />
        <ServiceDetailsFaq faqs={faqs} faqTitle={faq_title} />
        <ClientArea brands={brands.brands} />
        <ContactBanner contactTitle={contactTitle} btn_text={btn_text} />
        <PricingArea {...pricingData.pricing} />
      </div>
    </main>
  );
}
