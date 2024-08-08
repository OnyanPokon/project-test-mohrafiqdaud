/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  HiChevronLeft,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from "react-icons/hi";

const Pagination = ({ pageNow, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, pageNow - 2);
    let endPage = Math.min(totalPages, pageNow + 1);

    if (pageNow <= 2) {
      endPage = Math.min(4, totalPages);
    }

    if (pageNow > totalPages - 2) {
      startPage = Math.max(totalPages - 3, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <>
        <HiChevronDoubleLeft
          className="hover:cursor-pointer"
          onClick={() => handlePageChange(1)}
        />
        <HiChevronLeft
          className="hover:cursor-pointer"
          onClick={() => handlePageChange(pageNow - 1)}
        />
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`border px-3.5 py-2 rounded-md ${
              pageNow === number
                ? "bg-color-primary-500 text-white"
                : "font-semibold"
            }`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
        
        <HiChevronRight
          className="hover:cursor-pointer"
          onClick={() => handlePageChange(pageNow + 1)}
        />
        <HiChevronDoubleRight
          className="hover:cursor-pointer"
          onClick={() => handlePageChange(totalPages)}
        />
      </>
    );
  };

  return (
    <div className="w-full flex justify-center items-center mt-8 gap-x-2 text-sm">
      {renderPagination()}
    </div>
  );
};

export default Pagination;
