"use client";

import Image from "next/image";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ProductCard = ({ data }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/produktet/${data?.uid}`, undefined, {
      scroll: true,
    });
  };

  return (
    <div
      className="p-3 bg-white border rounded-md cursor-pointer z-5 group hover:shadow-md"
      onClick={(e) => handleClick(e)}
    >
      <div className="relative rounded-md aspect-square">
        {data.discountPercentage !== 0 && (
          <div className="absolute -top-[-3px] z-20 -right-[-5px]">
            <span className="px-1 py-[3px] ml-2 text-xs font-semibold text-white no-underline bg-orange-600 rounded-md h-fit w-fit">
              -{data.discountPercentage}%
            </span>
          </div>
        )}
        {data?.isSold && (
          <div className="absolute inset-0 z-20 flex items-center justify-center w-full h-full">
            <span className="z-20 px-2 py-1 text-sm text-white capitalize bg-black rounded-md md:px-4 md:py-2 md:text-sm">
              E SHITUR!
            </span>
          </div>
        )}
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + data?.image?.url}
          fill
          alt="Image"
          className={cn(
            "object-contain p-2 rounded-md aspect-394/649 sm:p-0",
            data?.isSold && "opacity-50"
          )}
          sizes="1080px"
        />
      </div>
      <div className="flex flex-col">
        <p className="inline-block mb-1 overflow-hidden text-sm font-normal whitespace-nowrap sm:text-base text-ellipsis">
          {data?.title}
        </p>

        <div className="flex items-center justify-end h-full sm:mb-1">
          <Currency
            value={data?.Discount ? data?.priceDiscount : data?.price}
            price={data?.price}
            discountTrue={data?.Discount}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
