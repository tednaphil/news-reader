import { useState } from "react";
import './Search.css';
import PropTypes from 'prop-types';

function Search({setQuery}) {
    const [search, setSearch] = useState('')

    function updateSearch(input) {
        const query = input.toLowerCase()
        setSearch(query)
        setQuery(query)
    }

    return (
        <>
          <input name='search' type='text' placeholder='search e.g. Associated Press' value={search} onChange={(e) => {updateSearch(e.target.value)}}></input>
        </>
    )
}

export default Search;

Search.propTypes = {
    setQuery: PropTypes.func
}