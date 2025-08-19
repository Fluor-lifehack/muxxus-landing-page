import { MuxxusSecurityFeature } from '@/components/muxxus';
import BottomSection from '@/components/elements/bottomSection/BottomSection';

export default function SecurityPage() {
  // Mock data for now - you'll need to implement proper MDX loading
  const securityFeatures = {
    title: "We secure it, You own it",
    subtitle: "SECURITY",
    description: "Our flexible solutions are designed to adapt to your specific needs without sacrificing control of your user experience. Evervault can be seamlessly integrated into your existing infrastructure, allowing you to maintain full control of your payment experience while ensuring it remains secure and compliant.",
    features: [
      {
        title: "Infinitely Customizable",
        description: "UI Components has full CSS-in-JS support, as well as three base themes to get you started.",
        icon: "/assets/imgs/icon/icon-s-24.png"
      },
      {
        title: "Cross-platform",
        description: "Evervault lets you implement payment flows across mobile, web, and APIs.",
        icon: "/assets/imgs/icon/icon-s-25.png"
      },
      {
        title: "Plug and Play",
        description: "Use Evervault with any number of third-party payment gateways, card issuers, or APIs.",
        icon: "/assets/imgs/icon/icon-s-26.png"
      },
      {
        title: "Effortlessly Scalable",
        description: "Every product auto-scales to process millions of transactions per day without affecting throughput or latency.",
        icon: "/assets/imgs/icon/icon-s-27.png"
      }
    ]
  };

  return (
    <main>
      <MuxxusSecurityFeature {...securityFeatures} />
      <BottomSection />
    </main>
  );
}
