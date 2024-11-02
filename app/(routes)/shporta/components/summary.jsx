"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const Summary = () => {
  const items = useCart((state) => state.cart);
  const router = useRouter();
  // const uuid = crypto.randomUUID();

  const onCheckout = () => {
    router.push(`/checkout`);
  };

  const total = items.reduce(
    (acc, data) =>
      data?.priceDiscount
        ? acc + data?.priceDiscount * data.quantity
        : acc + data?.price * data.quantity,
    0
  );

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Përmbledhja e porosisë
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between w-full pt-4 border-t border-gray-200">
          <div className="w-full text-base font-medium text-gray-900">
            Totali i porosisë :
          </div>
          <div>
            <Currency value={total} />
          </div>
        </div>
      </div>
      <button
        onClick={onCheckout}
        disabled={items?.length === 0}
        className="w-full h-[50px] bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Blej tani
      </button>
    </div>
  );
};

export default Summary;
