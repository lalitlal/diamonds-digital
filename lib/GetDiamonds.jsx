import axios from "axios";

const getDiamonds = async (baseData) => {
  // baseData.data.shapeList = baseData.data.shapeListScraper;
  // delete baseData.data.shapeListScraper;
  // delete baseData.data.shapeListSanity;
  return fetch(`/api/scraper-api`, {
    method: "POST",
    body: JSON.stringify(baseData),
  });
};

export default getDiamonds;
