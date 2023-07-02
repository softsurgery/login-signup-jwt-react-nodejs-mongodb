import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown,faCircleInfo,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button,Tab,Dropdown } from "./CustomStyled";

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
            <span style={{ 
                transition: "transform 0.2s",
                transform: isToggled ? "rotate(180deg)" : "none"
               
            }}>
                <FontAwesomeIcon icon={faCircleChevronDown} />
            </span>Action
            </Button>
            <Dropdown style={isToggled ? show : hide} >
                <Tab
                onClick={()=>{alert("gg")}}
                    style={isToggled ? show : hide}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    Details
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