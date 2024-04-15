import { Circle, Minus, Plus, Square } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import useFoodStore from "../../store";
import { useLocation } from "react-router-dom";
import { Item } from "../common/types";
import { getItemQuantity, isItemInArray } from "../common/helper";

function MenuItemCard({
  name,
  description,
  price,
  imageUrl,
  dietType,
  itemId,
}: Omit<Item, "quantity" | "category">) {
  const { pathname } = useLocation();
  const { addItem, removeItem, itemsArray } = useFoodStore();

  return (
    <div className="max-h-52 w-full rounded aspect-video p-3 bg-white flex justify-between items-center space-x-2 border">
      <div className="space-y-2 text-wrap">
        <div className="relative">
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
        <div className="text-xl font-semibold text-slate-800">{name}</div>
        <div className="text-xs font-medium text-slate-700">{description}</div>
        {pathname !== "/cart" && (
          <div className="text-lg font-semibold text-slate-800">₹ {price}</div>
        )}
        {pathname == "/cart" && (
          <div className="text-xs font-semibold text-slate-600">
            {getItemQuantity(itemsArray, itemId)} x ₹ {price}
          </div>
        )}
        {pathname == "/cart" && (
          <div className="text-sm font-semibold text-slate-800">
            ₹ {(getItemQuantity(itemsArray, itemId)! * price).toFixed(2)}
          </div>
        )}
      </div>
      <div className="space-y-2 shrink-0 ">
        <img
          src={imageUrl}
          className="bg-red-100 rounded aspect-square w-32 sm:aspect-video sm:max-h-40 sm:max-w-56 sm:w-full sm:h-full"
        />
        {!isItemInArray(itemsArray, itemId) ? (
          <button className="drop-shadow text-lg font-semibold rounded text-white px-2 py-1 bg-red-500 w-full border border-slate-300">
            <span
              onClick={() => {
                addItem({
                  itemId,
                  description,
                  dietType,
                  imageUrl,
                  price,
                  quantity: 1,
                  name,
                });
              }}
            >
              Add
            </span>
          </button>
        ) : (
          <div className="drop-shadow text-lg font-semibold rounded text-white px-2 py-1 bg-red-500 w-full border border-slate-300 flex justify-between sm:px-5">
            <button
              onClick={() => {
                removeItem(itemId);
              }}
            >
              <Minus size={20} weight="bold" />
            </button>
            <span>{getItemQuantity(itemsArray, itemId)}</span>
            <button
              onClick={() => {
                addItem({
                  itemId,
                  description,
                  dietType,
                  imageUrl,
                  price,
                  quantity: 1,
                  name,
                });
              }}
            >
              <Plus size={20} weight="bold" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItemCard;
