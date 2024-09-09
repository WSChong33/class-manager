import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item left"><Link to="/">Class Manager</Link></li>
                <div className="navbar-item right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;