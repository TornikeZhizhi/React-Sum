import React from "react";
import {NavLink,Link } from "react-router-dom"
import classes from "./header.module.css";
import DayNightSwitcher from "./HeaderSwitch/DayNightSwitcher.js"
const Header = () => {
    return (
        <header className={classes.header}>

            <nav>
                <ul>
                    <li><NavLink exact activeClassName={classes.active} to="/">Main</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/products">Products</NavLink></li>
                </ul>
                <DayNightSwitcher></DayNightSwitcher>
            </nav>

        </header>
    )
}


export default Header;