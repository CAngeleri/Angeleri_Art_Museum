import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onToggleLargeFont }) => {
  const [isLargeFont, setIsLargeFont] = useState(false);

  const handleToggleFont = () => {
    setIsLargeFont(!isLargeFont);
    onToggleLargeFont();
  };

  return (
    <div className="Header">
      <Link to="/">
        <h3 className="headerText">Angeleri Museum of Art</h3>
      </Link>
      <div className="headerControls">
        <div>
          <h4
            className={`headerOption ${
              isLargeFont ? "largeFont" : "standardFont"
            }`}
            onClick={handleToggleFont}
          >
            {isLargeFont ? "Standard Font" : "Large Font"}
          </h4>
        </div>
      </div>
      <Link to="/aboutMe">
        <button id="headerButton">about me</button>
      </Link>
    </div>
  );
};

export default Header;
