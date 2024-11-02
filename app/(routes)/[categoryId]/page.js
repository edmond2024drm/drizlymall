import { getProducts } from "@/actions/get-products";
import { PaginationComponent } from "@/components/paginationcomponent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Container from "@/components/ui/container";
import Filter from "./filter";
import AllProducts from "./all-products";
import { getCategoriesId } from "@/actions/get-categoriesid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getProductsCat2 } from "@/actions/get-products-cat2";
import ProductList from "@/components/product-list";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params, searchParams }) => {
  const { categoryId } = await params;
  const { sold } = await searchParams;
  const { sort } = await searchParams;
  const { p } = await searchParams;

  const { data, meta } = await getProducts(categoryId, sold, sort, p);
  const category = await getCategoriesId(categoryId);
  const pageCount = meta.pagination.pageCount;
  const products2 = await getProductsCat2();

  if (!category || !category.data || category.data.length === 0) {
    notFound(); // Call notFound() if category does not exist
  }

  return (
    <Container>
      <div className="my-8 font-medium text-xl sm:px-6 flex items-center justify-center sm:justify-start">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{`${category?.data[0]?.title}`}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {data.length !== 0 && (
        <div className="mt-6 grid md:grid-cols-4 lg:grid-cols-5 sm:min-h-[calc(100vh-200px)] sm:px-6">
          <div className="col-span-1">
            {data.length !== 0 && <Filter categoryId={categoryId} />}
          </div>
          <div className="md:col-span-3 lg:col-span-4">
            <AllProducts products={data} categoryId={categoryId} />
            {data.length !== 0 && <PaginationComponent pageCount={pageCount} />}
          </div>
        </div>
      )}

      {data.length === 0 && (
        <div className="px-4 sm:pb-10 pt-20 sm:pt-20 sm:px-6 lg:px-8 flex justify-start items-center flex-col">
          <div className="w-full h-full flex items-center justify-center">
            {/* <SearchX size={100} className="text-orange-600 mb-8" /> */}
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl text-center sm:text-3xl mb-4">
              Produktet do të vijnë së shpejti...
            </h1>
            <p className="text-sm sm:text-base text-center text-neutral-800 mb-6 max-w-80 sm:max-w-full">
              Kërkoni më lart për të gjetur atë që kërkoni, ose shkoni{" "}
              <br className="hidden sm:block" />
              në faqen kryesore duke klikuar butonin më poshtë
            </p>
            <Link href="/">
              <Button>Kthehu në faqën kryesore</Button>
            </Link>
          </div>
        </div>
      )}

      {data.length === 0 && (
        <div className="flex flex-col px-4 mb-8 gap-y-8 sm:px-6 lg:px-8 mt-20 sm:mt-10">
          <ProductList items={products2} />
        </div>
      )}
    </Container>
  );
};

export default CategoryPage;
