"use client";

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import Container from "@/components/ui/container";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.cart.length === 0 && (
                <p className="text-neutral-500">
                  Shporta juaj është e zbraztë.
                </p>
              )}
              <ul>
                {cart.cart.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
