import React from "react";
import Register from "./pages/Auth/Register";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Auth/Login";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import CompOne from "./pages/CompOne";
import CompTwo from "./pages/CompTwo"

export default function App(){
  return (
    <div>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/comp1" element={<Main children={<CompOne/>}/>} />
          <Route exact path="/comp2" element={<Main children={<CompTwo/>}/>} />
        </Routes>
    </div>
  );
}
