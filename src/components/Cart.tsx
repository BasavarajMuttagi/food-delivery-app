import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="space-y-10 p-2 w-full sm:w-[60%]">
      <div>
        {[1, 2, 3, 4].map(() => (
          <CartItem />
        ))}
      </div>

      <div className="border-b"></div>
      <OrderSummary />
      <div className="border-b"></div>
    </div>
  );
}

export default Cart;
