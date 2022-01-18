import React from "react";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import {
  Container,
  ContainerBadge,
} from './styles';
import Badge from "@components/Badge";

type CartProps = {
  showBadge?: boolean;
}

const Cart = ({ showBadge = false }: CartProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Feather
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


