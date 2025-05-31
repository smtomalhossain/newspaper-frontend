import React from 'react';

const HeaderAdd = () => {
    return (
        <div className='max-w-[1260px] px-[10px] mx-auto
            sm:max-w-[540px] sm:px-[15px]
            md:max-w-[720px]
            lg:max-w-[960px]
            xl:max-w-[1140px]'>
            <div className=''>
                <div className='flex flex-wrap -mx-[10px]'>
                    <div className='col-sm-12 min-h-[90px] mt-8'>
                        <img src="/header-add.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdd;
