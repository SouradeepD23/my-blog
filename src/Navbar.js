import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome to my blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;