import Link from "next/link";
import MainNav from "./main-nav";
import { Playfair_Display } from "next/font/google";
import NavbarActions from "./navbar-actions";
import NavbarSidebar from "./navbar-sidebar";
import CategoryNav from "./categorynav";

const font = Playfair_Display({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="border-b fixed inset-0 z-[9999] bg-white h-[6.6rem] sm:h-[64.8px] shadow-sm">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative flex items-center h-16">
          <NavbarSidebar />
          <Link href="/" className="flex ml-auto sm:ml-4 lg:ml-0 gap-x-2">
            <p className={`font-bold text-2xl tracking-tighter`}>
              drizly<span className="text-[#f96516]">mall</span>
            </p>
          </Link>
          <MainNav />
          <NavbarActions />
        </div>
      </div>
      <div className="hidden sm:flex items-center w-full h-[50px] bg-[#fafbfc] shadow-custom">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <CategoryNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
