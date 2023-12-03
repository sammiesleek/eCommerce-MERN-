const Pagination = ({ perPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="mt-auto flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">
          {currentPage * perPage}
        </span>{" "}
        of <span className="font-semibold text-gray-900 ">{totalData}</span>
      </span>
      <ul className="flex gap-x-2 -space-x-px rtl:space-x-reverse text-sm h-8">
        <li
          onClick={() => paginate(currentPage - 1)}
          className="cursor-pointer"
        >
          <span className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-md hover:bg-gray-100 hover:text-gray-700 ">
            Previous
          </span>
        </li>
        {pageNumbers.map((number) => (
          <li
            className="cursor-pointer"
            onClick={() => paginate(number)}
            key={number}
          >
            <span
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700   ${
                number == currentPage ? "border-transparent" : ""
              } `}
            >
              {number}
            </span>
          </li>
        ))}
        <li onClick={() => paginate(currentPage + 1)}>
          <span className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-md hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

{
  /* <p
            className={`w-2 h-2 rounded-full bg-gray-200 cursor-pointer   ${
              number == currentPage ? "bg-yellow-400" : ""
            } `}
            onClick={() => paginate(number)}
          ></p> */
}
