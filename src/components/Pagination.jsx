import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Context } from "react";



function Pagination() {
  const { page, totalPage, handlePageChange } = useContext(AppContext);
  console.log("Page:", page);
  console.log("Total Page:", totalPage);

  return (
    <div>
      <div>
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPage && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}

        <p>
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
