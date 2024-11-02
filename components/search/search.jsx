"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchQuery = searchParams.get("q") || "";
    setQuery(searchQuery);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) {
      return; // Exit if the query is empty
    }
    const params = new URLSearchParams(searchParams);
    params.set("q", query);
    replace(`/search?${params.toString()}`);
  };

  return (
    <div className="sm:w-full sm:mx-12 md:mx-40 flex justify-between items-center w-full min-w-60">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-between relative w-full"
      >
        <Input
          type="text"
          placeholder="Kërko produktet..."
          value={query} // Ensure it always has a value
          onChange={(e) => setQuery(e.target.value)} // Update state on change
        />
        <button
          type="submit"
          className="absolute right-4 border-l-[1px] pl-4 h-full"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
