const MyServerComponent = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

    const blogData = await posts.json();

    console.log(blogData);

    return <div>My Server Component:</div>;
};

export default MyServerComponent;
