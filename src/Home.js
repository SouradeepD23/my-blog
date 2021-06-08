import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch valid data'); //throw error for such a case where invalid data is returned as a responsde
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setBlog(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {                   //catch basically used for connection errors
                // console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            })
    }, []);

    return ( 
        <div className="home">
            {/* conditional error message */}
            {error && <div>{ error }</div>}
            {/* conditional Loading message */}
            {isLoading && <div>Loading...</div>}
            {/* conditional templating */}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;