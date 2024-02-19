/* Slice Header
 *
 * slice for the physio page
 *
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPhysio: "",
  physios: [],
};

const physioSlice = createSlice({
  name: "physios",
  initialState: initialState,
  reducers: {
    setPhysio: (status, action) => {
      status.currentPhysio = action.payload;
    },
    setPhysios: (status, action) => {
      status.physios = action.payload;
    },
  },
});

export const selectPhysios = (state) => state.physios.physios;

export const selectPhysio = (state) => state.physios.currentPhysio;

export const { setPhysios, setPhysio } = physioSlice.actions;

export default physioSlice.reducer;
