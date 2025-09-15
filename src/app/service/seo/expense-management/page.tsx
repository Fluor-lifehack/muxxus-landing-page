import { notFound } from "next/navigation";
import SeoService from "@/components/service/seo/SeoService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function ExpenseManagementServicePage() {
  // Real data structure for SeoService component
  const serviceData = {
    title: "Expense Management Solutions",
    bg_image: "/assets/imgs/gallery/img-sd-89.png",
    services: [
      {
        slug: "expense-tracking",
        data: {
          draft: false,
          id: 1,
          title: "Expense Tracking",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Automated expense tracking with receipt scanning, categorization, and real-time reporting for better financial control.",
          contactTitle: "Start tracking expenses",
          btn_text: "Get Started",
          features: [
            "Receipt scanning",
            "Auto-categorization",
            "Real-time reporting",
            "Mobile app access"
          ],
          faq_title: "Tracking features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "expense-approval",
        data: {
          draft: false,
          id: 2,
          title: "Approval Workflows",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Streamlined approval processes with customizable workflows, notifications, and audit trails for compliance.",
          contactTitle: "Setup approval workflows",
          btn_text: "Configure Now",
          features: [
            "Custom workflows",
            "Role-based approvals",
            "Audit trails",
            "Compliance reporting"
          ],
          faq_title: "Approval features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "expense-analytics",
        data: {
          draft: false,
          id: 3,
          title: "Analytics & Insights",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Advanced analytics and insights to identify spending patterns, optimize budgets, and reduce unnecessary expenses.",
          contactTitle: "Get expense insights",
          btn_text: "View Analytics",
          features: [
            "Spending patterns",
            "Budget optimization",
            "Cost reduction insights",
            "Forecasting tools"
          ],
          faq_title: "Analytics features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "expense-integration",
        data: {
          draft: false,
          id: 4,
          title: "System Integration",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Seamless integration with accounting software, ERP systems, and banking platforms for unified financial management.",
          contactTitle: "Integrate systems",
          btn_text: "Connect Now",
          features: [
            "Accounting software",
            "ERP integration",
            "Banking platforms",
            "API access"
          ],
          faq_title: "Integration features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "SEO", href: "/service/seo" },
    { label: "Expense Management", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <SeoService {...serviceData} />
    </main>
  );
}
