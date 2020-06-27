import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './PageHeader.scss';

const PageHeader = (props) => {
  const { className, title } = props;
  return (
    <div className={clsx(className, 'page-header-component')}>
      <div className="page-header-component-wrapper">
        <h1 className="leading">{title}</h1>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  className: '',
  title: '',
};

export default PageHeader;
