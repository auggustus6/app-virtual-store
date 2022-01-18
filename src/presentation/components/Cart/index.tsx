import React from "react";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import {
  Container,
  ContainerBadge,
} from './styles';
import { Badge } from "@components/Badge";
import { RectButtonProps } from "react-native-gesture-handler";

type CartProps = {
  showBadge?: boolean;
} & RectButtonProps

const Cart = ({ showBadge = false, ...props }: CartProps) => {
  const theme = useTheme();
  return (
    <Container {...props}>
      <Feather
        testID="cart-icon"
        name="shopping-cart"
        size={RFValue(24)}
        color={theme.colors.primary} />
      {showBadge &&
        <ContainerBadge>
          <Badge />
        </ContainerBadge>
      }
    </Container>
  )
}

export default Cart


