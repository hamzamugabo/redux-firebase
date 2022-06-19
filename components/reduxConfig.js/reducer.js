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
