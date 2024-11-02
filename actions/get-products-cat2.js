"use server";

export const getProductsCat2 = async () => {
  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    "/api/products?populate=*&pagination[start]=0&pagination[limit]=10&sort=createdAt:desc";

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });
  return res.json();
};
