import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loadingbg.svg";
import { CheckCircle } from "@phosphor-icons/react";

function OrderConfirmation() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-full bg-green-600  flex flex-col  overflow-x-hidden relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="space-y-8 text-center flex flex-col justify-center h-full text-xl text-white font-bold p-2 sm:text-3xl">
        <div className="flex justify-center items-center space-x-4  text-white">
          <CheckCircle
            size={120}
            weight="fill"
            className="text-center sm:w-40 h-40"
          />
        </div>
        <span className="px-5 text-3xl">Thank you for your order!</span>
        <div>
          Go to{" "}
          <span
            className="text-blue-600 cursor-pointer underline-offset-4 underline px-2 tracking-widest"
            onClick={() => navigate("/orders")}
          >
            orders
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
