import { TextView } from "@components/Labels";
import styled, { css } from "styled-components/native";


export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
        flex:1;
    `}
`;


export const Image = styled.Image`
  ${({theme}) => css`
  
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