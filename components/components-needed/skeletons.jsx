"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Skeletons = () => {
  return (
    <div className="w-[292px] h-[400px] bg-white z-5 rounded-xl border p-3 space-y-4 ">
      <Skeleton className="w-[266.4px] h-[266.4px]" />
      <div className="flex flex-col gap-y-4  justify-end">
        <div>
          <p className="font-semibold text-base mb-1 w-full ">
            <Skeleton className="w-[266.4px] h-[24px]" />
          </p>
          <p className="text-sm text-gray-500">
            <Skeleton className="w-[266.4px] h-[20px]" />
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="w-[266.4px] h-[28px]" />
        </div>
      </div>
    </div>
  );
};

export default Skeletons;
