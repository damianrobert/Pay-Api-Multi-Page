import PricingHeader from "../Pricing/PricingHeader";
import FreePlan from "./FreePlan";
import BasicPlan from "./BasicPlan";
import PremiumPlan from "./PremiumPlan";
import PricingFooter from "./PricingFooter";

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <div
        className=" w-fit mx-auto grid grid-cols-1 grid-rows-3  md:grid-cols-3 md:grid-rows-1
      gap-x-2.5 md:mt-[100px] "
      >
        <FreePlan />

        <BasicPlan />

        <PremiumPlan />
      </div>
      <PricingFooter />
    </>
  );
}
