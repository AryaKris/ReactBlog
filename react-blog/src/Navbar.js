import App from "./App";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Learning Blog</h1>
            <div className = "links">
                <a href = "/">Home</a>
                <a href="/create">New Blog</a>
                
            </div>
        </nav>

     );
}
 
export default Navbar ;