import React from "react";
import { Button, Content } from "./CustomStyled";

export default function Alert(props = {
    isVisible: false,
    items: []
}) {

    return (
        <div>
            {props.isVisible === true && (
                <div>
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            zIndex: 9998,
                        }}
                        onClick={props.items[1].action}
                    ></div>
                    <Content
                        style={{
                            position: "absolute",
                            top: "43%",
                            left: "43%",
                            margin: "auto",
                            zIndex: "9999",
                            height: "170px",
                        }}
                    >
                        <Button onClick={props.items[1].action} style={{ position: "absolute", top: "10px", right: "10px" }}>x</Button>
                        <h2 style={{ margin: "10px", }}>{props.message}</h2>
                        <div style={{ textAlign: "center" }}>
                            {props.items.map((item, index) => (
                                <Button
                                    style={{ display: "inline-block" }}
                                    key={item.content}
                                    onClick={props.items[index].action}>
                                    {item.content}
                                </Button>
                            ))}
                        </div>
                    </Content>
                </div>
            )}
        </div>
    );
}