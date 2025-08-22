import { notFound } from "next/navigation";
import MDXContent from "@/components/tools/MDXContent";
import ServiceDetails from "@/app/service/ServiceDetails";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/app/service/ServiceDetailsFaq";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function ExpenseManagementPage() {
  // Static service data for Expense Management
  const service = {
    slug: "expense-management",
    data: {
      draft: false,
      id: 2,
      title: "Expense Management",
      icon: "/assets/imgs/icon/icon-s-3-light.png",
      bg_video: "/assets/video/video.mp4",
      image: "/assets/imgs/gallery/img-sd-89.png",
      description: "Automated expense tracking, approval workflows, and reimbursement processing. Streamline your expense management with intelligent automation and real-time insights.",
      contactTitle: "Ready to streamline expense management?",
      btn_text: "Get Started",
      features: [
        "Automated expense tracking",
        "Approval workflows",
        "Receipt capture & OCR",
        "Policy compliance",
        "Real-time reporting",
        "Mobile app support"
      ],
      faq_title: "Frequently Asked Questions",
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
        },
        {
          question: "What about policy compliance?",
          answer: "Our system automatically checks expenses against your company policies, flagging violations and preventing non-compliant expenses from being processed. You can set custom rules for different expense categories."
        }
      ],
      meta: {
        meta_title: "Expense Management - Automated Tracking & Approval | MUXXUS",
        meta_description: "Streamline expense management with automated tracking, approval workflows, and receipt processing. Reduce manual work and improve compliance across your organization."
      }
    },
    content: `
# Automated Expense Management

Transform your expense management process with intelligent automation, streamlined approval workflows, and comprehensive compliance monitoring.

## Why Choose Automated Expense Management?

- **Zero Manual Entry:** Expenses are automatically captured and categorized
- **Instant Approvals:** Streamlined workflows reduce processing time by 80%
- **Policy Compliance:** Built-in rules ensure all expenses meet company standards
- **Real-time Insights:** Live dashboards provide spending visibility across your organization
- **Mobile-First:** Employees can submit expenses from anywhere, anytime

## Key Features

### Automated Expense Capture
- **Corporate Card Integration:** Automatic expense import from all corporate cards
- **Receipt OCR:** Intelligent text recognition from photos and scans
- **Bank Sync:** Direct integration with business bank accounts
- **Email Parsing:** Automatic expense extraction from email receipts
- **API Integration:** Connect with any expense-generating system

### Smart Categorization
- **AI-Powered Classification:** Machine learning automatically categorizes expenses
- **Merchant Recognition:** Identifies vendors and applies appropriate categories
- **Project Tagging:** Automatically assign expenses to projects or cost centers
- **Custom Rules:** Set business-specific categorization logic
- **Learning System:** Improves accuracy over time based on your corrections

### Approval Workflows
- **Multi-Level Approvals:** Create complex approval chains for different scenarios
- **Amount-Based Routing:** Automatically route expenses based on thresholds
- **Role-Based Approvals:** Different approval paths for different employee roles
- **Escalation Rules:** Automatic escalation for overdue approvals
- **Mobile Approvals:** Approve expenses from anywhere with push notifications

### Receipt Management
- **Photo Capture:** High-quality receipt photos with mobile app
- **OCR Processing:** Extract text and data automatically from images
- **Duplicate Detection:** Prevent duplicate expense submissions
- **Storage & Retrieval:** Cloud-based receipt storage with instant access
- **Compliance Checking:** Verify receipts meet policy requirements

## Getting Started

1. **System Setup:** Configure your expense policies and approval workflows
2. **Employee Onboarding:** Train your team on the mobile app and web interface
3. **Integration Setup:** Connect with your existing corporate cards and accounting system
4. **Policy Configuration:** Set up spending rules and compliance requirements
5. **Go Live:** Start capturing and processing expenses automatically

## Mobile Experience

### Employee App
- **Receipt Capture:** Take photos and scan documents on the go
- **Expense Submission:** Submit expenses in seconds with auto-fill
- **Status Tracking:** Monitor approval progress in real-time
- **Policy Information:** Access spending guidelines and limits
- **Offline Support:** Submit expenses even without internet connection

### Manager Dashboard
- **Approval Queue:** Review and approve expenses from anywhere
- **Team Overview:** Monitor spending across your team
- **Policy Enforcement:** Ensure compliance with company guidelines
- **Quick Actions:** Approve, reject, or request more information
- **Mobile Notifications:** Get alerts for pending approvals

## Reporting & Analytics

### Real-Time Dashboards
- **Spending Overview:** Total expenses, pending approvals, and processed amounts
- **Category Analysis:** Breakdown by expense type and department
- **Employee Spending:** Individual and team spending patterns
- **Policy Violations:** Track compliance issues and policy breaches
- **Budget Tracking:** Monitor spending against allocated budgets

### Advanced Analytics
- **Trend Analysis:** Identify spending patterns and seasonal variations
- **Vendor Analysis:** Track spending with specific suppliers
- **Cost Optimization:** Identify opportunities to reduce expenses
- **ROI Tracking:** Measure the impact of expense management improvements
- **Custom Reports:** Create reports tailored to your business needs

## Integration Capabilities

### Accounting Software
- QuickBooks Online & Desktop
- Xero
- Sage Intacct
- NetSuite
- Microsoft Dynamics

### Corporate Cards
- Visa Corporate
- Mastercard Corporate
- American Express Business
- Custom card programs

### ERP Systems
- SAP
- Oracle
- Microsoft Dynamics
- Custom ERP solutions

### Communication Platforms
- Slack
- Microsoft Teams
- Email integration
- SMS notifications

## Security & Compliance

- **Data Encryption:** All data is encrypted in transit and at rest
- **Access Controls:** Role-based permissions and multi-factor authentication
- **Audit Trails:** Complete history of all expense-related activities
- **Policy Enforcement:** Automated compliance checking and violation alerts
- **Data Privacy:** GDPR and SOC 2 compliant data handling

## Pricing

- **Starter Plan:** $25/month per user
- **Professional Plan:** $49/month per user
- **Enterprise Plan:** Custom pricing
- **Setup Fee:** $0
- **Training:** Included with all plans
    `
  };

  // Pricing data
  const pricingData = {
    pricing: {
      title: "Expense Management Pricing",
      cards: [
        {
          tag: "Starter",
          price: "$25",
          feature_list: [
            { text: "Up to 25 users" },
            { text: "Basic automation" },
            { text: "Standard workflows" },
            { text: "Email support" }
          ],
          btn_title: "Start Free Trial"
        },
        {
          tag: "Professional",
          price: "$49",
          feature_list: [
            { text: "Up to 100 users" },
            { text: "Advanced automation" },
            { text: "Custom workflows" },
            { text: "Priority support" }
          ],
          btn_title: "Get Professional"
        },
        {
          tag: "Enterprise",
          price: "Custom",
          feature_list: [
            { text: "Unlimited users" },
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
    { label: "Spend Management", href: "/spend" },
    { label: "Expense Management", isActive: true },
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
