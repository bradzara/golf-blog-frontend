import axios from "axios";
import { useState, useEffect } from "react";
import { BlogPostsIndex } from "./BlogPostsIndex";
import { BlogPostNew } from "./BlogPostNew";
import { BlogPostsShow } from "./BlogPostsShow";
import { Modal } from "./Modal";

export function Content() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isBlogPostsShowVisible, setIsBlogPostsShowVisible] = useState(false);
  const [currentBlogPost, setCurrentBlogPost] = useState({});

  const handleIndexBlogPosts = () => {
    console.log("handleIndexBlogPosts");
    axios.get("http://localhost:3000/blog_posts.json").then((response) => {
      console.log(response.data);
      setBlogPosts(response.data);
    });
  };

  const handleCreateBlogPost = (params, successCallback) => {
    console.log("handleCreateBlogPost", params);
    axios.post("http://localhost:3000/blog_posts.json", params).then((response) => {
      setBlogPosts([...blogPosts, response.data]);
      successCallback();
    });
  };

  const handleShowBlogPost = (blogPost) => {
    console.log("handleShowBlogPost", blogPost);
    setIsBlogPostsShowVisible(true);
    setCurrentBlogPost(blogPost);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsBlogPostsShowVisible(false);
  };

  const handleUpdateBlogPost = (id, params, successCallback) => {
    console.log("handleUpdateBlogPost", params);
    axios.patch(`http://localhost:3000/blog_posts/${id}.json`, params).then((response) => {
      setBlogPosts(
        blogPosts.map((blogPost) => {
          if (blogPosts.id === response.data.id) {
            return response.data;
          } else {
            return blogPost;
          }
        })
      );
      successCallback();
      handleCreateBlogPost();
    });
  };

  const handleDestroyBlogPost = (id) => {
    console.log("handleDestroyBlogPost", id);
    axios.delete(`http://localhost:3000/blog_posts/${id}.json`).then((response) => {
      setBlogPosts(blogPosts.filter((blogPost) => blogPost.id !== id));
      handleClose;
    });
  }

  useEffect(handleIndexBlogPosts, []);
  
  return (
    <main>
      <BlogPostNew onCreateBlogPost={handleCreateBlogPost} />
      <BlogPostsIndex blogPosts={blogPosts} onShowBlogPost={handleShowBlogPost} />
      <Modal show={isBlogPostsShowVisible} onClose={handleClose}>
        <BlogPostsShow blogPost={currentBlogPost} onUpdateBlogPost={handleUpdateBlogPost} onDestroyBlogPost={handleDestroyBlogPost} />
      </Modal>
    </main>
  );
}