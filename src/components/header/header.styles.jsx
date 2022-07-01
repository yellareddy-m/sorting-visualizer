import styled from "styled-components";
import { ReactComponent as GithubSvg } from '../../assets/github-brands.svg';

export const GithubIcon = styled(GithubSvg)`
    width: 25px;
    height: 25px;
    fill: rgb(112, 86, 151)
`;

export const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);
    width: 100%;
    padding-left: 25px;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    color: rgb(112, 86, 151)
`;

export const HeaderLabel = styled.span`
    font-size: 22px;
`;

export const HeaderLeftSection = styled.div`
    margin-right: 25px;
`;
