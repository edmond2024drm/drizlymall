import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const CartItem = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data?.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative w-24 h-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={
            process.env.NEXT_PUBLIC_API_URL +
            data?.image?.url
          }
          alt=""
          className="object-contain object-center"
        />
      </div>
      <div className="relative flex flex-col justify-start flex-1 ml-4 sm:p-5 sm:ml-6">
        <div className="absolute top-0 right-0 z-10">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-base font-semibold text-black">
              {data?.title}
            </p>
          </div>
          <div className="flex flex-col mt-3 text-xs sm:text-sm sm:mt-0">
            {data?.type && (
              <p className="text-gray-500  sm:border-l sm:border-gray-300 sm:pl-3">
                {data?.type}
              </p>
            )}
            {data?.type && <hr className="block sm:hidden my-2 w-[50%]" />}
          </div>
        </div>

        <p className="mb-3 text-xs text-gray-500 sm:mb-0 sm:mt-14 sm:text-sm">
          Sasia : {data?.quantity}
        </p>
        <Currency
          value={
            data?.priceDiscount
              ? data?.priceDiscount * data.quantity
              : data?.price * data.quantity
          }
          price={data?.price * data.quantity}
        />
      </div>
    </li>
  );
};

export default CartItem;
