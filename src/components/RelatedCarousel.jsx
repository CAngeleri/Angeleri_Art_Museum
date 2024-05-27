import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import ArtDisplay from "./ArtDisplay";

const RelatedCarousel = () => {
  const [artworks, setArtworks] = useState([]);

  const fetchArtworks = async (query = "fruit", limit = 16) => {
    try {
      const searchResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Oil%20paint&q=${query}`
      );
      const searchData = await searchResponse.json();

      if (searchData.objectIDs && searchData.objectIDs.length > 0) {
        const objectIDs = searchData.objectIDs.slice(0, limit);
        const artDetails = await Promise.all(
          objectIDs.map(async (id) => {
            const artResponse = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            );
            return await artResponse.json();
          })
        );
        const allArtworks = [];
        // Repeat artworks to ensure we have 16 items
        for (let i = 0; i < Math.ceil(limit / artDetails.length); i++) {
          allArtworks.push(...artDetails);
        }
        setArtworks(allArtworks);
      } else {
        setArtworks([]);
      }
    } catch (error) {
      console.error("Error fetching artworks:", error);
      setArtworks([]);
    }
  };

  useEffect(() => {
    fetchArtworks("dancer");
  }, []);

  const artTemplate = (art) => {
    return <ArtDisplay key={art.objectID} art={art} />;
  };

  return (
    <div className="art-carousel">
      <Carousel
        value={artworks}
        numScroll={1}
        numVisible={4}
        itemTemplate={artTemplate}
        className="Related-Carousel-itm"
      />
    </div>
  );
};

export default RelatedCarousel;
