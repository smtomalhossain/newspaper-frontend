import { GiHamburgerMenu } from "react-icons/gi";
import Menubar from "./Menubar";
import { FaCalendarAlt, FaFacebookSquare } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";


const Header = () => {
    return (
        <>
            <div className="bg-white border-b-2 border-gray-300 sticky">
                <div className="container max-w-[1260px] mx-auto px-[10px]">
                    <div className="flex flex-wrap -mx-[10px]">
                        <div className="w-full">

                            <a href="">
                                <img src="/top-add.jpg" alt="জাতীয় গণহত্যা দিবস" title="জাতীয় গণহত্যা দিবস" className="img-fluid"></img>
                            </a>

                            <nav className="flex h-[60px] justify-between p-0 duration-300 ease-[cubic-bezier(0.175,0.885,0.320,1.275)] items-center lg:flex lg:flex-nowrap lg:flex-row lg:justify-start transition-all">
                                <button className="bg-transparent text-[20px] text-black/50 text-xl w-[20px] cursor-pointer leading-none lg:hidden px-3 py-1">
                                    <span className="navbar-toggler-icon bg-100% bg-center bg-no-repeat h-6 w-6 inline-block">
                                        <GiHamburgerMenu />
                                    </span>
                                </button>
                                <div className="flex items-center justify-center mr-5 sm:w-1.5/12">
                                    <a href="https://www.risingbd.com/">
                                        <img src="/logo.webp" alt="" className="align-center border-none h-auto img-fluid max-w-full py-4">
                                        </img>
                                    </a>
                                </div>

                                <div className="justify-end text-right inline-block md:hidden ml-[15px] pr-2">
                                    <a className="align-middle bg-red-600 border border-red-600 rounded text-center text-sm text-white duration-150 ease-in-out font-medium hover:bg-red-700 hover:border-red-700 inline-block px-4 py-2 select-none transition-colors" href="">English</a>
                                </div>


                                <div className="flex-col list-none p-0 w-full hidden lg:block lg:flex-row mb-0 sm:w-10/12">
                                    <Menubar />
                                </div>

                            </nav>

                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white hidden md:block py-[6px]">
                <div className="container max-w-[1260px] mx-auto px-[10px]">
                    <div className="flex flex-wrap -mx-[10px]">
                        <div className="w-full sm:w-6/12">
                            <p className="flex text-gray-400 text-sm font-medium items-center"><MdLocationPin />&nbsp;&nbsp; ঢাকা &nbsp;&nbsp;&nbsp; <FaCalendarAlt /> &nbsp;&nbsp;শুক্রবার &nbsp; ১৪ মার্চ ২০২৫ ||&nbsp; ফাল্গুন&nbsp;২৯&nbsp;১৪৩১ </p>
                        </div>
                        <div className="w-full sm:w-5/12">
                            <ul className="flex justify-end gap-3 items-center">
                                <li><a href="https://www.risingbd.com/rss/rss.xml" target="_blank"><FaFacebookSquare className="text-2xl text-blue-500" /></a></li>
                                <li><a href="https://www.risingbd.com/rss/rss.xml" target="_blank"><FaFacebookSquare className="text-2xl text-blue-500" /></a></li>
                                <li><a href="https://www.risingbd.com/rss/rss.xml" target="_blank"><FaFacebookSquare className="text-2xl text-blue-500" /></a></li>
                                <li><a href="https://www.risingbd.com/rss/rss.xml" target="_blank"><FaFacebookSquare className="text-2xl text-blue-500" /></a></li>
                                <li><a href="https://www.risingbd.com/rss/rss.xml" target="_blank"><FaFacebookSquare className="text-2xl text-blue-500" /></a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/12">
                            <div className="justify-end text-right inline-block lg:flex ml-[15px]">
                                <a className="align-middle bg-red-600 border border-red-600 rounded text-center text-sm text-white duration-150 ease-in-out font-normal hover:bg-red-700 hover:border-red-700 inline-block px-2 py-1 select-none transition-colors" href="">English</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
