import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/payApiLogo.svg";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const scrollClose = () => {
    if (menu === true) {
      setMenu(!menu);
    } else {
      return;
    }
  };
  return (
    <div
      className=" w-[327px] h-[38px] md:w-[689px] mx-auto mt-[40px] flex justify-between items-center 
    "
    >
      <Link
        to="/"
        className=" hover:cursor-pointer md:inline-block md:mr-[64px] "
      >
        <img src={logo} alt="" />
      </Link>

      <div
        className={
          menu ? `hidden md:hidden ` : ` hover:cursor-pointer z-[5] md:hidden `
        }
        onClick={handleMenu}
      >
        <img className="hover:cursor-pointer " src={hamburgerMenu} alt="" />
      </div>

      <div
        className={
          menu
            ? `w-[300px] h-screen bg-[#1b262f] z-[3] absolute top-0 left-[75px] duration-700 md:hidden `
            : `w-[300px] h-screen bg-[#1b262f] z-[3] absolute top-0 left-[100%] duration-700 md:hidden `
        }
        onScroll={scrollClose}
      >
        <div className=" w-[249px] h-[1px] bg-[#fbfcfe] absolute top-[95px] left-[24px] md:hidden "></div>

        <button
          className=" bg-[#BA4270] w-[252px] h-[48px] rounded-[24px] text-[#ffffff] mb-[20px] 
        absolute top-[300px] left-[24px] "
        >
          Schedule a demo
        </button>
      </div>

      <div
        className={
          menu
            ? ` w-[249px] absolute top-[139px] left-[100px] z-[5] duration-700 md:hidden `
            : ` w-[249px] absolute top-[139px] left-[100%] z-[5] duration-700 md:hidden  `
        }
      >
        <div
          className=" text-[20px] font-bold leading-[24px] text-center text-[#fbfcfe] opacity-70 
          mb-[32px] hover:cursor-pointer "
        >
          <Link to="/PricingPage" onClick={handleMenu}>
            Pricing
          </Link>
        </div>

        <div
          className=" text-[20px] font-bold leading-[24px] text-center text-[#fbfcfe] opacity-70 
           mb-[32px] hover:cursor-pointer "
        >
          <Link to="/AboutPage" onClick={handleMenu}>
            About
          </Link>
        </div>

        <div
          className=" text-[20px] font-bold leading-[24px] text-center text-[#fbfcfe] opacity-70 
          hover:cursor-pointer "
        >
          <Link to="/ContactPage">Contact</Link>
        </div>
      </div>

      <img
        className={
          menu
            ? ` hover:cursor-pointer absolute left-[320px] top-[48px] z-[5] duration-700 md:hidden `
            : ` hover:cursor-pointer absolute left-[100%] top-[48px] z-[5] md:hidden `
        }
        src={close}
        alt=""
        onClick={handleMenu}
      />

      <div className=" hidden md:block ">
        <p
          className=" inline-block mr-[40px] text-[#36536b] text-[15px] font-bold leading-[18px] 
        mix-blend-normal opacity-70 "
        >
          Pricing
        </p>
        <p
          className=" inline-block mr-[40px] text-[#36536b] text-[15px] font-bold leading-[18px] 
        mix-blend-normal opacity-70 "
        >
          About
        </p>
        <p
          className=" inline-block mr-[40px] text-[#36536b] text-[15px] font-bold leading-[18px] 
        mix-blend-normal opacity-70 "
        >
          Contact
        </p>
      </div>

      <div className=" hidden md:block ">
        <button className="    bg-[#BA4270] w-[173px] h-[48px] rounded-[24px] text-[#ffffff] ">
          Schedule a demo
        </button>
      </div>
    </div>
  );
}
