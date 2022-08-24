import { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostsBySearch } from '../../actions/posts';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@material-ui/core';
import { dividerClasses } from "@mui/material";


const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    return (

        <div className="containerSearch">
            <TextField
                label=""
                InputProps={{
                    endAdornment: (
                        <InputAdornment type="text" onKeyDown={handleKeyPress} onChange={(e) => setSearch(e.target.value)}>

                            <SearchIcon className="search-icon" onClick={searchPost} />

                        </InputAdornment>
                    )
                }}
            />
        </div>
    );







};




export default SearchBar;