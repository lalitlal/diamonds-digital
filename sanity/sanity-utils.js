import { createClient, groq } from "next-sanity";
import { apiVersion, projectId, dataset } from "./env";
export const getProducts = async (stone, metal) => {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-03-04",
  });

  const groqQuery = `*[_type == "product" && title != 'Completely Custom'] {
    _id,
    title,
    description,
    type,
    "variants": variants[stone == $stone && metal == $metal] {
      variantId,
      stone,
      metal,
      price,
      stockQuantity,
      "images": images[].asset->url,
      rating,
      variantDescription,
      sku
    }
  }`;

  const values = await client.fetch(groqQuery, {
    stone: stone,
    metal: metal,
  });
  //   console.log(values);
  return values;
};

export const getCustomProduct = async () => {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-03-04",
  });

  const groqQuery = `*[_type == "product" && title == $titleFilter] {
      _id,
      title,
      description,
      type,
      "variants": variants[] {
        variantId,
        stone,
        metal,
        price,
        stockQuantity,
        "images": images[].asset->url,
        rating,
        variantDescription,
        sku
      }
    }`;

  const values = await client.fetch(groqQuery, {
    titleFilter: "Completely Custom",
  });
  //   console.log(values);
  return values;
};

export const getCheckoutItem = async (title, variantDescription) => {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-03-04",
  });

  const groqQuery = `*[_type == "product" && title == $title] {
      _id,
      title,
      description,
      type,
      "variants": variants[variantDescription == $variantDescription] {
        variantId,
        stone,
        metal,
        price,
        stockQuantity,
        "images": images[].asset->url,
        rating,
        variantDescription,
        sku
      }
    }`;

  const values = await client.fetch(groqQuery, {
    title: title,
    variantDescription: variantDescription,
  });
  return values;
};
