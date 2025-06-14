const TopHitTags = () => {
    return (
        <div className="bg-white text-center">
            <div className="w-full max-w-[1260px] px-[10px] mx-auto
            sm:max-w-[540px] sm:px-[15px]
            md:max-w-[720px]">
                <div className="p-1">
                    <ul className="list-inline mb-0 pl-0 list-none">
                        ট্রেন্ডিং:&nbsp;
                        <li className="list-inline-item inline-block p-[3px_10px] border border-[#B81117] rounded-[15px] text-[#333] mr-2 hover:bg-gray-200">
                            <a className="text-[14px] text-[#333]  " href="">বলিউড</a>
                        </li>
                        <li className="list-inline-item inline-block p-[3px_10px] border border-[#B81117] rounded-[15px] text-[#333] mr-2 hover:bg-gray-200">
                            <a className="text-[14px] text-[#333]" href="">রোহিঙ্গা</a>
                        </li>
                        <li className="list-inline-item inline-block p-[3px_10px] border border-[#B81117] rounded-[15px] text-[#333] mr-2 hover:bg-gray-200">
                            <a className="text-[14px] text-[#333]" href="">ঈদ পোশাক</a>
                        </li>
                        <li className="list-inline-item inline-block p-[3px_10px] border border-[#B81117] rounded-[15px] text-[#333] mr-2 hover:bg-gray-200">
                            <a className="text-[14px] text-[#333]" href="">ভূমিকম্প</a>
                        </li>
                        <li className="list-inline-item inline-block p-[3px_10px] border border-[#B81117] rounded-[15px] text-[#333] mr-2 hover:bg-gray-200">
                            <a className="text-[14px] text-[#333]" href="">মেসি</a>
                        </li>
                        <li className="list-inline-item inline-block p-[3px_10px] border border-[#B81117] rounded-[15px] text-[#333] mr-2 hover:bg-gray-200">
                            <a className="text-[14px] text-[#333]" href="">ক্রিকেট</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopHitTags;
