// ... Other imports and schemas ...

import diamond_shapes from "./diamond-shapes";

// Product Schema
const prod = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Ring", "Necklace", "Pendant", "Earring", "Other"],
      },
    },
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "variantId",
              title: "Variant ID",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "stone",
              title: "Stone",
              type: "string",
              options: {
                list: diamond_shapes,
              },
            },
            {
              name: "metal",
              title: "Metal",
              type: "string",
              options: {
                list: [
                  "Yellow Gold",
                  "Platinum",
                  "White Gold",
                  "Rose Gold",
                  "Other",
                ],
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
              name: "rating",
              title: "Rating",
              type: "number",
            },
            {
              name: "variantDescription",
              title: "Variant Description",
              type: "text",
            },
            {
              name: "sku",
              title: "SKU",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
export default prod;
