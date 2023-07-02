import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../utils/CustomStyled";
import { Toaster } from "../utils/Toaster";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else navigate("/");
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <FlexBox>
      <div className="login_form_container">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Authentification</h2>
          <div className="input_group">
            <FontAwesomeIcon icon={faUser} />
            <input
              className="input_text"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="input_group">
            <FontAwesomeIcon icon={faLock} />
            <input
              className="input_text"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="off"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="button_group" id="login_button">
            <button type="submit">Submit</button>
          </div>
          <div className="fotter">
            <a href="#">Forgot Password ?</a>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </form>
        {Toaster()}
      </div>
    </FlexBox>
  );
}
