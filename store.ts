import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storageModule = {
  name: "food-app-storage",
  storage: createJSONStorage(() => sessionStorage),
};

const creator = (set: any) => ({
  token: "",
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  logout: () => {
    set(() => ({
      token: "",
    }));
  },
});

const useFoodStore = create(persist(creator, storageModule));
export default useFoodStore;
