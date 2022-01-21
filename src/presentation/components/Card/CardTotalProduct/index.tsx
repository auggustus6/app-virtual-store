import React from "react";
import {
  Container,
  Text,
} from './styles';

type CardTotalProductProps = {
  total?: number;
}

const CardTotalProduct = ({ total = 0 }: CardTotalProductProps) => {
  return (
    <Container>
      <Text>Valor Total</Text>
      <Text price>R$ {total}</Text>
    </Container>
  )
}

export default CardTotalProduct


