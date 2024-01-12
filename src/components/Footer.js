import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#222322] text-white">
      <div className="    grid grid-cols-2 mb-10">
        {/* first grid column */}
        <div>
          <div className=" mt-56 ml-56 mr-48">
            <h2
              className=" font-sans"
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                lineHeight: "48px",
              }}
            >
              Driving the Future of Money
            </h2>
            <p
              className=" mt-2 font-sans text-[#596971]"
              style={{ lineHeight: "28px" }}
            >
              Tether supports and empowers growing ventures and innovation
              throughout the blockchain as a digital token built on multiple
              blockchains.
            </p>
          </div>
        </div>

        {/* second grid column */}
        <div className=" grid grid-cols-3 mt-10 ">
          {/* first grid column */}
          <div className=" flex flex-col gap-44">
            {/* first grid row */}
            <div className=" flex flex-col gap-1">
              <h6 className=" text-[#C0A060] text-xl font-sans">Tether</h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Why Tether?</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">How It Works</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Knowledge Base</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Transparency</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Fees</a>
              </h6>
            </div>

            {/* second grid row */}
            <div className=" flex flex-col gap-1">
              <h6 className=" text-[#C0A060] text-xl font-sans">Products</h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Tether token CNHt</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Tether token EURt</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Tether token MXNt</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Tether token USDt</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Tether Gold token - XAUt</a>
              </h6>
            </div>
          </div>

          {/* second grid column */}
          <div className=" flex flex-col gap-44">
            {/* first grid row */}
            <div className=" flex flex-col gap-1">
              <h6 className=" text-[#C0A060] text-xl font-sans">Company</h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">About Us</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Careers</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Contact Us</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Legal Terms</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">Cookie Settings</a>
              </h6>
            </div>

            {/* second grid row */}
            <div className=" flex flex-col gap-1">
              <h6 className=" text-[#C0A060] text-xl font-sans">Solutions</h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">For Individuals</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">For Merchants</a>
              </h6>
              <h6 className=" cursor-pointer hover:underline">
                <a className=" font-sans text-xl">For Exchanges</a>
              </h6>
            </div>
          </div>

          {/* third grid column */}
          <div className=" flex flex-col gap-1">
            <h6 className=" text-[#C0A060] text-xl font-sans">Resources</h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">News</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">FAQs</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Integration Guidelines</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Bug Bounty</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Media Assets</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Tether Facts</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Whitepaper</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Tether Channels</a>
            </h6>
            <h6 className=" cursor-pointer hover:underline">
              <a className=" font-sans text-xl">Security Features</a>
            </h6>
          </div>
        </div>
      </div>

      <div className="">
              A
      </div>
    </div>
  );
};

export default Footer;
