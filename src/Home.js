import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario',id: 1},
        {title: 'Learning React', body: 'lorem ipsum...', author: 'luigi',id: 2},
        {title: 'Personal project', body: 'lorem ipsum...', author: 'mario',id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlog(newBlogs);
    }

    return ( 
        <div className="home">
            {/* Passing props */}
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />

            {/* To implement filtering */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
        </div>
     );
}
 
export default Home;