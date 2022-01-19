import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TextView } from "@components/Labels";


export const Container = styled.View``;

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

export const Price =styled(TextView)`
  ${({theme}) => css`
    color:${theme.colors.primary};
    font-size:${RFValue(20)}px;
    font-weight:bold;
  `}
`;

export const Description = styled(TextView)`
  ${({theme}) => css`
  color:${theme.colors.text_dark};
    font-size:${RFValue(14)}px;
  `}
`;

