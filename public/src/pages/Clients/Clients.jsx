import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../utils/DropdownMenu";

const Content = styled.div`
    background-color:white;
    opacity:0.7;
    margin:30px;
    padding: 20px;
    border-radius:5px;
    margin-top : 
`;
const Header = styled.div`
    background-color:white;
    opacity:0.7;
    margin:30px;
    padding: 20px;
    border-radius:5px;
`;

const Button = styled.button`

`;

export default function CompOne() {
    return (<div>
        <Header>
            <h1> <FontAwesomeIcon icon={faUser} /> <span> Clients</span></h1>
        </Header>
        <Content>

            <div className="array-container">
                <table className="array">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td><DropdownMenu></DropdownMenu></td>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td><DropdownMenu></DropdownMenu></td>
                    </tr>
                </table>
            </div>
        </Content>
    </div>)
}