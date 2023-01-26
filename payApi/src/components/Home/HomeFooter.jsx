import { Link } from "react-router-dom";
import semiCircle from "../../assets/FooterSemiCircle.svg";
import tabletFooterCircle from "../../assets/tabletFooterCircle.svg";
import logo from "../../assets/FooterLogo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

export default function HomeFooter() {
  return (
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

      <img className=" absolute bottom-0 md:hidden " src={semiCircle} alt="" />
      <img
        className=" hidden md:block md:absolute md:top-0 md:right-0 "
        src={tabletFooterCircle}
        alt=""
      />
    </div>
  );
}
