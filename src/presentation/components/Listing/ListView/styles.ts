import styled, { css } from "styled-components/native";
import { FlatList } from 'react-native-gesture-handler';


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const List =styled(FlatList)`
  ${({theme}) => css`
    flex:1;
  `}
`;

