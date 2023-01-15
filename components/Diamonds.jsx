import React, { useEffect, useState } from "react";
import getDiamonds from "../lib/GetDiamonds";

const Diamonds = () => {
  const [shapeFilter, setShapeFilter] = useState("Oval");
  const [caratFilter, setCaratFilter] = useState(2.0);
  const default_diamond_data = [
    {
      shape: "Oval",
      carat: 2.5,
      color: "F",
      clarity: "VVS1",
      cut: "Super Ideal",
      price: "CA$9993",
    },
    {
      shape: "Princess",
      carat: 3.3,
      color: "E",
      clarity: "VS2",
      cut: "Excellent",
      price: "CA$4560",
    },
    {
      shape: "Emerald",
      carat: 1.5,
      color: "F",
      clarity: "SI",
      cut: "Ideal",
      price: "CA$7640",
    },
    {
      shape: "Round",
      carat: 2.86,
      color: "D",
      clarity: "VVS1",
      cut: "Ideal",
      price: "CA$4550",
    },
  ];

  const post_body = {
    data: {
      imgOnly: true,
      view: "list",
      priceMin: 150,
      priceMax: 250000,
      priceMapMin: 350,
      priceMapMax: 5000000,
      caratMin: 0.15,
      caratMax: 12,
      caratMapMin: 0.15,
      caratMapMax: 12,
      cutMin: 0,
      cutMax: 4,
      colorMin: 4,
      colorMax: 9,
      clarityMin: 0,
      clarityMax: 9,
      depthMin: 0,
      depthMax: 100,
      tableMin: 0,
      tableMax: 93,
      shapeList: ["3", "1"],
      certificateList: [],
      sort: 0,
      polish: [],
      symmetry: [],
      fluor: [],
      sort_order: null,
      pager: 1,
    },
  };

  const [diamondData, setDiamondData] = useState(default_diamond_data);
  const [postBody, setPostBody] = useState(post_body);

  useEffect(() => {
    const getDiamondFunc = async () => {
      try {
        const res = await getDiamonds(
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          postBody
        );
        if (res.status === 200) {
          setDiamondData(res.data.diamonds);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getDiamondFunc();
  }, [diamondData, postBody]);

  return (
    <div className="py-4 px-2 bg-[#48565c] mx-5">
      <section className="py-1 h-[300px] overflow-y-scroll">
        {/* xl:w-8/12 */}
        <div className="w-full mb-12 xl:mb-0 px-1 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Diamonds
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-slate-500 text-white active:bg-slate-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Shape
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Carat
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Color
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Clarity
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Cut
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {diamondData.map((data, i) => {
                    return (
                      <tr
                        key={data + i}
                        className="hover:bg-slate-300 transition duration-200 ease-in-out cursor-pointer"
                      >
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                          {data.shape}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {data.carat}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {data.color}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {data.clarity}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {data.cut}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {`CA$${data.price}`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diamonds;
