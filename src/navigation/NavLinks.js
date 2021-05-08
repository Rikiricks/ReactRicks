import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const NavLinks = () =>{
    return(
        <div>           
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/employees" activeClassName="activeClass">Employees</NavLink></li>
                <li><Link to="/useContextDemo">Use Context Demo</Link></li>
            </ul>
        </div>

    );
}