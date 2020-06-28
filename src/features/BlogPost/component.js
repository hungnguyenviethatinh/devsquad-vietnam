import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ButtonLink from '../../components/ButtonLink';

import mockData from '../../utils';

const BlogPost = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  const getBlog = (blogId) => {
    setBlog(mockData.blogs[blogId]);
  };

  useEffect(() => getBlog(id), []);

  return (
    <div className="blog-post-wrapper">
      <h1 className="post-title">{blog.title}</h1>
      <div className="row">
        <div className="col-10">
          <small className="post-author">{blog.author}</small>
        </div>
        <div className="col-2">
          <div className="post-link-wrapper">
            <a className="share-link" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="share-link" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="share-link" href="">
              <i className="fas fa-share-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="post-text-wrapper"
        dangerouslySetInnerHTML={{ __html: mockData.postDetail.text }}
      ></div>
      <div className="button-wrapper">
        <ButtonLink to="/blogs">Back to blog page</ButtonLink>
      </div>
    </div>
  );
};

export default BlogPost;
