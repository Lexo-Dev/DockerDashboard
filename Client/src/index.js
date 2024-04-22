import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store";

import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
    <Provider store={store}>
        <Routes />
    </Provider>
);
