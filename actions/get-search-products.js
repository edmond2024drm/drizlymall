"use server";
const qs = require("qs");

export const getSearchProducts = async (query, sold, sort, currentPage) => {
  const options = qs.stringify({
    sort: [
      `${
        sort === "sr"
          ? "createdAt:desc"
          : sort === "zml"
          ? "discountPercentage:desc"
          : "createdAt:desc"
      }`,
    ],
    filters: {
      $or: [
        {
          title: {
            $containsi: query,
          },
        },
        {
          tags: {
            $containsi: query,
          },
        },
        // {
        //   description: {
        //     $containsi: query,
        //   },
        // },
      ],
      $and: [
        {
          isSold: {
            $ne: sold,
          },
        },
      ],
    },
    pagination: {
      page: currentPage,
      pageSize: 30,
    },
  });

  const URL =
    process.env.NEXT_PUBLIC_API_URL + `/api/products?populate=*&${options}`;

  const res = await fetch(
    URL,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
    { cache: "no-store" }
  );

  const products = await res.json();

  // Sort products based on Discount for 'qmu' and 'qml'
  if (sort === "qmu" || sort === "qml") {
    products.data.sort((a, b) => {
      const aPrice = a.Discount ? a.priceDiscount : a.price;
      const bPrice = b.Discount ? b.priceDiscount : b.price;

      return sort === "qmu" ? aPrice - bPrice : bPrice - aPrice;
    });
  }

  return products;
};
