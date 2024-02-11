import React, { useEffect } from "react";
import "./Blog.css";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog">
      <BlogHeader />
      <BlogBody />
    </div>
  );
};

export default Blog;
