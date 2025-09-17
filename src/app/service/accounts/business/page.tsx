import { getMainPage } from "@/lib/helper/contentConverter";
import ClientArea from "@/components/clients/ClientArea";
import ClientSlider from "@/components/clients/ClientSlider";
import ServiceInnerArea from "@/components/service/ServiceInnerArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import AboutBanner from "@/components/banner/AboutBanner";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import ButtonFlip from "@/components/elements/button/ButtonFlip";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import Image from "next/image";

const BusinessAccountsServicePage = () => {
  // Récupération des données depuis les fichiers MDX
  const { data: brands } = getMainPage("/brands/brands1.mdx");
  const { data: clients } = getMainPage("/brands/brands3.mdx");
  const { data: contactBanner } = getMainPage("/banner/contact-banner.mdx");

  const { data: aboutBanner } = getMainPage("/banner/about-banner.mdx");

  // Données pour le breadcrumb
  const breadcrumbItems = [
    { label: "Services", href: "/service" },
    { label: "Accounts", href: "/service/accounts" },
    { label: "Business", isActive: true }
  ];

  // Données spécifiques aux Business Accounts de Muxxus
  const muxxusBusinessAccounts = {
    hero: {
      title: "Muxxus Business Accounts",
      subtitle: "Global Banking for Modern Businesses",
      description: "Open multi-currency business accounts in minutes. Access 50+ currencies, send payments to 200+ countries, and manage your global finances from one unified platform.",
      image: "/assets/imgs/gallery/img-sd-89.png"
    },
    features: [
      {
        icon: "/assets/imgs/icon/icon-s-1.png",
        title: "Global<br/>Accounts",
        description: "Open accounts in 50+ currencies and manage your global finances from one platform",
        benefits: ["Instant account creation", "Real-time balance updates", "Multi-currency support"],
        url: "accounts/global"
      },
      {
        icon: "/assets/imgs/icon/icon-s-2.png",
        title: "FX &<br/>Transfers",
        description: "Send and receive payments to 200+ countries with instant settlement",
        benefits: ["Real-time processing", "Low transfer fees", "Global compliance"],
        url: "accounts/fx-transfers"
      },
      {
        icon: "/assets/imgs/icon/icon-s-10.png",
        title: "Multi-currency<br/>Accounts",
        description: "Hold and manage 50+ currencies in a single account with real-time exchange rates",
        benefits: ["Instant currency conversion", "No hidden fees", "Competitive FX rates"],
        url: "accounts/multi-currency"
      }
    ],
    stats: [
      { number: "50+", label: "Currencies Supported" },
      { number: "200+", label: "Countries Covered" },
      { number: "10,000+", label: "Businesses Trust Us" },
      { number: "99.9%", label: "Uptime Guarantee" }
    ],
    useCases: [
      {
        title: "E-commerce & Marketplaces",
        description: "Accept payments globally and manage multi-currency operations",
        icon: "🛒"
      },
      {
        title: "SaaS & Tech Companies",
        description: "Scale internationally with local banking infrastructure",
        icon: "💻"
      },
      {
        title: "Import/Export Businesses",
        description: "Handle international trade with competitive FX rates",
        icon: "🚢"
      },
      {
        title: "Remote Teams",
        description: "Pay contractors and employees worldwide instantly",
        icon: "🌍"
      }
    ]
  };

  return (
    <>
      <SeoData
        title="Muxxus Business Accounts - Multi-currency Global Banking Platform"
        meta_title="Muxxus Business Accounts - Leading Fintech Platform"
        description="Muxxus Business Accounts: Multi-currency accounts, global payments, and business cards for modern companies. Trusted by 10,000+ businesses worldwide."
      />
      
      <main className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="sticky top-20 z-40 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 py-6 shadow-sm backdrop-blur-sm bg-opacity-95">
          <div className="container2">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section personnalisé */}
        <section className="container2 py-20">
          <div className="pt-0 2xl:pt-1 grid justify-between gap-y-16 gap-x-[60px] md:grid-cols-[1fr_330px] lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_630px]">
            <div className="space-y-8">
              <span className="text-[18px] uppercase block text-blue-600 font-bold tracking-wider">
                {muxxusBusinessAccounts.hero.subtitle}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
                {muxxusBusinessAccounts.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                {muxxusBusinessAccounts.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <ButtonFlip
                  btnText="Open Account"
                  link="/contact"
                  className="bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={muxxusBusinessAccounts.hero.image}
                alt="Muxxus Business Accounts"
                width={630}
                height={820}
                className="w-[630px] h-[820px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>
 {/* Client Slider */}
 <ClientSlider clients={clients?.brands} />
        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container2">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Global Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of companies already using Muxxus to scale internationally
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {muxxusBusinessAccounts.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}

   <section className="py-20 bg-gray-50">
          <div className="container2">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Every Business Type
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you&apos;re a startup or enterprise, Muxxus scales with your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {muxxusBusinessAccounts.useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* Image Section */}
       
          <div className="container2">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for Modern Business
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform is designed to scale with your business needs
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/imgs/muxxus/business-platform-overview.png"
                alt="Muxxus Business Platform Overview"
                width={800}
                height={500}
                className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
              
        {/* Service Inner Area avec les features */}
        <ServiceInnerArea
          title="Everything You Need for<br/>Global Business"
          description="Our platform provides the tools modern businesses need to operate globally"
          services={muxxusBusinessAccounts.features.map((feature, index) => ({
            data: {
              id: index + 1,
              title: feature.title,
              icon: feature.icon,
              features: feature.benefits,
              draft: false,
              bg_video: "",
              image: "",
              description: feature.description,
              contactTitle: "",
              btn_text: "",
              faq_title: "",
              faqs: []
            },
            slug: feature.url || `/service/accounts/${feature.title.toLowerCase().replace(/\s+/g, '-')}`,
            content: feature.description
          }))}
        />

     

        
       
        
        {/* About Banner */}
        <AboutBanner {...aboutBanner} />
        
        
        
        {/* Client Area */}
        <ClientArea brands={brands?.brands} />


        {/* Contact Banner */}
        <ContactBanner {...contactBanner} />
      </main>
      
      {/* Footer - Sépare du main pour éviter les conflits */}
      <div className="relative z-10 bg-gray-900">
        <MuxxusFooter />
      </div>
    </>
  );
};

export default BusinessAccountsServicePage;
