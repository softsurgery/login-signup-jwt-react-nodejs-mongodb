import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faArrowsRotate, faAdd } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../utils/DropdownMenu";
import { Header, Content, Button, PrimaryButton } from "../utils/CustomStyled";
import { useNavigate } from "react-router-dom";


const active = {
    pointerEvents: "none",
    background: "grey"
}

export default function Clients() {
    const [clients, setClients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchClientsByPage(currentPage);
    }, [currentPage]);

    const handleRefresh = () => {
        fetchClientsByPage(currentPage);
    }

    const fetchClientsByPage = async (page) => {
        try {
            const response = await axios.get(
                `http://localhost:4000/clients?page=${page}&limit=5`
            );
            const clients = response.data;
            console.log(clients);
            setClients(clients.docs);
            setMaxPage(clients.totalPages);
        } catch (error) {
            console.error(error);
        }
    };

    const displayClient = (client) => {
        alert(`Client :\n
        First Name : ${client.firstName}\n 
        Last Name : ${client.lastName}\n
        E-mail : ${client.email}\n 
        Phone Number :${client.phoneNumber}\n
        Address : ${client.address}\n 
        Rate :${client.rate}`);
    }

    const deleteClient = async (email) => {
        try {
            await axios.delete("http://localhost:4000/clients", { data: { email } });
            setClients((prevClients) =>
                prevClients.filter((client) => client.email !== email)
            );
        } catch (error) {
            console.error(error);
        }
        handleRefresh();
    };

    const handleNextPage = () => {
        if (currentPage < maxPage) setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div>
            <Header>
                <h1>
                    <FontAwesomeIcon icon={faUser} /> <span> Clients</span>
                </h1>

                <PrimaryButton
                    color="#00a150"
                    textColor="white"
                    hoverColor="#c2daff"
                    onClick={()=>{navigate("/add_client")}}
                ><FontAwesomeIcon icon={faAdd} /> ADD CLIENT</PrimaryButton>

            </Header>
            <Content>
                <div className="array-container" >
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
                            {clients.length === 0
                                ? <tr >
                                    <td style={{ textAlign: "center", border: "none" }} colspan="7"><h1 style={{ marginTop: "10vh" }}>No Clients Found</h1></td>
                                </tr>
                                :
                                clients.map((client) => (
                                    <tr key={client.email}>
                                        <td>{client.firstName}</td>
                                        <td>{client.lastName}</td>
                                        <td>{client.email}</td>
                                        <td>{client.phoneNumber}</td>
                                        <td>{client.address}</td>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                color: client.rate > 5 ? "green" : "red",
                                            }}
                                        >
                                            <span>{client.rate}</span>{" "}
                                            <FontAwesomeIcon
                                                icon={client.rate > 5 ? faStar : ""}
                                            />
                                        </td>
                                        <td style={{ width: "100px" }}>
                                            <DropdownMenu
                                                id={client}
                                                display={()=> displayClient(client)}
                                                delete={() => deleteClient(client.email)} />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination" style={{ display: "flex" }}>
                    <Button style={currentPage === 1 ? active : {}} onClick={handlePreviousPage}>
                        Previous
                    </Button>
                    <Button style={currentPage > maxPage - 1 ? active : {}} onClick={handleNextPage}>Next</Button>

                    <Button onClick={handleRefresh}>
                        <FontAwesomeIcon icon={faArrowsRotate} /> <span>{currentPage}/{maxPage}</span>
                    </Button>

                </div>
            </Content>
        </div>
    );
}
