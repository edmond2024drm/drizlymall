import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

const CategoryLinks = ({ categories }) => {
  return (
    <ul className="flex flex-col sm:flex-row items-left gap-y-8 sm:justify-evenly sm:items-center gap-x-6 md:gap-x-10 text-xs md:text-sm font-medium">
      {categories?.data?.map((item) => (
        <li key={item.id}>
          <SheetClose asChild>
            <Link
              href={`/${item.uid}`}
              className="pb-1 flex items-center justify-between"
            >
              {item.title}
              <ChevronRight size={15} />
            </Link>
          </SheetClose>
        </li>
      ))}
    </ul>
  );
};

export default CategoryLinks;
