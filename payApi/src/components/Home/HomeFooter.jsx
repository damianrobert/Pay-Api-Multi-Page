import { Link } from "react-router-dom";
import semiCircle from "../../assets/FooterSemiCircle.svg";
import logo from "../../assets/FooterLogo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

export default function HomeFooter() {
  return (
    <div className=" w-[375px] h-[353px] mx-auto mt-[100px] bg-[#1B262F] relative  ">
      <div className=" w-fit mx-auto pt-[41px] ">
        <img src={logo} alt="" />
      </div>

      <div className=" w-[58px] h-[115px] mx-auto mt-[40px] flex flex-col justify-between  ">
        <Link
          to="/PricingPage"
          className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
        hover:cursor-pointer z-[1] "
        >
          Pricing
        </Link>
        <Link
          to="/AboutPage"
          className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
        hover:cursor-pointer z-[1] "
        >
          About
        </Link>
        <Link
          to="/ContactPage"
          className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
        hover:cursor-pointer z-[1] "
        >
          Contact
        </Link>
      </div>

      <div className=" w-[120px] h-[24px] mx-auto flex justify-between mt-[50px]  ">
        <img className=" hover:cursor-pointer z-[2] " src={facebook} alt="" />
        <img className=" hover:cursor-pointer z-[2] " src={twitter} alt="" />
        <img className=" hover:cursor-pointer z-[2] " src={linkedin} alt="" />
      </div>

      <img className=" absolute bottom-0 " src={semiCircle} alt="" />
    </div>
  );
}
