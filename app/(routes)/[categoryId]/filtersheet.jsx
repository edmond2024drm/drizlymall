"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter, useSearchParams } from "next/navigation";

const FilterSheet = ({ isChecked, onSwitchChange, categoryId }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (isChecked) {
      params.set("sold", "true");
    } else {
      params.delete("sold");
    }

    replace(`/${categoryId}?${params.toString()}`);
  }, [isChecked, replace, searchParams]);

  return (
    <div className="flex sm:hidden">
      <div className={`w-full border-[0.5px] rounded-md`}>
        <div className="flex items-center justify-between space-x-2 px-5 py-4 border-b-[0.5px]">
          <Label htmlFor="sold-out">Fshih të shiturat</Label>
          <Switch
            id="sold-out"
            checked={isChecked}
            onCheckedChange={onSwitchChange}
          />
        </div>

        {/* <div className="border-b-[0.5px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Filtro çmimet</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-5 px-5 overflow-hidden">
                  <div className="flex flex-col items-center justify-center">
                    <label htmlFor="" className="text-[15px] opacity-75">
                      Min
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1">$</span>
                      <input
                        className="w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]"
                        type="number"
                        name="min"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <label htmlFor="" className="text-[15px] opacity-75">
                      Max
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1">$</span>
                      <input
                        className="w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]"
                        type="number"
                        name="max"
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> */}
      </div>
    </div>
  );
};

export default FilterSheet;
