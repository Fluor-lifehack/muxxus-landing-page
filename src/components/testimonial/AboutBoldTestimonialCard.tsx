import ImageComponent from "../tools/ImageComponent";

type Props = {
  quote: string;
  icon: string;
  author: string;
  designation: string;
  avatar: string;
};

const AboutBoldTestimonialCard = ({
  quote,
  icon,
  author,
  designation,
  avatar,
}: Props) => {
  return (
    <div className="text-center">
      <div>
        {/* Icône de citation */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <ImageComponent 
              src={icon} 
              width={24} 
              height={24} 
              alt="Quote icon" 
              className="w-6 h-6"
            />
          </div>
        </div>
        
        {/* Citation */}
        <div className="mb-10">
          <p className="text-[18px] md:text-[22px] xl:text-[24px] 2xl:text-[30px] font-light leading-[1.38] text-text max-w-4xl mx-auto">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        
        {/* Auteur et avatar */}
        <div className="flex gap-4 items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
            <ImageComponent 
              src={avatar} 
              width={64} 
              height={64} 
              alt={`${author} avatar`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-[20px] 2xl:text-[24px] leading-none font-semibold text-text">
              {author}
            </h3>
            <p className="text-[16px] font-medium text-text-3 mt-2">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoldTestimonialCard;
