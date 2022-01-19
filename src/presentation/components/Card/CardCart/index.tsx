import React from "react";
import { getImageDefault } from "@shared/functions";
import {
  Container,
  Image,
  Content,
  Text,
} from './styles';


export type CardCartProps = {
    uriProduct?: string;
    title: string;
    description: string;
    price: string;
    quantity: number;
} 

const _CardCart = ({
  uriProduct,
  title,
  description,
  price,
  quantity
}:CardCartProps) => {
  return (
    <Container>
      <Image
      accessibilityRole="image"
      source={{uri: getImageDefault(uriProduct)}} />
      <Content>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Content>
      <Content>
        <Text>R$ {price}</Text>
        <Text>{quantity}</Text>
      </Content>
    </Container>
  )
}

export const CardCart = React.memo(_CardCart);


