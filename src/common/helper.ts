import { Item } from "./types";

export const isItemInArray = (data: Item[], newItemId: string) => {
  const result = data.filter((eachItem) => eachItem.itemId === newItemId);
  return result.length === 1;
};

export const getItemQuantity = (data: Item[], newItemId: string) => {
  const result = data.filter((eachItem) => eachItem.itemId === newItemId);
  if (result.length === 0) {
    return;
  }

  return result[0].quantity;
};
