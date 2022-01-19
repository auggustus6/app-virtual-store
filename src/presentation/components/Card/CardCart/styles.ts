import { TextView } from "@components/Labels";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type TextProps = {
  removed?: boolean;
}


export const Container = styled.View`
  ${({ theme }) => css`
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    `}
`;


export const Image = styled.Image`
  ${({theme}) => css`
    width:${RFValue(100)}px;
    height:${RFValue(100)}px;
    border-radius:8px;
  `}
`;

export const Content = styled.View`
  ${({theme}) => css`
      flex:1;
      flex-direction:column;
      margin-left:10px;
  
  `}
`;

export const Text = styled(TextView)<TextProps>`
  ${({theme, removed}) => css`
    color:${removed ? theme.colors.attention : theme.colors.text_dark};
  `}
`
;