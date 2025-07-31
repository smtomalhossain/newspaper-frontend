import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4">
      <div className="container mx-auto py-10 flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo & About */}
        <div className="lg:w-1/3">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center rounded-full text-white font-bold text-xl">
              NS
            </div>
            <span className="text-2xl font-semibold">NotunShokal</span>
          </div>
          <p className="text-sm text-gray-400">
            নির্ভরযোগ্য ও সর্বশেষ সংবাদ, ২৪ ঘণ্টা আপডেটেড। সংবাদ পড়ুন সহজেই, বিশ্বজুড়ে প্রতিটি খবর একসাথে।
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="uppercase font-semibold mb-3">সেকশন</h3>
            <ul className="space-y-2">
              <li><a href="#">জাতীয়</a></li>
              <li><a href="#">আন্তর্জাতিক</a></li>
              <li><a href="#">খেলা</a></li>
              <li><a href="#">বিনোদন</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold mb-3">তথ্য</h3>
            <ul className="space-y-2">
              <li><a href="#">আমাদের সম্পর্কে</a></li>
              <li><a href="#">যোগাযোগ</a></li>
              <li><a href="#">গোপনীয়তা নীতি</a></li>
              <li><a href="#">শর্তাবলী</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold mb-3">সার্ভিস</h3>
            <ul className="space-y-2">
              <li><a href="#">নোটিফিকেশন</a></li>
              <li><a href="#">রিপোর্ট জমা দিন</a></li>
              <li><a href="#">যোগদান করুন</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="uppercase font-semibold mb-3">সোশ্যাল মিডিয়া</h3>
            <div className="flex items-center gap-3 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="hover:text-blue-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="hover:text-red-600" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter className="hover:text-gray-400" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 text-gray-500 border-t border-gray-700">
        © ২০২৫ নিউজপোর্টাল. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
