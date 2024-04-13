import PaymentUpiCard from "./PaymentUpiCard";
import googlepay from "../assets/googlepay.png";
import phonepe from "../assets/phonepe.png";
import amazonpay from "../assets/amazonpay.png";
import paytm from "../assets/paytm.png";
import myqr from "../assets/adobe-express-qr-code.png";

function PaymentGrid() {
  return (
    <div className="space-y-10 p-2">
      <div className="w-full">
        <img src={myqr} alt="myqr" className="aspect-square w-full border" />
        <p className="text-lg font-semibold text-slate-700 text-center">
          Scan the QR code to pay
        </p>
      </div>
      <div className="border-b"></div>
      <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-7">
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
