import React from "react";
import {Link} from 'react-router-dom'
import '../../assets/styles.css'



const Header = () => {
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-light container-fluid">
    <Link className="navbar-brand textChange navText" to="/">LandJumpFly</Link>
        <ul className="navbar-nav d-flex ml-auto">
            <li className="nav-item">
                <Link className="nav-link textChange" to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link textChange" to="/games">Games</Link>
            </li>
        </ul>
    </nav>
    </>
    )
}

export default Header;