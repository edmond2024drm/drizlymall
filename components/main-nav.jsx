import { Suspense } from "react";
import { Search } from "./search/search";

const MainNav = () => {
  return (
    <nav className="items-center absolute top-[3.6rem] flex sm:static sm:flex lg:space-x-6 w-full">
      <Suspense>
        <Search />
      </Suspense>
    </nav>
  );
};

export default MainNav;
