export function BlogPostsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.blogPosts.map((blogPost) => (
        <div key={blogPost.id}>
          <h2>Title: {blogPost.title}</h2>
          <button onClick={() => props.onShowBlogPost(blogPost)}>Read post</button>
        </div>
      ))}
    </div>
  );
}