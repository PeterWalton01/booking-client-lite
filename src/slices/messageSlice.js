/* Function Header
 *
 * slice to manage messages
 * @author Peter Walton
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    setMessage: (status, action) => {
      status.message = action.payload.message;
    },
  },
});

export const selectMessage = (state) => state.message.message;

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
