import BrandingService from "@/components/service/branding/BrandingService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function PluginsServicePage() {
  // Real data structure for BrandingService component
  const serviceData = {
    title: "Custom Plugin Development",
    info: "Transform your business with custom plugins that integrate seamlessly with your existing systems. Ready to get started?",
    action_btn: {
      enable: true,
      label: "Start Project",
      link: "/contact"
    },
    services: [
      {
        slug: "plugins-ecommerce",
        data: {
          draft: false,
          id: 1,
          title: "E-commerce Plugins",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Custom e-commerce plugins for WooCommerce, Shopify, and Magento with advanced features and integrations.",
          contactTitle: "E-commerce plugin development",
          btn_text: "Get Plugin",
          features: [
            "Payment gateways",
            "Inventory management",
            "Customer analytics",
            "Multi-store support"
          ],
          faq_title: "E-commerce features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "plugins-crm",
        data: {
          draft: false,
          id: 2,
          title: "CRM Integrations",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Seamless CRM integrations for Salesforce, HubSpot, and custom systems with automated workflows.",
          contactTitle: "CRM integration setup",
          btn_text: "Integrate Now",
          features: [
            "Data synchronization",
            "Automated workflows",
            "Custom fields",
            "API connections"
          ],
          faq_title: "CRM features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "plugins-analytics",
        data: {
          draft: false,
          id: 3,
          title: "Analytics Plugins",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Advanced analytics and reporting plugins with custom dashboards and real-time data visualization.",
          contactTitle: "Analytics setup",
          btn_text: "Get Analytics",
          features: [
            "Custom dashboards",
            "Real-time data",
            "Export capabilities",
            "Multi-platform support"
          ],
          faq_title: "Analytics features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "plugins-automation",
        data: {
          draft: false,
          id: 4,
          title: "Automation Tools",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Workflow automation plugins that streamline your business processes and reduce manual tasks.",
          contactTitle: "Automation setup",
          btn_text: "Automate Now",
          features: [
            "Workflow builder",
            "Trigger systems",
            "Conditional logic",
            "Performance monitoring"
          ],
          faq_title: "Automation features",
          faqs: []
        },
        content: ""
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Branding", href: "/service/branding" },
    { label: "Plugins", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <BrandingService {...serviceData} />
    </main>
  );
}
