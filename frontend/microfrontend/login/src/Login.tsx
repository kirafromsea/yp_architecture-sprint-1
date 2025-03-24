import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./components/Login.tsx";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<Login />);