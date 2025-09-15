import { notFound } from "next/navigation";
import DesignService from "@/components/service/design/DesignService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function MultiCurrencyServicePage() {
  // Real data structure for DesignService component
  const serviceData = {
    title: "FX & Transfers",
    description: "High-speed international transfers with competitive exchange rates. Send money globally in seconds with real-time FX rates.",
    sub_title: "International Money Transfers",
    action_btn: {
      enable: true,
      label: "Start Transfer",
      link: "/contact"
    },
    services: [
      {
        slug: "fx-transfers-standard",
        data: {
          draft: false,
          id: 1,
          title: "Standard Transfers",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Standard international transfers with competitive rates and 1-2 business day processing.",
          contactTitle: "Start your transfer journey",
          btn_text: "Start Transfer",
          features: [
            "Real-time FX rates",
            "Standard transfer times",
            "50+ currencies",
            "Competitive fees"
          ],
          faq_title: "Frequently asked questions",
          faqs: []
        },
        content: ""
      },
      {
        slug: "fx-transfers-premium",
        data: {
          draft: false,
          id: 2,
          title: "Premium Transfers",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Premium transfers with faster processing, better rates, and priority support.",
          contactTitle: "Upgrade to premium",
          btn_text: "Upgrade Now",
          features: [
            "Faster processing",
            "Better exchange rates",
            "Priority support",
            "Bulk transfer discounts"
          ],
          faq_title: "Premium features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "fx-transfers-enterprise",
        data: {
          draft: false,
          id: 3,
          title: "Enterprise Solutions",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Custom enterprise solutions for large volume transfers with dedicated support and custom limits.",
          contactTitle: "Enterprise consultation",
          btn_text: "Contact Sales",
          features: [
            "Custom transfer limits",
            "API integration",
            "Dedicated support",
            "White-label solutions"
          ],
          faq_title: "Enterprise features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "fx-transfers-express",
        data: {
          draft: false,
          id: 4,
          title: "Express Transfers",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Instant transfers for urgent payments with same-day processing and real-time tracking.",
          contactTitle: "Express transfer setup",
          btn_text: "Get Express",
          features: [
            "Same-day processing",
            "Real-time tracking",
            "Urgent payment support",
            "Instant notifications"
          ],
          faq_title: "Express features",
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
    { label: "Multi-currency", isActive: true },
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
