import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import ButtonLink from '../../components/ButtonLink';

const BlogPost = (props) => {
  const { id } = useParams();

  const { isLoading, message, blog, dispatchGetBlog } = props;

  useEffect(() => dispatchGetBlog(id), []);

  useEffect(() => {
    console.log(isLoading);
    console.log(message);
  }, [isLoading, message]);

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
        dangerouslySetInnerHTML={{ __html: blog.text }}
      ></div>
      <div className="button-wrapper">
        <ButtonLink to="/blogs">Back to blog page</ButtonLink>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.string,
  blog: PropTypes.object,
  dispatchGetBlog: PropTypes.func,
};

export default BlogPost;
