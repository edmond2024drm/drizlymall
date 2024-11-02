import { getProduct } from "@/actions/get-product";
import { getProductsId } from "@/actions/get-products-id";
import Gallery from "@/components/gallery";
import SwiperPanel from "@/components/gallery/swiper";
import Info from "@/components/info";
import Markdown from "@/components/markdown";
import ProductList from "@/components/product-list";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/extension/carousel";
// import NextImage from "next/image";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const products = await getProduct({ params });

  return {
    title: products?.data[0]?.title + ` | Drizlymall`,
    description: products?.data[0]?.description,
  };
}

const ProductPage = async ({ params }) => {
  const products = await getProduct({ params });
  const otherProducts = await getProductsId(params);

  return (
    <div className="mt-5 bg-white">
      <Container>
        <div className="px-4 sm:py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* <Carousel
              orientation="vertical"
              className="flex items-center gap-2"
            >
              <div className="relative basis-5/6 ">
                <CarouselMainContainer className="h-[500px]">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <SliderMainItem
                      key={index}
                      className="border border-muted flex items-center justify-center h-[500px] rounded-md"
                    >
                      Slide {index + 1}
                    </SliderMainItem>
                  ))}
                </CarouselMainContainer>
              </div>
              <CarouselThumbsContainer className="h-60 basis-1/6">
                {Array.from({ length: 10 }).map((_, index) => (
                  <SliderThumbItem
                    key={index}
                    index={index}
                    className="rounded-md bg-transparent"
                  >
                    <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                      Slide {index + 1}
                    </span>
                  </SliderThumbItem>
                ))}
              </CarouselThumbsContainer>
            </Carousel> */}
            <div className="hidden sm:block">
              <Gallery images={products} />
            </div>
            <div className="block sm:hidden">
              {products.data.map((item) => (
                <SwiperPanel key={item.id} images={item} />
              ))}
            </div>
            <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              {products.data.map((item) => (
                <Info data={item} key={item.id} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 mt-20 sm:mt-10 mb-10 px-2">
            <div className="border-b border-gray-300">
              <div className="flex gap-4">
                <p className="border-b-2 border-gray-900 py-4 text-base sm:text-xl font-semibold">
                  {" "}
                  Informacionet rreth produktit{""}
                </p>
              </div>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <Markdown data={products?.data[0]} />
            </div>
          </div>

          <hr className="mt-5 mb-10" />
          <ProductList title="Produktet e tjera" items={otherProducts} />

          <Link
            href="/"
            className="flex items-center justify-center w-full my-10"
          >
            <Button className="!text-sm sm:!text-base">
              <ArrowUpLeft size={22} className="mr-1" /> Kthehu në faqen
              kryesore
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
