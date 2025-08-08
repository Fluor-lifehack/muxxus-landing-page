import WalletSection from "../walletSection/WalletSection";
import CorporateCardsSection from "../corporateCardsSection/CorporateCardsSection";
import IntegrationsSection from "../integrationsSection/IntegrationsSection";

const BottomSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WalletSection />
          <CorporateCardsSection />
          <IntegrationsSection />
        </div>
      </div>
    </section>
  );
};

export default BottomSection; 