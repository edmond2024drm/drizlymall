"use client";

import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import SheetFilter from "./sheet";

const frameworks = [
  {
    id: "sr",
    value: "sipas Relevancës",
    label: "Sipas Relevancës",
  },
  {
    id: "qmu",
    value: "çmimet më të ulëta",
    label: "Çmimet më të ulëta",
  },
  {
    id: "qml",
    value: "çmimet më të larta",
    label: "Çmimet më të larta",
  },
  {
    id: "zml",
    value: "zbritjet më të larta",
    label: "Zbritjet më të larta",
  },
];

const AllProducts = ({ products, categoryId }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [checked, setChecked] = useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.set("sort", checked);
    } else {
      params.delete("sort");
    }

    replace(`/${categoryId}?${params.toString()}`);
  }, [checked, replace, searchParams]);

  return (
    <div className="px-0 pb-24 sm:px-6 lg:px-8">
      <div className="flex w-full flex-row items-center sm:flex-col md:flex-row justify-between sm:justify-end px-2">
        {products.length !== 0 && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[250px] sm:w-[200px] justify-between !text-sm border-0 bg-neutral-100 h-8"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Filtro Produktet"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                          setChecked(framework.id);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
        {products.length !== 0 && <SheetFilter categoryId={categoryId} />}
      </div>
      <div className="relative flex flex-col items-center justify-center mt-5 sm:mt-10">
        <div className="flex items-center justify-center w-full gap-y-7 lg:px-0">
          <div className="w-full space-y-5 sm:space-y-12">
            {products?.length === 0 && <NoResults />}
            <div className="grid grid-cols-2 gap-2 mx-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4 sm:mx-0">
              {products?.map((item, id) => (
                <ProductCard key={id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
