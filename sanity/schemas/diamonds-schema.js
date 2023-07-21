import diamond_shapes from "./diamond-shapes";

// Diamonds Schema
const diamonds = {
  name: "diamond",
  title: "Diamonds",
  type: "document",
  fields: [
    {
      name: "carat",
      title: "Carat",
      type: "number",
    },
    {
      name: "clarity",
      title: "Clarity",
      type: "string",
      options: {
        list: [
          "FL",
          "IF",
          "VVS1",
          "VVS2",
          "VS1",
          "VS2",
          "SI1",
          "SI2",
          "I1",
          "I2",
          "I3",
          "Other",
        ],
      },
    },
    {
      name: "cut",
      title: "Cut",
      type: "string",
      options: {
        list: ["Excellent", "Very Good", "Good", "Fair", "Poor", "Other"],
      },
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Other"],
      },
    },
    {
      name: "shape",
      title: "Shape",
      type: "string",
      options: {
        list: diamond_shapes,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH",
      },
    },
  ],
};

export default diamonds;
