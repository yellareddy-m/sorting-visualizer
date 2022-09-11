import styled from 'styled-components';
import { flexCenterCenter } from '../../App.styles';

export const VisualizerContainer = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterCenter};
    flex-direction: column;
    position: relative;
`;

export const Footer = styled.div`
    position: fixed;
    bottom: 20px;
`;