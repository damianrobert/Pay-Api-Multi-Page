import { Link } from "react-router-dom";
import logo from "../../assets/FooterLogo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import semiCircle from "../../assets/FooterSemiCircle.svg";

export default function AboutFooter() {
  return (
    <div className=" relative ">
      <div className=" w-[328px] h-[180px] mx-auto mt-[80px] ">
        <h1
          className=" font-[dmSerif] w-fit h-[36px] mx-auto text-[32px] leading-[36px] text-center 
        text-[#36536B] "
        >
          Ready to start?
        </h1>

        <div className=" w-[327px] mt-[24px] ">
          <input
            className=" bg-[#FBFCFE] w-full h-[48px] rounded-[24px] pl-[27px] mb-[16px] outline-none  "
            type="email"
            placeholder="Enter email adress"
          />

          <button className=" bg-[#BA4270] w-full h-[48px] rounded-[24px] text-[#ffffff] mb-[20px] ">
            Schedule a demo
          </button>
        </div>
      </div>

      <div className=" w-[375px] h-[353px] mx-auto bg-[#1b262f] mt-[121px] pt-[41px] ">
        <div className=" w-fit mx-auto ">
          <Link to="/" className=" hover:cursor-pointer ">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className=" w-[58px] h-[115px] mx-auto mt-[40px] flex flex-col justify-between ">
          <Link
            to="/PricingPage"
            className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
          hover:cursor-pointer z-[1]  "
          >
            Pricing
          </Link>
          <Link
            to="/AboutPage"
            className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
          hover:cursor-pointer z-[1]  "
          >
            About
          </Link>
          <p
            className=" text-[15px] text-[#FBFCFE] leading-[28px] mix-blend-normal opacity-70 font-bold
          hover:cursor-pointer z-[1]  "
          >
            Contact
          </p>
        </div>

        <div className=" w-[120px] h-[24px] mx-auto flex justify-between mt-[50px] ">
          <img className=" hover:cursor-pointer z-[2] " src={facebook} alt="" />
          <img className=" hover:cursor-pointer z-[2] " src={twitter} alt="" />
          <img className=" hover:cursor-pointer z-[2] " src={linkedin} alt="" />
        </div>

        <img src={semiCircle} alt="" className=" absolute bottom-0 " />
      </div>
    </div>
  );
}
