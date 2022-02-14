import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "Baraka",
      age: 0,
      email: "",
      api_id: "API3462965997",
      api_password: "Licks@2021!",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {};
    },
  },
});

export function logUserOut() {
  return async (dispatch) => {
    dispatch(userSlice.actions.logout());
  };
}

export function logUserIn(email, password) {
  return async (dispatch) => {
    const response = await axios.get(
      "https://api.sema.co.tz/api/GetSenderIDList",
      {
        params: { email: email, password: password },
      }
    );
    dispatch(userSlice.actions.login(response.data));
  };
}

export default userSlice.reducer;
