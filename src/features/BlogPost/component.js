import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import ButtonLink from '../../components/ButtonLink';

import { formatDate } from '../../utils/DateTimeFormat';

const BlogPost = (props) => {
  const url = encodeURIComponent(location.href);
  const { slug } = useParams();

  const { blog, dispatchGetBlog } = props;

  const getBlog = async (slug) => {
    await dispatchGetBlog(slug);
  };

  useEffect(() => {
    getBlog(slug);
  }, []);

  return (
    <div className="blog-post-wrapper">
      <h1 className="post-title">{blog.title}</h1>
      <div className="post-author-wrapper row">
        <div className="col-9 col-md-10 col-lg-10 col-xl-10">
          <small className="post-author">{`${blog.creator} | ${formatDate(
            blog.created_date
          )}`}</small>
        </div>
        <div className="col-3 col-md-2 col-lg-2 col-xl-2">
          <div className="post-link-wrapper">
            <a
              className="share-link"
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="share-link"
              href={`https://twitter.com/intent/tweet?url=${url}`}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="share-link"
              href={`https://plus.google.com/share?url=${url}`}
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-share-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="post-text-wrapper">
        <p className="blog-description">{blog.description}</p>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
      <div className="button-wrapper">
        <ButtonLink to="/blogs">Back to blog page</ButtonLink>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  message: PropTypes.string,
  blog: PropTypes.object,
  dispatchGetBlog: PropTypes.func,
};

export default BlogPost;
