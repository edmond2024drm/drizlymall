"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

const Currency = ({ value, price, discount, discountTrue }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center w-full font-semibold">
      <div className="text-xl font-bold sm:text-3xl">
        {formatter.format(Number(value))}
      </div>
      {price && (
        <div className="flex items-center justify-between w-full ml-2 text-sm font-normal sm:text-xl text-neutral-500 sm:ml-3">
          {discountTrue && (
            <div className="line-through">
              {formatter.format(Number(price))}
            </div>
          )}
          {discountTrue && (
            <span className="px-2 py-1 ml-2 text-xs font-semibold text-white no-underline bg-orange-600 rounded-md sm:text-sm sm:px-2">
              -{discount}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Currency;
