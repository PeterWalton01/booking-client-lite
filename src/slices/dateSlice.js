import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDate: "",
};

const dateSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    setDate: (status, action) => {
      status.currentDate = action.payload;
    },
  },
});

export const selectDate = (state) => state.date.currentDate;

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
