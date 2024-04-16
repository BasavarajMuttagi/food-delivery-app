import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { useContext, useState } from "react";
import apiClient from "../axios/apiClient";
import { Item } from "../common/types";
import useFoodStore from "../../store";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { PaymentContext } from "../layouts/CheckOutLayout";
import delay from "delay";
type paymentProps = {
  imageUrl: string;
  brandname: string;
  upiId: string;
};

function PaymentUpiCard({ imageUrl, brandname, upiId }: paymentProps) {
  const data = useContext(PaymentContext);
  const setValue = data[1];
  const {
    itemsArray,
    coupon: savedCoupon,
    resetCoupon,
    resetItemsArray,
  } = useFoodStore();
  const [isSpin, setIsSpin] = useState(false);
  const navigate = useNavigate();
  const createOrder = async () => {
    if (itemsArray.length <= 0) {
      enqueueSnackbar({
        message: "Cart is empty, Please add items",
        variant: "warning",
      });

      return;
    }
    const filterItems = (itemsArray: Item[]) => {
      return itemsArray.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
        price: item.price,
      }));
    };

    setIsSpin(true);
    setValue(true);
    await delay(3000);
    await apiClient()
      .post("/order/create", {
        items: filterItems(itemsArray),
        couponCode: savedCoupon ? savedCoupon : "",
      })
      .then(() => {
        enqueueSnackbar("Order Created!", { variant: "success" });
        resetItemsArray();
        resetCoupon();
        navigate("/confirmation");
      })
      .catch((error: AxiosError) => {
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message || "Something Went Wrong!", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsSpin(false);
        setValue(false);
      });
  };
  return (
    <button
      onClick={() => createOrder()}
      disabled={isSpin}
      className={twMerge(
        "border aspect-square w-30 bg-neutral-200/25 rounded flex flex-col items-center justify-center space-y-2 hover:bg-white hover:duration-300 sm:w-40 lg:w-48",
        isSpin ? "brightness-50" : ""
      )}
    >
      <img src={imageUrl} />
      <div className="text-lg font-semibold text-slate-700">{brandname}</div>
      <div className="text-sm font-medium text-slate-500">{upiId}</div>
    </button>
  );
}

export default PaymentUpiCard;
