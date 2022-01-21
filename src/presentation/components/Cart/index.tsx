import React, { useMemo } from "react";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import {
  Container,
  ContainerBadge,
} from './styles';
import { Badge } from "@components/Badge";
import { useCart } from "@hooks/useCart";
import { TouchableOpacityProps } from "react-native";

type CartProps = {
  showBadge?: boolean;
} & TouchableOpacityProps

const Cart = ({ showBadge = false, ...props }: CartProps) => {
  const theme = useTheme();
  const { productList } = useCart();

  const memoCount = useMemo(() => {
    return productList.length || 0;
  }, [productList]);

  return (
    <Container {...props}>
      <Feather
        testID="cart-icon"
        name="shopping-cart"
        size={RFValue(24)}
        color={theme.colors.primary} />
      {showBadge &&
        <ContainerBadge>
          <Badge count={memoCount} />
        </ContainerBadge>
      }
    </Container>
  )
}

export default Cart


