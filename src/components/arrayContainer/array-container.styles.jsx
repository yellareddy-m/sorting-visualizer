import styled, { css, keyframes } from "styled-components";
import { flexCenterCenter } from "../../App.styles";


const swapAnimation = props => keyframes`
    0% {
        transform: translate(0px, 0px);
    }
    10% {
        transform: translate(0px, 0px);
    }
    30% {
        transform: translate(0px, ${props.translateX < 0 ? '50' : '-50'}px);
    }
    75% {
        transform: translate(${props.translateX}px, ${props.translateX < 0 ? '50' : '-50'}px);
    }
    90% {
        transform: translate(${props.translateX}px, 0px);
    }
    100% {
        transform: translate(${props.translateX}px, 0px);
    }
`;

const swapAnimationCSSHelper = props =>
    css`
    animation: ${swapAnimation(props)} ${props.delay}ms ease-out forwards;
`;

export const ArrayItems = styled.div`
    height: 250px;
    border: 1px solid #ccc;
    ${flexCenterCenter};
    margin-top: 25px;
    padding: 0 20px;
    border-radius: 5px;
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
    ${(props) => props.translateX && swapAnimationCSSHelper};
`;
