import React from "react";
import { useDispatch } from "react-redux";
import { setPhysio } from "../slices/physioSlice";
/* File header
 *
 * Code to present details of a physio.
 * On click the physio becomes selected and
 * this is stored in the physioSlice. This
 * triggers changes in other components.
 * @author Peter Walton
 * @input/output physioSlice
 *
 */
const PhysioPanel = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setPhysio(item));
  };

  return (
    <div className="physios-name-panel" onClick={handleClick}>
      <div className="bold">{item.physio_name}</div>
      {item.description}
    </div>
  );
};

export default PhysioPanel;
