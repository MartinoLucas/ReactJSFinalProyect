import React from "react";
import CartWidget from "../CartWidget";
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a href="#"><img src="./assets/LogoJAC.png" alt="JAC" width="30" height="24"/></a>
                <a className="navbar-brand" href="#">JAC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About the holiday camp</a>
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