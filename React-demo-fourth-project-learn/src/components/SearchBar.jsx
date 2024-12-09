import React from 'react'

const SearchBar = ({query, onChange}) => {
  return (
    <label>
        Search: {' '}
        <input value={query} onChange={onChange} />
    </label>          
  );
}

export default SearchBar