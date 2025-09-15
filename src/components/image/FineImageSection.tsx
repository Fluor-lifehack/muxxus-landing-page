"use client";

import FineImage from "./FineImage";

type Props = {
  image: {
    image?: string;
  } | null | undefined;
};

const FineImageSection = ({ image }: Props) => {
  return (
    <div className="h-[500px] w-full">
      <FineImage 
        image={image?.image || "/assets/images/accueil/diversity-people.jpg"}
        alt="Fine Design Image"
        overlay={false}
        className="h-full w-full"
      />
    </div>
  );
};

export default FineImageSection;
