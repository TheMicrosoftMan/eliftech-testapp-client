import React, { useState } from "react";

const Paging = ({ goToPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPrevPage = () => {
    const prevPageNumber = currentPage - 1;
    setCurrentPage(prevPageNumber);
    goToPage(prevPageNumber);
  };

  const goToNextPage = () => {
    const nextPageNumber = currentPage + 1;
    setCurrentPage(nextPageNumber);
    goToPage(nextPageNumber);
  };

  return (
    <div className="Paging">
      <div className="wrapper">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="Paging__btn"
        >
          Previous page
        </button>
        <span className="Paging__count">{currentPage + 1}</span>
        <button onClick={goToNextPage} className="Paging__btn">
          Next page
        </button>
      </div>
    </div>
  );
};

export { Paging };
