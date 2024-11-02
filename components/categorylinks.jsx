import Link from "next/link";

const CategoryLinks = ({ categories }) => {
  return (
    <ul className="flex flex-col sm:flex-row items-left gap-y-8 sm:justify-evenly sm:items-center gap-x-6 md:gap-x-10 text-xs md:text-sm font-medium">
      {categories?.data?.map((item) => (
        <li key={item.id}>
          <Link
            href={`/${item.uid}`}
            className="hover:border-b-2 hover:border-[#f96516] pb-1 transition ease-in-out"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryLinks;
