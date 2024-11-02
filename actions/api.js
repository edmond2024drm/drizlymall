const sendForms = async (data) => {
  fetch("/api/porosija", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export default sendForms;
