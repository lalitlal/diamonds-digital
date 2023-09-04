const imageAssets = {
  name: "image_asset",
  title: "Image Asset",
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
        list: ["Hero", "Lifestyle"],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};

export default imageAssets;
