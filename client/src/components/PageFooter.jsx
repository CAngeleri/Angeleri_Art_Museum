import React from "react";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <>
      <hr className="Footer-hr" />
      <div className="Footer">

        <Link to="https://metmuseum.github.io/">
          <div className="footerText">
            <h4>Get API info</h4>
          </div>
        </Link>

        <Link to="https://github.com/CAngeleri/Angeleri_Art_Museum">
          <div className="footerText">
            <h4>Link to Git Repo</h4>
          </div>
        </Link>

        <Link to="/aboutMe" className="footerText" >
          <button id="headerButton">Connect with the Creator</button>
        </Link>
      </div>
    </>
  );
};

export default PageFooter;
