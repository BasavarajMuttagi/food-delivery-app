import { Circle, Square } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

function MenuItemCard({
  title,
  description,
  price,
  imageUrl,
  diet,
}: {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  diet: "VEG" | "NON_VEG";
}) {
  return (
    <div className="max-h-52 w-full rounded aspect-video p-3 bg-white flex justify-between items-center space-x-2 border">
      <div className="space-y-2 text-wrap">
        <div className="relative">
          <Square
            size={30}
            className={twMerge(
              diet == "VEG" ? "text-green-400" : "text-red-400"
            )}
          />
          <Circle
            size={16}
            weight="fill"
            className={twMerge(
              "absolute inset-[7px]",
              diet == "VEG" ? "text-green-400" : "text-red-400"
            )}
          />
        </div>
        <div className="text-xl font-semibold text-slate-800">{title}</div>
        <div className="text-xs font-medium text-slate-700">{description}</div>
        <div className="text-lg font-semibold text-slate-800">₹ {price}</div>
      </div>
      <div className="space-y-2 shrink-0 ">
        <img
          src={imageUrl}
          className="bg-red-100 rounded aspect-square w-32 sm:aspect-video sm:max-h-40 sm:max-w-56 sm:w-full sm:h-full"
        />
        <button className="drop-shadow text-lg font-semibold rounded text-white px-2 py-1 bg-red-500 w-full border border-slate-300">
          Add
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
