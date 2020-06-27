import React from 'react';

import Aim from '../../components/Aim';
import Button from '../../components/Button';
import Card from '../../components/Card';

import mockData from '../../utils';

const LandingPage = () => {
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
          <div className="aims">
            {mockData.aims.map((aim, index) => (
              <Aim
                key={index}
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
          <div className="col-12 button-wrapper">
            <Button text="View more blog posts" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;