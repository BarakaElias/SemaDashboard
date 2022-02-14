import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   sender_ids: [
//     { sender_id: "PETWASH", countr: "Tanzania" },
//     { sender_id: "LICKS", country: "Tanzania" },
//   ],
// };

const senderIDSlice = createSlice({
  name: "sender_ids",
  initialState: {
    values: [
      { sender_id: "PETWASH", countr: "Tanzania" },
      { sender_id: "LICKS", country: "Tanzania" },
    ],
  },
  reducers: {
    setSenderIDs: (state, action) => {
      state.values = action.payload;
    },
  },
});

export default senderIDSlice.reducer;

export function retrieveSenderIDs() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.sema.co.tz/api/GetSenderIDList",
        {
          params: { api_id: "API3462965997", api_password: "Licks@2021!" },
        }
      );
      dispatch(senderIDSlice.actions.setSenderIDs(response.data));
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
}
