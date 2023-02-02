import { combineReducers, configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice.tsx";
import modalText from "./textSlice/modalText.tsx";

const rootReducer = combineReducers({
  modal: modalSlice,
  text: modalText,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
