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
        <h2 className='search-text'>search the collection</h2>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='find your inspiration...'
      />
      <button onClick={handleSearch}><img alt="svgImg" 
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgo8cGF0aCBkPSJNIDEzIDMgQyA3LjQ4ODk5NzEgMyAzIDcuNDg4OTk3MSAzIDEzIEMgMyAxOC41MTEwMDMgNy40ODg5OTcxIDIzIDEzIDIzIEMgMTUuMzk2NTA4IDIzIDE3LjU5NzM4NSAyMi4xNDg5ODYgMTkuMzIyMjY2IDIwLjczNjMyOCBMIDI1LjI5Mjk2OSAyNi43MDcwMzEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI2LjcwNzAzMSAyNS4yOTI5NjkgTCAyMC43MzYzMjggMTkuMzIyMjY2IEMgMjIuMTQ4OTg2IDE3LjU5NzM4NSAyMyAxNS4zOTY1MDggMjMgMTMgQyAyMyA3LjQ4ODk5NzEgMTguNTExMDAzIDMgMTMgMyB6IE0gMTMgNSBDIDE3LjQzMDEyMyA1IDIxIDguNTY5ODc3NCAyMSAxMyBDIDIxIDE3LjQzMDEyMyAxNy40MzAxMjMgMjEgMTMgMjEgQyA4LjU2OTg3NzQgMjEgNSAxNy40MzAxMjMgNSAxMyBDIDUgOC41Njk4Nzc0IDguNTY5ODc3NCA1IDEzIDUgeiI+PC9wYXRoPgo8L3N2Zz4="/>
      </button>
    </div>
  );
};

export default SearchBar;
