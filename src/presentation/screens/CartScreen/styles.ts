import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        justify-content:space-between;
    `}
`;

export const ContainerList = styled.View`
  ${({ theme }) => css`
        flex:9;
    `}
`;
