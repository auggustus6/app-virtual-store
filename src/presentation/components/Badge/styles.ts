import { TextView } from "@components/Labels";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        width:${RFValue(20)}px;
        height:${RFValue(20)}px;
        border-radius:${RFValue(20 /2)}px;
        background:${theme.colors.secondary};

        align-items:center;
        justify-content:center;
    `}
`;

export const Text = styled(TextView)`
  ${({ theme }) => css`
        color:${theme.colors.white};
    `}
`;
