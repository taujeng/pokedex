import React from 'react';
import "./pagination.css"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  // Number of Pages needed
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <span key={pageNumber} className="page-number" >
          <button onClick={() => paginate(pageNumber)} className="page-link">{pageNumber}</button>
        </span>
      ))}
    </div>
  );
};

export default Pagination;
