import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { SlArrowDown } from "react-icons/sl";

const FAQ = () => {
  return (
    <div className=" bg-[#009292] ">
      <div className=" mx-[12.5%] pt-28">
        <div className=" text-white font-bold text-3xl font-sans text-center">
          <h2 className=" font-sans">FAQs</h2>
        </div>

        <div className=" mb-10 mt-10">
          <div style={{ borderTop: "1px solid white", paddingBlock : "5px", fontSize : "1.5rem" }}>
            <Accordion
              style={{
                backgroundColor: "#009292",

                color: "white",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<SlArrowDown style={{color : "white", fontSize : "0.8rem"}} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h6 className=" font-sans">What is Tether?</h6>
              </AccordionSummary>
              <AccordionDetails>
                <p className=" font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>

          <div style={{ borderTop: "1px solid white", paddingBlock : "5px", fontSize : "1.5rem" }}>
            {" "}
            <Accordion
              style={{
                backgroundColor: "#009292",
                border: "0px",
                color: "white",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<SlArrowDown style={{color : "white", fontSize : "0.8rem"}} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h6 className=" font-sans">How do Tether tokens work?</h6>
              </AccordionSummary>
              <AccordionDetails>
                <p className=" font-sans">
                  Tether tokens exist as digital tokens built on several leading
                  blockchains, including Algorand, Avalanche, Bitcoin Cash’s
                  Simple Ledger Protocol (SLP), Ethereum, EOS, Liquid Network,
                  Omni, Polygon, Tezos, Tron, Solana and Statemine. These
                  transport protocols consist of open source software that
                  interface with blockchains to allow for the issuance and
                  redemption of Tether tokens. Every Tether token is 100% backed
                  by our reserves, which includes traditional currency and cash
                  equivalents, and may include other assets and receivables from
                  loans made by Tether to third parties. The Tether platform is
                  fully reserved when the sum of all Tether tokens in
                  circulation is less than or equal to the value of our
                  reserves. Through our Transparency page, anyone can view both
                  of these numbers on a daily basis. Tether was originally
                  created to use the Bitcoin network as its transport
                  protocol—specifically, the Omni Layer—to allow transactions of
                  tokenised traditional currency. Since this original version of
                  Tether uses the Bitcoin blockchain, it inherits the inherent
                  stability and security of the longest established blockchain
                  network. Tether on the Ethereum blockchain, as an ERC20 token,
                  is a newer transport layer, which now makes Tether tokens
                  available in Ethereum smart contracts or decentralized
                  applications on Ethereum. As a standard ERC20 token it can
                  also be sent to any Ethereum address. Since Tether tokens are
                  currently available using different transport protocols, when
                  users send Tether tokens to other addresses, they need to
                  carefully check the destination address to confirm they are
                  selecting the correct transport protocol.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>

          <div style={{ borderTop: "1px solid white", paddingBlock : "5px", fontSize : "1.5rem" }}>
            <Accordion
              style={{
                backgroundColor: "#009292",
                border: "0px",
                color: "white",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<SlArrowDown style={{color : "white", fontSize : "0.8rem"}} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h6 className=" font-sans">What are Tether tokens?</h6>
              </AccordionSummary>
              <AccordionDetails>
                <p className=" font-sans">
                  Tether tokens are assets that move across the blockchain just
                  as easily as other digital currencies but that are pegged to
                  real-world currencies on a 1-to-1 basis. Tether tokens are
                  referred to as stablecoins because they offer price stability
                  as they are pegged to a fiat currency. This offers traders,
                  merchants and funds a low volatility solution when exiting
                  positions in the market. All Tether tokens are pegged at
                  1-to-1 with a matching fiat currency (e.g., 1 USD₮ = 1 USD)
                  and are backed 100% by Tether’s reserves. As a fully
                  transparent company, we publish a daily record of the current
                  total assets and reserves.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ borderTop: "1px solid white", paddingBlock : "5px", fontSize : "1.5rem" }}>
            <Accordion
              style={{
                backgroundColor: "#009292",
                border: "0px",
                color: "white",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<SlArrowDown style={{color : "white", fontSize : "0.8rem"}} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h6 className=" font-sans">What currencies and commodities does Tether support?</h6>
              </AccordionSummary>
              <AccordionDetails>
                <p className=" font-sans">
                  Tether supports US dollars (USD), euros, Mexican peso,
                  offshore Chinese yuan, and Gold, with the following Tether
                  tokens, respectively: USD₮, EUR₮, MXN₮, CNH₮ and XAU₮.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ borderBlock: "1px solid white",paddingBlock : "5px", fontSize : "1.5rem" }}>
            <Accordion
              style={{
                backgroundColor: "#009292",
                border: "0px",
                color: "white",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<SlArrowDown style={{color : "white", fontSize : "0.8rem"}} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h6 className=" font-sans">Who can use Tether tokens?</h6>
              </AccordionSummary>
              <AccordionDetails>
                <p className=" font-sans">
                  Tether tokens enable businesses – including exchanges,
                  wallets, payment processors, financial services and ATMs – to
                  easily use fiat currencies on blockchains. Some of the largest
                  businesses in the digital currency ecosystem have integrated
                  Tether tokens. View industry supporters. Individuals can also
                  use Tether-enabled platforms to transact with Tether tokens.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className=" mx-auto text-center pb-28 ">
        <button className=" text-base transition-all py-3 px-24 font-sans font-semibold rounded-full text-white border border-white">
          Read all FAQs
        </button>
      </div>
    </div>
  );
};

export default FAQ;
