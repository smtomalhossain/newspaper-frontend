import React from 'react';
import HeaderAdd from '../components/HeaderAdd';
import { FaHome } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaPencil } from 'react-icons/fa6';
import { LuClock4 } from 'react-icons/lu';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='bg-gray-100'>
      <header className="flex justify-center">
        <HeaderAdd />
      </header>
      <main className='h-auto !important bg-gray-100'>
        <div className='container'>
          {/* Content goes here */}
          <section className='h-auto !important'>
            <div className='row'>
              {/* Main content (8 columns on lg, 12 on others) */}
              <div className="w-full sm:w-full md:w-full px-2.5 lg:w-2/3 print:w-full">
                <div className=' row d-print-none '>
                  <div className='w-full px-2.5 sm:w-full lg:w-full'>
                    <ol className='bg-white mb-0 border-b border-r flex gap-2 items-center border-gray-300 rounded-sm py-[5px] px-[10px] mt-[10px]'>
                      <li>
                        <a className='text-[#717171] text-[14px] flex gap-2 items-center' href="">
                          <FaHome />
                          হোম
                          <MdOutlineKeyboardDoubleArrowRight />
                        </a>
                      </li>
                      <li className=''>
                        <a className='text-[#717171] text-[14px]' href="https://www.risingbd.com/education"> শিক্ষা </a>
                      </li>
                    </ol>
                  </div>

                </div>
                <article className='bg-white mt-5'>
                  <div className=''>
                    <div className='relative w-full px-2.5 sm:flex-none lg:w-full sm:w-full sm:max-w-full'>
                      <h1 className='p-[10px] lg:text-[1.5em] text-[1.3em] font-bold border-b-1 border-[#cbced2] '>
                        শনিবার স্কুল খোলা থাকার খবর ভিত্তিহীন: মাউশি</h1>
                    </div>
                    <div className='row'>
                      <div className='relative w-full px-2.5 sm:w-7/12'>
                        <div className='py-[5px] px-[10px] '>
                          <p className='text-[#337ab7] text-[15px] mb-0 ml-2 leading-[22px] px-2.5  flex items-center gap-2'>
                            <FaPencil className='' />
                            <a className='text-[#337ab7]  text-[15px] mb-0 leading-[22px] ' href="">
                              প্রতিবেদক
                            </a>
                            ||
                            <span className='text-[#939393] text-[15px] italic'> রাইজিংবিডি.কম</span>
                          </p>
                        </div>
                        <div className="pb-[5px] px-2.5 ml-2 flex items-center gap-2">
                          <LuClock4 className="text-gray-400 text-xl shrink-0 ml-2" />
                          <span className="lg:text-[14px] text-[10px] text-[#939393] whitespace-nowrap">
                            প্রকাশিত: ২৩:০১, ২৮ জুলাই ২০২৫ | আপডেট: ২৩:২৭, ২৮ জুলাই ২০২৫
                          </span>
                        </div>
                      </div>

                      <div className="w-full px-2.5">
                        <div className="w-full">
                          <Image
                            height={250}
                            width={400}
                            src="/India-Pakistan.webp"
                            alt="ভারত-পাকিস্তান দ্বৈরথ নিয়ে মুখ খুললেন সৌরভ গাঙ্গুলী"
                            title="ভারত-পাকিস্তান দ্বৈরথ নিয়ে মুখ খুললেন সৌরভ গাঙ্গুলী"
                            className="w-full max-w-full h-auto border-1"
                          />
                          <p className=""></p>
                        </div>
                      </div>

                      <div id="content-details" className="space-y-4 px-8  py-4">
                        {/* Main content paragraphs */}
                        <p className="text-justify">
                          ক্রিকেট মানেই আবেগ, আর ভারত-পাকিস্তান দ্বৈরথ হলে তো কথাই নেই। রাজনৈতিক বৈরিতা ও অতীতের নানা ঘটনার কারণে দুই দেশের মুখোমুখি হওয়া আজকাল হয়ে দাঁড়িয়েছে দুষ্কর। তবে আসন্ন এশিয়া কাপকে ঘিরে আবারও সেই উত্তেজনার আগুন জ্বলে উঠেছে। এবার সেই আগুনে ঘি ঢাললেন ভারতের সাবেক অধিনায়ক ও বিসিসিআইয়ের সাবেক সভাপতি সৌরভ গাঙ্গুলী।
                        </p>

                        {/* Google News Banner */}
                        <div className="text-center print:hidden">
                          <a href="https://bit.ly/risingbdgooglenews">
                            <Image height={100} width={200}
                              src="https://www.risingbd.com/media/common/Follow-google-news.gif"
                              alt="Follow on Google News"
                              className="mx-auto w-[200px] h-auto"
                            />
                          </a>
                        </div>

                        {/* More content paragraphs */}
                        <p className="text-justify">
                          আগামী ৯ সেপ্টেম্বর থেকে সংযুক্ত আরব আমিরাতে শুরু হচ্ছে আট দলের এশিয়া কাপ। ভারত ও পাকিস্তান পড়েছে একই গ্রুপে। তবে সম্প্রতি পহেলগাঁওয়ে জঙ্গি হামলার পর ভারতীয় দলের পাকিস্তানের বিরুদ্ধে খেলবে কিনা, তা নিয়ে তৈরি হয় ধোঁয়াশা। যদিও বিসিসিআই ইতোমধ্যে জানিয়ে দিয়েছে— তারা খেলবে, তবে নিরপেক্ষ ভেন্যুতে।
                        </p>

                        <p className="text-justify">
                          সেই প্রেক্ষিতেই সৌরভ গাঙ্গুলী জানান, খেলাধুলা বন্ধ হওয়া উচিত নয়, বরং তার মাধ্যমে এগিয়ে যেতে হবে। প্রিন্স অব ক্যালকাটা বলেন, আমি পহেলগাঁওয়ে সন্ত্রাসী হামলার নিন্দা জানাই। তবে এমন ঘটনার কারণে খেলাধুলা বন্ধ হয়ে যাওয়া উচিত নয়। ভারত সবসময় সন্ত্রাসের বিরুদ্ধে দৃঢ় অবস্থান নিয়েছে। আশা করি খেলাধুলার মাঠে শান্তিপূর্ণ লড়াই অব্যাহত থাকবে। ভারত-পাকিস্তান ম্যাচ হওয়া উচিত।
                        </p>

                        {/* Related articles section */}
                        <div className="print:hidden">
                          <p className="font-semibold mb-4">আরো পড়ুন:</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Article 1 */}
                            <div className="bg-white rounded shadow overflow-hidden">
                              <a href="https://www.risingbd.com/sports/news/615549" className="block">
                                <div className="flex flex-col md:flex-row">
                                  <div className="md:w-1/3">
                                    <Image 
                                      src="https://cdn.risingbd.com/media/imgAll/2025July/SM/Hongkong-2507281450-thumb.jpg"
                                      alt="এশিয়া কাপের আগে হংকং দলে নতুন চমক"
                                      className="w-full h-auto object-cover"
                                      height={100}
                                      width={200}
                                    />
                                  </div>
                                  <div className="md:w-2/3 p-3">
                                    <p className="text-lg font-bold text-orange-700 leading-tight">এশিয়া কাপের আগে হংকং দলে নতুন চমক</p>
                                  </div>
                                </div>
                              </a>
                            </div>

                            {/* Article 2 */}
                            <div className="bg-white rounded shadow overflow-hidden">
                              <a href="https://www.risingbd.com/sports/news/615527" className="block">
                                <div className="flex flex-col md:flex-row">
                                  <div className="md:w-1/3">
                                    <Image 
                                      src="https://cdn.risingbd.com/media/imgAll/2025July/SM/England-Team-2507281238-thumb.jpg"
                                      alt="ওভাল টেস্টের ইংল্যান্ড দল ঘোষণা, ওভারটনের প্রত্যাবর্তন"
                                      className="w-full h-auto object-cover"
                                      height={100}
                                      width={200}
                                    />
                                  </div>
                                  <div className="md:w-2/3 p-3">
                                    <p className="text-lg font-bold text-orange-700 leading-tight">ওভাল টেস্টের ইংল্যান্ড দল ঘোষণা, ওভারটনের প্রত্যাবর্তন</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* More content paragraphs */}
                        <p className="text-justify">
                          উল্লেখ্য, কিছুদিন আগে ওয়ার্ল্ড চ্যাম্পিয়নশিপ অফ লেজেন্ডস টুর্নামেন্টে পাকিস্তানের বিরুদ্ধে খেলতে নামেনি ভারতীয় দল। এরপর পাকিস্তানের সাবেক ক্রিকেটার শাহিদ আফ্রিদি কটাক্ষ করে বলেছিলেন— ভারত ভয় পাচ্ছে! তবে এশিয়া কাপের ভেন্যু নিয়ে এখন আর কোনো দ্বিধা নেই। মরুর দেশ সংযুক্ত আরব আমিরাতেই বসছে এবারের আসর।
                        </p>

                        {/* Ad banner */}
                        <div className="text-center print:hidden">
                          <div className="mx-auto w-full max-w-[728px] h-[90px] bg-gray-200 flex items-center justify-center">
                            [Advertisement Space]
                          </div>
                        </div>

                        {/* Final content paragraph */}
                        <p className="text-justify">
                          দুই গ্রুপে ভাগ হয়ে হবে এবারের লড়াই। গ্রুপ এ তে আছে ভারত, পাকিস্তান, আমিরাত ও ওমান। গ্রুপ  তে লড়বে বাংলাদেশ, শ্রীলঙ্কা, আফগানিস্তান ও হংকং। আয়োজক দেশ হিসেবে ভারত থাকলেও, নিরপেক্ষ ভেন্যুতে খেলবে তারা— বিসিসিআই ও পিসিবির চুক্তি অনুযায়ী।
                        </p>

                        {/* Final ad banner */}
                        <div className="text-center print:hidden">
                          <div className="mx-auto w-full max-w-[728px] h-[90px] bg-gray-200 flex items-center justify-center">
                            [Advertisement Space]
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar (4 columns on lg, 12 on others, hidden when printing) */}
              <div className="w-full sm:w-full md:w-full lg:w-1/3 print:hidden">
                <div className="container">
                  <div className="mt-7 lg:mt-0">
                    <div className="row">
                      <div className="w-full relative px-[10px]">
                        <div className="flex justify-center">
                          <Image width={350} height={250} src="/350-250-add-1.jpeg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="row">
                      <div className="w-full relative px-[10px]">
                        <div className="flex justify-center">
                          <Image width={350} height={250} src="/side-add-350gif.gif" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Latest News */}
                  <div className="border-gray-300 border-l block mb-0 mt-5">

                    <div>
                      <ul className="flex flex-wrap list-none bg-white border-[#dee2e6] border-b border-none text-black mb-0 mt-0 pl-0"
                      >
                        <li
                          className={`list-item float-left w-full box-border mb-[-1px]`}
                        >
                          <a
                            className="flex border-[#C4161C] border-none bg-gray-500 border-t-2 justify-center rounded-none text-white font-bold text-[18px] text-center px-[10px] py-[8px]"
                            data-toggle="tab"
                            href="#tabs-1"
                            role="tab"
                            
                          >
                            সর্বশেষ
                          </a>
                        </li>

                        
                      </ul>
                    </div>

                    <div className="custom-scrollbar max-h-[400px] overflow-auto overflow-x-hidden"
                    >
                      <ul className="list-disc m-0 p-0 w-[99.7%]">
                        <li className="flex bg-white border-[#ccc] border-b p-2 text-[1em] hover:bg-gray-100 leading-[24px]"
                        >
                          <div className="overflow-hidden">
                            <a href="flex flex-wrap">
                              <div className="flex flex-wrap -ml-2 -mr-2">
                                <div className="grid grid-cols-12 gap-2 mb-[2px]">
                                  <div className="col-span-4 w-full">
                                    <div className=" w-full relative xl:h-auto">
                                      <Image
                                        className="align-middle w-full img-fluid max-w-full min-h-full object-cover"
                                        src="/latest-news-1.jpg"
                                        alt=""
                                        width={100}
                                        height={75}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-span-8 w-full">
                                    <h3 className="text-[15px] font-[SolaimanLipi],font-[SiyamRupali],font-[Vrinda] leading-[22px] mb-0">খুঁড়িয়ে খুঁড়িয়ে চলছেন ব্যাটসম্যানরা!</h3>
                                  </div>
                                </div>

                              </div>
                            </a>
                          </div>
                        </li>


                      </ul>


                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page;
