import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button_colorchange from "./Button_colorchange";
import Imagedelete from "./Imagedelete";
import Header from "./Header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
  </StrictMode>,
  rootElement
);
