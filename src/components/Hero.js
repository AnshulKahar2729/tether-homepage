import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import HeroBanner from "./icons/HeroBanner";
import MovingIcons from "./icons/MovingIcons";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-[#F9FAFA] px-4">
      <div className="lg:mx-[12.5%] grid xl:grid-cols-2 grid-cols-1 text-center xl:text-left">
        <div>
          <h1
            className=" mt-52 font-sans"
            style={{
              fontWeight: "800",
              lineHeight: "73px",
              fontStyle: "normal",
              fontSize: "3.75rem",
            }}
          >
            Tether token
          </h1>
          <h1
            className=" font-sans"
            style={{
              lineHeight: "73px",
              fontStyle: "normal",
              fontSize: "3.75rem",
            }}
          >
            <Typewriter
            delay={10}
            options={{
              strings: [
                "Driving the Future of Money",
                "The World's First Stablecoin",
                "Unparalleled Liquidity",
                "Widespread Adoption",
                "Exponential Growth",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
          
            <div className=" md:flex md:items-center md:justify-center xl:justify-start">
              <div className=" mt-5 flex md:flex-row md:mx-auto flex-col gap-5">
            <button className=" createActBtn bg-[#009292] hover:bg-[#1b5f5f] transition-all font-medium text-white px-10 py-3 rounded-full font-sans hover:">
              Create Account
            </button>
            <button className=" py-3  hover:bg-[#c19f6110] transition-all flex flex-row gap-3 items-center justify-center text-[#C1A061] border border-[#C1A061] px-9 rounded-full font-sans font-medium">
              <BsTriangleFill style={{ rotate: "90deg" }} /> Learn How Tether
              Works
            </button>
          </div>
        </div>
</div>
         
        {/* right section */}
        <div className=" relative ">
          <div className=" absolute top-0">
            <HeroBanner />
          </div>
          <div className=" sticky top-0 z-40">
            <MovingIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
