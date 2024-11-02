"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "./button";

const Filter = () => {
  const [isChecked, setChecked] = useState(false);
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (isChecked) {
      params.set("sold", "true");
    } else {
      params.delete("sold");
    }

    replace(`/search?${params.toString()}`);
  }, [isChecked, replace, searchParams]);

  const handleSwitchChange = (checked) => {
    setChecked(checked);
  };

  return (
    <div className="hidden md:flex sticky top-36">
      <div className={`md:w-[280px] border-[0.5px] rounded-md`}>
        <div className="flex items-center justify-between space-x-2 px-5 py-4 border-b-[0.5px]">
          <Label htmlFor="sold-out">Fshih të shiturat</Label>
          <Switch
            id="sold-out"
            checked={isChecked}
            onCheckedChange={handleSwitchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
