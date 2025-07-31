import { GiHamburgerMenu } from "react-icons/gi";
import Menubar from "./Menubar";
import { FaCalendarAlt, FaFacebookSquare } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* Top Advertisement Banner */}
      {/* <div className="bg-white border-b-2 border-gray-300">
        <div className="container max-w-[1260px] mx-auto px-[10px]">
          <a href="#">
            <img
              src="/top-add.jpg"
              alt="জাতীয় গণহত্যা দিবস"
              title="জাতীয় গণহত্যা দিবস"
              className="w-full h-auto"
            />
          </a>
        </div>
      </div> */}

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[999] bg-white border-b-1 border-gray-300 h-[60px] flex items-center px-[10px]">
        <div className="container max-w-[1260px] mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-2xl text-gray-500">
            <GiHamburgerMenu />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <a href="https://www.risingbd.com/">
              <Image width={50} height={50} src="/logo.webp" alt="Logo" className="h-[50px] py-2" />
            </a>
          </div>

          {/* Language Button (Mobile Only) */}
          <div className="block md:hidden">
            <a
              href="#"
              className="bg-red-600 border border-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700 hover:border-red-700"
            >
              English
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-grow justify-end">
            <Menubar />
          </div>
        </div>
      </nav>

      {/* Info Row Below Navbar */}
      <div className="bg-white hidden md:block py-[6px] mt-[60px]">
        <div className="container max-w-[1260px] mx-auto px-[10px]">
          <div className="flex flex-wrap items-center">
            {/* Location and Date */}
            <div className="w-full sm:w-6/12 text-sm text-gray-500 font-medium flex items-center gap-2">
              <MdLocationPin />
              ঢাকা
              <FaCalendarAlt />
              শুক্রবার, ১৪ মার্চ ২০২৫ || ফাল্গুন ২৯ ১৪৩১
            </div>

            {/* Social Icons */}
            <div className="w-full sm:w-5/12 flex justify-end gap-3">
              {[...Array(4)].map((_, index) => (
                <a
                  key={index}
                  href="https://www.risingbd.com/rss/rss.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className="text-2xl text-blue-500" />
                </a>
              ))}
            </div>

            {/* Language Button (Desktop) */}
            <div className="w-full sm:w-1/12 flex justify-end">
              <a
                href="#"
                className="bg-red-600 border border-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700 hover:border-red-700"
              >
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
