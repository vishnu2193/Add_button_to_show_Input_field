import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button_colorchange from "./Button_colorchange";
import Imagedelete from "./Imagedelete";
import Header from "./Header";
import HideShow from "./HideShow";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HideShow />
  </StrictMode>,
  rootElement
);
