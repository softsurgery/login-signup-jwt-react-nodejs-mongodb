import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import SidebarComponent from "./utils/SidebarComponent";
import { styled } from "styled-components";

const Section = styled.section`
  margin-left: ${props => props.marginLeft};
  transition: margin-left .5s;
  padding-left: 20px;
`;

export default function Main({ children }) {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user}`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  if (!cookies.jwt) return (<div></div>)
  else
  return (
    <div>
      {cookies.jwt ? 
      <SidebarComponent
        isToggled={isToggled}
        toggle={toggle}
        items={[
          {
            title:"Clients",
            url:"/clients"
          },
        ]}
      /> : ""}
      <Section marginLeft={isToggled ? "250px" : "0px"}>
        {cookies.jwt ? <button className="openbtn" onClick={toggle}>&#9776; MENU</button> : ""}
        <div>
          {children}
        </div>
      </Section>
      <ToastContainer toastStyle={{
        backgroundColor: "#0c1123",
        color: "#00ccfe",
        boxShadow: "#b602c6 2px 2px"
      }} />
    </div>
  )
}