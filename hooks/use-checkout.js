import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCheckout = create(
  persist(
    (set, get) => ({
      checkout: [],
      type: [],

      checkoutItem: (data, qty, type) => {
        set({
          checkout: [...get().checkout, { ...data, quantity: qty, type: type }],
        });
      },
      removeCheckout: () => set({ checkout: [], type: [] }),
    }),

    {
      name: "drizlymall-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCheckout;
