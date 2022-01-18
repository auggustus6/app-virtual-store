import styled, { css } from "styled-components/native";
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        justify-content:center;
        align-items: center;
    `}
`;

export const Text =styled.Text`
  ${({theme}) => css`
    color:${theme.colors.primary};
    font-size:${RFValue(12)}px;
  `}
`;

