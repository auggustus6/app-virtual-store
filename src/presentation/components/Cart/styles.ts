import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";


export const Container = styled(RectButton)`
  ${({ theme }) => css`
      position:relative;
    `}
`;

export const ContainerBadge = styled.View`
  ${({ theme }) => css`
      position:absolute;
      right:-5px;
      bottom:-10px;
    `}
`;
