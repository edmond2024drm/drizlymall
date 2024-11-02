"use server";

import QueryString from "qs";

export const getProducts = async (id, sold, sort, currentPage) => {
  const options = QueryString.stringify({
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
      isSold: {
        $ne: sold,
      },
    },
    pagination: {
      page: currentPage,
      pageSize: 50,
    },
  });

  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    `/api/products?populate=*&[filters][categories][uid][$eq]=${id}&${options}`;

  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const data = await res.json();

  // Sort products based on Discount for 'qmu' and 'qml'
  if (sort === "qmu" || sort === "qml") {
    data.data.sort((a, b) => {
      const aPrice = a.Discount ? a.priceDiscount : a.price;
      const bPrice = b.Discount ? b.priceDiscount : b.price;

      return sort === "qmu" ? aPrice - bPrice : bPrice - aPrice;
    });
  }

  return data;
};
