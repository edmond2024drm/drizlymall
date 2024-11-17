"use client";

import Currency from "@/components/ui/currency";
import Image from "next/image";

const CheckoutCard = ({ data }) => {
  return (
    <div className="flex items-center px-4 py-6 sm:px-7">
      <div className="relative w-20 h-20 overflow-hidden rounded-md sm:h-32 sm:w-32">
        <Image
          fill
          src={process.env.NEXT_PUBLIC_API_URL + data?.image.url}
          alt=""
          className="object-contain object-center"
        />
      </div>
      <div className="relative flex flex-col justify-start flex-1 ml-4 sm:p-5 sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 gap-y-4 sm:pr-0">
          <div className="flex flex-col gap-y-6">
            <p className="text-lg font-semibold text-black sm:text-xl md:text-2xl">
              {data?.title}
            </p>
            <p className="opacity-50 hidden sm:flex max-w-[90%]">
              {data?.description?.substr(0, 100)} ...
            </p>
          </div>
          <div className="flex flex-col mt-3 text-xs sm:items-end sm:text-sm sm:mt-0">
            {data?.type && (
              <p className="text-gray-500 sm:border-l sm:border-gray-300 sm:pl-3">
                {data?.type}
              </p>
            )}
            {data?.type && <hr className="block sm:hidden my-2 w-[50%]" />}
            <p className="mb-3 text-xs text-gray-500 sm:mb-0 sm:mt-14 sm:text-sm">
              Sasia : {data?.quantity}
            </p>
            <div className="flex items-center justify-end pt-2">
              <Currency
                value={
                  data?.priceDiscount
                    ? data?.priceDiscount * data.quantity
                    : data?.price * data.quantity
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
