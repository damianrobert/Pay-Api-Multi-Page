import corner from "../../assets/cornerShape.svg";
import tabletCorner from "../../assets/cornerTablet.svg";

export default function AboutHeader() {
  return (
    <div className=" w-[375px] md:w-[768px]  mx-auto relative ">
      <img
        className=" absolute top-[-130px] right-0 md:hidden"
        src={corner}
        alt=""
      />

      <img
        className=" hidden md:block absolute top-[-130px] right-0 z-[-1]  "
        src={tabletCorner}
        alt=""
      />
      <div className=" w-[327px] h-[152px] md:w-[573px] md:h-[178px] mx-auto ">
        <p
          className=" font-[dm-Serif] text-[#36536b] text-[32px] leading-[36px] text-center
        mt-[48px] md:text-[48px] md:leading-[56px] "
        >
          We empower innovators by delivering access to the financial system
        </p>
      </div>

      <div
        className=" w-[327px] h-[244px] mx-auto mt-[40px] md:w-[689px] md:h-[140px] md:flex 
      md:mt-[70px] "
      >
        <p
          className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center 
        md:w-[223px] md:text-left md:text-[32px] "
        >
          Our vision
        </p>
        <p
          className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center 
        md:w-[456px] md:text-left md:mt-0 "
        >
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </div>

      <div className=" w-[327px] h-[244px] mx-auto mt-[40px] md:w-[689px] md:h-[140px] md:flex ">
        <p
          className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center 
        md:w-[223px] md:text-left md:text-[32px] "
        >
          Our Bussines
        </p>
        <p
          className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center 
        md:w-[456px] md:text-left md:mt-0 "
        >
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
    </div>
  );
}
