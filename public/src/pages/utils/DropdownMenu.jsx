import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp,faCircleInfo,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";


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
    width: 22.2vh;
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
    background-color:#040717;
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

    const closeDropdown = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsToggled(false);
        }
    };

    return (
        <div onBlurCapture={closeDropdown}>
            <Button onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faArrowUp} />Action
            </Button>
            <Dropdown style={isToggled ? show : hide} >
                <Tab
                onClick={()=>{alert("gg")}}
                    style={isToggled ? show : hide}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    Show Details
                </Tab >
                <Tab
                style={isToggled ? show : hide}>
                   <FontAwesomeIcon icon={faPenToSquare} />
                    Modify
                </Tab >
                <Tab
                style={isToggled ? show : hide}>
                   <FontAwesomeIcon icon={faTrash} />
                    Delete
                </Tab >
            </Dropdown>
        </div>);
}