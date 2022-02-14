import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counter";
import senderIDReducer from "./slices/senderids";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sender_ids: senderIDReducer,
  },
});
