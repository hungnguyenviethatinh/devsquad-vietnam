import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { TransparentBox } from '../../components/Box';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import PageNavigation from '../../components/PageNavigation';

import { BLOG_ITEMS_PER_PAGE } from '../../core/Constants';

import { formatDate } from '../../utils/DateTimeFormat';

const Blog = (props) => {
  const { blogs, totalCount, dispatchGetBlogs } = props;

  const handlePageChange = (page) => {
    getBlogs(page);
  };

  const getBlogs = async (page = 1, pageSize = BLOG_ITEMS_PER_PAGE) => {
    await dispatchGetBlogs(page, pageSize);
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
  blogs: PropTypes.any,
  totalCount: PropTypes.number,
  dispatchGetBlogs: PropTypes.func,
};

export default Blog;
