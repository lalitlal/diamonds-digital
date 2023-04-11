import axios from "axios";

const getDiamonds = async (baseData) => {
  return fetch(`/api/scraper-api`, {
    method: "POST",
    body: JSON.stringify(baseData),
  });
};

export default getDiamonds;
