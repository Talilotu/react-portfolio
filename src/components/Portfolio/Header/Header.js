import React, { Fragment } from "react";
import ListSkills from "./ListSkills";
import Card from "../../UI/Card";
import Animation from "./Animation";

import "./Header.css";

function Header() {
  return (
    <Card>
      <Fragment>
        <div className="row container">
          <div className="col-6">
            <h1>Hi, I am Akanesi Tohotoa</h1>
            <p>Front-end Developer and React Developer, based in Australia</p>
            <ListSkills />
          </div>
          <div className="col-4">
            <Animation />
          </div>
        </div>
      </Fragment>
    </Card>
  );
}

export default Header;
