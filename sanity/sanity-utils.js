import PQueue from "p-queue";
import { client } from "./lib/client";
export const getProducts = async (stone, metal) => {
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
  return values;
};

export const getCustomProduct = async () => {
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
  return values;
};

export const getCheckoutItem = async (title, variantDescription) => {
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

// Assuming you have already imported the 'client' from your Sanity configuration file

export const bulkUploadDiamondsToSanity = async (diamondsArray) => {
  const queue = new PQueue({ concurrency: 1, interval: 1000 / 25 });

  const diamondExists = async (diamond) => {
    try {
      // Use the Sanity client to query for the document by attributes (carat, clarity, cut, etc.)
      const result = await client.fetch(
        `*[_type == 'diamond' && 
        carat == $carat && 
        clarity == $clarity && 
        cut == $cut && 
        color == $color && 
        shape == $shape &&
        price == $price]`,
        {
          carat: parseFloat(diamond.carat),
          clarity: diamond.clarity,
          cut: diamond.cut,
          color: diamond.color,
          shape: diamond.shape,
          price: diamond.price,
        }
      );

      return result.length > 0;
    } catch (error) {
      console.error("Error checking document existence:", error.message);
      return false;
    }
  };

  // Function to convert API response to Sanity document format
  const convertToSanityDocument = (apiData) => {
    const currentDate = new Date().toISOString();
    return apiData.map((item) => ({
      _type: "diamond",
      carat: parseFloat(item.carat),
      clarity: item.clarity,
      cut: item.cut,
      color: item.color,
      shape: item.shape,
      price: item.price,
      stockQuantity: 1,
      // images: item.images.map((imageUrl) => ({ asset: { url: imageUrl } })),
      // lastUpdated: currentDate,
    }));
  };

  function removeDuplicatesById(arr) {
    const uniqueIds = new Set();
    return arr.filter((obj) => {
      if (!uniqueIds.has(obj._id)) {
        uniqueIds.add(obj._id);
        return true;
      }
      return false;
    });
  }

  try {
    const dataArray = convertToSanityDocument(diamondsArray);

    // Filter out existing diamonds from the dataArray
    const nonExistingDiamonds = await Promise.all(
      dataArray.map(async (data) => {
        if (!(await diamondExists(data))) {
          return data;
        }
        return null;
      })
    );

    // Remove null entries (existing diamonds) from the filtered array
    const filteredDataArray = nonExistingDiamonds.filter(
      (data) => data !== null
    );

    if (filteredDataArray.length === 0) {
      console.log("No new documents to upload.");
      return;
    }

    // await client.delete({
    //   query: `*[_type == "diamond"]`,
    // });

    // Logger
    const mutations = dataArray.map((data) => ({
      ...data,
      _id: `${data.carat.toString()}-${data.clarity}-${data.cut}-${
        data.color
      }-${data.shape}-${data.price.toString()}`.replace(/\s+/g, ""),
      id: `${data.carat.toString()}-${data.clarity}-${data.cut}-${data.color}-${
        data.shape
      }-${data.price.toString()}`.replace(/\s+/g, ""),
    }));

    const uniqueMutations = removeDuplicatesById(mutations);
    // console.log(uniqueMutations.mutations.length, mutations.length);

    // NOT WORKING TRANSACTION
    // const result = await client.transaction(uniqueMutations);

    // // WORKING SINGLE UPLOADS, USING Q
    uniqueMutations.map((data) => {
      queue.add(() => {
        client.createOrReplace({
          ...data,
          _id: `${data.carat.toString()}-${data.clarity}-${data.cut}-${
            data.color
          }-${data.shape}-${data.price.toString()}`.replace(/\s+/g, ""),
          id: `${data.carat.toString()}-${data.clarity}-${data.cut}-${
            data.color
          }-${data.shape}-${data.price.toString()}`.replace(/\s+/g, ""),
        });
      });
    });

    // Output the result of the bulk upload
    console.log("Data uploaded successfully");
  } catch (error) {
    // Handle any errors that occur during the upload process
    console.error("Error uploading data:", error.message);
  }
};
