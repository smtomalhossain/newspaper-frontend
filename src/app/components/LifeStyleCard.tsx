interface LifeStyleCardProps {
    title:string;
    image:string;
}

const LifeStyleCard:React.FC<LifeStyleCardProps> = ({title, image}) => {
    return (
        <div className="w-full mb-4">
            <a href="">
                <div className="w-full ">
                    <div className="relative overflow-hidden xl:h-auto sm">
                        <img className="max-w-full min-h-full object-cover w-full h-auto align-middle border-none" src={image} alt="Your image" />
                        <h3 className="hidden caption px-[10px] py-[7px] text-white md:block ">{title}</h3>

                    </div>
                    <h3 className="bg-white px-[10px] text-gray-800 text-sm font-semibold py-2 md:hidden ">{title}</h3>


                </div>
            </a>
            

        </div>
    );
}

export default LifeStyleCard;
