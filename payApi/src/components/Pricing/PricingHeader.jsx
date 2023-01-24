import shape from "../../assets/cornerShape.svg";

export default function PricingHeader() {
  return (
    <div>
      <div>
        <img className=" absolute top-0 right-0 " src={shape} alt="" />
      </div>

      <div className=" w-[327px] h-[36px] mx-auto mt-[50px] ">
        <h1
          className=" font-[dm-Serif] text-center text-[#36536b] text-[32px] leading-[36px] 
         "
        >
          Pricing
        </h1>
      </div>
    </div>
  );
}
