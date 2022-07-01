import styled from "styled-components";

export const SortControlsContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
`;

export const SortButton = styled.div`
    width: 100px;
    height: 40px;
    background: rgb(112, 86, 151);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 50px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgb(112, 86, 151);
    &:active {
        transform: scale(0.98);
        box-shadow: 1px 1px 5px rgb(112, 86, 151);
    }
`;