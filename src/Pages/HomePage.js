import React from "react";
import {
  faFacebook,
  faHackerrank,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Shahil Kumar</span>
        </h1>
        <p className="h-sub-text">
          Hi, my name is Shahil Kumar. I am a grad student in Computer Science
          and Engineering at Nalanda college of Engineering. I am very
          passionate about programming and I love to learn new things. I have a
          good grasp on Data-Structure and Algorithms as i love to solve
          problems.
        </p>
        <div className="icons">
          <Link
            to={{ pathname: "https://github.com/skfrost19" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/shahil-kumar-2375811b1/",
            }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
          </Link>
          <Link
            to={{ pathname: "https://www.hackerrank.com/saahhiill123456" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faHackerrank} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
