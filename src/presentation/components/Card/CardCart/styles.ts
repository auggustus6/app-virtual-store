import { TextView } from "@components/Labels";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;


export const Image = styled.Image`
  ${({theme}) => css`
    width:${RFValue(100)}px;
    height:${RFValue(100)}px;
    background:${theme.colors.primary};
  `}
`;

export const Content = styled.View`
  ${({theme}) => css`
  
  `}
`;

export const Text = styled(TextView)`
  ${({theme}) => css`
  
  `}
`
;