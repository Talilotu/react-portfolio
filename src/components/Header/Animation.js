import React, { useState } from "react";
import { useTransition, config, animated } from "react-spring";

import "./Header.css";

const Animation = () => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  });

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
        className="animation"
      >
        <img src="../images/coding.png" className="img-fluid" alt="coding" />
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
        className="animation"
      >
        <img
          src="../images/proud_coder.png"
          className="img-fluid"
          alt="proud-coder"
        />
      </animated.div>
    )
  );
};

export default Animation;
