import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Item } from "./src/common/types";

const storageModule = {
  name: "food-app-storage",
  storage: createJSONStorage(() => sessionStorage),
};

const creator = (set: any) => ({
  token: "",
  coupon: "",
  user: {
    name: "",
  },
  itemsArray: [] as Item[],
  setCoupon: (newCoupon: string) => set(() => ({ coupon: newCoupon })),
  resetCoupon: () => set(() => ({ coupon: "" })),
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  setUser: (newUser: any) => set(() => ({ user: newUser })),
  addItem: (newItem: Item) =>
    set((state: any) => ({
      itemsArray: filterAndIncrement(state.itemsArray, newItem),
    })),
  removeItem: (newItemId: string) =>
    set((state: any) => ({
      itemsArray: filterAndDecrement(state.itemsArray, newItemId),
    })),
  logout: () => {
    set(() => ({
      token: "",
      itemsArray: [],
      coupon: "",
      user: {
        name: "",
      },
    }));
  },

  resetItemsArray: () => set(() => ({ itemsArray: [] })),
});

const useFoodStore = create(persist(creator, storageModule));
export default useFoodStore;


const filterAndIncrement = (data: Item[], newItem: Item) => {
  if (data.length == 0) {
    return [{ ...newItem }];
  }
  const currentItem = data.filter(
    (eachItem) => eachItem.itemId == newItem.itemId
  );
  if (currentItem.length == 0) {
    return [...data, { ...newItem }];
  }
  const filteredData = data.filter(
    (eachItem) => eachItem.itemId !== newItem.itemId
  );
  return [
    ...filteredData,
    { ...newItem, quantity: currentItem[0].quantity + 1 },
  ];
};

const filterAndDecrement = (data: Item[], newItemId: string) => {
  console.log(data, newItemId);
  if (data.length == 0) {
    return data;
  }
  const currentItem = data.filter((eachItem) => eachItem.itemId == newItemId);
  if (currentItem.length == 0) {
    return data;
  }

  const filteredData = data.filter((eachItem) => eachItem.itemId !== newItemId);

  console.log(currentItem[0]);
  if (currentItem[0].quantity == 1 || currentItem[0].quantity == 0) {
    return filteredData;
  }

  return [
    ...filteredData,
    { ...currentItem[0], quantity: currentItem[0].quantity - 1 },
  ];
};
