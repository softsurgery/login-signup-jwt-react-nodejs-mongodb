import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function SidebarComponent(props) {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const logOut = () => {
    removeCookie("jwt");
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="sidebar" style={{ width: props.isToggled ? "250px" : "0" }}>
        <Link to="" className="closebtn" onClick={() => { props.toggle() }}>&times;</Link>
        <Link to="/comp1">Dashboard1</Link>
        <Link to="/comp2">Dashboard2</Link>
        <Link to="" onClick={logOut}>Logout</Link>
      </div>
    </div>

  );
}
