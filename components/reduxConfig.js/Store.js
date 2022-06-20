import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";
const rootReducer = combineReducers({userReducer});

export const store = createStore(rootReducer,applyMiddleware(thunk));

// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './reducer'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })