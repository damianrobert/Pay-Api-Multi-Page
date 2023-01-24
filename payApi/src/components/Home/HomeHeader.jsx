import { Link } from "react-router-dom";
import headerSemiCircle from "../../assets/Bitmap.svg";
import headerPhone from "../../assets/headerPhone.svg";
import tabletCircle from "../../assets/tabletSemiCircle.svg";

export default function HomeHeader() {
  return (
    <div className=" w-[375px] md:w-[768px] mx-auto ">
      <div>
        <img
          className=" absolute top-0 z-[4] md:hidden "
          src={headerSemiCircle}
          alt=""
        />
      </div>

      <img
        className=" invisible md:visible md:absolute md:top-0 md:left-0 md:z-[-3] "
        src={tabletCircle}
        alt=""
      />

      <div className=" w-fit ml-[70px] md:ml-[280px] ">
        <img src={headerPhone} alt="" />
      </div>

      <div className=" w-[327px] h-[285px] mx-auto md:w-[573px] ">
        <p
          className=" font-[dmSerif] font-normal text-[32px] leading-[36px] text-[#36536B] text-center
        tracking-[-0.246154px] md:text-[48px] md:leading-[56px]  "
        >
          Start building with our APIs for absolutely free.
        </p>

        <div className=" w-[327px] mt-[24px] mx-auto md:w-[445px] md:h-[48px] md:relative ">
          <input
            className=" bg-[#FBFCFE] w-full h-[48px] rounded-[24px] pl-[27px] mb-[16px] outline-none "
            type="email"
            placeholder="Enter email adress"
          />

          <button
            className=" bg-[#BA4270] w-full h-[48px] rounded-[24px] text-[#ffffff] mb-[20px]
          md:w-[173px] md:absolute md:right-0 "
          >
            Schedule a demo
          </button>

          <div className=" w-fit mx-auto text-[15px] leading-[18px] text-[#6C8294] ">
            <p className=" inline-block ">
              Have any questions? &nbsp;
              <Link
                to="/ContactPage"
                className=" font-500 inline-block text-[#315776]  "
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
