// import { getProductsCat1 } from "@/actions/get-products-cat1";
import { getProductsCat1 } from "@/actions/get-products-cat1";
import { getProductsCat2 } from "@/actions/get-products-cat2";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { BadgeCheck, PackagePlus, Truck } from "lucide-react";

export const revalidate = 0;

const HomePage = async () => {
  const products2 = await getProductsCat1();
  const products1 = await getProductsCat2();

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard />
      </div>
      <div className="flex flex-col px-4 mb-8 gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Produktet më të reja" items={products1} />
      </div>
      <div className="flex flex-col items-center w-full py-14 sm:py-32">
        <div className="flex flex-col items-center justify-between w-full px-4 sm:flex-row gap-y-2 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-center sm:text-3xl sm:text-left">
            Ne ofrojmë
            <br />
            përvojat më të mira për klientin
          </h1>
          <p className="items-center hidden h-full pt-2 pl-3 text-sm text-center border-t-2 border-gray-500 text-neutral-500 sm:border-t-0 sm:border-l-4 sm:flex sm:pt-0 sm:text-left">
            Ne sigurojmë që klientët tanë të kenë përvojat më të mira në
            Drizlymall
          </p>
        </div>

        <div className="grid w-full grid-cols-1 px-4 mb-10 text-center sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 sm:text-left place-items-center sm:px-6 lg:px-8 mt-14 sm:mt-20">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center w-full mb-5 sm:justify-start">
              <BadgeCheck
                size={55}
                strokeWidth={2}
                className="p-2 text-center text-orange-700 bg-orange-100 border-2 border-orange-300 rounded-md"
              />
            </div>
            <h1 className="text-xl font-semibold">Garancion kënaqësie</h1>
            <p className="text-base text-neutral-500 mt-2 max-w-[87%] sm:max-w-[95%]">
              Në rast pakënaqësie ne ofrojmë : ndrrim falas ose kthimin e parave
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center w-full mb-5 sm:justify-start">
              <PackagePlus
                size={55}
                strokeWidth={2}
                className="p-2 text-center text-orange-700 bg-orange-100 border-2 border-orange-300 rounded-md"
              />
            </div>
            <h1 className="text-xl font-semibold">Produkte të reja çdo ditë</h1>
            <p className="text-base text-neutral-500 mt-2 max-w-[90%] sm:max-w-[95%]">
              Ne sigurojmë në përditësimin e produkteve të reja çdo ditë
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center w-full mb-5 sm:justify-start">
              <Truck
                size={55}
                strokeWidth={2}
                className="p-2 text-center text-orange-700 bg-orange-100 border-2 border-orange-300 rounded-md"
              />
            </div>
            <h1 className="text-xl font-semibold">
              Transport i Shpejtë dhe i Sigurt
            </h1>
            <p className="text-base text-neutral-500 mt-2 max-w-[90%] sm:max-w-[95%]">
              Ne ofrojmë transport të shpejtë dhe të sigurt për klientët tanë
              besnikë
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mb-8 gap-y-8 sm:px-6 lg:px-8 pb-10">
        <ProductList title="Në trend" items={products2} />
      </div>
      {/* <div className="flex flex-col px-4 mb-8 gap-y-8 sm:px-6 lg:px-8">
        <Link
          href="/produktet"
          className="flex items-center justify-center w-full"
        >
          <Button className="!text-sm sm:!text-base">
            <ArrowUpLeft size={22} className="mr-1" /> Të gjitha produktet
          </Button>
        </Link>
      </div> */}
    </Container>
  );
};

export default HomePage;
