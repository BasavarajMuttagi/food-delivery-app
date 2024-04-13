import { Square, Circle } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

function CartItem({ dietType = "VEG" }) {
  return (
    <div className="w-full rounded  flex justify-between items-center p-2">
      <div className="flex justify-between items-center space-x-2 text-xs font-medium">
        <div className="relative scale-75">
          <Square
            size={30}
            className={twMerge(
              dietType == "VEG" ? "text-green-400" : "text-red-400"
            )}
          />
          <Circle
            size={16}
            weight="fill"
            className={twMerge(
              "absolute inset-[7px]",
              dietType == "VEG" ? "text-green-400" : "text-red-400"
            )}
          />
        </div>
        <span>{"Veg Parcel"}</span>
      </div>
      <span className="text-xs font-medium">{2}</span>
      <div className="flex justify-around items-center bg-red-500 rounded text-white text-xs font-medium">
        <button className="px-2 py-1">-</button>
        <span className="px-2 py-1">{2}</span>
        <button className="px-2 py-1">+</button>
      </div>
    </div>
  );
}

export default CartItem;
