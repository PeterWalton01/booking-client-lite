import React from "react";
import LeftClient from "./LeftClient";
import RightClient from "./RightClient";
/* Function Header
 *
 * code for the history list of the
 * current users orders
 * @author Peter Walton
 * @param  {item}         [see body definition below]
 * @input/output  none
 */
const Main = () => {
  return (
    <div className="main">
      <div className="left-panel">
        <LeftClient />
      </div>
      <div className="right-panel">
        <RightClient />
      </div>
    </div>
  );
};

export default Main;
