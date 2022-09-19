import "./navbar.scss"; 

const Navbar = () => {
    return(
        <div className="navbar-container">
            <h1>Countries Searcher <i>by Dalvin Segura</i></h1>

            <div className="toggle-mode">
                <span>Dark Mode</span>
            </div>
            
        </div>
    )
};

export default Navbar;