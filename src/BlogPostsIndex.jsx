export function BlogPostsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.blogPosts.map((blogPosts) => (
        <div key={blogPosts.id}>
          <h2>Title</h2>
          <p>{blogPosts.title}</p>
          <h2>Body</h2>
          <p>{blogPosts.body}</p>
        </div>
      ))}
    </div>
  );
}