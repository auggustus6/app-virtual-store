import { TextView } from "@components/Labels";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
    `}
`;

export const ButtonRounded = styled.TouchableOpacity <{ actived?: boolean }>`
  ${({ theme, actived }) => css`
        width:${RFValue(40)}px;
        height:${RFValue(40)}px;
        border-radius:${RFValue(20)}px;
        background-color:${actived ? theme.colors.primary : theme.colors.text};

        align-items:center;
        justify-content: center;
    `}
`;

export const Text = styled(TextView)`
  ${() => css`
        padding-left:10px;
        padding-right:10px;
        font-size:${RFValue(18)}px;
    `}
`;
