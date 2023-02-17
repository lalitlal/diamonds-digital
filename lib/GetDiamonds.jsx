import axios from "axios";

const getDiamonds = async (
  shape,
  carat,
  color,
  clarity,
  cut,
  priceMin,
  priceMax,
  baseData
) => {
  const url = `/api/diamond-api`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(baseData),
  });
};

export default getDiamonds;
