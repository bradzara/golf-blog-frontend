export function BlogPostNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateBlogPost(params, () => event.target.reset());
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}