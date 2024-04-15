import AddressInfo from "./AddressInfo";
import PaymentGrid from "./PaymentGrid";

function CheckOut() {
  return (
    <div className="bg-neutral-50 space-y-10 p-2 w-full sm:w-[60%]">
      <div className="text-2xl text-slate-800 font-bold">Checkout</div>
      <AddressInfo />
      <PaymentGrid />
    </div>
  );
}

export default CheckOut;
