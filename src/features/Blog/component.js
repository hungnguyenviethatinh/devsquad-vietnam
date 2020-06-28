import React, { useEffect, useState } from 'react';

import { TransparentBox } from '../../components/Box';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import PageNavigation from '../../components/PageNavigation';

import mockData from '../../utils';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const handlePageChange = (page) => {
    getBlogs(page, 3);
  };

  const getBlogs = (page, pageSize) => {
    setBlogs(mockData.blogs.slice((page - 1) * pageSize, page * pageSize));
  };

  useEffect(() => getBlogs(1, 3), []);

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
                linkHref={`/blog/${index}`}
              />
            </div>
          ))}
          <div className="col-12 page-navigation">
            <PageNavigation
              className="justify-content-center"
              itemsCountPerPage={3}
              totalItemsCount={mockData.blogs.length}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </TransparentBox>
    </React.Fragment>
  );
};

export default Blog;
