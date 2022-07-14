import React from "react";
import Card from "./UI/Card";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

import "./Footer.css";

const Footer = () => {
  return (
    <Card>
      <div class="footer">
        <div className="d-none d-lg-block">
          <h1>Get in touch!</h1>
          <h3>Let's work together</h3>
        </div>
        <div>
          <h4>nesikaufusi@gmail.com</h4>
          <div className="icons">
            <a href="https://www.linkedin.com/in/akanesi-t-154772239/">
              <img
                src={linkedin}
                className="img-fluid"
                width="60"
                alt="linkedin"
              ></img>{" "}
            </a>
            <a href="https://www.linkedin.com/in/akanesi-t-154772239/">
              <img
                src={github}
                className="img-fluid"
                width="60"
                alt="linkedin"
              ></img>{" "}
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Footer;
