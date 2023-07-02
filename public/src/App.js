import React from "react";
import Register from "./pages/Auth/Register";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Auth/Login";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import Clients from "./pages/Clients/Clients";

export default function App(){
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/clients" element={<Main children={<Clients/>}/>} />
        </Routes>
    </div>
  );
}
