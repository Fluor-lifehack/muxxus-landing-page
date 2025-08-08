import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

type FeaturedCardProps = {
  title: string;
  description: string;
  link: string;
  image?: string;
  className?: string;
};

const FeaturedCard = ({ title, description, link, image, className }: FeaturedCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 ${className}`}>
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-auto rounded-md"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Link 
        href={link}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        Learn more <FaArrowRight className="ml-1 w-3 h-3" />
      </Link>
    </div>
  );
};

export default FeaturedCard; 