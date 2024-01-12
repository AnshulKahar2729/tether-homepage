import React from "react";
import newsWallpaper from "../assets/newsWallpaper.png";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestNews = () => {
  return (
    <div className=" bg-[#F9FAFA] flex items-center justify-center flex-col mb-12">
      <h1 className=" font-sans font-bold text-3xl mt-28 mb-10">Latest News</h1>

      <div className=" flex flex-row gap-14">
        <div
          className=" hover:bg-[#0092921e] transition-all cursor-pointer latestNewsCard bg-[#F5FBFA] rounded-md overflow-hidden"
          style={{ width: "541px", height: "407px" }}
        >
          <img src={newsWallpaper} />
          <h1 className=" text-[#009292] text-lg mx-4 font-bold mt-2 font-sans">
            Tether Makes Investment into the Academy of Digital Industries
          </h1>
          <p className=" mx-4 font-sans text-base">
            23 December 2023 – Following recent initiatives to promote
            blockchain innovation in Georgia, Tether today announced that it has
            invested an undisclosed amount into the Series-A investment round of
            Academy of Digital Industries
          </p>

          <div className=" flex flex-row gap-2 items-center mx-4 mt-2 font-sans font-lg text-[#C0A060] font-bold">
            Read more <FaArrowRightLong />
          </div>
        </div>
        <div
          className=" hover:bg-[#0092921e] transition-all cursor-pointer latestNewsCard bg-[#F5FBFA] rounded-md overflow-hidden"
          style={{ width: "541px", height: "407px" }}
        >
          <img src={newsWallpaper} />
          <h1 className=" text-[#009292] text-lg mx-4 font-bold mt-2 font-sans">
            Tether Makes Investment into the Academy of Digital Industries
          </h1>
          <p className=" mx-4 font-sans text-base">
            23 December 2023 – Following recent initiatives to promote
            blockchain innovation in Georgia, Tether today announced that it has
            invested an undisclosed amount into the Series-A investment round of
            Academy of Digital Industries
          </p>

          <div className=" flex flex-row gap-2 items-center mx-4 mt-2 font-sans font-lg text-[#C0A060] font-bold">
            Read more <FaArrowRightLong />
          </div>
        </div>
      </div>

      <div className=" mt-10 mb-10">
        
        <button className=" hover:bg-[#c0a0600f] transition-all py-2 px-5 font-sans font-semibold rounded-full text-[#C0A060] border border-[#C0A060]">
          Read all news
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
