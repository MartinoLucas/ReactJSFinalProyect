import React from "react";
import CartWidget from "../CartWidget";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './styles.css'
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navBar">

            <div className="container-fluid">

                <Link to="/"><img src='../Assets/JACCalidad-02.png' alt="JAC" width="90" height="90"/></Link>

                <div className="divNavBar collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active option" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item option">
                            <Link className="nav-link" to="/category/AboutJAC">About JAC</Link>
                        </li>
                        <li className="nav-item option">
                            <Link className="nav-link" to="/category/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item option">
                            <Link className="nav-link" to="/category/promos">Promos</Link>
                        </li> */}
                        <li className="nav-item dropdown option">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Groups
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item option" to="/category/Everybody">Everybody</Link></li>
                                <li><Link className="dropdown-item option" to="/category/Professors">Professors</Link></li>
                                <li><Link className="dropdown-item option" to="/category/Cangrejos">Cangrejos</Link></li>
                                <li><Link className="dropdown-item option" to="/category/Pulpos">Pulpos</Link></li>
                                <li><Link className="dropdown-item option" to="/category/Tortugas">Tortugas</Link></li>
                                <li><Link className="dropdown-item option" to="/category/Patos">Patos</Link></li>
                            </ul>
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