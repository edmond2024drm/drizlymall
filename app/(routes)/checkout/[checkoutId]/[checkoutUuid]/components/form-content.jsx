"use client";

import { qytetet, qytetet2, qytetet3 } from "@/lib/qytetet";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Check, ChevronsUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import sendForms from "@/actions/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import useCheckout from "@/hooks/use-checkout";
import HiddenForm from "@/components/hidden-form";
import Currency from "@/app/(routes)/checkout/components/currency";

const FormContent = () => {
  const [shteti, setShteti] = useState();

  const phoneRegexInfo = () => {
    if (shteti === "shqipëri") {
      return "10";
    } else if (shteti === "maqedoni") {
      return "9";
    } else {
      return "9";
    }
  };

  const shtetet = [
    { label: "Kosovë", value: "kosovë" },
    { label: "Shqipëri", value: "shqipëri" },
    { label: "Maqedoni", value: "maqedoni" },
  ];

  const validationSchema = Yup.object({
    emri: Yup.string()
      .max(20, "Emri duhet të ketë 20 ose më pak karaktere")
      .min(
        3,
        "Emri duhet të jetë i saktë dhe duhet të ketë 3 ose më shumë karaktere"
      )
      .required("Emri juaj është i domosdoshëm."),
    mbiemri: Yup.string()
      .max(20, "Mbiemri duhet të ketë 20 ose më pak karaktere")
      .min(
        3,
        "Mbiemri duhet të jetë i saktë dhe duhet të ketë 3 ose më shumë karaktere"
      )
      .required("Mbiemri juaj është i domosdoshëm."),
    number: Yup.number()
      .min(phoneRegexInfo(), "Numri duhet të ketë të pakten 9-10 karaktere")
      .required("Numri duhet të zgjidhet"),
    adresa: Yup.string()
      .max(30, "Adresa duhet të ketë 30 ose më pak karaktere")
      .min(
        3,
        "Adresa duhet të jetë i saktë dhe duhet të ketë 3 ose më shumë karaktere"
      )
      .required("Adresa është e domosdoshme."),
    shteti: Yup.string().required("Shteti duhet të zgjedhet"),
    qyteti: Yup.string().required("Qyteti duhet të zgjedhet"),
    quantity: Yup.array().of(Yup.string()),
    type: Yup.array().of(Yup.string()),
    title: Yup.array().of(Yup.string()),
  });

  const checkout = useCheckout((state) => state.checkout);
  const checkoutSet = useCheckout();

  const total = checkout.reduce(
    (acc, data) =>
      data?.priceDiscount
        ? acc + data?.priceDiscount * data.quantity
        : acc + data?.price * data.quantity,
    0
  );

  const form = useForm({
    defaultValues: {
      emri: "",
      mbiemri: "",
      number: "",
      adresa: "",
      quantity: checkout.map((item) => item.quantity),
      type: checkout.map((item) => item.type),
      title: checkout.map((item) => item.title),
    },
    resolver: yupResolver(validationSchema),
  });

  const router = useRouter();
  const uuid = uuidv4();
  const onSubmit = async (values) => {
    await sendForms(values);
    router.push(`/faleminderit/${uuid}`, undefined, { scroll: true });
    checkoutSet.removeCheckout();
  };

  const {
    register,
    formState: { errors },
    reset,
    formState,
  } = form;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [open2, setOpen2] = React.useState(false);

  return (
    <div className="w-full px-6 py-6 mt-10 border border-gray-200 rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {checkout.map((item) => (
              <HiddenForm
                key={item.id}
                data={item}
                register={register}
                form={form}
              />
            ))}

            <FormField
              control={form.control}
              name="emri"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emri*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      {...register("emri")}
                      disabled={checkout.length === 0}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mbiemri"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mbiemri*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      {...register("mbiemri")}
                      disabled={checkout.length === 0}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="shteti"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Shteti*</FormLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {value
                              ? shtetet.find((shteti) => shteti.value === value)
                                  ?.label
                              : "Zgjedh shtetin"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Kërko shtetin..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>Nuk u gjet asnjë shtet.</CommandEmpty>
                            <CommandGroup>
                              {shtetet.map((shteti) => (
                                <CommandItem
                                  key={shteti.value}
                                  value={shteti.value}
                                  onSelect={(currentValue) => {
                                    form.setValue("shteti", shteti.label);
                                    setValue(
                                      currentValue === value ? "" : currentValue
                                    );
                                    setOpen(false);
                                    setShteti(currentValue);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      value === shteti.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {shteti.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="qyteti"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Qyteti*</FormLabel>
                    <Popover open={open2} onOpenChange={setOpen2}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between w-full",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={!shteti || checkout.length === 0}
                          >
                            {field.value && shteti === "kosovë"
                              ? qytetet.find(
                                  (qytetet) => qytetet.name === field.value
                                )?.name
                              : field.value && shteti === "shqipëri"
                              ? qytetet2.find(
                                  (qytetet2) => qytetet2.name === field.value
                                )?.name
                              : field.value && shteti === "maqedoni"
                              ? qytetet3.find(
                                  (qytetet3) => qytetet3.name === field.value
                                )?.name
                              : "Zgjedh qytetin"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Kërko shtetin..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>Nuk u gjet asnjë qytet.</CommandEmpty>
                            <CommandGroup>
                              {shteti === "kosovë"
                                ? qytetet.map((qyteti) => (
                                    <CommandItem
                                      value={qyteti.name}
                                      key={qyteti.name}
                                      onSelect={() => {
                                        form.setValue("qyteti", qyteti.name);
                                        setOpen2(false);
                                      }}
                                    >
                                      {qyteti.name}
                                      <svg
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          qyteti.name === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </CommandItem>
                                  ))
                                : shteti === "shqipëri"
                                ? qytetet2.map((qyteti2) => (
                                    <CommandItem
                                      value={qyteti2.name}
                                      key={qyteti2.name}
                                      onSelect={() => {
                                        form.setValue("qyteti", qyteti2.name);
                                        setOpen2(false);
                                      }}
                                    >
                                      {qyteti2.name}
                                      <svg
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          qyteti2.name === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </CommandItem>
                                  ))
                                : shteti === "maqedoni" &&
                                  qytetet3.map((qyteti3) => (
                                    <CommandItem
                                      value={qyteti3.name}
                                      key={qyteti3.name}
                                      onSelect={() => {
                                        form.setValue("qyteti", qyteti3.name);
                                        setOpen2(false);
                                      }}
                                    >
                                      {qyteti3.name}
                                      <svg
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          qyteti3.name === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </CommandItem>
                                  ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numri i telefonit*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      {...register("number")}
                      disabled={!shteti || checkout.length === 0}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adresa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresa*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      {...register("adresa")}
                      disabled={!shteti || checkout.length === 0}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between w-full items-start flex-col gap-y-8">
            <div className="w-full mt-6 border border-gray-200 rounded-md">
              <div className="flex items-center justify-between px-6 py-8">
                <p className="text-sm font-medium sm:text-3xl">
                  Totali i porosisë +{" "}
                  <span className="block sm:inline">Transporti:</span>
                </p>
                <Currency
                  value={
                    shteti === "kosovë"
                      ? total + 1.5
                      : shteti === "shqipëri"
                      ? total + 3.5
                      : shteti === "maqedoni"
                      ? total + 3.5
                      : total
                  }
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={checkout.length === 0}
              className="w-full sm:w-[15%]"
            >
              Blej tani
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContent;
