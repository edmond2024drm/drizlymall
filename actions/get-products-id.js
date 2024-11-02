"use server";

export const getProductsId = async (params) => {

  const { produktetId } = await params

  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    `/api/products?populate=*&pagination[limit]=8&filters[$and][0][uid][$ne]=${produktetId}&sort[0]=createdAt:desc&randomSort=true`;

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });

  return res.json();
};
