import React from "react";
import { selectMessage } from "../slices/messageSlice";
import { useSelector } from "react-redux";
/* Function Header
 *
 * code for the message component. This is below the
 * navigation component and displays when he message
 * from the message slice is not blank
 * @author Peter Walton
 * @input/output  messageSlice
 */
const MessageBar = () => {
  const message = useSelector(selectMessage);
  return <div className="message-bar">{message}</div>;
};

export default MessageBar;
