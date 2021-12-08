import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button_colorchange from "./Button_colorchange";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App name="vishnu" />
  </StrictMode>,
  rootElement
);
