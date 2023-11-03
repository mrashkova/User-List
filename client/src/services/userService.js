const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  console.log(result);
  const data = Object.values(result);

  return data;
};

export const create = async (data) => {
  const body = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    imageUrl: data.phoneNumber,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    address: {
      country: data.country,
      city: data.city,
      street: data.street,
      streetNumber: data.streetNumber,
    },
  };

  const respose = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await respose.json();
  console.log(respose);

  return result;
};
