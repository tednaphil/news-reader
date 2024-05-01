import { useState } from "react";
import './Search.css';

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

export default Search