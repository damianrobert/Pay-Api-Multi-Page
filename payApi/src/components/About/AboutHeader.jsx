import corner from "../../assets/cornerShape.svg";

export default function AboutHeader() {
  return (
    <div className=" w-[375px] mx-auto ">
      <img className=" absolute top-0 right-0 " src={corner} alt="" />
      <div className=" w-[327px] h-[152px] mx-auto ">
        <p
          className=" font-[dm-Serif] text-[#36536b] text-[32px] leading-[36px] text-center
        mt-[48px] "
        >
          We empower innovators by delivering access to the financial system
        </p>
      </div>

      <div className=" w-[327px] h-[244px] mx-auto mt-[40px] ">
        <p className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center ">
          Our vision
        </p>
        <p className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center ">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </div>

      <div className=" w-[327px] h-[244px] mx-auto mt-[40px] ">
        <p className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center ">
          Our Bussines
        </p>
        <p className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center ">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
    </div>
  );
}
