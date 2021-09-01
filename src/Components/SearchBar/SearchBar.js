import React from 'react'
import axios from '../../Axios'
import { useEffect } from 'react';

const SearchBar = (props)=> {
  useEffect(() => {
   axios.get(``)
    
  }, [])
    return (
      <div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            value={props.searchField}
            placeholder="Search......" 
            aria-label="Search"
            onChange={props.searchItem}
          />
        </form>
      </div>
    );
}

export default SearchBar
