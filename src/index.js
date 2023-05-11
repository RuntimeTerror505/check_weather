import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WeatherProvider from "./context";

import "./index.scss";

ReactDOM.render(
   <WeatherProvider>
      <App />
   </WeatherProvider>,
   document.getElementById("root")
);
