import React, { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import {
  chevronLeft,
  chevronFirst,
  chevronLast,
  chevronRight,
  upperCaseFirstLetter,
  caretIcon,
  hiraGrayText,
  hiralightGrayBG,
  hiraDarkGrayBG,
  hiraGrayBG,
  marginMultiplier,
  toFixedDecimal,
} from "./constants";
import { DiamondContext } from "./context/DiamondContext";
import LoadingSkeleton from "./LoadingSkeleton";

const DiamondsTable = ({ data }) => {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedRow, setSelectedRow] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [numPages, setNumPages] = useState(1);
  const [pageNums, setPageNums] = useState([1]);
  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const diamondContext = useContext(DiamondContext);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const sortOptions = [
    { type: "price", direction: "ASC", name: "Price (low to high)" },
    { type: "price", direction: "DESC", name: "Price (high to low)" },
    // { type: "carat", direction: "ASC", name: "Carat (low to high)" },
    // { type: "carat", direction: "DESC", name: "Carat (high to low)" },
  ];
  //   const scrollToBottom = () => {
  //     divRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };
  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [selectedRow, showProductDetail]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle items per page change
  const handleItemsPerPageChange = (event) => {
    setCurrentPage(1); // Reset to the first page when changing items per page
    setItemsPerPage(Number(event.target.value));
  };

  useEffect(() => {
    const newNumPages = parseInt(data.length / itemsPerPage) + 1;
    setNumPages(newNumPages);
    const rangeArray = Array.from(
      { length: newNumPages },
      (_, index) => index + 1
    );
    setPageNums(rangeArray);
  }, [data.length, itemsPerPage]);

  const caret = (index) => (
    <svg
      fill="none"
      className={`ml-2 cursor-pointer ${
        selectedRow === index ? "rotate-180" : ""
      }`}
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      onClick={(e) => {
        e.stopPropagation(); // Prevent row click event from firing
        handleRowClick(index);
      }}
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
  const handleRowClick = (index) => {
    if (selectedRow === index) {
      setSelectedRow(undefined);
    } else {
      setSelectedRow(index);
    }
  };

  const columnStyles = {
    shape: { width: "50px" },
    carat: { width: "50px" },
    color: { width: "50px" },
    clarity: { width: "50px" },
    cut: { width: "50px" },
    price: { width: "50px" },
    caret: { width: "50px" }, // Set the width of the caret column
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [
    diamondContext.currentCutOptions,
    diamondContext.currentClarityOptions,
    diamondContext.currentColorOptions,
    diamondContext.currentShapeOptions,
    diamondContext.currentSettingDiamondShape,
    diamondContext.caratValue,
    diamondContext.priceValue,
    diamondContext.cutValue,
  ]);

  const rowClass = `hover:cursor-pointer border-b whitespace-nowrap text-center px-2 py-4 transition duration-300 ease-in-out hover:bg-neutral-100`;
  const colClass = "px-2 py-4 text-center";
  return (
    <>
      <div className="mx-4">
        <div className="flex w-full justify-between items-center overflow-x-hidden">
          <h3 className="text-base text-gray-400">{data.length} items</h3>
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => {
              setShowSortOptions(!showSortOptions);
            }}
          >
            {diamondContext.orderDiamonds.name}
            <div className="ml-2">{caretIcon}</div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="">
              {showSortOptions && (
                <div className="absolute border pb-2 text-right border-black top-1 right-0 z-[60] bg-white shadow-2xl shadow-black w-fit px-2">
                  {sortOptions.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`text-left pt-2 hover:cursor-pointer ${
                          item.name === diamondContext.orderDiamonds.name
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                        onClick={() => {
                          diamondContext.setOrderDiamonds(item);
                          setShowSortOptions(false);
                        }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          {/* <div className="min-w-full"> */}
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm font-light table-fixed">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className={`${colClass}`}
                    // style={columnStyles.shape}
                  >
                    Shape
                  </th>
                  <th
                    scope="col"
                    className={`${colClass}`}
                    // style={columnStyles.carat}
                  >
                    Carat
                  </th>
                  <th
                    scope="col"
                    className={`${colClass}`}
                    // style={columnStyles.color}
                  >
                    Color
                  </th>
                  <th
                    scope="col"
                    className={`${colClass}`}
                    // style={columnStyles.clarity}
                  >
                    Clarity
                  </th>
                  <th
                    scope="col"
                    className={`${colClass}`}
                    // style={columnStyles.cut}
                  >
                    Cut
                  </th>
                  <th
                    scope="col"
                    className={`${colClass}`}
                    // style={columnStyles.price}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(
                  (item, index) =>
                    item.diamond.video && (
                      <React.Fragment key={index}>
                        <tr
                          className={`${rowClass} ${
                            index % 2 === 0 ? "" : `${hiraGrayBG}`
                          }`}
                          onClick={() => handleRowClick(index)}
                        >
                          <td className="px-2 py-4" style={columnStyles.shape}>
                            {upperCaseFirstLetter(
                              item.diamond.certificate.shape
                            )}
                          </td>
                          <td className="px-2 py-4" style={columnStyles.carat}>
                            {item.diamond.certificate.carats}
                          </td>
                          <td className="px-2 py-4" style={columnStyles.color}>
                            {item.diamond.certificate.color}
                          </td>
                          <td
                            className="px-2 py-4"
                            style={columnStyles.clarity}
                          >
                            {item.diamond.certificate.clarity}
                          </td>
                          <td className="px-2 py-4" style={columnStyles.cut}>
                            {item.diamond.certificate.cut}
                          </td>
                          <td className="px-2 py-4" style={columnStyles.price}>
                            {toFixedDecimal(item.price * marginMultiplier)}
                          </td>
                          {/* <td className="px-2 py-4" style={columnStyles.caret}>
                          {caret(index)}
                        </td> */}
                        </tr>
                        {selectedRow === index && (
                          <tr>
                            <td colSpan={6}>
                              <ProductDetail
                                shape={upperCaseFirstLetter(
                                  item.diamond.certificate.shape
                                )}
                                data={item}
                              />
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    )
                )}
              </tbody>
            </table>
            {diamondContext.isLoading && (
              <LoadingSkeleton
                header={"HIRA"}
                footer={"Loading Gems"}
              ></LoadingSkeleton>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-4 mb-16">
        {/* Pagination controls */}
        <div className="flex justify-center">
          <div className="flex pb-20">
            <div
              onClick={() => handlePageChange(1)}
              disabled={indexOfLastItem >= data.length}
              className="flex px-2 py-1 hover:cursor-pointer items-center"
            >
              {chevronFirst}
            </div>
            <div
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex px-2 py-1 mr-2 hover:cursor-pointer items-center"
            >
              {chevronLeft}
            </div>
            <div className="flex bg-white items-center">
              {pageNums.map((pageNum, index) => {
                return (
                  <div
                    className={`bg-white px-4 py-2 ${
                      (pageNum === currentPage + 1 ||
                        pageNum === currentPage) &&
                      numPages - currentPage > 2
                        ? "hover:text-gray-200 hover:cursor-pointer"
                        : "hidden"
                    } ${pageNum === currentPage ? "border border-black" : ""}`}
                    key={index}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </div>
                );
              })}
              <div className="px-2 py-1">...</div>
              {pageNums.map((pageNum, index) => {
                return (
                  <div
                    className={`bg-white px-4 py-2 ${
                      numPages - pageNum < 2
                        ? "hover:text-gray-200 hover:cursor-pointer"
                        : "hidden"
                    } ${pageNum === currentPage ? "border border-black" : ""}`}
                    key={index}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </div>
                );
              })}
            </div>
            <div
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={indexOfLastItem >= data.length}
              className="flex px-2 py-1 hover:cursor-pointer items-center"
            >
              {chevronRight}
            </div>
            <div
              onClick={() => handlePageChange(numPages)}
              disabled={indexOfLastItem >= data.length}
              className="flex px-2 py-1 hover:cursor-pointer items-center"
            >
              {chevronLast}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default DiamondsTable;
