import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar ({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter)
        }
        
    }
    return (
        <div className="search">
            <div className="search-inputs">
                <input id="message" name="message" type="text" placeholder={placeholder} onChange={handleFilter}/>
                <button className="search-icon">Search</button>
            </div>
            {filteredData.length !== 0 && (
            <div className="data-result">
                {filteredData.slice(0, 15).map((value, key) => {
                    return <a className="data-item" href="value.link" target="_blank"><p>{value.name}</p></a>
                })}
            </div>
            )}
        </div>
    );
}

export default SearchBar;