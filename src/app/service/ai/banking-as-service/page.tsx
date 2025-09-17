import AiService from "@/components/service/ai/AiService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function BankingAsServicePage() {
  // Real data structure for AiService component
  const serviceData = {
    title: "Banking as a Service",
    services: [
      {
        slug: "baas-core",
        data: {
          draft: false,
          id: 1,
          title: "Core Banking Infrastructure",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Essential banking infrastructure for your applications with account management, payment processing, and compliance tools.",
          contactTitle: "Start with core banking",
          btn_text: "Get Started",
          features: [
            "Account management",
            "Payment processing",
            "Compliance tools",
            "API access"
          ],
          faq_title: "Core banking features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "baas-ai",
        data: {
          draft: false,
          id: 2,
          title: "AI-Powered Banking",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Advanced banking features with AI-powered fraud detection, predictive analytics, and intelligent risk management.",
          contactTitle: "Upgrade to AI banking",
          btn_text: "Upgrade Now",
          features: [
            "AI fraud detection",
            "Predictive analytics",
            "Risk management",
            "Custom workflows"
          ],
          faq_title: "AI features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "baas-enterprise",
        data: {
          draft: false,
          id: 3,
          title: "Enterprise Solutions",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Custom enterprise banking solutions with dedicated support, white-label options, and SLA guarantees.",
          contactTitle: "Enterprise consultation",
          btn_text: "Contact Sales",
          features: [
            "Custom integrations",
            "Dedicated support",
            "White-label options",
            "SLA guarantees"
          ],
          faq_title: "Enterprise features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "baas-platform",
        data: {
          draft: false,
          id: 4,
          title: "Platform Integration",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Seamless platform integration with your existing systems, custom APIs, and developer tools.",
          contactTitle: "Platform setup",
          btn_text: "Get Platform",
          features: [
            "Custom APIs",
            "Developer tools",
            "Webhook support",
            "SDK libraries"
          ],
          faq_title: "Platform features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "AI", href: "/service/ai" },
    { label: "Banking as a Service", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <AiService {...serviceData} />
    </main>
  );
}
