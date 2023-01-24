import finances from "../../assets/PersonalFinances.svg";
import banking from "../../assets/Banking.svg";
import payments from "../../assets/Payments.svg";

export default function HomeHero2() {
  return (
    <div className=" w-[375px] mx-auto mt-[600px] ">
      <div className=" w-[328px] h-[936px] mx-auto  flex flex-col justify-around ">
        <div className=" w-[328px] h-[280px] ">
          <div className=" w-[106px] h-[106px] rounded-[50%] bg-[#36536B] mx-auto relative ">
            <img
              className=" absolute left-[33px] top-[28px] "
              src={finances}
              alt=""
            />
          </div>

          <div className=" w-[328px] h-[141px]  ">
            <p
              className=" w-fit mx-auto text-[18px] font-bold leading-[25px] text-center text-[#36536B]
            mt-[24px] "
            >
              Personal Finances
            </p>
            <p
              className=" w-fit mx-auto text-[15px] leading-[25px] text-center text-[#6C8294] 
            mt-[16px] "
            >
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
        </div>

        <div className=" w-[328px] h-[280px] ">
          <div className=" w-[106px] h-[106px] rounded-[50%] bg-[#36536B] mx-auto relative ">
            <img
              className=" absolute left-[33px] top-[28px] "
              src={banking}
              alt=""
            />
          </div>

          <div className=" w-[328px] h-[141px]  ">
            <p
              className=" w-fit mx-auto text-[18px] font-bold leading-[25px] text-center text-[#36536B]
            mt-[24px] "
            >
              Banking & Coverage
            </p>
            <p
              className=" w-fit mx-auto text-[15px] leading-[25px] text-center text-[#6C8294] 
            mt-[16px] "
            >
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
        </div>

        <div className=" w-[328px] h-[280px] ">
          <div className=" w-[106px] h-[106px] rounded-[50%] bg-[#36536B] mx-auto relative ">
            <img
              className=" absolute left-[33px] top-[40px] "
              src={payments}
              alt=""
            />
          </div>

          <div className=" w-[328px] h-[141px]  ">
            <p
              className=" w-fit mx-auto text-[18px] font-bold leading-[25px] text-center text-[#36536B]
            mt-[24px] "
            >
              Consumer Payments
            </p>
            <p
              className=" w-fit mx-auto text-[15px] leading-[25px] text-center text-[#6C8294] 
            mt-[16px] "
            >
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-[328px] h-[180px] mx-auto ">
        <h1
          className=" font-[dmSerif] w-fit h-[36px] mx-auto text-[32px] leading-[36px] text-center 
        text-[#36536B] "
        >
          Ready to start?
        </h1>

        <div className=" w-[327px] mt-[24px] ">
          <input
            className=" bg-[#FBFCFE] w-full h-[48px] rounded-[24px] pl-[27px] mb-[16px] outline-none  "
            type="email"
            placeholder="Enter email adress"
          />

          <button className=" bg-[#BA4270] w-full h-[48px] rounded-[24px] text-[#ffffff] mb-[20px] ">
            Schedule a demo
          </button>
        </div>
      </div>
    </div>
  );
}
