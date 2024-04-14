import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import useFoodStore, { Item } from "../../store";
import OrderSummarySK from "../Skeletons/OrderSummarySK";
import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";

function OrderSummary() {
  const [isSpin, setIsSpin] = useState(false);

  const navigate = useNavigate();
  const { itemsArray } = useFoodStore();

  const getAllOrders = async () => {
    const result = await apiClient().post("/order/getquote", {
      items: itemsArray,
    });
    return result.data;
  };

  const createOrder = async () => {
    const filterItems = (itemsArray: Item[]) => {
      return itemsArray.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
        price: item.price,
      }));
    };

    setIsSpin(true);
    await apiClient()
      .post("/order/create", { items: filterItems(itemsArray) })
      .then(() => {
        enqueueSnackbar("Order Created!", { variant: "success" });
        navigate("/orders");
      })
      .catch((error: AxiosError) => {
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message || "Something Went Wrong!", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  const {
    isLoading,
    isError,
    data: quote,
  } = useQuery<QuoteType>({
    queryKey: ["quote", itemsArray],
    queryFn: async () => await getAllOrders(),
    enabled: !!itemsArray.length,
  });

  if (isLoading) {
    return <OrderSummarySK />;
  }

  if (isError) {
    return <OrderSummarySK error={"Something went wrong, Please refresh"} />;
  }

  return (
    <div className="space-y-7">
      <div className="space-y-6 w-full border p-5 rounded">
        <div className="text-lg text-slate-800 font-bold">Order Summary</div>
        <div className="flex justify-between items-center">
          <div className="text-slate-600 font-medium">Sub total</div>
          <div className="text-slate-500 font-medium">
            ₹ {quote?.subtotal.toFixed(2)}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-slate-600 font-medium">Tax</div>
          <div className="text-slate-500 font-medium">
            ₹ {quote?.tax.toFixed(2)}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-slate-700 font-bold">Total</div>
          <div className="text-slate-500 font-semibold">
            ₹ {quote?.GrandTotal.toFixed(2)}
          </div>
        </div>
      </div>
      <div className=" sm:flex justify-end">
        <button
          className={twMerge(
            "w-full p-2 rounded-sm  outline outline-1 outline-slate-300   bg-green-600 text-white text-xl font-bold sm:max-w-[310px]"
          )}
          onClick={() => createOrder()}
        >
          Order Now
          {isSpin && (
            <CircleNotch size={32} className="inline ml-2 animate-spin" />
          )}
          {!isSpin && <ArrowRight size={32} className="inline ml-2" />}
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;

type QuoteType = {
  subtotal: number;
  tax: number;
  GrandTotal: number;
};
