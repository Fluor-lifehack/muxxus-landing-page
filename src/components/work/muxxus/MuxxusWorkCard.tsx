import ImageComponent from "@/components/tools/ImageComponent";
import { TWorkType } from "@/types";
import Link from "next/link";

// Images disponibles dans le dossier work
const workImages = [
  "/assets/images/accueil/work/170309.jpg",
  "/assets/images/accueil/work/147306.jpg",
  "/assets/images/accueil/work/147309.jpg",
  "/assets/images/accueil/work/118091.jpg",
  "/assets/images/accueil/work/189309.jpg",
  "/assets/images/accueil/work/047309.jpg"
];

const MuxxusWorkCard = ({ data, slug }: TWorkType) => {
  const { } = data;
  
  // Sélectionner une image basée sur l'index pour éviter les doublons
  const imageIndex = Math.abs(slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % workImages.length;
  const selectedImage = workImages[imageIndex];
  return (
    <Link href={`/work/web/${slug}`}>
      <div className="group relative max-w-[380px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[880px] mr-[10px]">
        <div>
          <ImageComponent
            src={selectedImage}
            width={880}
            height={560}
            alt="web-work-img"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="invisible group-hover:visible group-hover:opacity-100 absolute w-full h-full top-0 start-0 bg-[#000000E5] flex flex-col justify-center items-center px-[45px] opacity-0 transition-all duration-900">
          <h3 className="text-[40px] uppercase text-white text-center font-bold">Muxxus</h3>
        </div>
      </div>
    </Link>
  );
};

export default MuxxusWorkCard;
