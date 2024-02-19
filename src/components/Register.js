import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRegistration } from "../api/authorisation";
import { setMessage } from "../slices/messageSlice";
import { useHistory } from "react-router-dom";
/* Function Header
 *
 * code for the Register dialogue. This contain verified
 * double entry of the password.
 * @author Peter Walton
 * @param  {item}         [see body definition below]
 * @input/output  messageSlice
 */
const Register = () => {
  // validate password and confirmation
  const initState = {
    user_name: "",
    firstName: "",
    lastName: "",
    password: "",
    confirm: "",
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [state, setState] = useState(initState);

  useEffect(() => {
    dispatch(setMessage({ message: "" }));
    //eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate(state)) {
      dispatch(setMessage({ message: "Registration processing.." }));
      const resp = await addRegistration(state);
      dispatch(setMessage(resp));
      if (resp.success) {
        setState(initState);
        history.push("/login");
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    let clear = true;
    if (values.confirm !== values.password) {
      errors.confirm = "Passwords must match.";
      clear = false;
    }

    if (values.lastName.length === 0) {
      errors.confirm = "A last name must be provided.";
      clear = false;
    }
    if (values.firstName.length === 0) {
      errors.confirm = "A first name must be provided.";
      clear = false;
    }
    if (values.user_name.length === 0) {
      errors.confirm = "A username must be provided.";
      clear = false;
    }

    setErrors(errors);

    return clear;
  };

  return (
    <div className="register-form">
      <h3>Please register below</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item1">
            <label>Username:</label>
          </div>
          <div>
            <input
              value={state.user_name}
              onChange={handleChange}
              type="text"
              name="user_name"
              placeholder="Enter username"
            />
          </div>
          <div className="grid-item1">
            <label>First name:</label>
          </div>
          <div>
            <input
              value={state.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div className="grid-item1">
            <label>Last name:</label>
          </div>
          <div>
            <input
              value={state.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              placeholder="Enter last name"
            />
          </div>
          <div className="grid-item1">
            <label>Password:</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={state.password}
              onChange={handleChange}
              minLength="8"
              maxLength="14"
            />
          </div>
          <div className="grid-item5">
            <label>Confirm:</label>
          </div>
          <div>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              value={state.confirm}
              onChange={handleChange}
              minLength="8"
              maxLength="14"
            />
          </div>
        </div>
        <input type="submit" value="Submit!" className="login" />
      </form>
      <p className="message">{errors.password}</p>
      <p className="message">{errors.confirm}</p>
    </div>
  );
};

export default Register;
