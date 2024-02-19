import React, { useEffect, useRef, useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { getPhysio } from "../api/physio";
import { selectPhysio, setPhysio, setPhysios } from "../slices/physioSlice";
import { selectLogon } from "../slices/logonSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentsByDateAndPhysio } from "../api/appointment";
import { setAppointments } from "../slices/appointmentSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/datePicker.css";

import moment from "moment";

/* File Header
 *
 * Code for the main application component
 * @author Peter Walton
 * @input/output physioSlice, logonSlice, appointmentSlice
 */

const Main = () => {
  const dispatch = useDispatch();
  const loggedOn = useSelector(selectLogon);
  const currentPhysio = useSelector(selectPhysio);
  const [dateValue, setDateValue] = useState(new Date());
  const name = useRef("");

  useEffect(() => {
    // nothing to show if no one is logged in
    if (!loggedOn) return;
    // define a function to get the physios
    // and store them in physioSlice.
    // this function will be called later
    const getPhysios = async () => {
      const resp = await getPhysio();
      if (resp.success === undefined) {
        dispatch(setPhysio(resp[0]));
        dispatch(setPhysios(resp));
      } else {
        console.log(resp);
      }
    };
    // run the function defined
    getPhysios();
    // eslint-disable-next-line

    // define a function to get the appointments
    // for the current physio that are in the future
    // and store them in appointmentSlice.
    // this function will be called later
    const getAppointments = async () => {
      name.current = currentPhysio.physio_name;
      const resp = await getAppointmentsByDateAndPhysio(
        currentPhysio.physio_name,
        moment(new Date()).format("yyyy-MM-DD")
      );
      if (resp.success === undefined) {
        dispatch(setAppointments(resp));
      } else {
        console.log(resp);
      }
    };
    // run the function defined
    getAppointments();
    // eslint-disable-next-line
  }, []);

  // if currentPhysio or dateValue change
  // refresh the appointmentsSlice
  useEffect(() => {
    const newDate = moment(dateValue).format("yyyy-MM-DD");
    // nothing to show if no one is logged in
    if (!loggedOn) return;
    dispatch(setAppointments([]));
    const getAppointments = async () => {
      const resp = await getAppointmentsByDateAndPhysio(
        currentPhysio.physio_name,
        newDate
      );
      if (resp.success === undefined) {
        dispatch(setAppointments(resp));
      } else {
        console.log(resp);
      }
    };
    // run the function defined
    getAppointments();
    // eslint-disable-next-line
  }, [currentPhysio, dateValue]);
  //
  // the component uses the react-datepicker for the selection of
  // date-times in the future. Weekends are prohibited.
  // The date time is stored in local state.
  return (
    <div className="main">
      <div className="left-panel">
        <div className="date-grid">
          <span className="date-label">Date:</span>{" "}
          <DatePicker
            className="date-only-pick"
            calendarClassName="calendar"
            selected={dateValue}
            onChange={(date) => {
              setDateValue(date);
            }}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          />
        </div>
        <LeftPanel />
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  );
};

export default Main;
