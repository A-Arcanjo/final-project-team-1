import { useState } from "react";
import "./SearchBar.css";
const data = require("../../Data.json");

const SearchBar = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    return (
        <div className="containerSearch">
            <div className="search">
                <div className="search-inputs">
                    <input type="text" value={value} onChange={onChange} />
                    <button className="search-icon" onClick={() => onSearch(value)}> Search </button>
                </div>
                <div className="data-result">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const foodName = item.foodName.toLowerCase();

                            return (
                                searchTerm &&
                                foodName.startsWith(searchTerm) &&
                                foodName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => {

                            return (


                                <a className="data-item" href={item.wikipedia} target="_blank" rel="noreferrer"
                                    onClick={() => onSearch(item.foodName)}
                                    key={item.foodName}>

                                    {item.foodName}

                                </a>

                            );
                        })}
                </div>
            </div>
        </div>

    );
};




export default SearchBar;