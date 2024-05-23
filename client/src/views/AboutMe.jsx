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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            quaerat quibusdam veniam, sed voluptate ducimus animi odit libero
            itaque assumenda nulla quas soluta reiciendis iste officiis, fuga
            quos odio aliquid hic debitis dolore exercitationem labore
            perferendis. Molestiae magni maxime voluptas obcaecati id
            perferendis rerum eius quis fugit, modi placeat qui, at voluptate
            est dolore error laborum repellat eaque neque cumque numquam
            possimus! Atque, ducimus deleniti impedit officiis vel, itaque,
            perferendis nesciunt suscipit eius ad delectus reprehenderit earum
            aut voluptas. Corrupti, maiores aliquid iste nobis, odit incidunt
            libero distinctio voluptatibus nemo a repudiandae explicabo est
            harum magnam facilis itaque veniam doloribus?
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
