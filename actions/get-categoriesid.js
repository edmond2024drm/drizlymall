"use server";

export const getCategoriesId = async (categoryId) => {
  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    `/api/categories?filters[$and][0][uid][$eq]=${categoryId}`;

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });
  return res.json();
};
