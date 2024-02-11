import React from "react";
import BlogRight from "./BlogRight";
import BlogLeft from "./BlogLeft";

const BlogBody = () => {
  return (
    <div className="blog-body">
      <BlogLeft />
      <BlogRight />
    </div>
  );
};

export default BlogBody;
