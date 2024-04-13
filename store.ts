import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storageModule = {
  name: "food-app-storage",
  storage: createJSONStorage(() => sessionStorage),
};

const creator = (set: any) => ({
  token: "",
  user: {
    name: "",
  },
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  setUser: (newUser: any) => set(() => ({ user: newUser })),
  logout: () => {
    set(() => ({
      token: "",
    }));
  },
});

const useFoodStore = create(persist(creator, storageModule));
export default useFoodStore;
