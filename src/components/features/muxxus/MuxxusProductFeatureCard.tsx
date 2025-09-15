import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBrSpan } from "@/lib/helper/converter";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const MuxxusProductFeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div>
      <div>
        <ImageComponent width={60} height={60} src={icon} alt="icon" />
      </div>
      <div className="mt-[30px] md:mt-[44px]">
        <h2
          className="text-white text-[26px] leading-[1.1] font-semibold"
          dangerouslySetInnerHTML={convertWithBrSpan(title)}
        />
        <p className="mt-[18px] 2xl:mt-[28px] text-gray-300 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default MuxxusProductFeatureCard;
