import { useState } from "react";
import './Search.css';
import PropTypes from 'prop-types';

function Search({setQuery}) {
    const [search, setSearch] = useState('')

    function updateSearch(e) {
        const query = e.toLowerCase()
        setSearch(query)
        setQuery(query)
    }

    return (
        <>
          <input name='search bar' type='text' placeholder='search' value={search} onChange={(e) => {updateSearch(e.target.value)}}></input>
        </>
    )
}

export default Search;

Search.propTypes = {
    setQuery: PropTypes.func
}