"use client";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import ConfettiBG from "./components/confettibg";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const stringParams = JSON.stringify(params.faleminderitId);

  const replacedParams = stringParams.replace(/^["'](.+(?=["']$))["']$/, "$1");

  const slicedParams = replacedParams.slice(-2);

  const checkDays = () => {
    if (slicedParams === "KS") {
      return "1-2";
    } else if (slicedParams === "MQ") {
      return "2-3";
    } else {
      return "2-3";
    }
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col items-center h-[calc(100dvh-65px)] w-full justify-center gap-y-7 px-6">
          <ConfettiBG />
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 text-center px-5 sm:px-0">
            Porosia juaj është pranuar me sukses!
          </h1>
          <h2 className="text-sm sm:text-lg mb-5 text-gray-500 text-center">
            Porosia do të arrijë {checkDays()} brenda ditësh në adresën e dhënë.{" "}
            <br className="hidden sm:block" />
            Kur të niset porosia do njoftoheni me mesazh nga ekipa jonë!
          </h2>
          <Link href="/">
            <Button>
              <ArrowUpLeft size={20} className="mr-1" /> Shiko produkte të tjera
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ThankYou;
