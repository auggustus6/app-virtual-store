import { TextView } from "@components/Labels";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


type TextProps = {
  price?: boolean;
}

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
        flex:1;
        background-color:${theme.colors.primary};
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        padding:8px;
    `}
`;


export const Text = styled(TextView)<TextProps>`
  ${({ theme, price = false }) => css`
        color:${theme.colors.white};
        font-size:${RFValue(price ? 22 : 18)}px;
        font-weight:${price ? "bold" : "normal"};
    `}
`;
