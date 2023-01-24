import tick from "../../assets/tick.svg";

export default function BasicPlan() {
  return (
    <div className=" w-[375px] mt-[48px] mx-auto ">
      <div className=" w-[327px] mx-auto ">
        <div className=" w-[327px] h-[32px] mx-auto ">
          <h1 className=" text-[24px] leading-[32px] text-[#BA4270] text-center font-[dem-Serif] ">
            Basic Plan
          </h1>
        </div>

        <div className=" w-[327px] h-[72px] mt-[81px] ">
          <p className=" font-[dm-Serif] text-[56px] leading-[72px] text-center text-[#36536B] ">
            $249.00
          </p>
        </div>
      </div>

      <div className=" w-[327px] h-[1px] mx-auto bg-[#36536b90] mt-[30px] "></div>

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
        <div className=" flex mb-[10px] ">
          <img className=" mr-[10px] " src={tick} alt="" />
          Investments
        </div>
        <div className=" flex mb-[10px] ">
          <img className=" mr-[10px] " src={tick} alt="" />
          Assets
        </div>
        <div className=" ml-[25px] mb-[10px] text-[#36536b77] ">
          Liabilities
        </div>
        <div className=" ml-[25px] mb-[10px] text-[#36536b77] ">Income</div>
      </div>

      <div className=" w-[327px] h-[1px] mx-auto bg-[#36536b90] mt-[30px] "></div>

      <div
        className=" w-[168px] h-[48px] mx-auto mt-[24px] rounded-[24px] border-[1px] border-[#36536B] flex 
      justify-center items-center text-[#36536B] font-bold "
      >
        <p>Request access</p>
      </div>
    </div>
  );
}
