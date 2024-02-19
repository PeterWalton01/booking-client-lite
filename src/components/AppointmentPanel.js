import React, { useState, useEffect } from "react";
import { pickerDate, timePart } from "../utils/formatDate";
import AddAppointment from "./AddAppointment";
import { deleteAppointment } from "../api/appointment";
import { removeAppointment } from "../slices/appointmentSlice";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";
/* File header
 *
 * Code to present the contents of the appointment
 * panel. One of these will be displayed for current
 * appointment.
 *
 * The panel contain buttons to show/hide extra detail,
 * to add a new appointment and to delete the appointment.
 * The delete button will launch a modal dialogue to
 * confirm/cancel the deletion.
 *
 * @author Peter Walton
 * @input/output appointmentSlice
 */

const AppointmentPanel = ({ appointment }) => {
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const dispatch = useDispatch();
  const [extra, setExtra] = useState(false);
  const [adding, setAdding] = useState(false);
  const newDate = pickerDate(appointment.start_datetime);
  const session_end = timePart(appointment.end_datetime);
  const session = (newDate + " - " + session_end).trim();

  const handleMore = (e) => {
    setExtra(!extra);
  };
  const handleAdd = (e) => {
    setAdding(!adding);
  };

  const handleDelete = (e) => {
    deleteAppointment(appointment.appointment_id);
    dispatch(removeAppointment(appointment.appointment_id));
  };

  useEffect(() => ReactModal.setAppElement("#appointment"), []);

  return (
    <div id="appointment">
      {adding && <AddAppointment appointment={appointment} />}
      <div className="appointment-panel appointment-grid">
        <div className="grid-item grid-date">{session}</div>
        <div className="grid-item grid-item-lbl">Client:</div>
        <div className="grid-item grid-client">{appointment.client_name}</div>
        <div className="grid-item grid-item-lbl">Treatment: </div>
        <div className="grid-item"> {appointment.treatment} </div>

        {extra && <div className="grid-item grid-space"></div>}
        {extra && <div className="grid-item grid-item-lbl">Email:</div>}
        {extra && (
          <div className="grid-item grid-client">{appointment.email}</div>
        )}
        {extra && <div className="grid-item-lbl">Phone : </div>}
        {extra && <div className="grid-item"> {appointment.telephone} </div>}

        <div className="appointment-btn-container">
          <div className="r-align">
            <button className="appointment" onClick={handleMore}>
              {!extra && "More"}
              {extra && "Less"}
            </button>
          </div>
          <div className="r-align">
            <button className="appointment" onClick={handleAdd}>
              {!adding && "Add"}
              {adding && "Close add"}
            </button>
          </div>
          <div className="r-align">
            <button className="appointment" onClick={() => setShowModal(true)}>
              Delete
            </button>
            <ReactModal
              isOpen={showModal}
              contentLabel="Minimal Modal Example"
              style={{
                overlay: {
                  top: "-30%",
                },
                content: {
                  color: "#B00",
                  width: "9rem",
                  margin: "auto",
                  height: "8.5rem",
                  fontSize: "0.9rem",
                },
              }}
            >
              <p>
                Delete appointment for {appointment.client_name} at {session}
              </p>
              <div>
                <button
                  className="sm-appointment"
                  onClick={() => {
                    handleDelete();
                    setShowModal(false);
                    setConfirmDelete(true);

                    console.log(confirmDelete);
                  }}
                >
                  Confirm
                </button>
                <button
                  className="sm-appointment"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </ReactModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPanel;
