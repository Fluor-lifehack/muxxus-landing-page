import { TServiceType } from "@/types";
import ImageComponent from "@/components/tools/ImageComponent";
import Link from "next/link";
import ButtonFlip from "@/components/elements/button/ButtonFlip";

type Props = {
  service: TServiceType;
};

const ServiceInnerCard = ({ service }: Props) => {
  const { icon, title, features } = service?.data;

  return (
    <div className="px-[30px] xl:px-[70px] border-s border-[#ECE7E4] dark:border-[#252525]">
      <div className="pb-[25px] xl:pb-12">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <ImageComponent
            src={typeof icon === "object" ? icon?.dark : icon}
            darkSrc={typeof icon === "object" ? icon?.light : icon}
            width={64}
            height={64}
            alt={`${title} icon`}
            className="object-contain"
          />
        </div>
      </div>
      <Link href={`/service/${service?.slug}`}>
        <h2 
          className="text-[24px] xl:text-[30px] pb-[25px] leading-[1.08]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Link>
      <ul className="list-disc list-inside mb-6">
        {features.map((item, index) => (
          <li
            className="text-[18px] text-text-3 font-light pb-[15px] "
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      
      {/* Boutons d'appel à l'action */}
      <div className="flex flex-col gap-3 pb-6">
        <ButtonFlip
          btnText="Learn More"
          link={`/service/${service?.slug}`}
          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm py-3 px-6"
        />
      </div>
    </div>
  );
};

export default ServiceInnerCard;
