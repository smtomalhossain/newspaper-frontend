import Image from 'next/image';
import React from 'react';

const HeaderAdd = () => {
    return (
        <div className='max-w-[1260px] px-[10px] mx-auto lg:mt-8 mt-20  mb-5'>
            <div className=''>
                <div className='flex flex-wrap -mx-[10px]'>
                    <div className='w-full min-h-[90px] '>
                        <Image width={2400} height={0} className='w-full h-auto hidden lg:block' src="/header-add.gif" alt="" />
                        <Image width={2400} height={400} className='w-full h-auto block lg:hidden' src="/mobile-bannar.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdd;
