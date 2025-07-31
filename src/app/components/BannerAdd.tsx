import Image from "next/image";

const BannerAdd = () => {
    return (
        <div className="max-w-[1260px] px-[10px] ">
            <div className="row">
                <div className="mt-2">
                    <div className="w-full sm:w-full">
                        <Image width={2400} height={600} className="w-full h-auto" src="/banner-add.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerAdd;
