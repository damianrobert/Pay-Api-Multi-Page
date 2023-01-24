import peopleImage from "../../assets/AboutImage.png";

export default function AboutHero() {
  return (
    <div className=" w-[375px] mx-auto mt-[76px] ">
      <div>
        <img src={peopleImage} alt="" />
      </div>

      <div className=" w-[327px] mx-auto mt-[48px] border-[1px] border-[#36536b] opacity-20 "></div>

      <div className=" w-[327px] h-[398px] mx-auto flex flex-col justify-between mt-[16px] ">
        <div>
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

        <div>
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

        <div>
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

      <div className=" w-[327px] mx-auto mt-[48px] border-[1px] border-[#36536b] opacity-20 "></div>

      <div className=" w-[327px] h-[244px] mx-auto mt-[40px] ">
        <p className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center ">
          The culture
        </p>
        <p className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center ">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </div>

      <div className=" w-[327px] h-[244px] mx-auto mt-[40px] ">
        <p className=" font-[dm-Serif] text-[#36536b] text-[24px] leading-[32px] text-center ">
          The People
        </p>
        <p className=" mt-[16px] text-[#6c8294] text-[15px] leading-[28px] text-center ">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
    </div>
  );
}
