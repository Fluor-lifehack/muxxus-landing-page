import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBr } from "@/lib/helper/converter";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const MuxxusFeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div
      className="feature-box has_fade_anim px-[30px] pb-[52px] xl:px-[80px] xl:pb-[72px] 2xl:px-[100px] 2xl:pb-[132px] border-e border-[#0000001F]"
      data-fade-from="left"
      data-delay="0.15"
    >
      <ImageComponent src={icon} height={60} width={98} className="w-auto" />
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

export default MuxxusFeatureCard;
