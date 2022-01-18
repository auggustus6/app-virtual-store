import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

const {width} = Dimensions.get("window");

export const Wrapper = styled(RectButton)`
  ${({ theme }) => css`
        width: ${width * 0.45}px;
        padding-bottom:18px;
    `}
`;
