import { useState } from "react";
import './Search.css';

function Search({setQuery}) {
    const [search, setSearch] = useState('')

    function updateSearch(e) {
        setSearch(e)
        setQuery(e)
    }
    
    return (
        <>
          <input type='text' placeholder='search' value={search} onChange={(e) => {updateSearch(e.target.value)}}></input>
        </>
    )
}

export default Search