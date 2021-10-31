import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById("root")
);
