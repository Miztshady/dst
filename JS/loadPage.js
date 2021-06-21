import React from 'react';
import ReactDOM from "react-dom";
import * as pages from "../Pages.js"

const initial = React.createElement(pages.indexPage());

ReactDOM.render(
    initial,
    document.getElementById("main")
)