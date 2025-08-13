"use client";

import FineImage from "./FineImage";

type Props = {
  image: any;
};

const FineImageSection = ({ image }: Props) => {
  return (
    <div className="h-[500px] w-full">
      <FineImage 
        image={image?.image || "/assets/imgs/muxxus/about/img.jpg"}
        alt="Fine Design Image"
        overlay={false}
        className="h-[500px] w-full"
      />
    </div>
  );
};

export default FineImageSection;
