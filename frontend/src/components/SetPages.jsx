import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-green-700 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="text-black">Page {page} of {totalPages}</span>
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-green-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
