import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./i18nextConf";
import { createTheme } from "@mui/material";

const font = "'Noto Sans Arabic', sans-serif";

const FontTheme = createTheme({
  typography: {
    fontFamily: font,
  },
});
ReactDOM.render(
  <BrowserRouter>
    <App style={FontTheme} />
  </BrowserRouter>,
  document.getElementById("root")
);
