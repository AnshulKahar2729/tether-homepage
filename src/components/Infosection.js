import React from "react";
import infoSectionFirstIcon from "../assets/infoSectionFirstIcon.svg";
import infoSectionSecondIcon from "../assets/infoSectionSecondIcon.svg";

const Infosection = () => {
  return (
    <div>
      <div className="bg-[#FFFEFE] flex xl:flex-row flex-col p-4">
        {/* first grid col */}
        <div className=" flex-1">
          <img src={infoSectionFirstIcon} />
        </div>

        {/* second grid col */}
        <div className=" lg:ml-36 mt-28 lg:mr-40 flex-1">
          <h2
            className=" font-bold font-sans"
            style={{ fontSize: "2.5rem", lineHeight: "48px" }}
          >
            Driving the Future of Money
          </h2>
          <p className=" mt-5 font-sans text-[#596870] text-lg">
            Tether tokens are the most widely adopted stablecoins, having
            pioneered the concept in the digital token space. A disruptor to the
            conventional financial system and a trailblazer in the digital use
            of traditional currencies, Tether tokens support and empower growing
            ventures and innovation throughout the blockchain space. Tether
            tokens exist as a digital token built on multiple blockchains.
          </p>

          <div className=" mt-5 ">
            <button className=" w-full md:w-fit hover:bg-[#c0a0600f] transition-all py-2 px-7 font-sans font-semibold rounded-full text-[#C0A060] border border-[#C0A060]">
              Learn How Tether works
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F8F8] flex xl:flex-row flex-col-reverse p-4">
        {/* grid first col */}
        <div className=" lg:ml-36 mt-28 lg:mr-40 flex-1">
          <h2
            className=" font-bold font-sans"
            style={{ fontSize: "2.5rem", lineHeight: "48px" }}
          >
            100% backed and fully transparent
          </h2>
          <p className=" mt-5 font-sans text-[#596870] text-lg">
            All Tether tokens (USD₮) are pegged at 1-to-1 with a matching fiat
            currency and are backed 100% by Tether’s reserves. We publish a
            daily record of the current total assets and reserves.
          </p>

          <div className=" mt-5 ">
            <button className=" w-full md:w-fit hover:bg-[#c0a0600f] transition-all py-2 px-7 font-sans font-semibold rounded-full text-[#C0A060] border border-[#C0A060]">
              Go To Transparency Page
            </button>
          </div>
        </div>

        {/* grid sec col */}
        <div className=" flex-1">
          <img src={infoSectionSecondIcon} />
        </div>
      </div>
    </div>
  );
};

export default Infosection;
