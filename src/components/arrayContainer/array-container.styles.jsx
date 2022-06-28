import styled from "styled-components";

export const ArrayItems = styled.div`
    width: 500px;
    height: 250px;
    border: 1px solid #888;
    display: flex;
`;

export const ArrayItem = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px #888;
    border-radius: 5px;
    border: 1px solid black;
    background-color: ${props => props.bgColor};
`;
