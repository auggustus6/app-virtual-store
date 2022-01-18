import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const ContainerImage =styled.View`
  ${({theme}) => css`
  
  `}
`;

export const Image =styled.Image`
  ${({theme}) => css`
    width:100%;
    height:${RFValue(200)}px;
  `}
`;

export const ContainerBody =styled.View`
  ${({theme}) => css`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
  `}
`;

export const ContainerInfo =styled.View`
  ${({theme}) => css`
  
  `}
`;

export const Price =styled.Text`
  ${({theme}) => css`
    color:${theme.colors.primary};
    font-size:${RFValue(20)}px;
    font-weight:bold;
  `}
`;

export const Description =styled.Text`
  ${({theme}) => css`
  color:${theme.colors.text_dark};
    font-size:${RFValue(14)}px;
  `}
`;

