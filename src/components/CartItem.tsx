import { Circle, Minus, Plus, Square } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import useFoodStore, { Item } from "../../store";

function CartItem({
  title,
  description,
  price,
  imageUrl,
  diet,
  itemId,
}: {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  diet: "VEG" | "NON_VEG";
  itemId: string;
}) {
  const { addItem, removeItem, itemsArray } = useFoodStore();

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
        {!isItemInArray(itemsArray, itemId) ? (
          <button className="drop-shadow text-lg font-semibold rounded text-white px-2 py-1 bg-red-500 w-full border border-slate-300">
            <span
              onClick={() => {
                addItem({
                  itemId,
                  description,
                  diet,
                  imageUrl,
                  price,
                  quantity: 1,
                  title,
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
                  diet,
                  imageUrl,
                  price,
                  quantity: 1,
                  title,
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

export default CartItem;

export const isItemInArray = (data: Item[], newItemId: string) => {
  const result = data.filter((eachItem) => eachItem.itemId == newItemId);
  return result.length == 1;
};

export const getItemQuantity = (data: Item[], newItemId: string) => {
  const result = data.filter((eachItem) => eachItem.itemId == newItemId);
  if (result.length == 0) {
    return;
  }

  return result[0].quantity;
};
