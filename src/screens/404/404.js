import React from 'react';

import './404.scss';

const NotFoundScreen = () => {
  return (
    <div className="not-found-wrapper">
      <div>
        <h1 className="not-found-text">404</h1>
        <div className="not-found-description">
          The page was not found!
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
