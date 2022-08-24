import { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostsBySearch } from '../../actions/posts';



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
            <div className="search">
                <div className="search-inputs">
                    <input type="text" onKeyDown={handleKeyPress} onChange={(e) => setSearch(e.target.value)} />
                    <button className="search-icon" onClick={searchPost} > Search </button>
                </div>
                <div className="data-result">
                </div>
            </div>
        </div >

    );
};




export default SearchBar;