import { Circle, Square } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { Order } from "../common/types";

function OrderCard({ order }: { order: Order }) {
  return (
    <div className=" p-2 space-y-2 rounded border w-full bg-white">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-700">Delivery</div>
          <div className="text-xs font-semibold text-slate-600">
            Order ID: {order.id}
          </div>
          <div className="text-xs font-medium text-slate-500">
            {new Date(order.createdAt.toString()).toLocaleString()}
          </div>
        </div>
        <div className="text-xs font-medium text-green-500 rounded p-1 bg-green-50 border border-green-500 w-fit h-fit">
          DELIVERED
        </div>
      </div>
      <div className="border-b"></div>
      <div className="space-y-2">
        {order.OrderItem.map((eachItem) => (
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
      {order.couponCode && (
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
          ₹ {order.total.toFixed(2)}
        </span>
        <button className="text-white bg-red-500 rounded p-2 text-sm font-semibold">
          Reorder
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
