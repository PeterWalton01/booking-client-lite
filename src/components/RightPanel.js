import { useSelector } from "react-redux";
import AppointmentPanel from "./AppointmentPanel";
import { selectAppointments } from "../slices/appointmentSlice";
import { selectPhysio } from "../slices/physioSlice";

/* File header
 *
 * Code to present the contents of the right
 * panel on the main component. This will
 * show the currently selected physio and
 * the current list of appointments..
 * @author Peter Walton
 * @input/output appointmentSlice, physioSlice
 */
const RightPanel = () => {
  const appointments = useSelector(selectAppointments);
  const physio = useSelector(selectPhysio);

  return (
    <div>
      <div className="physioHead">
        <span className="physioLbl">
          Appointments for: {physio.physio_name}
        </span>
      </div>
      <div className="appointment-list">
        {/* <div> */}
        <div>
          <ul>
            {appointments.map((item) => {
              return (
                <li key={item.appointment_id} className="app-list">
                  <AppointmentPanel appointment={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
