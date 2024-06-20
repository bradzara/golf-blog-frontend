import axios from "axios";
import { useState, useEffect } from "react";
import { BlogPostsIndex } from "./BlogPostsIndex";

export function Content() {
  const [blogPosts, setBlogPosts] = useState([]);

  const handleIndexBlogPosts = () => {
    console.log("handleIndexBlogPosts");
    axios.get("http://localhost:3000/blog_posts.json").then((response) => {
      console.log(response.data);
      setBlogPosts(response.data);
    });
  };

  useEffect(handleIndexBlogPosts, []);
  
  return (
    <main>
      <BlogPostsIndex blogPosts={blogPosts}/>
    </main>
  );
}