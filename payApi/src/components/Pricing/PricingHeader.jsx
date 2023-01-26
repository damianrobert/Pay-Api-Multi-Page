import shape from "../../assets/cornerShape.svg";
import tabletCorner from "../../assets/cornerTablet.svg";

export default function PricingHeader() {
  return (
    <div className=" w-[375px] md:w-[768px] mx-auto relative ">
      <div>
        <img
          className=" absolute top-[-130px] right-0 md:hidden "
          src={shape}
          alt=""
        />
      </div>

      <div>
        <img
          className=" hidden md:block md:absolute top-[-130px] right-0 z-[-1] "
          src={tabletCorner}
          alt=""
        />
      </div>

      <div className=" w-[327px] h-[36px] mx-auto mt-[50px] ">
        <h1
          className=" font-[dm-Serif] text-center text-[#36536b] text-[32px] leading-[36px]
          md:text-[48px] "
        >
          Pricing
        </h1>
      </div>
    </div>
  );
}
