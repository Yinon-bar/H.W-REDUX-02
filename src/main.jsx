import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./redux/appReducer.jsx";

const store = createStore(appReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
