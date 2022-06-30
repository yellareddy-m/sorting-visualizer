import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);
    width: 100%;
    padding-left: 25px;
    margin: 0;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLabel = styled.span`
    font-size: 22px;
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

export const HeaderLeftSection = styled.div`
    display: flex;
    align-items: center;
`;
