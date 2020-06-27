import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './PageNavigation.scss';

const PreviousPage = 'Previous';
const NextPage = 'Next';

const PageNavigation = (props) => {
  const { className, itemsCountPerPage, totalItemsCount, onChange } = props;

  const totalPage = totalItemsCount / itemsCountPerPage;

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([
    PreviousPage,
    1,
    2,
    3,
    '...',
    totalPage,
    NextPage,
  ]);

  const handleMoveNext = (event) => {
    event.preventDefault();
    if (currentPage < totalPage) {
      gotoPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
      if (currentPage < totalPage - 4) {
        getPageRange();
      }
    }
  };

  const handleMovePrevious = (event) => {
    event.preventDefault();

    if (currentPage > 1) {
      gotoPage(currentPage - 1);
      setCurrentPage(currentPage - 1);
      if (currentPage > 3) {
        getPageRange(false);
      }
    }
  };

  const gotoPage = (page) => {
    onChange(page);
  };

  const getPageRange = (next = true) => {
    if (next) {
      pages[1] += 1;
      pages[2] += 1;
      pages[3] += 1;
      if (pages[3] === totalPage - 2) {
        pages[4] = totalPage - 1;
      }
    } else {
      pages[1] -= 1;
      pages[2] -= 1;
      pages[3] -= 1;
      pages[4] = '...';
    }

    setPages([...pages]);
  };

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
              className={clsx(
                'custom-page-item',
                'page-item',
                'custom-page-item-active' && currentPage === page
              )}
            >
              <a
                className="custom-page-link page-link"
                role="button"
                onClick={() => gotoPage(page)}
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
  onChange: PropTypes.func,
};

PageNavigation.defaultProps = {
  className: '',
  itemsCountPerPage: 9,
  onChange: (page) => {
    console.log(page);
  },
};

export default PageNavigation;
