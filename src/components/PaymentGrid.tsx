import PaymentUpiCard from "./PaymentUpiCard";
import googlepay from "../assets/googlepay.png";
import phonepe from "../assets/phonepe.png";
import amazonpay from "../assets/amazonpay.png";
import paytm from "../assets/paytm.png";

function PaymentGrid() {
  return (
    <div className="space-y-5 p-2">
      <div className="text-lg text-slate-800 font-bold">Payment Methods</div>
      <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-7 lg:flex lg:justify-between">
        <PaymentUpiCard
          imageUrl={googlepay}
          brandname="Google Pay"
          upiId="food@okicici"
        />
        <PaymentUpiCard
          imageUrl={phonepe}
          brandname="Phone Pay"
          upiId="food@ybl"
        />
        <PaymentUpiCard
          imageUrl={amazonpay}
          brandname="Amazon Pay"
          upiId="food@apl"
        />
        <PaymentUpiCard imageUrl={paytm} brandname="PayTM" upiId="food@paytm" />
      </div>
    </div>
  );
}

export default PaymentGrid;
