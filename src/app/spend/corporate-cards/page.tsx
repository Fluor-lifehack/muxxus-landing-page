import { notFound } from "next/navigation";
import MarketingService from "@/components/service/marketing/MarketingService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function CorporateCardsPage() {
  // Real data structure for MarketingService component
  const serviceData = {
    title: "Corporate Cards",
    subtitle: "Spend Management",
    meta_text: "Streamline your business expenses with smart corporate cards",
    description: "Comprehensive corporate card solutions with automated expense tracking, real-time controls, and seamless integration for modern businesses.",
    services: [
      {
        slug: "corporate-cards-standard",
        data: {
          draft: false,
          id: 1,
          title: "Standard Corporate Cards",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Essential corporate cards with basic expense tracking and standard spending limits for small teams.",
          contactTitle: "Get standard cards",
          btn_text: "Apply Now",
          features: [
            "Basic expense tracking",
            "Standard spending limits",
            "Email support",
            "Mobile app access"
          ],
          faq_title: "Standard features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "corporate-cards-premium",
        data: {
          draft: false,
          id: 2,
          title: "Premium Corporate Cards",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Advanced corporate cards with enhanced controls, better rewards, and priority support for growing businesses.",
          contactTitle: "Upgrade to premium",
          btn_text: "Upgrade Now",
          features: [
            "Advanced controls",
            "Better rewards",
            "Priority support",
            "Custom limits"
          ],
          faq_title: "Premium features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "corporate-cards-enterprise",
        data: {
          draft: false,
          id: 3,
          title: "Enterprise Solutions",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Custom enterprise solutions with unlimited cards, advanced analytics, and dedicated account management.",
          contactTitle: "Enterprise consultation",
          btn_text: "Contact Sales",
          features: [
            "Unlimited cards",
            "Advanced analytics",
            "Dedicated support",
            "Custom integrations"
          ],
          faq_title: "Enterprise features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "corporate-cards-virtual",
        data: {
          draft: false,
          id: 4,
          title: "Virtual Cards",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Instant virtual cards for online purchases, subscriptions, and temporary spending with real-time controls.",
          contactTitle: "Get virtual cards",
          btn_text: "Create Now",
          features: [
            "Instant creation",
            "Real-time controls",
            "Online optimized",
            "Temporary limits"
          ],
          faq_title: "Virtual features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Spend Management", href: "/spend" },
    { label: "Corporate Cards", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <MarketingService {...serviceData} />
    </main>
  );
} 