/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBlogs } from '../service/getBlogs';
import MyServerComponent from '../ui/MyServerComponent';

const BlogsPage = async () => {
    const blogs = await getBlogs();

    console.log(blogs);

    return (
        <div>
            Blog Page:
            {blogs.map((blog: any) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
            <MyServerComponent />
        </div>
    );
};

export default BlogsPage;
