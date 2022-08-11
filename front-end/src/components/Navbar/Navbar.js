import React, { useState, useContext } from "react";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import Data from "../../Data.json";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider.js";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };
    const menuList = MenuList.map(({ url, title, viewauth }, index) => {
        // return (

        //     <li key={index} onClick={handleClick}>
        //         <NavLink to={url} className="active">{title}</NavLink>
        //     </li>
        // );
        return (!viewauth && currentUser._id != null ? (<></>) : (<li key={index} onClick={handleClick}>
            <NavLink to={url} className="active">{title}</NavLink>
        </li>));

    });

    return (
        <nav>
            <div className="logo"></div>
            <SearchBar data={Data} />
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    );
};

export default Navbar;