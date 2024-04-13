import BottomNav from "../components/BottomNav";

import MenuSideNav from "../components/MenuSideNav";
import NavBar from "../components/NavBar";
import Orders from "../components/Orders";

function OrdersLayout() {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
        <MenuSideNav />
      </div>
      <div className="pb-10 overflow-y-scroll scroll-smooth no-scrollbar sm:flex sm:items-start sm:justify-center">
        <Orders />
      </div>
      <BottomNav />
    </div>
  );
}

export default OrdersLayout;
