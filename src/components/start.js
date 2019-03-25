import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

// need to add redux later
// https://github.com/spicedacademy/sesame/tree/master/redux
let elem;
if (location.pathname == "/admin") {
    elem = <Admin />;
} else {
    elem = <App />;
}
ReactDOM.render(elem, document.querySelector("main"));
