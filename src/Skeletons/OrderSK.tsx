import { Circle, Square } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function OrderSK() {
  return (
    <div className=" p-2 space-y-2 rounded border w-full bg-white">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-700">Delivery</div>
          <div className="text-xs font-semibold text-slate-600">
            <Skeleton className="w-56" />
          </div>
          <div className="text-xs font-medium text-slate-500">
            <Skeleton className="w-56" />
          </div>
        </div>
        <Skeleton className="w-20 text-xs font-medium  rounded p-1 bg-green-50  h-fit" />
      </div>
      <div className="border-b"></div>
      <div className="space-y-2">
        {[1, 2, 3].map((eachItem) => (
          <div className="flex items-center space-x-1" key={eachItem}>
            <div className="relative scale-75">
              <Square
                size={30}
                className={twMerge(true ? "text-green-400" : "text-red-400")}
              />
              <Circle
                size={16}
                weight="fill"
                className={twMerge(
                  "absolute inset-[7px]",
                  true ? "text-green-400" : "text-red-400"
                )}
              />
            </div>
            <div className="text-xs font-medium flex justify-between items-center w-full">
              <Skeleton className="w-28" />
              <Skeleton className="w-28" />
            </div>
          </div>
        ))}
      </div>
      <div className="border-b"></div>

      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold">
          <Skeleton className="w-28" />
        </span>
        <Skeleton className="text-white  rounded p-2 text-sm font-semibold w-20" />
      </div>
    </div>
  );
}

export default OrderSK;
