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
    <div className="flex items-center font-bold">
      <div className="text-2xl font-bold sm:text-3xl">
        {formatter.format(Number(value))}
      </div>
      {price && (
        <div className="ml-2 text-base line-through text-neutral-400">
          {formatter.format(Number(price))}
          {discount && <span className="ml-2 text-black">-{discount}%</span>}
        </div>
      )}
    </div>
  );
};

export default Currency;
