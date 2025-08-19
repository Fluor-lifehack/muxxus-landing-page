import { notFound } from "next/navigation";
import DesignService from "@/components/service/design/DesignService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function GlobalAccountsServicePage() {
  // Real data structure for DesignService component
  const serviceData = {
    title: "Global Accounts",
    description: "Multi-currency business accounts for global operations. Open accounts in 50+ currencies across 200+ countries with local banking infrastructure.",
    sub_title: "Global Business Banking",
    action_btn: {
      enable: true,
      label: "Open Account",
      link: "/contact"
    },
    services: [
      {
        slug: "global-accounts-standard",
        data: {
          draft: false,
          id: 1,
          title: "Standard Global Account",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Standard global account with multi-currency support and essential banking features for international business.",
          contactTitle: "Open your global account",
          btn_text: "Open Account",
          features: [
            "Multi-currency support",
            "Global compliance",
            "Standard banking hours",
            "Email support"
          ],
          faq_title: "Standard account features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-accounts-premium",
        data: {
          draft: false,
          id: 2,
          title: "Premium Global Account",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Premium global account with advanced features, priority support, and enhanced multi-currency capabilities.",
          contactTitle: "Upgrade to premium",
          btn_text: "Upgrade Now",
          features: [
            "Advanced multi-currency",
            "Priority support",
            "Enhanced compliance",
            "Bulk operations"
          ],
          faq_title: "Premium account features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-accounts-enterprise",
        data: {
          draft: false,
          id: 3,
          title: "Enterprise Global Account",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Enterprise-grade global accounts with custom limits, API integration, and dedicated relationship management.",
          contactTitle: "Enterprise consultation",
          btn_text: "Contact Sales",
          features: [
            "Custom account limits",
            "API integration",
            "Dedicated support",
            "White-label solutions"
          ],
          faq_title: "Enterprise account features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-accounts-instant",
        data: {
          draft: false,
          id: 4,
          title: "Instant Global Account",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Instant global account setup with same-day activation and immediate access to multi-currency features.",
          contactTitle: "Instant account setup",
          btn_text: "Get Instant",
          features: [
            "Same-day activation",
            "Instant multi-currency",
            "Real-time verification",
            "Immediate access"
          ],
          faq_title: "Instant account features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Accounts", href: "/service/accounts" },
    { label: "Global Accounts", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <DesignService {...serviceData} />
    </main>
  );
}
