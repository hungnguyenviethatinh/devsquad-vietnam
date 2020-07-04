import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { TransparentBox } from '../../components/Box';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import PageNavigation from '../../components/PageNavigation';

import { BLOG_ITEMS_PER_PAGE } from '../../core/Constants';

import { formatDate } from '../../utils/DateTimeFormat';

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
        <div className="blogs row">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-item col-12 col-md-4 col-lg-4 col-xl-4"
            >
              <Card
                image={blog.background_image}
                title={blog.title}
                author={`${blog.creator} | ${formatDate(blog.created_date)}`}
                text={blog.description}
                linkHref={`/blog/${blog.slug}`}
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
  blogs: PropTypes.any,
  totalCount: PropTypes.number,
  dispatchGetBlogs: PropTypes.func,
};

export default Blog;
