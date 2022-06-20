import {SET_LAT, SET_LONG} from './action';

const initialState = {
  lat: 37.78825,
  long: -122.4324,
};

function userReducer (state = initialState, action) {
  switch (action.type) {
    case SET_LAT:
      return {...state, lat: action.payload};
    case SET_LONG:
      return {...state, long: action.payload};
    default:
      return state;
  }
}

export default userReducer;

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   lat: 37.78825,
//   long: -122.4324,
// };

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     setLat: (state) => {
//       state.lat=0.3526443;
//     },
//     setLong: (state) => {
//       state.long=32.5993598;
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { setLat, setLong } = counterSlice.actions

// export default counterSlice.reducer