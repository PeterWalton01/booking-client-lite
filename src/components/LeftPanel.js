import React from "react";

import PhysioList from "./PhysioList";

/* File header
 *
 * Code to present the contents of the left
 * panel on the main component. This will
 * show a list of physios.
 * @author Peter Walton
 * @input/output none
 */

const LeftPanel = () => {
  return (
    <div>
      <PhysioList />
    </div>
  );
};

export default LeftPanel;
