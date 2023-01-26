import peopleImage from "../../assets/AboutImage.png";
import mediumPeopleImage from "../../assets/mediumPeople.png";

export default function AboutHero() {
  return (
    <div className=" w-[375px] mx-auto mt-[76px] md:w-[768px] ">
      <div className=" md:hidden ">
        <img src={peopleImage} alt="" />
      </div>

      <div className=" hidden md:block ">
        <img src={mediumPeopleImage} alt="" />
      </div>

      <div
        className=" w-[327px] h-[398px] md:w-[689px] md:h-[134px] mx-auto grid grid-cols-1 grid-rows-3 
        gap-y-[30px] mt-[16px] md:grid-cols-3 md:grid-rows-1 border-t-[1px] border-b-[1px] border-[#36536b36]
        md:border-0 md:mt-[70px] md:gap-x-5  "
      >
        <div className=" md:border-t-[1px] md:border-b-[1px] md:border-[#36536b36] md:py-[20px] ">
          <p
            className=" text-[16px] text-[#36536b] leading-[28px] text-center mix-blend-normal
           opcaity-70 "
          >
            Team members
          </p>
          <p className=" font-[dm-Serif] text-[56px] text-[#ba4270] leading-[72px] text-center ">
            300+
          </p>
        </div>

        <div className=" md:border-t-[1px] md:border-b-[1px] md:border-[#36536b36] md:py-[20px] ">
          <p
            className=" text-[16px] text-[#36536b] leading-[28px] text-center mix-blend-normal
           opcaity-70 "
          >
            Offices in the US
          </p>
          <p className=" font-[dm-Serif] text-[56px] text-[#ba4270] leading-[72px] text-center ">
            3
          </p>
        </div>

        <div className=" md:border-t-[1px] md:border-b-[1px] md:border-[#36536b36] md:py-[20px] ">
          <p
            className=" text-[16px] text-[#36536b] leading-[28px] text-center mix-blend-normal
           opcaity-70 "
          >
            Transactions analyzed
          </p>
          <p className=" font-[dm-Serif] text-[56px] text-[#ba4270] leading-[72px] text-center ">
            10M+
          </p>
        </div>
      </div>

      <div
        className=" w-[327px] h-[244px] mx-auto mt-[40px] md:w-[689px] md:h-[140px] md:flex 
      md:mt-[70px] "
      >
        <p
          className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center 
        md:w-[223px] md:text-left md:text-[32px] "
        >
          The culture
        </p>
        <p
          className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center 
        md:w-[456px] md:text-left md:mt-0 "
        >
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </div>

      <div className=" w-[327px] h-[244px] mx-auto mt-[40px] md:w-[689px] md:h-[140px] md:flex ">
        <p
          className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center 
        md:w-[223px] md:text-left md:text-[32px] "
        >
          The People
        </p>
        <p
          className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center 
        md:w-[456px] md:text-left md:mt-0 "
        >
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
    </div>
  );
}
