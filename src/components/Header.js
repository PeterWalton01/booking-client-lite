import React from "react";
import logo from "../img/Smile.png";
import runner from "../img/Runner.png";
/* Function Header
 *
 * Code for the application header
 * @author Peter Walton
 */
const Header = () => {
  return (
    <article className="header">
      <div>
        <span className="comp-name1">On</span>
        <span className="comp-name2">Point</span>
        <img src={logo} className="smile" alt="smile"></img>
      </div>
      <div>
        <span className="counter"></span>
        <img src={runner} className="runner" alt="Runner" />
      </div>
    </article>
  );
};

export default Header;
