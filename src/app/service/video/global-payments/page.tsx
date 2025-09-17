import VideoService from "@/components/service/video/VideoService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function GlobalPaymentsServicePage() {
  // Real data structure for VideoService component
  const serviceData = {
    title_img: {
      light: "/assets/imgs/gallery/img-sd-89.png",
      dark: "/assets/imgs/gallery/img-sd-89.png"
    },
    services: [
      {
        slug: "global-payments-standard",
        data: {
          draft: false,
          id: 1,
          title: "Standard Global Payments",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Reliable international payment processing with competitive rates and 1-3 business day settlement.",
          contactTitle: "Start global payments",
          btn_text: "Get Started",
          features: [
            "150+ countries",
            "50+ currencies",
            "Competitive rates",
            "Secure processing"
          ],
          faq_title: "Standard features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-payments-express",
        data: {
          draft: false,
          id: 2,
          title: "Express Global Payments",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Fast-track international payments with same-day processing and real-time tracking for urgent transactions.",
          contactTitle: "Setup express payments",
          btn_text: "Upgrade Now",
          features: [
            "Same-day processing",
            "Real-time tracking",
            "Priority support",
            "Instant notifications"
          ],
          faq_title: "Express features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-payments-enterprise",
        data: {
          draft: false,
          id: 3,
          title: "Enterprise Solutions",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Custom enterprise solutions with bulk processing, custom limits, and dedicated account management.",
          contactTitle: "Enterprise consultation",
          btn_text: "Contact Sales",
          features: [
            "Bulk processing",
            "Custom limits",
            "Dedicated support",
            "API integration"
          ],
          faq_title: "Enterprise features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "global-payments-compliance",
        data: {
          draft: false,
          id: 4,
          title: "Compliance & Security",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Advanced compliance tools with KYC/AML verification, fraud detection, and regulatory reporting.",
          contactTitle: "Compliance setup",
          btn_text: "Secure Now",
          features: [
            "KYC/AML verification",
            "Fraud detection",
            "Regulatory reporting",
            "Audit trails"
          ],
          faq_title: "Compliance features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Video", href: "/service/video" },
    { label: "Global Payments", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <VideoService {...serviceData} />
    </main>
  );
}
