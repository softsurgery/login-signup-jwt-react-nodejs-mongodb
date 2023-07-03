import React, { useState } from "react";
import { faAdd, faTurnUp, faFileSignature, faEnvelope, faPhone, faLocationDot, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header, Content, Button, PrimaryButton } from "../utils/CustomStyled";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import client from "../../media/client.png";

export default function AddClient() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        rate: 0,
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/clients", formData);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                address: "",
                rate: 0,
            });
            alert("Client added successfully!");
        } catch (error) {
            console.error(error);
        }
        navigate("/clients");
    };

    return (
        <div>
            <Content>
                <div>
                    <PrimaryButton onClick={() => { navigate("/clients") }}>
                        <FontAwesomeIcon icon={faTurnUp} />
                    </PrimaryButton>
                </div>
                <div>
                    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                        <table class="array" style={{ maxWidth: "800px", margin: "auto" }}>
                            <tr >
                                <td style={{ border: "none",background:"white" }} colspan="2"><h1><FontAwesomeIcon icon={faAdd} /> Add Client</h1></td>
                            </tr>
                            <tr>
                                <td style={{ border: "none",background:"white" }} > 
                                 <label htmlFor="firstName">
                                    <FontAwesomeIcon icon={faFileSignature} />
                                    <span> </span>First Name
                                </label>
                                </td>
                                <td style={{ border: "none",background:"white" }} > <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td style={{ border: "none",background:"white" }} ><label htmlFor="lastName">
                                    <FontAwesomeIcon icon={faFileSignature} />
                                    <span> </span>Last Name
                                </label>
                                </td>
                                <td style={{ border: "none",background:"white" }} ><input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Smith"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td style={{ border: "none",background:"white" }} >
                                    <label htmlFor="email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span> </span>Email
                                    </label>
                                </td>
                                <td style={{ border: "none",background:"white" }} ><input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john.smith@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td style={{ border: "none",background:"white" }} >
                                    <label htmlFor="phoneNumber">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span> </span>Phone Number
                                    </label>
                                </td>
                                <td style={{ border: "none",background:"white" }} >  <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="+123456789"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td style={{ border: "none",background:"white" }} >
                                    <label htmlFor="address">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span> </span>Address:
                                    </label>
                                </td>
                                <td style={{ border: "none",background:"white" }} >  <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Street Address xxxxx City"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                /></td>
                            </tr>
                            <tr>
                                <td style={{ border: "none",background:"white" }} >
                                    <label htmlFor="rate">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                        <span> </span>Rate:
                                    </label>
                                </td>
                                <td style={{ border: "none",background:"white" }} >
                                    <ReactStars
                                        count={10}
                                        value={formData.rate}
                                        onChange={(e) => handleChange({
                                            target:{
                                                name:"rate",
                                                value: e}
                                            })}
                                        size={40}
                                        activeColor="#ffd700"
                                    />
                                </td>
                            </tr>
                            <div className="pagination" >
                                <PrimaryButton type="submit" style={{ margin: "10px" }}>Add Client</PrimaryButton>
                                <PrimaryButton type="reset" onClick={()=>{setFormData({})}} style={{ margin: "10px" }}>Reset</PrimaryButton>
                            </div>

                        </table>
                        <img
                            src={client}
                            alt="Client"
                            style={{
                                width: "50vh",
                                marginRight: "0",
                                margin: "auto"
                            }} />
                    </form>
                </div>
            </Content>
        </div>
    );
}