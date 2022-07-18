import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import DataFood from "../../Data.json";
import "./Navbar.css";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({url, title}, index) => {
        return(
            <li key={index}>
                <NavLink to={url} className="active">{title}</NavLink>
            </li>
        );
    });
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <nav>
            <div className="logo"></div>
            <SearchBar data={DataFood}/>
            <div className="menu-icon" onClick={handleClick}>
                <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
                
            </ul>
        </nav>
    );
}

export default Navbar;