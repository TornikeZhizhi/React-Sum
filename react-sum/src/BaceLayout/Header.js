import React,{useContext} from "react";
import {NavLink,Link } from "react-router-dom"
import classes from "./header.module.css";
import DayNightSwitcher from "./HeaderSwitch/DayNightSwitcher.js";
import HeaderSwitchContext from "../ContextApi/HeaderSwitcherContext";
// import {SwitcherTheme} from "../ContextApi/HeaderSwitcherContext.js";
const Header = () => {

    const ctx = useContext(HeaderSwitchContext);
    console.log(ctx)
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