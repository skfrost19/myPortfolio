import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      {/* <div className="img">
        <img src={about} alt="" />
      </div> */}
      <div className="about-info">
        <h4>
          I am<span> Shahil Kumar</span>
        </h4>
        <p className="about-text">
          
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Contact Number-</p>
          </div>
          <div className="right-section">
            <p>: Shahil Kumar</p>
            <p>: 20</p>
            <p>: Indian</p>
            <p>: Hindi, English</p>
            <p>
              : Vill.- Habbipur, P.O-Jatt Dumari P.S.- Punpun, Dist. - Patna,
              Bihar.
            </p>
            <p>: +91-8651267157</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
