import semiCircle from "../../assets/Bitmap.svg";
import darkCircle from "../../assets/darkTabletCircle.svg";
import tesla from "../../assets/Tesla.svg";
import microsoft from "../../assets/Microsoft.svg";
import hp from "../../assets/Hp.svg";
import oracle from "../../assets/Oracle.svg";
import google from "../../assets/Google.svg";
import nvidia from "../../assets/Nvidia.svg";

export default function WorkWith() {
  return (
    <div
      className=" w-[375px] h-[670px] md:w-[768px] bg-[#1B262F] mx-auto mt-[80px] relative 
    overflow-hidden"
    >
      <img className=" absolute top-0 md:hidden " src={semiCircle} alt="" />

      <img
        className=" hidden md:block md:absolute md:top-0  "
        src={darkCircle}
        alt=""
      />

      <div
        className=" w-[280px] h-[154px] absolute top-[40px] left-[50px] md:w-[536px] md:h-[103px] grid place-items-center 
      grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2  md:absolute md:top-[88px] md:left-[120px]  "
      >
        <div>
          <img src={tesla} alt="" />
        </div>

        <div>
          <img src={microsoft} alt="" />
        </div>

        <div>
          <img src={hp} alt="" />
        </div>

        <div>
          <img src={oracle} alt="" />
        </div>

        <div>
          <img src={google} alt="" />
        </div>

        <div>
          <img src={nvidia} alt="" />
        </div>
      </div>

      <div
        className=" w-[327px] h-[300px] md:w-[457px] md:h-[272px] absolute top-[290px] left-[24px]
      md:top-[255px] md:left-[155px] "
      >
        <h1
          className=" w-full font-[dmSerif] text-[32px] text-[#FBFCFE] leading-[36px]
         text-center mb-[16px] md:text-[48px] md:leading-[56px] md:tracking-[-0.369231px] "
        >
          Who we work with
        </h1>

        <p className=" text-[15px] leading-[28px] text-[#cfcfcf] text-center  ">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
      </div>

      <div
        className=" absolute top-[542px] left-[123px] w-[128px] h-[48px] border-[1px] border-[#FBFCFE] text-[#FBFCFE]
      rounded-[24px] py-[10px] pl-[30px] hover:cursor-pointer hover:bg-[#FBFCFE] hover:text-[#1B262F] 
      md:left-[319px] "
      >
        About us
      </div>
    </div>
  );
}
