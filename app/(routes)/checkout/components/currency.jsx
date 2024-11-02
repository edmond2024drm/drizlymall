"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

const Currency = ({ value, price, discount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-bold flex items-center">
      <div className="text-2xl sm:text-3xl font-bold">
        {formatter.format(Number(value))}
      </div>
      {price && (
        <div className="text-base text-neutral-400 line-through ml-2">
          {formatter.format(Number(price))}
          {discount && <span className="ml-2 text-black">-{discount}%</span>}
        </div>
      )}
    </div>
  );
};

export default Currency;
