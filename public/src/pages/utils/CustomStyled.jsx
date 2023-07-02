import styled from "styled-components";

export const Button = styled.button`
    font-size:18px;
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
    border : 3px solid #0c1022;
    margin-left:10px;
    color:black;
    &:hover {
        color: #ee00ff
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    margin-top: 0.3rem;
    background: white;
    transform: translateY(0.5rem);
    transition: all 0.3s cubic-bezier(0.5, 1, 0.5, 1);
    z-index:999;
`;

export const Tab = styled.a`
    font-size:18px;
    display: flex;
    align-items: center;
    column-gap: var(--gap);
    padding: 0.4rem 1rem;
    text-decoration: none;
    color: white;
    border : 1px solid #0c1022;
    margin:0.1rem;
    background-color:#040717;
    border-radius:0.2rem;
    &:hover {
        color: #ee00ff
    }
`;

export const FlexBox = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Content = styled.div`
    background-color:white;
    opacity:0.7;
    margin:30px;
    padding: 20px;
    border-radius:10px;
    margin-top : 
`;
export const Header = styled.div`
    background-color:white;
    opacity:0.7;
    margin:35px;
    padding: 20px;
    border-radius:5px;
    color :#040717;
`;