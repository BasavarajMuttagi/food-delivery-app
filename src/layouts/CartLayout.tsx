import BottomNav from "../components/BottomNav";
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";

function CartLayout() {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
      </div>
      <div className="pb-10 h-full overflow-y-scroll no-scrollbar sm:flex sm:items-start sm:justify-center">
        <Cart />
      </div>
      <BottomNav />
    </div>
  );
}

export default CartLayout;
