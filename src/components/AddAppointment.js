import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { getTreatments } from "../api/treatments";
import moment from "moment";
import { addAppointment } from "../api/appointment";
import { selectPhysio, setPhysio } from "../slices/physioSlice";
import { useDispatch, useSelector } from "react-redux";
/* File header
 *
 * Code to present the contents of the add appointment
 * panel.
 *
 * The panel allow data for a nem appointment to be
 * prepared and to be submitted or cancelled. There is a
 * section used to display any errors. All fields are
 * validated before submission is allowed. The appointments
 * controller contains check to ensure that the new
 * appointment does not overlap an existing. appointment.
 *
 * @author Peter Walton
 * @input/output physioSlice,
 */
const AddAppointment = ({ appointment }) => {
  const dispatch = useDispatch();
  const currPhysio = useSelector(selectPhysio);
  const [dateTime, setDateTime] = useState(new Date(appointment.end_datetime));
  const [treatments, setTreatments] = useState([]);
  const [currTreatment, setCurrTreatment] = useState({});
  const [formValues, setFormValues] = useState({
    client: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState("");

  const handleTreatmentChange = (e) => {
    let itm = document.getElementById("treatment");
    setCurrTreatment(treatments[itm.selectedIndex]);
  };

  useEffect(() => {
    const getData = async () => {
      // Get a list of treatments and set the first one
      // as the current treatment. Save both to local state.
      const resp = await getTreatments();
      if (resp.success === undefined) {
        setTreatments(resp);
        setCurrTreatment(resp[0]);
      } else {
        console.log(resp);
      }
    };
    // run the function defined
    getData();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate(formValues)) {
      // Clone object to help re-render
      let clonedPhysio = { ...currPhysio };

      const fmtString = "yyyy-MM-DD HH:mm";
      // Calculate end time.
      const endDateTime = moment(dateTime, fmtString)
        .add(currTreatment.treatment_duration, "minutes")
        .format(fmtString);
      // Form body for for new appointment
      const body = {
        client_name: formValues.client,
        physio_name: currPhysio.physio_name,
        treatment: currTreatment.treatment_name,
        start_datetime: moment(dateTime).format(fmtString),
        end_datetime: endDateTime,
        email: formValues.email,
        telephone: formValues.phone,
      };
      // Note: there are check for appointment overlaps in
      // the appointments controller.
      const response = await addAppointment(body);
      if (!response.appointment_id) {
        setErrors(response.message);
      } else {
        // cause re-render
        dispatch(setPhysio(clonedPhysio));
      }
    }
  };

  const validate = (formValues) => {
    let errors = "";
    let clear = true;
    const regExPhone = /0[0-9]{10}/;
    const regExEmail =
      /[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*/;
    // If a phone number is provided, verify it.
    if (formValues.phone.length > 0 && !regExPhone.test(formValues.phone)) {
      errors = "The phone number is optional but must valid if entered.";
      clear = false;
    }
    // If an email is provided, verify it.
    if (formValues.email.length > 0 && !regExEmail.test(formValues.email)) {
      errors = "The email is optional but must valid if entered.";
      clear = false;
    }
    // Ensure a client name is provided
    if (formValues.client.length === 0) {
      errors = "Please provide a client name.";
      clear = false;
    }
    setErrors(errors);

    return clear;
  };

  const handleClose = (e) => {
    let clonedPhysio = { ...currPhysio };
    dispatch(setPhysio(clonedPhysio));
  };
  // The component has an error section to display any
  // processing errors. There are buttons to submit the new
  // appointment or to cancel it.
  return (
    <div>
      <form>
        <div className="add-appointment-grid add-appointment-panel">
          <div className="grid-item grid-item-lbl">Start: </div>
          <div className="grid-item date-picker">
            <DatePicker
              selected={dateTime}
              onChange={(date) => {
                setDateTime(date);
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/yyyy hh:mm aa"
              minDate={new Date()}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            />
          </div>

          <div className="grid-item-lbl">
            <label>Client: </label>
          </div>
          <div>
            <input
              id="client"
              name="client"
              type="text"
              value={formValues.client}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item-lbl">
            <label>Treatment: </label>
          </div>
          <div>
            <select
              name="treatment"
              id="treatment"
              onChange={handleTreatmentChange}
            >
              {treatments.map((item) => {
                return (
                  <option key={item.treatment_name} value={item.treatment_name}>
                    {item.treatment_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="grid-item-lbl">
            <label>Duration:</label>
          </div>
          <div>
            <input
              readOnly
              value={currTreatment.treatment_duration + " mins"}
            ></input>
          </div>
          <div className="grid-item-lbl">
            <label>Email: </label>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item-lbl">
            <label>Phone: </label>
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="appointment-btn-container">
              <button className="appointment" onClick={handleSubmit}>
                Confirm
              </button>
              <button className="appointment" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        {errors && <p className="error-box">{errors}</p>}
      </form>
    </div>
  );
};

export default AddAppointment;
