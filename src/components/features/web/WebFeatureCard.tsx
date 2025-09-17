
import { convertWithBr } from "@/lib/helper/converter";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const WebFeatureCard = ({ title, description }: Props) => {
  // Fonction pour obtenir le SVG approprié selon le titre
  const getSecurityIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('data') || lowerTitle.includes('protection')) {
      return (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    }
    
    if (lowerTitle.includes('access') || lowerTitle.includes('control')) {
      return (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      );
    }
    
    if (lowerTitle.includes('compliance') || lowerTitle.includes('standards')) {
      return (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    // Icône par défaut (bouclier de sécurité)
    return (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  };

  return (
    <div
      className="feature-box has_fade_anim px-[30px] pb-[52px] xl:px-[80px] xl:pb-[72px] 2xl:px-[100px] 2xl:pb-[132px] border-e border-white/20"
      data-fade-from="left"
      data-delay="0.15"
    >
      <div className="w-auto">
        {getSecurityIcon(title)}
      </div>
      <div className="mt-[38px] xl:mt-[48px]">
        <h3
          className="text-[28px] xl:text-[36px] leading-[.88] font-semibold uppercase text-white"
          dangerouslySetInnerHTML={convertWithBr(title)}
        />
        <p className="mt-[19px] text-white">{description}</p>
      </div>
    </div>
  );
};

export default WebFeatureCard;
