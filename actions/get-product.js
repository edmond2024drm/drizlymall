"use server"

export const getProduct = async ({ params }) => {

  const { produktetId } = await params

  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    `/api/products?populate=*&filters[$and][0][uid][$eq]=${produktetId}`;

    

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });

  return res.json();
};
