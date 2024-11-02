import React from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

const HiddenForm = ({ data, form, register }) => {
  return (
    <div className="hidden w-0 h-0">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                value={data.title}
                type="hidden"
                className="hidden"
                {...register("title")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                type="hidden"
                className="hidden"
                value={data.type}
                {...register("type")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="quantity"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                type="hidden"
                className="hidden"
                value={data.quantity}
                {...register("quantity")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default HiddenForm;
