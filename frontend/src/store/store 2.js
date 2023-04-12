// store.js
import { configureStore } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  flightID: null,
};

var flightID = 0;
// Define reducer function
const flightIDReducer = (state = null, action) => {
    switch (action.type) {
      case "SET_FLIGHT_ID":
        return action.payload;
      default:
        return state;
    }
  };

// Configure Redux store
const store = configureStore({
  reducer: {
    flightID: flightIDReducer,
  },
});

export default store;
