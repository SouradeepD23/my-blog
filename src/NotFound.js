import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Error 404</h2>
            <p>Page not found</p>
            <Link to = "/">Click here to go back to homepage</Link>
        </div>
    );
}
 
export default NotFound;