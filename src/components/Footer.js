import React from "react";
import Card from "./UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

import "./Footer.css";

const Footer = () => {
  return (
    <Card>
      <div class="footer">
        <h1>Contact Me</h1>
        <div>
          <div className="row contacts d-lg-flex">
            <div className="col-5">
              <h3>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </h3>
              <a href="mailto:nesikaufusi@gmail.com" title="email Akanesi">
                nesikaufusi@gmail.com
              </a>
            </div>
            <div className="col-4">
              <h3>
                <img src={github} width="40" className="img-fluid" /> Github
              </h3>
              <a
                href="https://github.com/Talilotu"
                title="Akanesi github profile"
                target="blank"
              >
                Akanesi T
              </a>
            </div>
            <div className="col-4">
              <h3>
                <img src={linkedin} width="40" className="img-fluid" />
                Linkedin
              </h3>
              <a
                href="https://www.linkedin.com/in/akanesi-t-154772239/"
                title="Akanesi linkedin profile"
                target="blank"
              >
                Akanesi-T
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Footer;
