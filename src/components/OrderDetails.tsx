import { Square, Circle, DownloadSimple } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import apiClient from "../axios/apiClient";
import { useQuery } from "@tanstack/react-query";
import OrderSK from "../Skeletons/OrderSK";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { Order } from "../common/types";
import AddressInfo from "./AddressInfo";
import AddressInfoSK from "../Skeletons/AddressInfoSK";
import { usePDF } from "react-to-pdf";
import { InvoiceContext } from "../layouts/OrderDetailsLayout";
import { useContext } from "react";
function OrderDetail() {
  const data = useContext(InvoiceContext);
  const value = data[0];
  let { orderId } = useParams();
  const { toPDF, targetRef } = usePDF({ filename: `rasoi-${orderId}.pdf` });
  const getOneOrderByID = async () => {
    try {
      const result = await apiClient().get(`/order/getOneOrder/${orderId}`);
      return result.data as Order;
    } catch (error) {
      enqueueSnackbar({
        message: "something went wrong, try again later",
        variant: "error",
      });
    }
  };
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["OneOrderByID"],
    queryFn: async () => await getOneOrderByID(),
  });

  if (isLoading) {
    return (
      <div className="bg-white mt-2 border space-y-4 pb-14  p-2 w-full sm:w-[60%] ">
        <div className="space-y-3">
          <div className="italic font-courgette capitalize text-3xl text-yellow-400 sm:text-5xl">
            Rasoi
          </div>
          <div className="text-sm font-medium text-slate-800/80 mt-5">
            Experience India on a Plate: Where Flavour Meets Tradition
          </div>
        </div>
        <AddressInfoSK />
        <OrderSK />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="space-y-4 mt-2 border pb-14 p-2 w-full sm:w-[60%] bg-white">
        <div className="space-y-5 p-2" ref={targetRef}>
          <div className="space-y-3">
            <div className="italic font-courgette capitalize text-3xl text-yellow-400 sm:text-5xl">
              Rasoi
            </div>
            <div className="text-sm font-medium text-slate-800/80 mt-5">
              Experience India on a Plate: Where Flavour Meets Tradition
            </div>
          </div>
          <AddressInfo />
          <div className="p-2 space-y-2 rounded border w-full bg-white">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">Delivery</div>
                <div className="text-xs font-semibold text-slate-600">
                  Order ID: {order?.id}
                </div>
                <div className="text-xs font-medium text-slate-500">
                  {new Date(order!.createdAt.toString()).toLocaleString()}
                </div>
              </div>
              <div className="text-xs font-medium text-green-500 rounded p-1 bg-green-50 border border-green-500 w-fit h-fit">
                DELIVERED
              </div>
            </div>
            <div className="border-b"></div>
            <div className="space-y-2">
              {order?.OrderItem.map((eachItem) => (
                <div className="flex items-center space-x-1" key={eachItem.id}>
                  <div className="relative scale-75">
                    <Square
                      size={30}
                      className={twMerge(
                        eachItem.menuItem.dietType == "VEG"
                          ? "text-green-400"
                          : "text-red-400"
                      )}
                    />
                    <Circle
                      size={16}
                      weight="fill"
                      className={twMerge(
                        "absolute inset-[7px]",
                        eachItem.menuItem.dietType == "VEG"
                          ? "text-green-400"
                          : "text-red-400"
                      )}
                    />
                  </div>
                  <div className="text-xs font-medium flex justify-between items-center w-full">
                    <span>{eachItem.menuItem.name}</span>
                    <span>{eachItem.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-b"></div>
            {order?.couponCode && (
              <div className="space-y-4">
                <div className="text-xs font-medium flex justify-between items-center w-full px-2">
                  <span>Coupon Code</span>
                  <span className="p-1  bg-violet-100 rounded border  text-violet-500 border-violet-500">
                    {order.couponCode}
                  </span>
                </div>
                <div className="text-xs font-medium flex justify-between items-center w-full px-2">
                  <span>Discount</span>
                  <span className=" text-green-400 text-sm tracking-wider">
                    - ₹{order.discountValue}
                  </span>
                </div>
                <div className="border-b"></div>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">
                ₹ {order?.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <button
          disabled={value}
          className={twMerge(
            "text-xs flex items-center space-x-2 font-semibold text-blue-400 pl-2",
            value ? "text-slate-500 cursor-not-allowed" : ""
          )}
          onClick={() => toPDF()}
        >
          <DownloadSimple size={15} weight="bold" />
          <span>Download Invoice</span>
        </button>
      </div>
    </>
  );
}

export default OrderDetail;
