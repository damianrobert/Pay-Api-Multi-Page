import { useState } from "react";
import cornerShape from "../../assets/cornerShape.svg";
import tesla from "../../assets/dark-tesla.svg";
import microsoft from "../../assets/dark-microsoft.svg";
import hp from "../../assets/dark-hp.svg";
import oracle from "../../assets/dark-oracle.svg";
import google from "../../assets/dark-google.svg";
import nvidia from "../../assets/dark-nvidia.svg";
import tick from "../../assets/checkBox.svg";
import tabletCorner from "../../assets/cornerTablet.svg";

export default function ContactForm() {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className=" w-[375px] md:w-[768px] mx-auto relative ">
      <div className=" md:hidden ">
        <img
          className=" absolute top-[-130px] right-0  "
          src={cornerShape}
          alt=""
        />
      </div>

      <div className=" hidden md:block absolute top-[-130px] right-0 z-[-1] ">
        <img src={tabletCorner} alt="" />
      </div>

      <div className=" w-[327px] mx-auto mt-[48px] md:w-[573px] ">
        <h1
          className=" font-[dm-Serif] text-[32px] text-[#36536b] leading-[36px] text-center 
        md:text-[48px] md:leading-[56px] tracking-[-0.369231px] md:w-[500px] mx-auto "
        >
          Submit a help request and we’ll get in touch shortly.
        </h1>
      </div>

      <div className=" w-[327px] h-[499px] mx-auto mt-[40px] md:w-[445px]  ">
        <input
          className=" w-full h-[42px] border-b-[1px] border-[#36536b] mix-blend-normal
        opacity-50 bg-[#ffffff00] pl-[20px] pb-[17px] mb-[24px] outline-none "
          type="text"
          placeholder="Name"
        />

        <input
          className=" w-full h-[42px] border-b-[1px] border-[#36536b] mix-blend-normal
        opacity-50 bg-[#ffffff00] pl-[20px] pb-[17px] mb-[24px] outline-none "
          type="text"
          placeholder="Email Address"
        />

        <input
          className=" w-full h-[42px] border-b-[1px] border-[#36536b] mix-blend-normal
        opacity-50 bg-[#ffffff00] pl-[20px] pb-[17px] mb-[24px] outline-none "
          type="text"
          placeholder="Compnay Name"
        />

        <input
          className=" w-full h-[42px] border-b-[1px] border-[#36536b] mix-blend-normal
        opacity-50 bg-[#ffffff00] pl-[20px] pb-[17px] mb-[24px] outline-none "
          type="text"
          placeholder="Title"
        />

        <input
          className=" w-full h-[89px] border-b-[1px] border-[#36536b] mix-blend-normal
        opacity-50 bg-[#ffffff00] pl-[20px] pb-[70px] mb-[24px] outline-none "
          type="text"
          placeholder="Message"
        />

        <div
          className=" w-[327px] h-[50px] mx-auto mb-[24px] flex justify-between items-center 
        md:ml-0 "
        >
          <div
            className={
              check
                ? ` w-[24px] h-[24px] bg-[#BA4270] flex justify-center items-center `
                : ` w-[24px] h-[24px] bg-[#36536b] mix-blend-normal opacity-25 hover:cursor-pointer `
            }
            onClick={handleCheck}
          >
            <img
              className={check ? `hover:cursor-pointer ` : ` hidden `}
              src={tick}
              alt=""
            />
          </div>
          <div className=" w-[277px] h-[50px] text-[15px] text-[#36536b] leading-[25px]  ">
            Stay up-to-date with company announcements and updates to our API
          </div>
        </div>

        <div
          className=" w-[152px] h-[48px] border-[1px] border-[#36536b] rounded-[24px] flex 
          justify-center items-center "
        >
          <p className=" font-bold text-[15px] text-[#36536b] leading-[18px] text-center ">
            Submit
          </p>
        </div>
      </div>

      <div className=" w-[327px] mx-auto mt-[80px] md:w-[445px] ">
        <h1
          className=" font-[dm-Serif] text-[24px] text-[#36536b] leading-[32px] text-center
        mix-blend-normal opacity-75 "
        >
          Join the thousands of innovators already building with us
        </h1>

        <div
          className=" w-[279px] h-[154px] mx-auto mt-[32px] grid grid-cols-2 grid-rows-3 md:w-[541px]
         md:grid-cols-3 md:grid-rows-2 "
        >
          <div className="  ">
            <img src={tesla} alt="" />
          </div>
          <div className="  ">
            <img src={microsoft} alt="" />
          </div>
          <div className="  ">
            <img src={hp} alt="" />
          </div>
          <div className="  ">
            <img src={oracle} alt="" />
          </div>
          <div className="  ">
            <img src={google} alt="" />
          </div>
          <div className="  ">
            <img src={nvidia} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
