import styled, { css } from "styled-components";

export const pointerEventsNone = css`
    pointer-events: none;
`;

export const DropdownMenuContainer = styled.div`
    width: 250px;
    position: relative;
    margin-right: 25px;
    ${(props) => props.sortingInProgress && pointerEventsNone}
`;

export const DropdownPlaceholder = styled.span`
    color: #999;
`;

export const DropdownMenuButton = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 12px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

export const DropdownCaret = styled.span`
    font-size: 32px;
    margin-left: 5px;
    font-family: Material Symbols Outlined;
    line-height: 1;
`;

export const DropdownListContainer = styled.ul`
    width: 100%;
    list-style: none;
    position: absolute;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    background-color: white;
    z-index: 20;
`;

export const DropdownItem = styled.li`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
    &:hover {
        background-color: rgb(134, 109, 171);
        color: white;
    }
`;
