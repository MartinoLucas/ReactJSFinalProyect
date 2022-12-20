import React from "react";
import CartWidget from "../CartWidget";
import Logo from './assets/LogoJAC.png'
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a href="#"><img src={Logo} alt="JAC" width="90" height="90"/></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About JAC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promos</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
            
        </nav>
    );
};