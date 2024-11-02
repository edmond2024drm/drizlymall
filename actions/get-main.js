"use server";

export const getMain = async () => {
  const URL = process.env.NEXT_PUBLIC_API_URL + `/api/main-sections?populate=*`;

  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  return res.json();
};
