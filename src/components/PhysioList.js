import React from "react";
import { useSelector } from "react-redux";

import PhysioPanel from "./PhysioPanel";
import { selectPhysios } from "../slices/physioSlice";

/* File header
 *
 * Code to present a list of physios.
 * See PhysiooPanel component for more detail.
 * @author Peter Walton
 * @input/output physioSlice
 */

const PhysioList = () => {
  const physios = useSelector(selectPhysios);

  return (
    <div className="physio-list">
      <ul>
        {physios.map((item) => {
          return (
            <li key={item.id}>
              <PhysioPanel item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PhysioList;
