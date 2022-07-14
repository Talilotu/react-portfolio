import React, { Fragment } from "react";

import "./Training.css";

const Certificates = (props) => {
  return (
    <Fragment>
      <div className="certificates">
        <div className="row">
          <div className="col-lg-6">
            <h3>Certificates</h3>
            <ul>
              <li>
                <a
                  href="https://www.shecodes.io/certificates/9ef2f4d2239ea70e9bdf748da9990a4c"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Development
                </a>
                <a
                  href="https://www.shecodes.io/certificates/af8d99e6bc8349516da1ce6a8cc5b9cc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Front-End Development
                </a>
                <a
                  href="https://www.shecodes.io/certificates/b574c5d2cbf5c5c92801f82b4e376e41"
                  target="_blank"
                  rel="noreferrer"
                >
                  Responsive Web Development
                </a>
                <a
                  href="https://www.shecodes.io/certificates/2c3ac346a995ee643d1503989639db8a"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introduction to Coding
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h3>Skills</h3>
            <li></li>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Certificates;
