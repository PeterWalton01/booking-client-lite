/* Function Header
 *
 * code to configure the store
 * @author Peter Walton
 */
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageSlice";
import currentIdReducer from "./currentIdSlice";
import loggedOnSliceReducers from "./logonSlice";
import physioReducers from "./physioSlice";
import appointmentsReducers from "./appointmentSlice";
import dateReducers from "./dateSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    currentId: currentIdReducer,
    loggedOn: loggedOnSliceReducers,
    physios: physioReducers,
    appointments: appointmentsReducers,
    date: dateReducers,
  },
});

export default store;
