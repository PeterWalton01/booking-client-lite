import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { localLogoff } from "../api/authorisation";
import { setMessage } from "../slices/messageSlice";
import { setLogon } from "../slices/logonSlice";
/* Function Header
 *
 * code for the navigation bar component
 * @author Peter Walton
 * @input/output messageSlice, logonSlice
 */
const Nav = () => {
  const dispatch = useDispatch();

  // manage logoff. Covers both local and Google logoff
  const handleClick = async (e) => {
    const resp = await localLogoff();
    if (resp.success) {
      dispatch(setLogon(false));
    }
    // clear some slices
    dispatch(setMessage(resp));
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/appointment">
            <button className="nav-btn order-btn">Bookings</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button className="nav-btn logon-btn">Login</button>
          </Link>
        </li>
        <li>
          <button className="nav-btn logoff-btn" onClick={handleClick}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
