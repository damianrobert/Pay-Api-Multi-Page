import ReactCodeSinppet from "react-code-snippet";
import phone1 from "../../assets/heroPhone1.svg";
import phone2 from "../../assets/heroPhone2.svg";

export default function HomeHero() {
  return (
    <div className=" w-[375px] md:w-[768px] mx-auto mt-[32px] ">
      <div className=" w-[375px] h-[429px] md:w-[573px] md:mx-auto ">
        <div
          className=" w-[328px] h-[209px] ml-[14px] bg-[#1B262F] rounded-[8px] overflow-hidden 
        md:mx-auto "
        >
          <div className=" w-full h-[30px] bg-[#2E3F4D] py-[10px] pl-[10px] mb-[20px] ">
            <div className=" w-[45px] flex justify-around ">
              <div className=" w-[11px] h-[11px] rounded-[50%] bg-[#BA4270] "></div>
              <div className=" w-[11px] h-[11px] rounded-[50%] bg-[#527695] "></div>
              <div className=" w-[11px] h-[11px] rounded-[50%] bg-[#36536B] "></div>
            </div>
          </div>
          <p className=" w-[100px] text-[10px] text-[#FBFCFE]  ">
            <pre>
              <p className=" pl-[10px] ">
                &lt;form id="form-id" method="GET"&gt; &lt;/form&gt;
              </p>
              <p>
                <p className=" pl-[20px] "> &lt;script </p>
                <p className=" pl-[40px] ">
                  src="https://loremipsum.com/api.js"
                </p>
                <p className=" pl-[40px] ">
                  data-client-name="Your Company's Name"{" "}
                </p>
                <p className=" pl-[40px] ">data-form-id="form-id"</p>
                <p className=" pl-[40px] ">data-key="test_key"</p>
                <p className=" pl-[40px] ">data-product="transactions"</p>
                <p className=" pl-[40px] ">data-env="sandbox" &gt;</p>
                <p className=" pl-[20px] ">&lt;/script&gt;</p>
              </p>
            </pre>
          </p>
        </div>

        <div
          className=" w-[328px] h-[172px] mt-[48px] mx-auto 
        md:w-[573px]  "
        >
          <h1
            className=" font-[dmSerif] text-[36px] leading-[36px] text-center text-[#36536B] 
          mb-[24px] font-medium md:text-[48px] "
          >
            Easy to implement
          </h1>
          <p className=" text-[15px] leading-[28px] text-center text-[#6C8294] ">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>

        <div className=" w-[328px] md:w-[573px] h-[482px] mx-auto  relative ">
          <div className=" relative ">
            <img
              className=" absolute left-[-25px] md:left-[80px] "
              src={phone1}
              alt=""
            />
            <img
              className=" absolute left-[130px]  md:left-[260px]"
              src={phone2}
              alt=""
            />
          </div>

          <div className=" w-full h-[144px] mx-auto absolute top-[400px] ">
            <h1
              className=" text-[36px] text-[#36536B] leading-[36px] text-center 
            font-[dmSerif] md:text-[48px] md:mb-[40px] "
            >
              Simple UI & UX
            </h1>
            <p className=" text-[15px] text-[#6C8294] leading-[28px] text-center ">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
