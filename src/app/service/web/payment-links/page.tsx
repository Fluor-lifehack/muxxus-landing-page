import WebServiceDetails from "@/components/service/web/WebServiceDetails";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function PaymentLinksServicePage() {
  // Real data structure for WebServiceDetails component
  const serviceData = {
    slug: "payment-links",
    content: "Payment Links service content",
    data: {
      draft: false,
      id: 1,
      title: "Payment Links",
      icon: "/assets/imgs/icon/icon-s-3-light.png",
      bg_video: "/assets/video/video.mp4",
      image: "/assets/imgs/gallery/img-sd-89.png",
      description: "Create and share payment links instantly. Accept payments from anywhere with a simple link. Perfect for invoices, donations, event tickets, and any payment collection needs.",
      contactTitle: "Start accepting payments with links",
      btn_text: "Create Payment Link",
      features: [
        "Instant link creation",
        "Customizable branding",
        "Real-time notifications",
        "Secure payments",
        "Global acceptance",
        "Mobile optimized"
      ],
      frameworks: [
        "React.js",
        "Node.js",
        "Stripe API",
        "Webhook integration",
        "RESTful API",
        "Mobile SDK"
      ],
      faq_title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How do payment links work?",
          answer: "Payment links are secure URLs that allow you to collect payments without a website. Simply create a link and share it with your customers."
        },
        {
          question: "Are payment links secure?",
          answer: "Yes, all payment links use industry-standard encryption and security measures to protect your customers' data."
        }
      ]
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Web", href: "/service/web" },
    { label: "Payment Links", isActive: true },
  ];

  return (
    <main>
      {/* Breadcrumb Navigation - Sticky */}
      <div className="sticky top-20 lg:top-24 z-50 bg-white border-b border-gray-200 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <WebServiceDetails {...serviceData} />
    </main>
  );
}
