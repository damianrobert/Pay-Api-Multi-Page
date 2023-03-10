import tick from "../../assets/tick.svg";

export default function FreePlan() {
  return (
    <div className=" w-[375px] mt-[48px] mx-auto md:w-[223px] md:m-0 ">
      <div className=" w-full mx-auto ">
        <div className=" w-full h-[32px] mx-auto ">
          <h1 className=" text-[24px] leading-[32px] text-[#BA4270] text-center font-[dem-Serif] ">
            Free Plan
          </h1>
        </div>

        <div className=" w-full h-[72px] mt-[81px] ">
          <p className=" font-[dm-Serif] text-[56px] leading-[72px] text-center text-[#36536B] ">
            $0.00
          </p>
        </div>
      </div>

      <div className=" w-full h-[1px] mx-auto bg-[#36536b90] mt-[30px] "></div>

      <div className=" w-[134px] h-[244px] mx-auto mt-[24px] ">
        <div className=" flex mb-[10px]  ">
          <img className=" mr-[10px] " src={tick} alt="" />
          Transactions
        </div>

        <div className=" flex mb-[10px] ">
          <img className=" mr-[10px] " src={tick} alt="" />
          Auth
        </div>

        <div className=" flex mb-[10px] ">
          <img className=" mr-[10px] " src={tick} alt="" />
          Identity
        </div>
        <div className=" ml-[25px] mb-[10px] text-[#36536b77] ">
          Investments
        </div>
        <div className=" ml-[25px] mb-[10px] text-[#36536b77] ">Assets</div>
        <div className=" ml-[25px] mb-[10px] text-[#36536b77] ">
          Liabilities
        </div>
        <div className=" ml-[25px] mb-[10px] text-[#36536b77] ">Income</div>
      </div>

      <div className=" w-full h-[1px] mx-auto bg-[#36536b90] mt-[30px] "></div>

      <div
        className=" w-[168px] h-[48px] mx-auto mt-[24px] rounded-[24px] border-[1px] border-[#36536B] flex 
      justify-center items-center text-[#36536B] font-bold "
      >
        <p>Request access</p>
      </div>
    </div>
  );
}
