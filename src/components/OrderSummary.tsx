import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import useFoodStore from "../../store";
import OrderSummarySK from "../Skeletons/OrderSummarySK";
import { ArrowRight, CircleNotch, SealCheck } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { Item, QuoteType } from "../common/types";

function OrderSummary() {
  const {
    itemsArray,
    coupon: savedCoupon,
    setCoupon: saveNewCoupon,
    resetCoupon,
    resetItemsArray,
  } = useFoodStore();
  const [isSpin, setIsSpin] = useState(false);
  const [isSpinQuote, setIsSpinQuote] = useState(false);

  const [couponInput, setCouponInput] = useState(savedCoupon);

  const navigate = useNavigate();

  const getQuote = async () => {
    setIsSpinQuote(true);
    const result = await apiClient()
      .post("/order/getquote", {
        items: itemsArray,
        couponCode: couponInput,
      })
      .finally(() => {
        setIsSpinQuote(false);
      });
    const response = result.data as QuoteType;

    if (response.isDiscountApplied && response.discountError === false) {
      saveNewCoupon(couponInput);
    }

    if (response.isDiscountApplied && response.discountError === true) {
      resetCoupon();
      setCouponInput("");
      enqueueSnackbar({
        message: response.discount?.error,
        variant: "error",
      });
    }

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
      .post("/order/create", {
        items: filterItems(itemsArray),
        couponCode: savedCoupon ? couponInput : "",
      })
      .then(() => {
        enqueueSnackbar("Order Created!", { variant: "success" });
        resetItemsArray();
        resetCoupon();
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
    refetch,
  } = useQuery<QuoteType>({
    queryKey: ["quote", itemsArray],
    queryFn: async () => await getQuote(),
    enabled: !!itemsArray.length,
    refetchOnWindowFocus: false,
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
          <div className="text-slate-500 font-medium space-x-3">
            {quote?.isDiscountApplied && !quote.discountError ? (
              <span>₹ {quote?.discount?.originalSubTotal.toFixed(2)}</span>
            ) : (
              <span>₹ {quote?.subtotal.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-slate-600 font-medium">Discount</div>
          <div className="text-green-500 font-medium">
            {quote?.discount?.saved && (
              <span>- ₹ {quote?.discount?.saved.toFixed(2)}</span>
            )}
            {!quote?.discount?.saved && (
              <span className="text-slate-500 font-medium">0</span>
            )}
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
      <div className="p-4 rounded border w-full flex justify-between">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="CODE"
            className="bg-neutral-50 outline-none w-full no-underline"
            value={couponInput}
            onChange={(e) => {
              setCouponInput(e.target.value.toUpperCase());
            }}
          />
          {savedCoupon && !isSpinQuote && (
            <SealCheck
              size={32}
              weight="fill"
              className="mx-5 text-green-500"
            />
          )}
        </div>
        {!savedCoupon && !isSpinQuote && (
          <button
            className={twMerge(
              "text-xl font-semibold tracking-wider",
              !(couponInput.length > 0)
                ? "cursor-not-allowed text-gray-400"
                : ""
            )}
            onClick={() => {
              refetch(), setIsSpinQuote(true);
            }}
            disabled={!(couponInput.length > 0) || isSpin}
          >
            Apply
          </button>
        )}
        {isSpinQuote && (
          <CircleNotch size={32} className="inline ml-2 animate-spin" />
        )}
        {savedCoupon && !isSpinQuote && (
          <button
            disabled={isSpin}
            className="text-xl font-semibold tracking-wider"
            onClick={async () => {
              await resetCoupon(),
                setCouponInput(""),
                setTimeout(() => {
                  refetch(), setIsSpinQuote(true);
                }, 200);
            }}
          >
            Clear
          </button>
        )}
      </div>
      <div className=" sm:flex justify-end">
        <button
          className={twMerge(
            "w-full p-2 rounded-sm  outline outline-1 outline-slate-300   bg-green-600 text-white text-xl font-bold sm:max-w-[310px]",
            isSpin||isSpinQuote ? "bg-green-600/40 cursor-not-allowed" : ""
          )}
          disabled={isSpin || isSpinQuote}
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
