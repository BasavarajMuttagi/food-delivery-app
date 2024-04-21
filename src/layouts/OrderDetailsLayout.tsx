import { createContext, useState } from "react";
import OrderDetails from "../components/OrderDetails";
export const InvoiceContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);
function OrderDetailsLayout() {
  const [context, setContext] = useState(false);
  return (
    <InvoiceContext.Provider value={[context, setContext]}>
      <OrderDetails />
    </InvoiceContext.Provider>
  );
}

export default OrderDetailsLayout;
