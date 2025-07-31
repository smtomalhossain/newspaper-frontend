import Image from "next/image";

interface LifeStyleCardProps {
  title: string;
  image: string;
}

const LifeStyleCard: React.FC<LifeStyleCardProps> = ({ title, image }) => {
  return (
    <div className="w-full mb-4">
      <a href="#">
        <div className="w-full">
          <div className="relative overflow-hidden xl:h-auto">
            <Image
              width={500}
              height={300}
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
              layout="responsive"
            />
            <h3 className="hidden caption px-[10px] py-[7px] text-white md:block">
              {title}
            </h3>
          </div>
          <h3 className="bg-white px-[10px] text-gray-800 text-sm font-semibold py-2 md:hidden">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default LifeStyleCard;
