import React from "react";
import profilePic from "../assets/p_pic.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <hr className="Footer-hr" />
      <div className="aboutMe">
        <div className="aboutMeText">
        <h1>About me:</h1>
<hr />
<h2>Cameron Angeleri</h2>
<h3>Developer, Dancer, Dreamer</h3>
<p>
  Hey there, I'm Cameron Angeleri. I hope you have enjoyed my museum!
</p>
<p>
  As a former ballet dancer turned full-stack developer, I've always
  been drawn to the intersection of art and technology. After living
  in Seattle, WA and immersing myself in programming at Coding Dojo, I
  found my true calling in crafting digital experiences that blend
  creativity with precision.
</p>

<p>
  If you found this project interesting or want to connect, my inbox is
  always open!
</p>

          <Link
            to="https://www.linkedin.com/in/cameron-angeleri/"
            className="footerText"
          >
            <button id="headerButton">Connect on Linkedin</button>
          </Link>
        </div>
        <div className="aboutMeImgContainer">
          <img src={profilePic} alt="Profile" className="aboutMeIMG" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
