import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ArtDisplay from "./ArtDisplay";

const Gallery = () => {
  const [art, setArt] = useState([]);

  const fetchArtworks = async (query = "fruit", limit = 9) => {
    try {
      const searchResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Oil%20paint&q=${query}`
      );
      const searchData = await searchResponse.json();

      if (searchData.objectIDs && searchData.objectIDs.length > 0) {
        const artDetails = await Promise.all(
          searchData.objectIDs.slice(0, limit).map(async (id) => {
            const artResponse = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            );
            return await artResponse.json();
          })
        );
        setArt(artDetails);
      } else {
        setArt([]);
      }
    } catch (error) {
      console.error("Error fetching artworks:", error);
      setArt([]);
    }
  };

  useEffect(() => {
    fetchArtworks("fruit", 9);
  }, []);

  const handleSearch = (query) => {
    fetchArtworks(query, 30);
  };

  return (
    <div>
      <div></div>
      <SearchBar onSearch={handleSearch} />
      <div className="art-gallery">
        {art.map((artPiece) => (
          <ArtDisplay key={artPiece.objectID} art={artPiece} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
