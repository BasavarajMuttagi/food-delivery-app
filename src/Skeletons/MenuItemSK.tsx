import { Circle, Square } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function MenuItemCard() {
  const { pathname } = useLocation();

  return (
    <div className="max-h-52 h-full w-full rounded aspect-video p-3 bg-white flex justify-between items-center space-x-2 border">
      <div className="space-y-2 text-wrap w-full h-full">
        <div className="relative">
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
        <div className="text-xl font-semibold text-slate-800">
          <Skeleton className="w-full" />
        </div>
        <div className="text-xs font-medium text-slate-700">
          <Skeleton className="w-full" />
        </div>
        {pathname !== "/cart" && (
          <div className="text-lg font-semibold text-slate-800">
            <Skeleton className="w-full" />
          </div>
        )}
        {pathname == "/cart" && (
          <div className="text-xs font-semibold text-slate-600">
            <Skeleton className="w-full" />
          </div>
        )}
        {pathname == "/cart" && (
          <div className="text-sm font-semibold text-slate-800">
            <Skeleton className="w-full" />
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2  h-full shrink w-32 sm:max-h-30 sm:max-w-56 sm:w-full sm:h-full">
        <Skeleton className="w-full rounded aspect-square  sm:aspect-video" />
        <Skeleton className="w-full drop-shadow text-lg font-semibold rounded text-white px-2 py-1"/>
       
      </div>
    </div>
  );
}

export default MenuItemCard;
