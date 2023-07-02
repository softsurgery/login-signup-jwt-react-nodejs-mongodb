import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarComponent(props) {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const logOut = () => {
    removeCookie("jwt");
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="sidebar" style={{ width: props.isToggled ? "250px" : "0px" }}>
        <Link to="" className="closebtn" onClick={() => { props.toggle() }}>&times;</Link>
        {props.items.map(item => <Link to={item.url}><FontAwesomeIcon icon={item.icon} style={{marginRight:"10px"}}/><span> {item.title}</span></Link>)}
        <Link to="" onClick={logOut}>Logout</Link>
      </div>
    </div>
  );
}
