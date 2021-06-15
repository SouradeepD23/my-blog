import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <p>Loading...</p>}
            {error && <p>{ error }</p>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by: {blog.author}</h4>
                    <div>{blog.body}</div>
                    <button onClick = {handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;