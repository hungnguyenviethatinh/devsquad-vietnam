import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { TransparentBox } from '../../components/Box';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import PageNavigation from '../../components/PageNavigation';

import { BLOG_ITEMS_PER_PAGE } from '../../core/Constants';

const Blog = (props) => {
  const { message, blogs, totalCount, dispatchGetBlogs } = props;

  const handlePageChange = (page) => {
    getBlogs(page);
  };

  const getBlogs = (page, pageSize = BLOG_ITEMS_PER_PAGE) => {
    dispatchGetBlogs(page, pageSize);
  };

  useEffect(() => getBlogs(1), []);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <React.Fragment>
      <PageHeader title="Blog" />
      <TransparentBox>
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-4">
              <Card
                image={blog.image}
                title={blog.title}
                author={blog.author}
                text={blog.text}
                linkHref={`/blog/${blog.id}`}
              />
            </div>
          ))}
          <div className="col-12 page-navigation">
            <PageNavigation
              className="justify-content-center"
              itemsCountPerPage={BLOG_ITEMS_PER_PAGE}
              totalItemsCount={totalCount}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </TransparentBox>
    </React.Fragment>
  );
};

Blog.propTypes = {
  message: PropTypes.string,
  blogs: PropTypes.array,
  totalCount: PropTypes.number,
  dispatchGetBlogs: PropTypes.func,
};

export default Blog;
