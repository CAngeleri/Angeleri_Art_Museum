import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className='search-bar'>
        <h2 className='search-text'>search</h2>
        <h2 className='search-text'>the collection</h2>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search for inspiration...'
      />
      <button onClick={handleSearch}><img src="client\src\assets\search.png" /></button>
    </div>
  );
};

export default SearchBar;
