import React from 'react';

import { TransparentBox } from '../../components/Box';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import PageNavigation from '../../components/PageNavigation';

import mockData from '../../utils';

const Blog = () => {
  return (
    <React.Fragment>
      <PageHeader title="Blog" />
      <TransparentBox>
        <div className="row">
          {mockData.blogs.map((blog, index) => (
            <div key={index} className="col-4">
              <Card
                image={blog.image}
                title={blog.title}
                author={blog.author}
                text={blog.text}
              />
            </div>
          ))}
          <div className="col-12 page-navigation">
            <PageNavigation
              className="justify-content-center"
              itemsCountPerPage={9}
              totalItemsCount={81}
            />
          </div>
        </div>
      </TransparentBox>
    </React.Fragment>
  );
};

export default Blog;
