"use client"
import { FaRegClock } from "react-icons/fa";
import HeaderAdd from "./components/HeaderAdd";
import TopHitTags from "./components/TopHitTags";
import { useState } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import LifeStyleCard from "./components/LifeStyleCard";
import { entertainmentData, lifeStyleData } from "@/lib/data";
import MiddleAdd from "./components/MiddleAdd";
import BannerAdd from "./components/BannerAdd";
import Image from "next/image";

export default function Home() {

  const [activeTab, setActiveTab] = useState("tabs-1");
  return (
    <>
      <div className="bg-gray-100">
        <header className="flex justify-center">
          <HeaderAdd />
        </header>
        <main className="bg-gray-100">
          <div className="">
            <TopHitTags />
          </div>


          {/* First Grid Style */}
          <div className="container">
            <div className="flex flex-wrap -ml-2.5 -mr-2.5">
              {/* First Column (44%) */}
              <div className="flex-none w-full lg:max-w-[44%] lg:w-1/2 md:w-1/2 px-2.5 sm:w-full">
                <div className="mt-4">
                  <div className="w-full sm:w-full">
                    <a href="${id}" className="block relative">
                      <div className="h-auto overflow-hidden relative xl:h-auto">
                        <Image height={250} width={400} className="h-auto w-full max-w-full object-cover" src="/top-news-1.jpg" alt="" />
                        <div className="bg-gradient-to-b p-[20px_10px_8px_10px] w-full absolute bottom-0 caption from-[rgba(0,0,0,0.02)] to-[rgb(0,0,0)]">
                          <h3 className=" text-2xl text-white font-bold leading-[35px]">‘ধর্ষণের সংজ্ঞায় পরিবর্তনসহ আইনে বেশ কিছু সংশোধনী আসছে: আসিফ নজরুল</h3>
                        </div>
                      </div>

                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="bg-white w-full mt-5 flex flex-col h-full">
                    <a href="#" className="flex flex-col flex-grow">
                      <div className="h-[100px] overflow-hidden relative xl:h-auto">
                        <Image
                          height={50}
                          width={100}
                          className="h-auto w-full max-w-full min-h-full object-cover"
                          src="/news1.jpg"
                          alt=""
                        />
                      </div>
                      <h3 className="p-[5px_8px] text-[1.0em] font-bold leading-[25px]">
                        এবার এসএসসি-সমমানে পরীক্ষার্থী ১৯ লাখ ২৮ হাজার, কমেছে প্রায় ১ লাখ
                      </h3>
                    </a>

                    <div className="border-t border-[#eee] pb-[2px] px-[6px] pt-[1px] mt-auto">
                      <div className="flex justify-between items-center">
                        <div className="text-left">
                          <a
                            className="flex text-[#333] text-[12px] gap-1 items-center leading-[28px]"
                            href="#"
                          >
                            <span className="text-black font-bold">|</span> আইন ও অপরাধ
                          </a>
                        </div>
                        <div className="hidden text-right lg:block">
                          <p className="flex text-[#646464] text-[13px] gap-1 items-center leading-[28px]">
                            <FaRegClock /> ৩ ঘণ্টা আগে
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white w-full mt-5 flex flex-col h-full">
                    <a href="#" className="flex flex-col flex-grow">
                      <div className="h-[100px] overflow-hidden relative xl:h-auto">
                        <Image
                          height={50}
                          width={100}
                          className="h-auto w-full max-w-full min-h-full object-cover"
                          src="/news1.jpg"
                          alt=""
                        />
                      </div>
                      <h3 className="p-[5px_8px] text-[1.0em] font-bold leading-[25px]">
                        এবার এসএসসি-সমমানে পরীক্ষার্থী ১৯ লাখ ২৮, 
                      </h3>
                    </a>

                    <div className="border-t border-[#eee] pb-[2px] px-[6px] pt-[1px] mt-auto">
                      <div className="flex justify-between items-center">
                        <div className="text-left">
                          <a
                            className="flex text-[#333] text-[12px] gap-1 items-center leading-[28px]"
                            href="#"
                          >
                            <span className="text-black font-bold">|</span> আইন ও অপরাধ
                          </a>
                        </div>
                        <div className="hidden text-right lg:block">
                          <p className="flex text-[#646464] text-[13px] gap-1 items-center leading-[28px]">
                            <FaRegClock /> ৩ ঘণ্টা আগে
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* Second Column (26%) */}
              <div className="w-full lg:max-w-[26%] md:w-full px-2.5 mt-5">
                <div className="bg-white p-[6px_6px_2px] shadow-md block mt-[17px] mt-2">
                  <a href="" className="flex flex-wrap">
                    <div className="grid grid-cols-12">
                      {/* First Column (lg: 5, md: 3, sm: 4) */}
                      <div className="col-span-4 lg:col-span-5 md:col-span-3 pr-[7px]">
                        {/* Content Here */}
                        <div className="w-full lg:h-auto mb-[5px] overflow-hidden relative">
                          <Image
                            className="align-middle border-0 w-full max-w-full min-h-full object-cover"
                            src="/second-row-new-1.jpg"
                            alt=""
                            width={100}
                            height={75}
                          />
                        </div>
                      </div>

                      {/* Second Column (lg: 7, md: 9, sm: 8) */}
                      <div className="col-span-8 lg:col-span-7 md:col-span-9">
                        {/* Content Here */}
                        <h3 className="text-[1em] font-[SolaimanLipi, font-bold leading-[24px] max-h-[75px] overflow-hidden pl-[1px]">২৮৬ দিন পর পৃথিবীতে ফিরলেন সুনীতা উইলিয়ামস</h3>
                      </div>
                    </div>

                  </a>

                  <div className="border-[#eee] border-t pb-[2px] pl-[6px] pr-[6px] pt-[1px]">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <a className="flex text-[#333] text-[12px] gap-1 items-center leading-[28px]" href="#">
                          <span className="text-[1em] text-black font-bold">|</span> আইন ও অপরাধ
                        </a>

                      </div>
                      <div className="text-right">
                        <p className="flex h-auto p-0 text-[#646464] text-[13px] font-normal gap-1 items-center leading-[28px]">
                          <FaRegClock />
                          ৩ ঘণ্টা আগে
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Column (30%) */}
              <div className="flex-none w-full lg:max-w-[30%] md:w-full px-2.5 sm:w-full">
                <div className="mt-5"
                  style={{
                    backgroundImage: "linear-gradient(to right top, #c48801, #c87210, #c95c20, #c5452d, #bd2d39, #bb1e45, #b60d52, #ae005e, #aa0072, #9e008a, #8200a7, #4603c6)"
                  }}>
                  <p className="border-b-[1px] border-b-white p-1 text-[16px] text-center text-white leading-[22px] mb-1 px-4 py-2">
                    <a href="">সাহরি ও ইফতারের সময়সূচি</a>
                  </p>
                  <div className="text-[15px] text-center text-white w-full block overflow-x-auto">
                    <table className="table border-collapse text-[#212529] w-full mb-2">
                      <tbody className="text-white mb-0">
                        <tr className="">
                          <td className="border-b-white border-r-[1px]">১৯ রমজান</td>
                          <td>সাহরির শেষ সময়: ০৪:৪৬ মিনিট</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Latest News */}
                <div className="border-gray-300 border-l block mb-0 mt-5">

                  <div>
                    <ul className="flex flex-wrap list-none bg-white border-[#dee2e6] border-b border-none text-black mb-0 mt-0 pl-0"
                    >
                      <li
                        className={`list-item float-left w-1/2 box-border mb-[-1px] ${activeTab === "tabs-1" ? "bg-gray-200" : ""
                          }`}
                      >
                        <a
                          className="flex border-[#C4161C] border-none border-t-2 justify-center rounded-none text-[#C4161C] text-[18px] text-center px-[10px] py-[8px]"
                          data-toggle="tab"
                          href="#tabs-1"
                          role="tab"
                          onClick={() => setActiveTab("tabs-1")}
                        >
                          সর্বশেষ
                        </a>
                      </li>

                      <li
                        className={`float-left w-1/2 mb-[-1px] ${activeTab === "tabs-2" ? "bg-gray-200" : ""
                          }`}
                      >
                        <a
                          className="flex border-[#C4161C] border-none border-t-2 justify-center rounded-none text-[#C4161C] text-[18px] text-center px-[10px] py-[8px]"
                          data-toggle="tab"
                          href="#tabs-2"
                          role="tab"
                          onClick={() => setActiveTab("tabs-2")}
                        >
                          জনপ্রিয়
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

                  <div className="">
                    <a className="flex bg-[#D2D2D2] border-none justify-center p-[5px] text-black text-center gap-1 hover:bg-red-500 hover:text-white items-center" href="">সকল খবর  <HiOutlineChevronDoubleRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Life Style Grid */}
            <div className="mt-[30px] relative">
              <a href="">
                <h2 className="border-[#939297] border-b-2 text-[18px] w-full font-bold leading-[100%] mb-[15px] relative tracking-[0.3px]"
                  style={{ background: "#DDDDDD", backgroundSize: "cover" }}>
                  <span className="relative bg-[#A91717] border-[#939297] border-b-2 h-[30px] text-white leading-[39px] px-[18px] py-[7px] 
  after:absolute after:content-[''] after:w-auto after:h-auto after:bottom-[-20px] after:left-1/2 after:ml-[-10px] 
  after:border-[10px] after:border-solid after:border-transparent after:border-t-[#939297]">
                    লাইফ স্টাইল
                  </span>
                </h2>
              </a>
            </div>
            <div className="row">
              <div className="grid grid-cols-2 gap-x-5 lg:grid-cols-4 md:grid-cols-3 px-[10px] sm:grid-cols-2">
                {
                  lifeStyleData.map((item, index) => (
                    <LifeStyleCard
                      key={index}
                      title={item.title}
                      image={item.image}
                    />
                  ))
                }
              </div>
            </div>
            <div className="flex justify-center">
              <MiddleAdd />
            </div>
          </div>
          {/* Second Grid Style */}

          <div className="py-7 bg-white mt-7">
            <div className="container">
              <div className="row">
                {/* First Column (70%) */}
                <div className=" w-full md:w-12/12 px-2.5 lg:w-7/10">
                  <div className="row">
                    {/* First Left Column (35%) */}
                    <div className="w-full sm:w-full md:w-6/12 px-2.5 lg:w-6/12">
                      <div className="w-full mt-7 border-r border-gray-300 border-l border-[#A91717] transition-all duration-500 ease-out bg-[url('/dot.webp')]">
                        <a href="">
                          <h2 className="text-white bg-[#A91717] px-4 py-2 font-bold text-xl tracking-[0.2px] text-center inline-flex">জাতীয়</h2>
                        </a>
                      </div>
                      <div className="p-[10px] border border-gray-300 border-t-0">
                        <div className="">
                          <a href="">
                            <div className="w-full">
                              <div className="overflow-hidden relative lg:h-auto">
                                <Image
                                  className="w-full max-w-full min-h-full h-auto object-cover"
                                  src="/natonal-news-1.jpg"
                                  alt=""
                                  width={400}
                                  height={250}
                                />
                                <h3 className="caption p-2.5 px-2.5">চীনকে ভালো বন্ধু হিসেবে পেতে চাই: প্রেস সচিব</h3>
                              </div>

                            </div>
                          </a>
                        </div>
                        {/* List News */}
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image
                                    className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non"
                                    src="/natonal-news-2.jpg"
                                    alt=""
                                    width={150}
                                    height={100}
                                  />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image
                                    className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non"
                                    src="/natonal-news-2.jpg"
                                    alt=""
                                    width={150}
                                    height={100}
                                  />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={100} width={150} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                    {/* First Meddle Column (35%) */}
                    <div className="w-full sm:w-full md:w-6/12 px-2.5 lg:w-6/12">
                      <div className="w-full mt-7 border-r border-gray-300 border-l border-[#A91717] transition-all duration-500 ease-out bg-[url('/dot.webp')]">
                        <a href="">
                          <h2 className="text-white bg-[#A91717] px-4 py-2 font-bold text-xl tracking-[0.2px] text-center inline-flex">জাতীয়</h2>
                        </a>
                      </div>
                      <div className="p-[10px] border border-gray-300 border-t-0">
                        <div className="">
                          <a href="">
                            <div className="w-full">
                              <div className="overflow-hidden relative lg:h-auto">
                                <Image height={100} width={150} className="w-full max-w-full min-h-full h-auto object-cover" src="/natonal-news-1.jpg" alt="" />
                              </div>
                            </div>
                          </a>
                        </div>
                        {/* List News */}
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={100} width={150} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a className="" href="">
                            <div className="row ">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={100} width={150} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={100} width={150} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (30%) */}
                <div className="w-full lg:w-1/3 md:w-full lg:max-w-[30%]">
                  <div className="container">
                    <div className="mt-7">
                      <div className="row">
                        <div className="relative w-full px-[10px]">
                          <div className="flex justify-center">
                            <Image height={250} width={350} src="/350-250-add.jpeg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <div className="row">
                        <div className="w-full relative px-[10px]">
                          <div className="flex justify-center">
                            <Image height={250} width={350} src="/350-250-add-1.jpeg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Grid Style */}
          <div className="py-7 bg-white mt-7">
            <div className="container">
              <div className="row">
                {/* First Column (70%) */}
                <div className=" w-full md:w-12/12 px-2.5 lg:w-7/10">
                  <div className="row">
                    {/* First Left Column (35%) */}
                    <div className="w-full sm:w-full md:w-6/12 px-2.5 lg:w-6/12">
                      <div className="w-full mt-7 border-r border-gray-300 border-l border-[#A91717] transition-all duration-500 ease-out bg-[url('/dot.webp')]">
                        <a href="">
                          <h2 className="text-white bg-[#A91717] px-4 py-2 font-bold text-xl tracking-[0.2px] text-center inline-flex">জাতীয়</h2>
                        </a>
                      </div>
                      <div className="p-[10px] border border-gray-300 border-t-0">
                        <div className="">
                          <a href="">
                            <div className="w-full">
                              <div className="overflow-hidden relative lg:h-auto">
                                <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover" src="/natonal-news-1.jpg" alt="" />
                                <h3 className="caption p-2.5 px-2.5">চীনকে ভালো বন্ধু হিসেবে পেতে চাই: প্রেস সচিব</h3>
                              </div>

                            </div>
                          </a>
                        </div>
                        {/* List News */}
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={250} width={400}  className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                    {/* Meddle Column (35%) */}
                    <div className="w-full sm:w-full md:w-6/12 px-2.5 lg:w-6/12">
                      <div className="w-full mt-7 border-r border-gray-300 border-l border-[#A91717] transition-all duration-500 ease-out bg-[url('/dot.webp')]">
                        <a href="">
                          <h2 className="text-white bg-[#A91717] px-4 py-2 font-bold text-xl tracking-[0.2px] text-center inline-flex">জাতীয়</h2>
                        </a>
                      </div>
                      <div className="p-[10px] border border-gray-300 border-t-0">
                        <div className="">
                          <a href="">
                            <div className="w-full">
                              <div className="overflow-hidden relative lg:h-auto">
                                <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover" src="/natonal-news-1.jpg" alt="" />
                              </div>
                            </div>
                          </a>
                        </div>
                        {/* List News */}
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0 border-b border-dashed border-gray-300">
                          <a className="" href="">
                            <div className="row ">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-full relative pl-2.5 py-2.5 m-0">
                          <a href="">
                            <div className="row">
                              <div className=" w-[34%] md:w-1/3 lg:w-[31.8%]">
                                <div className=" overflow-hidden relative lg:h-auto">
                                  <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-non" src="/natonal-news-2.jpg" alt="" />
                                </div>
                              </div>

                              <div className="w-[66%] md:w-2/3 lg:w-2/3 px-2.5">
                                <h3 className="text-[1em] leading-[25px] font-bold">রোহিঙ্গা সংকট: উচ্চপর্যায়ের সম্মেলন করার প্রস্তাব</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Column (30%) */}
                <div className="w-full lg:w-1/3 md:w-full lg:max-w-[30%]">
                  <div className="container">
                    <div className="mt-7">
                      <div className="row">
                        <div className="w-full relative w-full px-[10px]">
                          <div className="flex justify-center">
                            <Image height={250} width={400} src="/side-add.gif" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* All Bnagla Grid */}
          <div className="container">
            <div className="row">
              {/* Left Column (70%) */}
              <div className="w-full md:w-12/12 px-2.5 lg:w-7/10">
                <div className="mt-[30px] relative">
                  <a href="">
                    <h2 className="border-[#939297] border-b-2 text-[18px] w-full font-bold leading-[100%] mb-[15px] relative tracking-[0.3px]"
                      style={{ background: "#DDDDDD", backgroundSize: "cover" }}>
                      <span className="relative bg-[#A91717] border-[#939297] border-b-2 h-[30px] text-white leading-[39px] px-[18px] py-[7px] 
  after:absolute after:content-[''] after:w-auto after:h-auto after:bottom-[-20px] after:left-1/2 after:ml-[-10px] 
  after:border-[10px] after:border-solid after:border-transparent after:border-t-[#939297]">
                        সারাবাংলা
                      </span>
                    </h2>
                  </a>
                </div>
                <div className="row">
                  {/* Left Card (35%) */}
                  <div className="w-1/2 sm:w-1/2 px-2.5 md:w-1/2 flex">
                    <div className="bg-white w-full self-stretch">
                      <a href="">
                        <div className="lg:h-auto lg:overflow-hidden lg:relative">
                          <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-none" src="/all-bangla.jpg" alt="" />
                        </div>
                        <h3 className="p-2.5 text-[1.0em] font-semibold lg:text-[1.31em] lg:font-bold leading-[26px]">দাখিল পরীক্ষা না দিয়ে বিয়ের দাবিতে প্রেমিকের বাড়িতে অনশন</h3>
                      </a>
                    </div>
                  </div>
                  {/* Right Card (35%) */}
                  <div className="w-1/2 sm:w-1/2 px-2.5 md:w-1/2 flex">
                    <div className="bg-white w-full self-stretch">
                      <a href="">
                        <div className="lg:h-auto lg:overflow-hidden lg:relative">
                          <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-none" src="/all-bangla-1.jpg" alt="" />
                        </div>
                        <h3 className="p-2.5 text-[1.0em] font-semibold lg:text-[1.31em] lg:font-bold leading-[26px]">গভীর সাগরে ১০ ট্রলারে ডাকাতি, ৪০ জেলে গুলিবিদ্ধ</h3>
                      </a>
                    </div>
                  </div>
                </div>
                {/* 4 Grid News (70%) */}
                <div className="row">
                  <div className="w-1/2 md:w-1/2 lg:w-1/4 px-2.5 flex">
                    <div className="mt-5 self-stretch">
                      <a href="">
                        <div className="overflow-hidden relative xl:h-auto">
                          <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-none" src="/all-bangla-3.jpg" alt="" />
                        </div>
                        <div className="bg-white w-full lg:w-[90%] relative  px-2 py-[5px] bottom-[5%] lg:left-[5%] h-[85px] overflow-hidden">
                          <h3 className="text-[1.0em] leading-[25px] font-semibold">সংস্কার ছাড়া নির্বাচন দিলে চাঁদাবাজরাই ক্ষমতায় আসবে: ফয়জুল করীম</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/4 px-2.5 flex">
                    <div className="mt-5 self-stretch">
                      <a href="">
                        <div className="overflow-hidden relative xl:h-auto">
                          <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-none" src="/all-bangla-3.jpg" alt="" />
                        </div>
                        <div className="bg-white w-full lg:w-[90%] relative  px-2 py-[5px] bottom-[5%] lg:left-[5%] h-[85px] overflow-hidden">
                          <h3 className="text-[1.0em] leading-[25px] font-semibold">সংস্কার ছাড়া নির্বাচন দিলে চাঁদাবাজরাই</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/4 px-2.5 flex">
                    <div className="mt-5 self-stretch">
                      <a href="">
                        <div className="overflow-hidden relative xl:h-auto">
                          <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-none" src="/all-bangla-3.jpg" alt="" />
                        </div>
                        <div className="bg-white w-full lg:w-[90%] relative  px-2 py-[5px] bottom-[5%] lg:left-[5%] h-[85px] overflow-hidden">
                          <h3 className="text-[1.0em] leading-[25px] font-semibold">সংস্কার ছাড়া নির্বাচন দিলে চাঁদাবাজরাই</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/2 lg:w-1/4 px-2.5 flex">
                    <div className="mt-5 self-stretch">
                      <a href="">
                        <div className="overflow-hidden relative xl:h-auto">
                          <Image height={250} width={400} className="w-full max-w-full min-h-full h-auto object-cover align-middle border-none" src="/all-bangla-3.jpg" alt="" />
                        </div>
                        <div className="bg-white w-full lg:w-[90%] relative  px-2 py-[5px] bottom-[5%] lg:left-[5%] h-[85px] overflow-hidden">
                          <h3 className="text-[1.0em] leading-[25px] font-semibold">সংস্কার ছাড়া নির্বাচন দিলে চাঁদাবাজরাই</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Cloumn (30%) */}
              <div className="w-full md:w-4/12 lg:w-4/12 max-w-[30%] px-2.5 flex-none rowresize">
                <div className="mt-[30px] relative">

                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-center">
            <BannerAdd />
          </div>
          {/* Sprots News Grid */}
          <div className="container">
            <div className="">
              <div className="mt-[30px] relative">
                <a href="">
                  <h2 className="border-[#939297] border-b-2 text-[18px] w-full font-bold leading-[100%] mb-[15px] relative tracking-[0.3px]"
                    style={{ background: "#DDDDDD", backgroundSize: "cover" }}>
                    <span className="relative bg-[#A91717] border-[#939297] border-b-2 h-[30px] text-white leading-[39px] px-[18px] py-[7px] 
  after:absolute after:content-[''] after:w-auto after:h-auto after:bottom-[-20px] after:left-1/2 after:ml-[-10px] 
  after:border-[10px] after:border-solid after:border-transparent after:border-t-[#939297]">
                      খেলাধুলা
                    </span>
                  </h2>
                </a>
              </div>
              <div className="row">
                {/* Middel Column */}
                <div className=" w-full md:w-1/2 px-2.5 mb-3 lg:w-1/2">
                  <div className="bg-white !h-auto">
                    <a href="">
                      <div className="overflow-hidden relative lg:h-auto">
                        <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src="/sports-news.jpg" alt="" />
                      </div>

                      <div className="p-[10px] lg:h-[127px] overflow-hidden">
                        <h3 className="pb-[6px] text-[1.31em] leading-[26px] font-bold text-[#222]">গা-ছাড়া ক্রিকেটে ডুবল আশার সূর্য</h3>
                        <p className="hidden text-[#666] text-[15px] leading-[22px] max-h-[65px] md:block overflow-hidden">প্রতিপক্ষ জিম্বাবুয়ে হোক বা দক্ষিণ আফ্রিকা, এক দাঁড়িপাল্লায় মেপে প্রতিটি বল বুক চিতিয়ে দেওয়ার কথা বলেছিলেন। কিন্তু ২২ গজে দেখা মিলল গা-ছাড়া ক্রিকেটের। তাতে টেস্ট সংস্কৃতি গড়ে তোলার যে অভিপ্রায় তা ভেস্তে গেছে প্রথম সুযোগে।</p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Frist Column  */}
                <div className="w-1/2 lg:w-1/4 md:w-1/4 md:order-first order-none px-2.5 lg:order-first">
                  <div className="bg-white mb-5">
                    <a href="">
                      <div className="overflow-hidden relative lg:h-auto">
                        <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src="/sports-news-1.jpg" alt="" />
                      </div>
                      <div className="px-[8px] py-[5px] h-[60px] overflow-hidden">
                        <h3 className="text-[1.1em] leading-[25px] font-bold">জাতীয় দলের বাইরে রিসোর্স কম, মনে করিয়ে দিলেন সালাউদ্দিন</h3>
                      </div>
                    </a>
                  </div>
                  <div className="bg-white mb-5">
                    <a href="">
                      <div className="overflow-hidden relative lg:h-auto">
                        <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src="/sports-news-2.jpg" alt="" />
                      </div>
                      <div className="px-[8px] py-[5px] h-[60px] overflow-hidden">
                        <h3 className="text-[1.1em] leading-[25px] font-bold">ব‌্যর্থতা স্বীকারের সঙ্গে বাস্তবতার আয়নায় সালাউদ্দিন</h3>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Last Column */}
                <div className="w-1/2 lg:w-1/4 md:w-1/4 order-none px-2.5">
                  <div className="bg-white mb-5">
                    <a href="">
                      <div className="overflow-hidden relative lg:h-auto">
                        <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src="/sports-news-3.jpg" alt="" />
                      </div>
                      <div className="px-[8px] py-[5px] h-[60px] overflow-hidden">
                        <h3 className="text-[1.1em] leading-[25px] font-bold">হামজা ও শমিতের পর লাল-সবুজের জার্সি পরতে যাচ্ছেন </h3>
                      </div>
                    </a>
                  </div>
                  <div className="bg-white mb-5">
                    <a href="">
                      <div className="overflow-hidden relative lg:h-auto">
                        <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src="/sports-news-4.jpg" alt="" />
                      </div>
                      <div className="px-[8px] py-[5px] h-[60px] overflow-hidden">
                        <h3 className="text-[1.1em] leading-[25px] font-bold">আইসিসি ঘোষিত সেরা একাদশে বাংলাদেশের তিন ক্রিকেটার</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entertainment Grid */}
          <div className="container">
            <div className="mt-[15px] relative">
              <a href="">
                <h2 className="border-[#939297] border-b-2 text-[18px] w-full font-bold leading-[100%] mb-[15px] relative tracking-[0.3px]"
                  style={{ background: "#DDDDDD", backgroundSize: "cover" }}>
                  <span className="relative bg-[#A91717] border-[#939297] border-b-2 h-[30px] text-white leading-[39px] px-[18px] py-[7px] 
  after:absolute after:content-[''] after:w-auto after:h-auto after:bottom-[-20px] after:left-1/2 after:ml-[-10px] 
  after:border-[10px] after:border-solid after:border-transparent after:border-t-[#939297]">
                    বিনোদন
                  </span>
                </h2>
              </a>
              <div className="row">
                <div className="w-full md:w-full lg:w-5/12 px-2.5 mb-4">
                  <div className="bg-white">
                    <a href="">
                      <div className="overflow-hidden relative lg:h-auto">
                        <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src="/entertainment-news.jpg" alt="" />
                      </div>
                      <div className="px-[10px] py-[7px] h-[109px] overflow-hidden">
                        <br />
                        <h3 className="text-[1.31em] leading-[26px] font-semibold pb-[6px] text-[#222]">
                          ধানুশের শুটিং সেটে আগুন
                        </h3>

                        <p className="text-[15px] text-[#666] leading-[22px]">ধানুশের সিনেমার শুটিং সেটে ভয়াবহ অগ্নিকাণ্ডের ঘটনা ঘটেছে।</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-full px-2.5 lg:w-7/12">
                  <div className="row">
                    {entertainmentData.map((items, index) => (
                      <div key={index} className="w-1/2 px-2.5 md:w-1/2 lg:w-1/3 lg:px-2.5  flex">

                        <div className="bg-white mb-[10px] lg:mb-[20px] w-full self-stretch">
                          <a href="">
                            <div className="overflow-hidden relative lg:h-auto">
                              <Image height={250} width={400} className="w-full h-auto max-w-full min-h-full object-cover align-middle border-none" src={items.image} alt="" />
                            </div>
                            <div className="px-[8px] py-[5px] h-[60px] overflow-hidden">
                              <h3 className="text-[1.1em] leading-[25px] font-bold">{items.title} </h3>
                            </div>
                          </a>
                        </div>
                      </div>

                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outher News */}
          <div className="container">
            <div className="row py-5">
              <div className="w-full md:w-1/2 px-2.5 lg:w-1/4">
                <div className="mt-[30px] mb-[15px] p-[5px] border-t-[2px] border-b border-t-[#0c2560] border-b-[#333]">
                  <a className="flex gap-1 " href="">
                    <svg className="svg-inline--fa fa-angle-double-right fa-w-14 w-[0.85em] text-[#B70F15] overflow-hidden align-middle"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-double-right"
                      role="img" xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                    <h2 className="text-[19px] text-[#333] font-bold leading-[25px] inline"> আইন ও অপরাধ</h2>
                  </a>
                </div>

                <div className="bg-white">
                  <div className="">
                    <a href="">
                      <div className="w-full">
                        <div className="relative">
                          <Image height={250} width={400} className="w-full max-w-full h-auto align-middle border-none" src="/news-1.jpg" alt="" />
                          <h3 className="caption px-[10px] py-[7px]">সস্ত্রীক সাবেক প্রতিমন্ত্রী মাহবুব আলীর বিরুদ্ধে </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <ul className="px-[8px] m-0 list-none">
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">ফুটবলার মোরসালিনের বিবাহ বিচ্ছেদ, স্ত্রীর মামলা প্রত্যাহার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">শিক্ষার্থী পারভেজ হত্যা: বৈষম্যবিরোধী আন্দোলনের নেতা হৃদয় রিমান্ডে</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">পারভেজ হত্যার মূল আসামি গ্রেপ্তার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">‘টাকা পাচারকারীরা শয়তানের মতো, ধর‌তে পার‌লে ছাড় নেই’</span>
                        </h4>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="w-full md:w-1/2 px-2.5 lg:w-1/4">
                <div className="mt-[30px] mb-[15px] p-[5px] border-t-[2px] border-b border-t-[#0c2560] border-b-[#333]">
                  <a className="flex gap-1 " href="">
                    <svg className="svg-inline--fa fa-angle-double-right fa-w-14 w-[0.85em] text-[#B70F15] overflow-hidden align-middle"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-double-right"
                      role="img" xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                    <h2 className="text-[19px] text-[#333] font-bold leading-[25px] inline"> আইন ও অপরাধ</h2>
                  </a>
                </div>

                <div className="bg-white">
                  <div className="">
                    <a href="">
                      <div className="w-full">
                        <div className="relative">
                          <Image height={250} width={400} className="w-full max-w-full h-auto align-middle border-none" src="/news-1.jpg" alt="" />
                          <h3 className="caption px-[10px] py-[7px]">সস্ত্রীক সাবেক প্রতিমন্ত্রী মাহবুব আলীর বিরুদ্ধে </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <ul className="px-[8px] m-0 list-none">
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">ফুটবলার মোরসালিনের বিবাহ বিচ্ছেদ, স্ত্রীর মামলা প্রত্যাহার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">শিক্ষার্থী পারভেজ হত্যা: বৈষম্যবিরোধী আন্দোলনের নেতা হৃদয় রিমান্ডে</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">পারভেজ হত্যার মূল আসামি গ্রেপ্তার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px]  h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">‘টাকা পাচারকারীরা শয়তানের মতো, ধর‌তে পার‌লে ছাড় নেই’</span>
                        </h4>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="w-full md:w-1/2 px-2.5 lg:w-1/4">
                <div className="mt-[30px] mb-[15px] p-[5px] border-t-[2px] border-b border-t-[#0c2560] border-b-[#333]">
                  <a className="flex gap-1 " href="">
                    <svg className="svg-inline--fa fa-angle-double-right fa-w-14 w-[0.85em] text-[#B70F15] overflow-hidden align-middle"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-double-right"
                      role="img" xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                    <h2 className="text-[19px] text-[#333] font-bold leading-[25px] inline"> আইন ও অপরাধ</h2>
                  </a>
                </div>

                <div className="bg-white">
                  <div className="">
                    <a href="">
                      <div className="w-full">
                        <div className="relative">
                          <Image height={250} width={400} className="w-full max-w-full h-auto align-middle border-none" src="/news-1.jpg" alt="" />
                          <h3 className="caption px-[10px] py-[7px]">সস্ত্রীক সাবেক প্রতিমন্ত্রী মাহবুব আলীর বিরুদ্ধে </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <ul className="px-[8px] m-0 list-none">
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">ফুটবলার মোরসালিনের বিবাহ বিচ্ছেদ, স্ত্রীর মামলা প্রত্যাহার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">শিক্ষার্থী পারভেজ হত্যা: বৈষম্যবিরোধী আন্দোলনের নেতা হৃদয় রিমান্ডে</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">পারভেজ হত্যার মূল আসামি গ্রেপ্তার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px]  h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">‘টাকা পাচারকারীরা শয়তানের মতো, ধর‌তে পার‌লে ছাড় নেই’</span>
                        </h4>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="w-full md:w-1/2 px-2.5 lg:w-1/4">
                <div className="mt-[30px] mb-[15px] p-[5px] border-t-[2px] border-b border-t-[#0c2560] border-b-[#333]">
                  <a className="flex gap-1 " href="">
                    <svg className="svg-inline--fa fa-angle-double-right fa-w-14 w-[0.85em] text-[#B70F15] overflow-hidden align-middle"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-double-right"
                      role="img" xmlns="https://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg="">
                      <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                    <h2 className="text-[19px] text-[#333] font-bold leading-[25px] inline"> আইন ও অপরাধ</h2>
                  </a>
                </div>

                <div className="bg-white">
                  <div className="">
                    <a href="">
                      <div className="w-full">
                        <div className="relative">
                          <Image height={250} width={400} className="w-full max-w-full h-auto align-middle border-none" src="/news-1.jpg" alt="" />
                          <h3 className="caption px-[10px] py-[7px]">সস্ত্রীক সাবেক প্রতিমন্ত্রী মাহবুব আলীর বিরুদ্ধে </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <ul className="px-[8px] m-0 list-none">
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">ফুটবলার মোরসালিনের বিবাহ বিচ্ছেদ, স্ত্রীর মামলা প্রত্যাহার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">শিক্ষার্থী পারভেজ হত্যা: বৈষম্যবিরোধী আন্দোলনের নেতা হৃদয় রিমান্ডে</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px] border-b border-dashed border-[#ccc] h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">পারভেজ হত্যার মূল আসামি গ্রেপ্তার</span>
                        </h4>
                      </a>
                    </li>
                    <li className="py-[7px]  h-[70px] overflow-hidden">
                      <a href="">
                        <h4 className="flex items-start text-[1.1em] leading-[25px]">
                          {/* <img className="w-[12px] mr-[7px] relative top-0 align-middle border-none" src="/index.jpg" alt="" /> */}

                          <span className="flex-grow">‘টাকা পাচারকারীরা শয়তানের মতো, ধর‌তে পার‌লে ছাড় নেই’</span>
                        </h4>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>


        </main>
      </div>
    </>
  );
}
