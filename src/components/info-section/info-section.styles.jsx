import styled from "styled-components";

export const ColorBox = styled.span`
    width: 15px;
    height: 15px;
    background-color: ${props => props.bgColor};
    margin-right: 5px;
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const SingleInfo = styled.div`
    position: relative;
    display: flex;
    margin-left: 20px;
    align-items: center;
`;
