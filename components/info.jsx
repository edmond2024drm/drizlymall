"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";

import { v4 as uuidv4 } from "uuid";
import Currency from "./currency";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/hooks/use-checkout";
import { Button } from "./ui/button";
import { IoEarthSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const Info = ({ data }) => {
  const version = data?.version[0]?.title;

  const [type, setType] = useState(version);
  const [qty, setQty] = useState(1);
  const useDisable = 1;

  const cart = useCart();
  const checkout = useCheckout();
  const router = useRouter();
  const uuid = uuidv4();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onAddToCart = () => {
    cart.addToCart(data, qty, type);
  };

  const onCheckout = () => {
    checkout.removeCheckout();
    checkout.checkoutItem(data, qty, type);
    router.push(`/checkout/${data.uid}/${uuid}`);
  };
  return (
    <>
      <div className="flex flex-col sm:p-10 rounded-md sm:bg-[#fbfbfb]">
        <div className="flex justify-between items-center sm:hidden fixed w-full h-[65px] z-50 bottom-0 left-0 bg-white border-t border-gray-200">
          <div className="flex items-center justify-between w-full px-4 py-2 gap-x-4">
            <button
              disabled={data?.isSold}
              onClick={onCheckout}
              className="flex rounded-sm border-2 border-orange-600 bg-orange-600 border-transparent px-5 z-1 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold
          hover:opacity-75 transition w-[80%] justify-center text-sm sm:w-auto items-center gap-x-2 "
            >
              Blej menjëherë
            </button>
            <button
              disabled={data?.isSold}
              className="flex items-center justify-center px-5 py-3 text-sm font-semibold text-black transition bg-gray-100 rounded-sm gap-x-2 w-fit sm:w-auto disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 hover:bg-black hover:text-white"
              onClick={onAddToCart}
            >
              <ShoppingBag size={25} opacity={1} />
            </button>
          </div>
        </div>
        {/* titulli */}
        <h1 className="text-2xl font-medium text-gray-900 sm:pb-3">
          {data?.title}
        </h1>
        <div className="items-end justify-between my-3">
          {/* qmimi */}
          <div className="text-2xl text-gray-900">
            <Currency
              value={data?.Discount ? data?.priceDiscount : data?.price}
              price={data?.price}
              discount={data?.discountPercentage}
              discountTrue={data?.Discount}
            />
          </div>
        </div>
        {type && (
          <div className="flex items-center my-5 sm:my-7">
            <h1 className="mr-2 text-sm text-gray-800">Lloji</h1>
            <hr className="w-full" />
          </div>
        )}
        {/* subCats */}
        <div className="grid grid-cols-1">
          {type && (
            <div className="flex flex-col my-5 gap-y-6 sm:my-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                {data?.version.map((item) => (
                  <Button
                    key={item?.id}
                    className={cn(
                      "rounded-md !text-sm text-gray-800 p-2 bg-white border border-gray-300",
                      type === item?.title && "text-white bg-black"
                    )}
                    onClick={() => setType(item?.title)}
                  >
                    {item?.title}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
        {data?.isSold === false && (
          <>
            <div className="flex items-center my-3 sm:my-5">
              <h1 className="mr-2 text-sm text-gray-800">Sasia</h1>
              <hr className="w-full" />
            </div>

            <p className="mt-3 mb-2 text-xs text-neutral-700">
              Disponueshmëria:{" "}
              {data?.stock > 10
                ? "Më shumë se 10 artikuj"
                : "Më pak se 10 artikuj"}
            </p>

            <div className="flex items-center justify-center w-full mb-5 sm:justify-start">
              <button
                disabled={data?.isSold}
                className="flex items-center w-full h-10 px-4 bg-transparent border border-r-0 border-gray-300 sm:border-gray-300 sm:w-fit rounded-tl-md rounded-bl-md"
                type="button"
                onClick={() => setQty(qty - 1)}
              >
                <Minus size={20} className="w-full" />
              </button>
              <input
                disabled={useDisable}
                className="bg-transparent border-y text-black border-gray-400 sm:border-gray-300 h-10 text-center w-full sm:w-[10%] text-2xl rounded-none"
                value={
                  qty > data?.stock
                    ? setQty(qty - 1)
                    : qty < 1
                    ? setQty(1)
                    : qty
                }
              />

              <button
                disabled={data?.isSold}
                className="flex items-center w-full h-10 px-4 bg-transparent border border-l-0 border-gray-300 sm:border-gray-300 sm:w-fit rounded-tr-md rounded-br-md"
                type="button"
                onClick={() => setQty(qty + 1)}
              >
                <Plus size={20} className="w-full" />
              </button>
            </div>

            <div className="items-center hidden my-3 sm:flex sm:my-5">
              <h1 className="mr-2 text-sm text-gray-800">Pagesa</h1>
              <hr className="w-full" />
            </div>

            <div className="flex items-center justify-center w-full gap-2 pt-2 pb-2 sm:pt-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <p className="w-full text-sm font-normal">
                Koha e arritjes së produktit: 24H - 72H
              </p>
            </div>
          </>
        )}

        <div className="flex-col items-center hidden mt-3 sm:flex sm:flex-row gap-x-3 gap-y-6">
          <button
            disabled={data?.isSold}
            onClick={onCheckout}
            className="flex items-center justify-center w-full px-5 py-3 text-lg font-semibold text-white transition bg-orange-600 border-2 border-transparent border-orange-600 rounded-sm z-1 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-orange-700 sm:w-full gap-x-2 "
          >
            Blej menjëherë
          </button>
          <button
            disabled={data?.isSold}
            className="flex items-center justify-center w-full px-5 py-3 text-lg font-semibold text-black transition bg-transparent border-2 border-black rounded-sm gap-x-2 sm:w-full disabled:cursor-not-allowed disabled:opacity-50 hover:bg-black hover:text-white"
            onClick={onAddToCart}
          >
            Shto në shportë
            <ShoppingBag size={23} />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-5 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-start p-4 text-center border border-gray-300 rounded-md gap-y-2">
            <IoEarthSharp size={22} />
            <p className="text-sm text-gray-800">
              Dërgesa në Kosovë, Shqipëri <br className="block sm:hidden" /> dhe
              Maqedoni
            </p>
          </div>
          <div className="flex flex-col items-center justify-start p-4 text-center border border-gray-300 rounded-md gap-y-2">
            <MdVerified size={22} />
            <p className="text-sm text-gray-800">
              Produkte 100% Origjinale dhe <br className="block sm:hidden" />
              të sigurta
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
