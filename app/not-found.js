import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-320px)] flex items-center justify-center">
      <div className="px-4 sm:pb-10 pt-20 sm:pt-20 sm:px-6 lg:px-8 flex justify-start items-center flex-col">
        <div className="w-full h-full flex items-center justify-center">
          {/* <SearchX size={100} className="text-orange-600 mb-8" /> */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-6xl text-center sm:text-8xl mb-4 text-orange-600">
            404 Error
          </h1>
          <p className="text-sm sm:text-base text-center text-neutral-800 mb-6 max-w-80 sm:max-w-full">
            Na vjen keq, por nuk mund të gjejmë atë që po kërkoni.
          </p>
          <Link href="/">
            <Button>Kthehu në faqën kryesore</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
