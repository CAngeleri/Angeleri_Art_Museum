import React from "react";
import { Link } from "react-router-dom";

const ArtDisplay = ({ art }) => {
  if (!art) {
    return null;
  }

  return (
    <div className="art-display">
      <Link to={`/details/${art.objectID}`}>
        {art.primaryImageSmall ? (
          <img
            loading="lazy"
            src={art.primaryImageSmall}
            alt={art.title || "Untitled work"}
          />
        ) : (
          <div className="no-image">No image available</div>
        )}
        <hr className="styled-hr" />
        <div className="art-display-text">
          <h3>{art.title || "Unknown Title"}</h3>
          <p>{art.artistDisplayName || "Unknown Artist"}</p>
          <p>{art.objectDate || "Unknown Date"}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArtDisplay;
