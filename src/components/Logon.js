import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { localLogon } from "../api/authorisation";
import { setMessage } from "../slices/messageSlice";
import { useDispatch } from "react-redux";
import { setLogon } from "../slices/logonSlice";
/* Function Header
 *
 * Code for the local logon component.
 * This allow entry of username and password, and
 * also a link to register a new account.
 * @author Peter Walton
 * @input/output messageSlice, logonSlice
 */
const Logon = () => {
  const dispatch = useDispatch();

  // logon data
  const initialData = { user_name: "", password: "" };
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // attempt local logon
    dispatch(setMessage("Logging on..."));
    const resp = await localLogon(data);
    dispatch(setMessage(resp));
    if (resp.success) {
      setData(initialData);
      // set logon status in logon slice
      dispatch(setLogon(true));
    } else {
      dispatch(setLogon(false));
    }
  };
  // Clear message
  useEffect(() => {
    dispatch(setMessage({ message: "" }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="logon-form">
      <h3>Login with your username and password</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item1">
            <label>Username:</label>
          </div>
          <div className="grid-item2">
            <input
              type="text"
              name="user_name"
              placeholder="Enter username"
              required
              value={data.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item3">
            <label>Password:</label>
          </div>
          <div className="grid-item4">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={data.password}
              onChange={handleChange}
              minLength="8"
              maxLength="14"
            />{" "}
          </div>
        </div>
        <input type="submit" value="Login!" className="login" />
        <Link to="/register" className="register-click">
          Click to register.
        </Link>
      </form>
    </div>
  );
};

export default Logon;
