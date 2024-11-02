"use server"

export const getSubCategories = async () => {
  const URL = process.env.NEXT_APP_API_URL + `/api/subcats?populate=*`;

  const res = await fetch(URL, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_APP_API_TOKEN,
    },
  });

  return res.json();
};
