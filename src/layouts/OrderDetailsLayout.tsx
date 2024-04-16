import { createContext, useState } from "react";
import BottomNav from "../components/BottomNav";
import MenuSideNav from "../components/MenuSideNav";
import NavBar from "../components/NavBar";
import OrderDetails from "../components/OrderDetails";
export const InvoiceContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);
function OrderDetailsLayout() {
  const [context, setContext] = useState(false);
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
        <MenuSideNav />
      </div>
      <div className="pb-10  overflow-y-scroll scroll-smooth no-scrollbar sm:flex sm:items-start sm:justify-center">
        <InvoiceContext.Provider value={[context, setContext]}>
          <OrderDetails />
        </InvoiceContext.Provider>
      </div>
      <BottomNav />
    </div>
  );
}

export default OrderDetailsLayout;
