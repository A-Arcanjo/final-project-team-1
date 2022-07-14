import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar ({ placeholder, data }) {
    const [message, setMessage] = useState("Wish something");
    const handleChange = event => {
        setMessage(event.target.value)
    };
    return (
        <div className="search">
            <div className="search-inputs">
                <input id="message" name="message" type="text" onChange={handleChange} value={message}/>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="data-result"></div>
        </div>
    );
}

export default SearchBar;