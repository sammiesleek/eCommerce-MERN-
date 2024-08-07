import React from "react";

const Pagination = ({ perPage, totalData, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalData / perPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleNavigation = (page) => {
    if (page >= 1 && page <= totalPages) {
      paginate(page);
    }
  };

  return (
    <nav
      className="mt-auto flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">
          {Math.min(currentPage * perPage, totalData)}
        </span>{" "}
        of <span className="font-semibold text-gray-900 ">{totalData}</span>
      </span>
      <ul className="flex gap-x-2 -space-x-px rtl:space-x-reverse text-sm h-8">
        <li
          onClick={() => handleNavigation(currentPage - 1)}
          className={`cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-md hover:bg-gray-100 hover:text-gray-700">
            Previous
          </span>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => handleNavigation(number)}
            className={`cursor-pointer ${
              number === currentPage ? "text-blue-600" : ""
            }`}
          >
            <span
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                number === currentPage ? "border-transparent" : ""
              }`}
            >
              {number}
            </span>
          </li>
        ))}
        <li
          onClick={() => handleNavigation(currentPage + 1)}
          className={`cursor-pointer ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-md hover:bg-gray-100 hover:text-gray-700">
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
