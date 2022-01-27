import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button_colorchange from "./Button_colorchange";
import Imagedelete from "./Imagedelete";
import Header from "./Header";
import HideShow from "./HideShow";
import Emailvalid from "./Emailvalid";
import "bootstrap/dist/css/bootstrap.css";
import Cusol from "./Cusol";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Cusol />
  </StrictMode>,
  rootElement
);
