import DealCard from "./DealCard";

function Deals() {
  return (
    <div className="space-y-10 p-2 w-full sm:w-[60%]">
      <DealCard
        label="FLAT OFF"
        code="FLAT125"
        description="Use code FLAT125 and get flat ₹125 off on order above ₹999. T&C Apply"
      />
      <DealCard
        label="20% OFF"
        code="SPECIALS"
        description="Use code SPECIALS and get 20% off on order above ₹200. T&C Apply"
      />
      <DealCard
        label="PhonePe"
        code="No Code"
        description="Pay Using PhonePe and stand a change win 30% of the order value. T&C Apply"
      />
    </div>
  );
}

export default Deals;
