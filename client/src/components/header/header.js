import React from "react";
import {Link, NavLink} from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to='/' className="navbar-brand">
                {/*<img src="../../../public/logo-nav.png"/>*/}
                HUCKSTERS
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to='/sellers' className="nav-link">Продавцы</NavLink>
                    </li>
                </ul>

            </div>

            <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to='/signin' className="nav-link">SignIN</NavLink>
                    </li>
                </ul>
            </form>
        </nav>
    );
};

export default Header;
