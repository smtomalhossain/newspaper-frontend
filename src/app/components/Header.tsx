import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendarAlt, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

import Image from "next/image";
import dayjs from "dayjs";
import Menubar from "./Menubar";
import { AiFillTikTok } from "react-icons/ai";

// English to Bangla month mapping
const englishToBanglaMonth: { [key: string]: string } = {
  January: "জানুয়ারি",
  February: "ফেব্রুয়ারি",
  March: "মার্চ",
  April: "এপ্রিল",
  May: "মে",
  June: "জুন",
  July: "জুলাই",
  August: "আগস্ট",
  September: "সেপ্টেম্বর",
  October: "অক্টোবর",
  November: "নভেম্বর",
  December: "ডিসেম্বর",
};

// Bangla weekdays
const banglaWeekdays = [
  "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"
];

// Convert English digits to Bangla digits
const toBanglaDigits = (numberStr: string) => {
  const enToBnDigits: { [key: string]: string } = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
  };
  return numberStr.replace(/\d/g, d => enToBnDigits[d]);
};

const Header = () => {
  const now = dayjs();

  const weekdayBn = banglaWeekdays[now.day()];
  const dayBn = toBanglaDigits(now.format('DD'));
  const englishMonth = now.format('MMMM');
  const monthBn = englishToBanglaMonth[englishMonth];
  const yearBn = toBanglaDigits(now.format('YYYY'));

  const banglaDate = `${weekdayBn}, ${dayBn} ${monthBn} ${yearBn}`;

  // Manually add Bengali date part (e.g. ফাল্গুন ৩০ ১৪৩১)
  const bengaliCalendarPart = "ফাল্গুন ৩০ ১৪৩১"; // Replace with dynamic logic if needed

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[999] bg-white border-b border-gray-300 h-[60px] flex items-center px-[10px]">
        <div className="container max-w-[1260px] mx-auto flex items-center justify-between">
          <button className="lg:hidden text-2xl text-gray-500">
            <GiHamburgerMenu />
          </button>
          <div className="flex items-center mr-5">
            <a href="https://www.risingbd.com/">
              <Image width={100} height={50} src="/logo.webp" alt="Logo" />
            </a>
          </div>
          <div className="block md:hidden">
            <a
              href="#"
              className="bg-red-600 border border-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700 hover:border-red-700"
            >
              English
            </a>
          </div>
          <div className="hidden lg:flex flex-grow justify-end">
            <Menubar />
          </div>
        </div>
      </nav>

      {/* Info Row Below Navbar */}
      <div className="bg-white hidden md:block py-[6px] mt-[60px]">
        <div className="container max-w-[1260px] mx-auto px-[10px]">
          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-6/12 text-sm text-gray-500 font-medium flex items-center gap-2">
              <MdLocationPin />
              <span>ঢাকা</span>
              <FaCalendarAlt />
              <span>{banglaDate} || {bengaliCalendarPart}</span>
            </div>
            <div className="w-full sm:w-5/12 flex justify-end gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookSquare className="text-2xl text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagramSquare className="text-2xl text-pink-500" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutubeSquare className="text-2xl text-red-600" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <FaTwitterSquare className="text-2xl text-black" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <AiFillTikTok className="text-2xl text-black" />
              </a>
            </div>
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

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* Other content */}
    </div>
  );
}
