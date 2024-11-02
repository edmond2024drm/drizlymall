"use client";

import { SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheetfilter";
import FilterSheet from "./filtersheet";
import { useState } from "react";

const SheetFilter = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center justify-between w-full text-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white h-8 px-6 py-2 rounded-md">
            <SlidersHorizontal size={18} />
            <span className="ml-1">Filtro</span>
          </div>
        </SheetTrigger>
        <SheetContent side="bottom">
          <div className="flex flex-col justify-center items-end pb-6">
            <SheetClose asChild>
              <X size={30} />
            </SheetClose>
          </div>
          <FilterSheet
            isChecked={isChecked}
            onSwitchChange={handleSwitchChange}
          />
        </SheetContent>
        <SheetTitle />
        <SheetDescription />
      </Sheet>
    </div>
  );
};

export default SheetFilter;
