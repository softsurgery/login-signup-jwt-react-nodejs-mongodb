import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Toaster } from "../utils/Toaster";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../utils/FlexBox";

export default function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  useEffect(() => {
    console.log(values);
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate, values]);

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.password !== values.confirm)
      generateError("Password doesn't match");
    else {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/register",
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
          } else {
            navigate("/");
          }
        }
      } catch (ex) {
        console.log(ex);
      }
    }
  };
  return (
    <FlexBox>
      <div className="login_form_container">
        <form
          className="login_form"
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <h2>Register Account</h2>
          <div className="input_group">
            <FontAwesomeIcon icon={faUser} />
            <input
              className="input_text"
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Confirm Password"
              name="confirm"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="button_group" id="login_button">
            <button type="submit">Submit</button>
          </div>
          <div className="fotter">
            <span>
              Already have an account ?<Link to="/login"> Login</Link>
            </span>
          </div>
        </form>
        {Toaster()}
      </div>
    </FlexBox>
  );
}
