import { Link } from "react-router-dom";
import logo from "../../assets/FooterLogo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import semiCircle from "../../assets/FooterSemiCircle.svg";
import tabletFooterCircle from "../../assets/tabletFooterCircle.svg";

export default function AboutFooter() {
  return (
    <div className=" w-[375px] md:w-[768px] mx-auto relative ">
      <div className=" w-[328px] md:w-[445px] h-[180px] mx-auto mt-[80px] ">
        <h1
          className=" font-[dmSerif] w-fit h-[36px] mx-auto text-[32px] leading-[36px] text-center 
      text-[#36536B] md:text-[48px] "
        >
          Ready to start?
        </h1>

        <div className=" w-[327px] md:w-[445px] mt-[24px] md:relative ">
          <input
            className=" bg-[#FBFCFE] w-full h-[48px] rounded-[24px] pl-[27px] mb-[16px] outline-none  "
            type="email"
            placeholder="Enter email adress"
          />

          <button
            className=" bg-[#BA4270] w-full h-[48px] rounded-[24px] text-[#ffffff] mb-[20px] 
        md:w-[173px] md:absolute md:top-0 md:right-0 "
          >
            Schedule a demo
          </button>
        </div>
      </div>

      <div
        className=" w-[375px] h-[353px] mx-auto mt-[40px] bg-[#1B262F] relative 
  md:w-[768px] md:h-[100px]  "
      >
        <div className=" w-fit mx-auto pt-[41px] md:ml-[30px] md:pt-[30px] md:mr-0 md:inline-block ">
          <img src={logo} alt="" />
        </div>

        <div
          className=" w-[58px] h-[115px] mx-auto mt-[40px] flex flex-col justify-between relative 
    md:w-[300px] md:h-[38px] md:mt-0 md:inline-block md:absolute md:left-[230px] md:top-[35px]
    md:z-[2] "
        >
          <Link
            to="/PricingPage"
            className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
      hover:cursor-pointer z-[1] md:mr-[60px] "
          >
            Pricing
          </Link>
          <Link
            to="/AboutPage"
            className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
      hover:cursor-pointer z-[1] md:mr-[60px]  "
          >
            About
          </Link>
          <Link
            to="/ContactPage"
            className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
      hover:cursor-pointer z-[1]   "
          >
            Contact
          </Link>
        </div>

        <div
          className=" w-[120px] h-[24px] mx-auto flex justify-between mt-[50px] md:inline-block
    md:absolute md:right-[30px] md:top-[35px] md:mt-0 md:z-[2] "
        >
          <img
            className=" hover:cursor-pointer z-[2] md:inline-block md:mr-[20px] "
            src={facebook}
            alt=""
          />
          <img
            className=" hover:cursor-pointer z-[2] md:inline-block md:mr-[20px] "
            src={twitter}
            alt=""
          />
          <img
            className=" hover:cursor-pointer z-[2] md:inline-block "
            src={linkedin}
            alt=""
          />
        </div>

        <img
          className=" absolute bottom-0 md:hidden "
          src={semiCircle}
          alt=""
        />
        <img
          className=" hidden md:block md:absolute md:top-0 md:right-0 "
          src={tabletFooterCircle}
          alt=""
        />
      </div>
    </div>
  );
}
