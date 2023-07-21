// ... Other imports and schemas ...

// Order Schema
const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "user" }],
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
            },
            {
              name: "variantId",
              title: "Variant ID",
              type: "string",
            },
            {
              name: "stone",
              title: "Stone",
              type: "string",
            },
            {
              name: "metal",
              title: "Metal",
              type: "string",
            },
            {
              name: "size",
              title: "Size",
              type: "number",
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: ["Pending", "Completed", "Refunded"],
      },
    },
    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "text",
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Processing", "Shipped", "Delivered"],
      },
    },
  ],
};
export default order;
