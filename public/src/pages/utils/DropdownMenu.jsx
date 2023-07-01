import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size:16px;
    font-weight:bold;
    letter-spacing: 1px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: var(--gap);
    padding: 0.5rem;
    cursor: pointer;
    border-radius: var(--radius);
    border: none;
    box-shadow: var(--shadow);
    position: relative;
    border : 2px solid #0c1022;
`;

const Dropdown = styled.div`
    position: absolute;
    width: 190px;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    margin-top: 0.3rem;
    background: white;
    transform: translateY(0.5rem);
    transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);
    z-index:999;
`;

const Tab = styled.a`
    display: flex;
    align-items: center;
    column-gap: var(--gap);
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    border : 1px solid #0c1022;
    margin:0.2rem;
    background-color:black;
    border-radius:0.2rem;
    &:hover {
        padding: 0.5rem 1.2rem;
    }
`;

const show = {
    visibility: "visible",
    opacity: "1",
    transform: "translateY(0rem)"
}

const hide = {
    visibility: "hidden",
    opacity: "0"
}

export default function DropdownMenu() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleDropdown = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <Button onClick={toggleDropdown}>
                Action
                <i className="bx bx-chevron-down" id="arrow"></i>
            </Button>

            <Dropdown style={isToggled ? show : hide} onBlur={toggleDropdown}>
                <Tab href="#create"
                    style={isToggled ? show : hide}>
                    <i className="bx bx-plus-circle"></i>
                    Show Details
                </Tab >
                <Tab href="#draft"
                style={isToggled ? show : hide}>
                    <i className="bx bx-book"></i>
                    Modify
                </Tab >
                <Tab href="#draft"
                style={isToggled ? show : hide}>
                    <i className="bx bx-book"></i>
                    Delete
                </Tab >
            </Dropdown>
        </div>);
}