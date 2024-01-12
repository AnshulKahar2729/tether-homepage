import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Feature = () => {
  return (
    <div>
      <div className=" text-center mt-20">
        <h2 className=" mb-10 font-bold text-3xl bg-[#F8FBFA] font-sans">
          Widespread adoption
        </h2>
      </div>
      <div className="mx-[35%] mb-16">
        <p className=" text-center text-[#586970] font-sans text-lg">
          From being the first, to the most used, stablecoin, and one of the
          most traded tokens by volume, Tether tokens have come a long way.
          Tether tokens are today the most widely adopted stablecoins across
          major exchanges, OTC desks, and wallets, including:
        </p>
      </div>

      {/* for swipper */}
      <div></div>

      <div className=" text-center mx-[30%] mb-20">
        {" "}
        <h2 className=" mb-10 font-bold text-3xl bg-[#F8FBFA] font-sans">
          The token that is disrupting the global financial industry
        </h2>
      </div>

      <div className=" grid grid-cols-3 mx-[12.5%] mb-32">
        <div className=" bg-white rounded-md w-80 p-7">
          <h3 className=" text-[#009292] font-sans text-3xl font-bold mb-2">Tether for Individuals</h3>

          <p className=" text-[#586970] font-sans">
            Tether tokens offer exceptional liquidity on tier one exchanges
            giving traders the ability to take advantage of arbitrage
            opportunities in the fastest time possible.
          </p>

          <span className=" text-[#C0A060] flex gap-2 items-center font-sans">
            Learn more <FaArrowRightLong />
          </span>
        </div>
        <div className=" bg-white rounded-md w-80 p-7">
          <h3 className=" text-[#009292] font-sans text-3xl font-bold mb-2">Tether for Individuals</h3>

          <p className=" text-[#586970] font-sans">
            Tether tokens offer exceptional liquidity on tier one exchanges
            giving traders the ability to take advantage of arbitrage
            opportunities in the fastest time possible.
          </p>

          <span className=" text-[#C0A060] flex gap-2 items-center font-sans">
            Learn more <FaArrowRightLong />
          </span>
        </div>
        <div className=" bg-white rounded-md w-80 p-7">
          <h3 className=" text-[#009292] font-sans text-3xl font-bold mb-2">Tether for Individuals</h3>

          <p className=" text-[#586970] font-sans">
            Tether tokens offer exceptional liquidity on tier one exchanges
            giving traders the ability to take advantage of arbitrage
            opportunities in the fastest time possible.
          </p>

          <span className=" text-[#C0A060] flex gap-2 items-center font-sans">
            Learn more <FaArrowRightLong />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
