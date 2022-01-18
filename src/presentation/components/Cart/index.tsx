import React from "react";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import {  
  Container,
} from './styles';


const Cart = () => {
  const theme = useTheme();
  return (
    <Container>
      <Feather
        name="shopping-cart"
        size={RFValue(24)}
        color={theme.colors.primary} />
    </Container>
  )
}

export default Cart


