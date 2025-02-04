import React from "react";
import ReactPaginate from "react-paginate";

function RoomsPaginate({ pageCount, handlePageClick, currentPage }) {
  return (
    <ReactPaginate
      forcePage={currentPage}
      previousLabel={"< prev"}
      containerClassName={"rooms-pagination"}
      nextLabel={"next >"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      activeClassName={"active"}
      onPageChange={handlePageClick}
    />
  );
}

export default RoomsPaginate;
