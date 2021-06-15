import { useState } from "react";
import { useHistory } from "react-router";

const NewBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {               //access to event object e by default
        e.preventDefault();                     // prevents reloading the page on submit
        const blog = {title, body, author};     //no need to send id as json-server automatically adds uid to each record
        // console.log(blog);

        setIsPending(true);

        //use fetch method with POST to submit data
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="new-blog">
            <h2>Create a new blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Title:</label>
                <input 
                type = "text"
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}        //2 way binding between script and dom
                />
                <label>Body:</label>
                <textarea
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select 
                required
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="bowser">Bowser</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Add blog</button>}
            </form>
        </div>
    );
}
 
export default NewBlog;