import ServicesHero from "@/app/service/ServicesHero";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import ClientArea from "@/components/clients/ClientArea";
import ClientSlider from "@/components/clients/ClientSlider";
import ServiceInnerArea from "@/app/service/ServiceInnerArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import AboutBanner from "@/components/banner/AboutBanner";
import MuxxusFooter from "@/components/footer/MuxxusFooter";

const BusinessAccountsServicePage = () => {
  // Récupération des données depuis les fichiers MDX
  const { data: hero } = getMainPage("/services/main/_index.mdx");
  const { data: brands } = getMainPage("/brands/brands1.mdx");
  const { data: clients } = getMainPage("/brands/brands3.mdx");
  const services = getAllPages("services/main");
  const { data: aboutBanner } = getMainPage("/banner/about-banner.mdx");
  const { data: pricingData } = getMainPage("/pricings/main-pricing.mdx");
  const { data: contactBanner } = getMainPage("/banner/contact-banner.mdx");

  const { title, title2, description2, meta } = hero || {};

  return (
    <>
      <SeoData
        title={title || "Business Accounts - Multi-currency Global Banking"}
        meta_title={meta?.meta_title}
        description={meta?.meta_description || "Open multi-currency business accounts with real-time FX rates, instant global payments, and seamless API integration."}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <ServicesHero {...hero} />
        
        {/* Client Slider */}
        <ClientSlider clients={clients?.brands} />
        
        {/* Service Inner Area */}
        <ServiceInnerArea
          title={title2}
          description={description2}
          services={services}
        />
        
        {/* About Banner */}
        <AboutBanner {...aboutBanner} />
        
        {/* Pricing Area */}
        <PricingArea {...pricingData?.pricing} />
        
        {/* Contact Banner */}
        <ContactBanner {...contactBanner} />
        
        {/* Client Area */}
        <ClientArea brands={brands?.brands} />
      </main>
      
      {/* Footer - Sépare du main pour éviter les conflits */}
      <div className="relative z-10 bg-gray-900">
        <MuxxusFooter />
      </div>
    </>
  );
};

export default BusinessAccountsServicePage;
