/* Slice Header
 *
 * slice for the appointments component
 *
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: initialState,
  reducers: {
    setAppointments: (status, action) => {
      status.appointments = action.payload;
    },
    removeAppointment: (status, action) => {
      status.appointments.splice(
        status.appointments.findIndex(
          (arrow) => arrow.appointment_id === action.payload
        ),
        1
      );
    },
  },
});

export const selectAppointments = (state) => state.appointments.appointments;

export const { setAppointments, setAdding, removeAppointment } =
  appointmentsSlice.actions;

export default appointmentsSlice.reducer;
