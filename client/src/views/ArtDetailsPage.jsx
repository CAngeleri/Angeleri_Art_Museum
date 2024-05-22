import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ArtDetailsPage = () => {
  const { id } = useParams();
  const [artDetails, setArtDetails] = useState(null);

  useEffect(() => {
    const fetchArtDetails = async () => {
      try {
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        const data = await response.json();
        setArtDetails(data);
      } catch (error) {
        console.error('Error fetching artwork details:', error);
      }
    };

    fetchArtDetails();
  }, [id]);

  if (!artDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="art-details-container">
      <img className="art-image" src={artDetails.primaryImage} alt={artDetails.title} />
      <div className="art-info">
        <h1>{artDetails.title} ca. {artDetails.objectBeginDate}</h1>
        <p>{artDetails.classification || "This work is unlike any other piece"}</p>
        <h2>{artDetails.country || "Country unknown"}</h2>
      </div>
    </div>
  );
}

export default ArtDetailsPage;
