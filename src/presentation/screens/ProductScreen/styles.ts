import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

const {width} = Dimensions.get("window");

export const Wrapper = styled.View`
  ${({ theme }) => css`
        width: ${width * 0.45}px;
        padding-bottom:18px;
    `}
`;
