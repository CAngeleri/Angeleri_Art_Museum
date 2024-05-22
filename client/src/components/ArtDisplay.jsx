import React from "react";
import { Link } from "react-router-dom";

const ArtDisplay = ({ art }) => {
  if (!art) {
    return null;
  }

  return (
    <div className='art-display'>
      <Link to={`/details/${art.objectID}`}>
      {art.primaryImageSmall ? (
        <img src={art.primaryImageSmall} alt={art.title || 'Untitled work'} />
      ) : (
        <div className='no-image'>No image available</div>
      )}
      <h3>{art.title || 'Unknown Title'}</h3>
      <p>{art.artistDisplayName || 'Unknown Artist'}</p>
      <p>{art.objectDate || 'Unknown Date'}</p>
      </Link>
    </div>
  );
};

export default ArtDisplay;
