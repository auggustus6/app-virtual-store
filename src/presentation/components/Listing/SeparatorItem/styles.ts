import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        width:100%;
        height:${RFValue(10)}px;
    `}
`;
