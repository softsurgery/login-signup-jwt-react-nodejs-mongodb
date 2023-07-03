import React from "react";
import styled from "styled-components";
import { Button } from "./CustomStyled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 0.1s ease;
  overflow: hidden;
  z-index: 10000;

`;

const Popup = styled.div`
  margin: 40vh auto;
  padding: 20px;
  background: white;
  opacity : 1
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 0.1s ease;
  border-radius: 20px;
  border: 5px solid rgba(0, 0, 0, 0.8);  

`;

const Content = styled.div`
  max-height: 40%;
  overflow: auto;
`;

const show = {
  visibility: "visible",
  opacity: "1",
};

const hide = {
  visibility: "hidden",
  opacity: "0",
};

export default function Alert(props) {
  return (
    <Overlay style={props.isVisible ? show : hide}>
      <Popup>
        <Content>
          <h3 style={{ margin: "10px" }}>{props.message}</h3>
          <div style={{ textAlign: "center" }}>
            {props.items.map((item, index) => (
              <Button
                style={{ display: "inline-block" }}
                key={item.content}
                onClick={props.items[index].action}
              >
                {item.content}
              </Button>
            ))}
          </div>
        </Content>
      </Popup>
    </Overlay>
  );
}
