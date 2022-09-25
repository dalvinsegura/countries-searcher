import "./navbar.scss"; 

const Navbar = () => {
    return(
        <div className="navbar-container">
            <h1>Countries Searcher <i> <a href="https://github.com/dalvinsegura" target="__blank">by Dalvin Segura</a></i></h1>

            <div className="toggle-mode">
                <span> <i className="fa-solid fa-moon"></i> Dark Mode</span>
            </div>
            
        </div>
    )
};

export default Navbar;