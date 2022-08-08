//require('file-loader?name=[name].[ext]!./index.html')
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./App.scss"
import App from "./App";
import {store} from "./store"
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );

