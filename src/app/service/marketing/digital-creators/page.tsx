import MarketingService from "@/components/service/marketing/MarketingService";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

export default function DigitalCreatorsServicePage() {
  // Real data structure for MarketingService component
  const serviceData = {
    title: "Digital Creator Solutions",
    subtitle: "Creator Economy",
    meta_text: "Empower creators with tools that monetize their content and grow their audience",
    description: "Comprehensive solutions for content creators, influencers, and digital entrepreneurs to monetize their platforms and scale their businesses effectively.",
    services: [
      {
        slug: "creators-monetization",
        data: {
          draft: false,
          id: 1,
          title: "Content Monetization",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Multiple revenue streams for creators including subscriptions, donations, merchandise, and exclusive content.",
          contactTitle: "Start monetizing",
          btn_text: "Get Started",
          features: [
            "Subscription platforms",
            "Donation systems",
            "Merchandise integration",
            "Exclusive content gates"
          ],
          faq_title: "Monetization features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "creators-audience",
        data: {
          draft: false,
          id: 2,
          title: "Audience Growth",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Strategic audience building tools with analytics, engagement features, and growth automation.",
          contactTitle: "Grow your audience",
          btn_text: "Scale Now",
          features: [
            "Audience analytics",
            "Engagement tools",
            "Growth automation",
            "Cross-platform sync"
          ],
          faq_title: "Growth features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "creators-branding",
        data: {
          draft: false,
          id: 3,
          title: "Personal Branding",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Professional branding packages including logo design, visual identity, and brand guidelines.",
          contactTitle: "Build your brand",
          btn_text: "Design Brand",
          features: [
            "Logo design",
            "Visual identity",
            "Brand guidelines",
            "Marketing materials"
          ],
          faq_title: "Branding features",
          faqs: []
        },
        content: ""
      },
      {
        slug: "creators-platforms",
        data: {
          draft: false,
          id: 4,
          title: "Platform Integration",
          icon: "/assets/imgs/icon/icon-s-3-light.png",
          bg_video: "/assets/video/video.mp4",
          image: "/assets/imgs/gallery/img-sd-89.png",
          description: "Seamless integration with major platforms including YouTube, Instagram, TikTok, and Twitch.",
          contactTitle: "Integrate platforms",
          btn_text: "Connect Now",
          features: [
            "Multi-platform sync",
            "Content scheduling",
            "Analytics dashboard",
            "Automated posting"
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
    { label: "Marketing", href: "/service/marketing" },
    { label: "Digital Creators", isActive: true },
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
