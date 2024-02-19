/* Function Header
 *
 * slice to hold current logon status
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedOn: false,
};

const loggedOnSlice = createSlice({
  name: "loggedOn",
  initialState: initialState,
  reducers: {
    setLogon: (status, action) => {
      status.loggedOn = action.payload;
    },
  },
});

export const selectLogon = (state) => state.loggedOn;

export const { setLogon } = loggedOnSlice.actions;

export default loggedOnSlice.reducer;
