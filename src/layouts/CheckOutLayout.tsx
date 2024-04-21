import { createContext, useState } from "react";
import CheckOut from "../components/CheckOut";
import PaymentProcessing from "../components/PaymentProcessing";

export const PaymentContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);
function CheckOutLayout() {
  const [context, setContext] = useState(false);

  if (context) {
    return <PaymentProcessing />;
  }
  return (
    <PaymentContext.Provider value={[context, setContext]}>
      <CheckOut />
    </PaymentContext.Provider>
  );
}

export default CheckOutLayout;
