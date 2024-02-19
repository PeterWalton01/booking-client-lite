/* Function Header
 *
 * slice to hold the d of the current order. The
 * initial value of 0 is used to detect startup
 * conditions.
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: 0,
};

const currentIdSlice = createSlice({
  name: "currentId",
  initialState: initialState,
  reducers: {
    setCurrentId: (status, action) => {
      status.currentId = action.payload;
    },
  },
});

export const selectCurrentId = (state) => state.currentId.currentId;

export const { setCurrentId } = currentIdSlice.actions;

export default currentIdSlice.reducer;
