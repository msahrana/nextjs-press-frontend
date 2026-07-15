const BlogsPage = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

    const blogData = await posts.json()

    console.log(blogData);

    return <div>Blog Page</div>;
};

export default BlogsPage;
