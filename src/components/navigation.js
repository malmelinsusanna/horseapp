import React from "react";
import { Link } from 'react-router-dom'
import "../styles/navigation.css"

function Navigation() {
    return(
        <nav class="nav-container">
            <ul class="nav-menu">
                <li class="nav-logo">
                    <Link to="/" class="nav-link" >HEPOSET</Link>
                </li>
                <li class="nav-item">
                    <Link to="/hevonen" class="nav-link" >Hevonen</Link>
                </li>
                <li class="nav-item">
                    <Link to="/rodut" class="nav-link" >Rodut</Link>
                </li>
                <li class="nav-item">
                    <Link to="/ratsastus" class="nav-link" >Ratsastus</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation


