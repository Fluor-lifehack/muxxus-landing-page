import { notFound } from "next/navigation";
import DesignService from "@/components/service/design/DesignService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function GlobalAccountsPage() {
  // Real data structure for DesignService component
  const serviceData = {
    title: "Global Accounts",
    description: "Multi-currency business accounts for global operations. Manage your international business finances with ease and efficiency.",
    sub_title: "International Business Banking",
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
          description: "Essential global banking with multi-currency support and basic international features.",
          contactTitle: "Open standard account",
          btn_text: "Get Started",
          features: [
            "Multi-currency support",
            "International transfers",
            "Basic reporting",
            "Mobile banking"
          ],
          faq_title: "Standard features",
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
          description: "Advanced global banking with enhanced features, better rates, and priority support.",
          contactTitle: "Upgrade to premium",
          btn_text: "Upgrade Now",
          features: [
            "Better exchange rates",
            "Priority support",
            "Advanced analytics",
            "Custom limits"
          ],
          faq_title: "Premium features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-accounts-enterprise",
        data: {
          draft: false,
          id: 3,
          title: "Enterprise Solutions",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Custom enterprise solutions with dedicated support, custom limits, and API integration.",
          contactTitle: "Enterprise consultation",
          btn_text: "Contact Sales",
          features: [
            "Custom limits",
            "API integration",
            "Dedicated support",
            "White-label options"
          ],
          faq_title: "Enterprise features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-accounts-multi",
        data: {
          draft: false,
          id: 4,
          title: "Multi-Entity Management",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Manage multiple business entities and subsidiaries from a single global banking platform.",
          contactTitle: "Multi-entity setup",
          btn_text: "Setup Now",
          features: [
            "Multi-entity support",
            "Consolidated reporting",
            "Inter-company transfers",
            "Centralized control"
          ],
          faq_title: "Multi-entity features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Business Accounts", href: "/business-accounts" },
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