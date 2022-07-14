import React from "react";
import Card from "./UI/Card";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import contact from "../images/contact.png";
import email from "../images/email.png";

import "./Contact.css";

const Contact = () => {
  return (
    <Card>
      <h1>Contact Me</h1>
      <div className="contact">
        <div>
          <img
            src={contact}
            className="img-fluid"
            width="500"
            alt="contact me"
          />
        </div>
        <div className="contact-details">
          <div>
            <img src={email} width="50" /> Email
          </div>
          <div>
            <img src={github} width="50" /> Github
          </div>
          <div>
            <img src={linkedin} width="50" /> Linkedin
          </div>
        </div>
        {/* <div className="row contacts d-lg-flex">
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
              <img src={github} width="40" className="img-fluid" alt="github" />{" "}
              Github
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
              <img
                src={linkedin}
                width="40"
                className="img-fluid"
                alt="linkedin"
              />
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
        </div> */}
      </div>
    </Card>
  );
};

export default Contact;
