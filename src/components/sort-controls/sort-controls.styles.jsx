import styled, { css } from "styled-components";
import { flexCenterCenter } from "../../App.styles";

export const SortControlsContainer = styled.div`
    position: relative;
    width: 100%;
    ${flexCenterCenter};
    border-bottom: 1px solid #ccc;
    margin-top: 25px;
    padding-bottom: 15px;
`;

export const disabledButtonStyles = css`
    opacity: 0.8;
    cursor: not-allowed;
`;

export const Button = styled.button`
    padding: 0 12px;
    height: 40px;
    background: rgb(112, 86, 151);
    color: white;
    ${flexCenterCenter}
    cursor: pointer;
    margin-right: 50px;
    border-radius: 5px;
    border: 0;
    font-size: 16px;
    box-shadow: 2px 2px 5px rgb(112, 86, 151);
    ${(props) => props.disabled && disabledButtonStyles}
    &:active {
        transform: scale(0.98);
        box-shadow: 1px 1px 5px rgb(112, 86, 151);
    }
`;