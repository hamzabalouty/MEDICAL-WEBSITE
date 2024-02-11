import React from "react";
import { MdArrowRight } from "react-icons/md";

const BlogRight = () => {
  return (
    <div className="blog-right">
      <div className="blog-right-container">
        <div className="blog-right-input">
          <input placeholder="Search..." />
        </div>
        <div className="blog-right-list">
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Simple Post</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Happy Patientst</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Gallery Post</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Basic Post</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Quote Post</p>
            </li>
          </ul>
        </div>
        <div className="blog-right-list">
          <h3>Recent Comments</h3>
          <ul>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Phil on Simple Post</p>
            </li>
          </ul>
        </div>
        <div className="blog-right-list">
          <h3>Archives</h3>
          <ul>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>April 2023</p>
            </li>
          </ul>
        </div>
        <div className="blog-right-list">
          <h3>Categories</h3>
          <ul>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Classes</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Photography</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Travel</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Video</p>
            </li>
          </ul>
        </div>
        <div className="blog-right-list">
          <h3>Meta</h3>
          <ul>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Log in</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Entries RSS</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>Comments RSS</p>
            </li>
            <li>
              <MdArrowRight className="right-blog-icon" />
              <p>WordPress.org</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogRight;
