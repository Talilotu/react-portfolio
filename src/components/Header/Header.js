import React, { Fragment } from "react";
import ListSkills from "./ListSkills";
import Card from "../UI/Card";
import Animation from "./Animation";

import "./Header.css";

function Header() {
  return (
    <Card>
      <Fragment>
        <div className="row container">
          <div className="col-lg-6">
            <h1>Hi, I am Akanesi Tohotoa</h1>
            <h5>Front-end Developer and React Developer, based in Australia</h5>
            <p className="mt-4">
              Hello and welcome to my portfolio. I decided at the beginning of
              this year to change my career and get into the tech industry. I
              then started taking coding courses, majoring in front-end web
              development and react js, and I have thoroughly enjoyed it. I
              enjoy creating different type of projects, and I am passionate
              about pursuing a career as a front-end developer and React
              developer. I always love a challenge and I work well under
              pressure. I am a fast learner who adapts quickly to change and
              eager to learn new skills and technology.
            </p>
            <ListSkills />
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <Animation />
          </div>
        </div>
      </Fragment>
    </Card>
  );
}

export default Header;
