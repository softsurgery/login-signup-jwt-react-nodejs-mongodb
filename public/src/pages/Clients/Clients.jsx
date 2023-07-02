import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faStar,faXmark } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../utils/DropdownMenu";
import { Header,Content } from "../utils/CustomStyled";



export default function Clients() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/clients");
                const users = response.data;
                setUsers(users);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllUsers();
    }, []);

    return (<div>
        <Header>
            <h1> <FontAwesomeIcon icon={faUser} /> <span> Clients</span></h1>
        </Header>
        <Content>

            <div className="array-container">
                <table className="array">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (<tr key={user._id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.address}</td>
                                <td style={{textAlign:"center",color: user.rate>5 ? "green" : " red"}}>
                                <span>{user.rate}</span> <FontAwesomeIcon icon={user.rate>5 ? faStar : ""} /> 
                                </td>
                                <td style={{width: "9%",  backgroundColor: "white"}}><DropdownMenu/></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </Content>
    </div>)
}