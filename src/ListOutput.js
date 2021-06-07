import { useState } from 'react';

const ListOutput = () => {
    const [blogs, setBlog] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario',id: 1},
        {title: 'Learning React', body: 'lorem ipsum...', author: 'luigi',id: 2},
        {title: 'Personal project', body: 'lorem ipsum...', author: 'bowser',id: 3}
        // id is unique for each blog
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                // when we output a list using map in jsx, each root element like the next div must have a 'key' property whose value must be unique to the list as this is used by react to keep track of each item in the DOM as react outputs it
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ListOutput;