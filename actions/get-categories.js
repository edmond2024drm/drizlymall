"use server";

export const getCategories = async () => {
  const URL =
    process.env.NEXT_PUBLIC_API_URL +
    "/api/categories?fields[0]=title&fields[1]=id&fields[2]=uid&sort=id:asc";

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });
  return res.json();
};
