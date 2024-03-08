import React from "react";
import ReactPaginate from "react-paginate";


const Pagination = ({setPageNum,  totalRecords}) => {
  return (
    <div>
      <div>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          pageCount={Math.ceil(totalRecords / 20)}
          onPageChange={(res) => {
            setPageNum(res.selected + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
