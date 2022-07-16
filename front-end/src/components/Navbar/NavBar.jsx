import React, { useState, useContext } from "react";
import { MenuList } from "./MenuList";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import DataFood from "../../Data.json";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider.jsx";

export const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="logo"></div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {currentUser.token ? (
        <>
          <Link to="/foods">List</Link>
          <Link to="/add">Add</Link>
        </>
      ) : (
        <>
          <Link to="/auth"></Link>

          <ul className={clicked ? "menu-list" : "menu-list close"}>
            {menuList}
            <SearchBar data={DataFood} />
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavBar;
