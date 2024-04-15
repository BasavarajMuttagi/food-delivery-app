import { createContext, useState } from "react";
import BottomNav from "../components/BottomNav";

import CheckOut from "../components/CheckOut";
import NavBar from "../components/NavBar";
import bgImage from "../assets/loadingbg.svg";

export const PaymentContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);
function CheckOutLayout() {
  const [context, setContext] = useState(false);

  if (context) {
    return (
      <div
        className="h-screen w-full bg-violet-600  flex flex-col  overflow-x-hidden relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <span className="m-5 italic font-courgette capitalize text-4xl text-yellow-400 sm:text-5xl">
          Rasoi
        </span>
        <div className="space-y-8 text-center flex flex-col justify-center h-full text-xl text-violet-200 font-bold p-2 sm:text-3xl">
          <span>
            Payment processing underway—soon you'll be indulging in culinary
            bliss!
          </span>
          <div className="flex justify-center items-center space-x-4">
            <div className="h-4 w-4 bg-violet-200 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-violet-200 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-violet-200 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
      </div>
      <div className="pb-24 pt-10 overflow-y-scroll scroll-smooth no-scrollbar sm:flex sm:items-start sm:justify-center">
        <PaymentContext.Provider value={[context, setContext]}>
          <CheckOut />
        </PaymentContext.Provider>
      </div>
      <BottomNav />
    </div>
  );
}

export default CheckOutLayout;
