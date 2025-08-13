import { MuxxusSecurityFeature } from '@/components/muxxus';
import securityFeatures from '@/content/features/security-features.mdx';
import BottomSection from '@/components/elements/bottomSection/BottomSection';

export default function SecurityPage() {
  return (
    <main>
      <MuxxusSecurityFeature {...securityFeatures} />
      <BottomSection />
    </main>
  );
}
