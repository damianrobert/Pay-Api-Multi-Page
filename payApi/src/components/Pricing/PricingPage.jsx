import PricingHeader from "../Pricing/PricingHeader";
import FreePlan from "./FreePlan";
import BasicPlan from "./BasicPlan";
import PremiumPlan from "./PremiumPlan";
import PricingFooter from "./PricingFooter";

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <FreePlan />
      <BasicPlan />
      <PremiumPlan />
      <PricingFooter />
    </>
  );
}
