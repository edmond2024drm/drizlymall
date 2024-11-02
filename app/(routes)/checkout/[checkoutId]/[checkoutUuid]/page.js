"use client";

import { useCheckout } from "@/hooks/use-checkout";
import CheckoutCard from "./components/checkout-card";
import { useEffect, useState } from "react";
import FormContent from "./components/form-content";
import Currency from "./components/currency";
import { X } from "lucide-react";

export const revalidate = 0;

const ItemCheckout = () => {
  const checkout = useCheckout((state) => state.checkout);
  const [isMounted, setIsMounted] = useState(false);
  console.log(checkout);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="my-16 bg-white sm:px-0">
      <div className="px-4 sm:px-6 mx-auto max-w-[1400px]">
        <h1 className="my-8 text-xl font-bold text-center sm:text-3xl">
          Produktet për porosinë
        </h1>
        <div className="w-full border border-gray-200 rounded-md">
          {checkout.map((item) => (
            <CheckoutCard key={item.id} data={item} />
          ))}

          {checkout.length === 0 && (
            <div className="flex flex-col items-center justify-center p-10 m-10 gap-y-10">
              <X size={100} className="text-gray-300" />
              <h1 className="text-3xl text-gray-300">
                Nuk keni asnjë produkt në shportë
              </h1>
            </div>
          )}
        </div>

        <FormContent />
      </div>
    </div>
  );
};

export default ItemCheckout;
