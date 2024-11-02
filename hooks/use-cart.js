import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      type: [],

      addToCart: (data, qty, type) => {
        const currentItems = get().cart;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast(`${data?.title} është tashmë në shportë`, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
        set((state) => ({
          cart: [...get().cart, { ...data, quantity: qty, type: type }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + data.priceDiscount,
        }));

        toast.success(
          `${qty}  x  ${data.title} u shtua në shportë`,
          {
            iconTheme: {
              primary: "#dd6b20",
              secondary: "#FFFAEE",
            },
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }
        );
      },
      removeItem: (id) => {
        set((state) => ({
          cart: [...get().cart.filter((item) => item.id !== id)],
          totalItems: state.totalItems - 1,
        }));
        toast.success(`Artikulli u hoq nga shporta`, {
          iconTheme: {
            primary: "#dd6b20",
            secondary: "#FFFAEE",
          },
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      },
      removeAll: () =>
        set({ cart: [], totalItems: 0, totalPrice: 0, type: [] }),
    }),

    {
      name: "drizlymall-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
