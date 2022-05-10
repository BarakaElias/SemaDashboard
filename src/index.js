import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios";

import reportWebVitals from "./utils/reportWebVitals";
import App from "./App";

import "./mocks";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// axios.interceptors.request.use((request) => {
//   console.log(request);
//   axios.defaults.withCredentials = true;
//   // return request;
// });

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
