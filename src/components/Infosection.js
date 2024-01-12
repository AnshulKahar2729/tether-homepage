import React from "react";
import infoSectionFirstIcon from "../assets/infoSectionFirstIcon.svg";
import infoSectionSecondIcon from "../assets/infoSectionSecondIcon.svg";

const Infosection = () => {
  return (
    <div>
      <div className="bg-[#FFFEFE] grid grid-cols-2">
        {/* first grid col */}
        <div>
          <img src={infoSectionFirstIcon} />
        </div>

        {/* second grid col */}
        <div className=" ml-36 mt-28 mr-40">
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

          <div className=" mt-5">
            <button className=" hover:bg-[#c0a0600f] transition-all py-2 px-7 font-sans font-semibold rounded-full text-[#C0A060] border border-[#C0A060]">
              Learn How Tether works
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F8F8] grid grid-cols-2">
        {/* grid first col */}
        <div className=" ml-36 mt-28 mr-40">
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

          <div className=" mt-5">
            <button className=" hover:bg-[#c0a0600f] transition-all py-2 px-7 font-sans font-semibold rounded-full text-[#C0A060] border border-[#C0A060]">
              Go To Transparency Page
            </button>
          </div>
        </div>

        {/* grid sec col */}
        <div>
          <img src={infoSectionSecondIcon} />
        </div>
      </div>
    </div>
  );
};

export default Infosection;
