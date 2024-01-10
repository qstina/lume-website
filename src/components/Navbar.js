import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../images/logo.png';
import { FaBars, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    return (
        <div className="navbar-container">
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo-size" />
                </Link>
            </div>
            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/shop-all"><li>Shop All</li></Link>
            </ul>
            <div className="nav-icons-container">
            <div className="nav-icons">
                <FaShoppingCart className="nav-icon" />
                <div className="nav-user-icon"></div>
                <FaUser className="nav-icon" />
                <FaSearch className="nav-icon" />
            </div>
            </div>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
        </div>
    );
}

export default Navbar;
