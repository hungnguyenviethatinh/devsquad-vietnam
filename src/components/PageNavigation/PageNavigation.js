import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './PageNavigation.scss';

const PreviousPage = 'Previous';
const NextPage = 'Next';
const MaxShowedPage = 5;
const HiddenPage = '...';

const PageNavigation = (props) => {
  const { className, itemsCountPerPage, totalItemsCount, onPageChange } = props;

  const totalPage = Math.ceil(totalItemsCount / itemsCountPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  const handleMoveNext = (event) => {
    event.preventDefault();
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }

    handleNextPageChange();
  };

  const handleMovePrevious = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }

    handlePreviousPageChange();
  };

  const handlePageClick = (page) => {
    if (page === HiddenPage) {
      return;
    }

    setCurrentPage(page);
    onPageChange(page);
  };

  const handleNextPageChange = () => {
    if (totalPage <= MaxShowedPage) {
      return;
    }

    const nextPage = currentPage + 1;
    if (nextPage > totalPage) {
      return;
    }

    let range = [];
    if (nextPage <= 3) {
      range = [1, 2, 3, HiddenPage, totalPage];
    } else if (nextPage < totalPage - 2) {
      range = [...getRange(nextPage - 2, nextPage), HiddenPage, totalPage];
    } else if (nextPage === totalPage - 2) {
      range = getRange(nextPage - 2, totalPage);
    } else {
      range = getRange(totalPage - 4, totalPage);
    }

    setPages([PreviousPage, ...range, NextPage]);
  };

  const handlePreviousPageChange = () => {
    if (totalPage <= MaxShowedPage) {
      return;
    }

    const previousPage = currentPage - 1;
    if (previousPage < 1) {
      return;
    }

    let range = [];
    if (previousPage >= totalPage - 4) {
      range = getRange(totalPage - 4, totalPage);
    } else if (previousPage > 4) {
      range = [
        ...getRange(previousPage - 2, previousPage),
        HiddenPage,
        totalPage,
      ];
    } else if (previousPage === 4) {
      range = [2, 3, 4, HiddenPage, totalPage];
    } else {
      range = [1, 2, 3, HiddenPage, totalPage];
    }

    setPages([PreviousPage, ...range, NextPage]);
  };

  const getPageNumbers = () => {
    let range = [];
    if (totalPage <= MaxShowedPage) {
      range = getRange(1, totalPage);
    } else {
      range = [1, 2, 3, HiddenPage, totalPage];
    }

    setPages([PreviousPage, ...range, NextPage]);
  };

  const getRange = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  useEffect(() => getPageNumbers(), []);

  return (
    <nav aria-label="Page Navigation">
      <ul className={clsx(className, 'pagination')}>
        {pages.map((page, index) => {
          if (page === PreviousPage) {
            return (
              <li key={index} className="custom-page-item page-item">
                <a
                  className="custom-page-link page-link"
                  role="button"
                  aria-label={PreviousPage}
                  onClick={handleMovePrevious}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            );
          }

          if (page === NextPage) {
            return (
              <li key={index} className="custom-page-item page-item">
                <a
                  className="custom-page-link page-link"
                  role="button"
                  aria-label={NextPage}
                  onClick={handleMoveNext}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            );
          }

          return (
            <li
              key={index}
              className={clsx({
                ['custom-page-item']: true,
                ['page-item']: true,
                ['custom-page-item-active']: currentPage === page,
              })}
            >
              <a
                className="custom-page-link page-link"
                role="button"
                onClick={() => handlePageClick(page)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

PageNavigation.propTypes = {
  className: PropTypes.string,
  itemsCountPerPage: PropTypes.number,
  totalItemsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
};

PageNavigation.defaultProps = {
  className: '',
  itemsCountPerPage: 9,
  onPageChange: () => {},
};

export default PageNavigation;
