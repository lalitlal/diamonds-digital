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
  return axios({
    method: "post",
    url: `/api/diamond-api`,
    data: baseData,
  });
};

export default getDiamonds;
// {
//   shape: shape,
//   carat: carat,
//   color: color,
//   clarity: clarity,
//   cut: cut,
//   priceMin: priceMin,
//   priceMax: priceMax,
// },
