import OrderSummary from "./OrderSummary";

function Cart() {
  return (
    <div className="h-full no-scrollbar flex flex-col space-y-5 justify-center  w-full p-2  overflow-y-scroll sm:w-[60%]">
      <div className="border-b"></div>
      <OrderSummary />
      <div className="border-b"></div>
    </div>
  );
}

export default Cart;
