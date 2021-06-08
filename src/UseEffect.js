import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const UseEffect = () => {
    const [blogs, setBlog] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario',id: 1},
        {title: 'Learning React', body: 'lorem ipsum...', author: 'luigi',id: 2},
        {title: 'Personal project', body: 'lorem ipsum...', author: 'mario',id: 3}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    }, [name])

    return ( 
        <div className="home">
            {/* passing props */}
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <p>{name}</p>
            <button onClick={() => (setName('luigi'))}>Click me</button>

            {/* To implement filtering */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
        </div>
     );
}
 
export default UseEffect;