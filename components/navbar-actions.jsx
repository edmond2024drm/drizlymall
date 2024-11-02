"use client";

import { HiOutlineShoppingCart } from "react-icons/hi2";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { Button } from "./ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`ml-auto flex items-center gap-x-4`}>
      <Button
        type="button"
        onClick={() => router.push("/shporta", { scroll: true })}
        className="items-center hidden bg-black rounded-full sm:flex"
      >
        <HiOutlineShoppingCart size={20} />
        <span className="ml-1.5 text-sm font-medium text-white">
          {cart.cart.length}
        </span>
      </Button>

      <div
        className="relative flex cursor-pointer sm:hidden"
        onClick={() => router.push("/shporta")}
      >
        <HiOutlineShoppingCart size={25} />
        <span className="text-[0.6rem] flex justify-center items-center font-medium text-white absolute -top-2 left-3.5 rounded-full bg-black w-[15px] h-[15px]">
          {cart.cart.length}
        </span>
      </div>
    </div>
  );
};

export default NavbarActions;
