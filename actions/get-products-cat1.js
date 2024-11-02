"use server";

export const getProductsCat1 = async () => {
  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    "/api/products?populate=*&filters[$and][0][home_category][title][$eq]=Në trend&pagination[start]=0&pagination[limit]=10&sort=id:desc";

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });

  return res.json();
};
