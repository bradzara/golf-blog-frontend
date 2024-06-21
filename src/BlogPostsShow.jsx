export function BlogPostsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateBlogPost(props.blogPost.id, params, () => event.target.reset());
  };
  
  const handleClick = () => {
    props.onDestroyBlogPost(props.blogPost.id);
  };
  
  return (
    <div>
      <h1>{props.blogPost.title}</h1>
      <p>{props.blogPost.body}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.blogPost.title} name ="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.blogPost.body} name="body" type="text" />
        </div>
        <button type="submit">Update post</button>
      </form>
      <button onClick={handleClick}>Delete post</button>
    </div>
  );
}