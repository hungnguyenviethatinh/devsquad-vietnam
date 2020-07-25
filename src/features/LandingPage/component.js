import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Aim from '../../components/Aim';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { BLOG_ITEMS_PER_CLICK } from '../../core/Constants';

import { LANDING_PAGE_AIMS as aims } from '../../utils/AppData';
import { formatDate } from '../../utils/DateTimeFormat';

const LandingPage = (props) => {
  const { blogs, totalCount, dispatchGetBlogs } = props;

  const [clickCount, setClickCount] = useState(1);

  const handleShowMore = () => {
    if (blogs.length < totalCount) {
      setClickCount(clickCount + 1);
    }
  };

  const getBlogs = async () => {
    await dispatchGetBlogs(clickCount, BLOG_ITEMS_PER_CLICK);
  };

  useEffect(() => {
    getBlogs();
  }, [clickCount]);

  return (
    <React.Fragment>
      <div className="page-header-wrapper">
        <div className="page-header">
          <div className="leading-wrapper">
            <h1 className="leading">Devsquad Vietnam</h1>
            <h3 className="sub-leading">
              Experts in IT recruiting and headhunting
            </h3>
          </div>
        </div>
      </div>
      <div className="aim-wrapper">
        <div className="aim">
          <h1 className="leading">Aim higher</h1>
          <p className="sub-leading">
            Specialized IT Recruiting in Vietnam <br />
            Est. in 2016, DevSquad is a boutique recruiting and headhunting
            firm.
          </p>
          <div className="aims row">
            {aims.map((aim, index) => (
              <Aim
                key={index}
                className="col-12 col-md-4 col-lg-4 col-xl-4"
                image={aim.image}
                title={aim.title}
                text={aim.text}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="blog-wrapper">
        <div className="row blog">
          <div className="col-12">
            <h1 className="leading">Blog</h1>
          </div>
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
          <div className="col-12 button-wrapper">
            <Button text="View more blog posts" onClick={handleShowMore} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

LandingPage.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.string,
  blogs: PropTypes.any,
  totalCount: PropTypes.number,
  dispatchGetBlogs: PropTypes.func,
};

export default LandingPage;
