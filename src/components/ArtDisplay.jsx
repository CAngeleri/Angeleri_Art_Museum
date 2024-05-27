import React from "react";
import { Link } from "react-router-dom";

const ArtDisplay = ({ art }) => {
  if (!art) {
    return null;
  }

  return (
    <div className="art-display">
      <Link to={`/Angeleri_Art_Museum/details/${art.objectID}`}>
        {art.primaryImageSmall ? (
          <img
            src={art.primaryImageSmall}
            alt={art.title || "Untitled work"}
          />
        ) : (
          <div className="no-image">No image available</div>
        )}
        <hr className="styled-hr" />
        <div className="art-display-text">
          <h3 className="art-display-text-title">{art.title || "Unknown Title"}</h3>
          <p>{art.artistDisplayName || "Unknown Artist"}</p>
          <p>{art.objectDate || "Unknown Date"}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArtDisplay;
