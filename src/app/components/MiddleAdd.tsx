import Image from "next/image";

const MiddleAdd = () => {
    return (
        <div className='max-w-[1260px] px-[10px] '>
            <div className=''>
                <div className='flex flex-wrap -mx-[10px]'>
                    <div className='col-sm-12 min-h-[90px] mt-6 mb-6'>
                        <Image width={2400} height={600} className='w-full h-auto'  src="/middel-add.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleAdd;
