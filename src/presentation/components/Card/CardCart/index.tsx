import React from "react";
import { getImageDefault } from "@shared/functions";
import {
  Container,
  Image,
  Content,
  Text,
} from './styles';
import { ControlCount } from "@components/Controls";
import { useCart } from "@hooks/useCart";
import { TouchableOpacity } from "react-native";


export type CardCartProps = {
  id: string;
  uriProduct?: string;
  title: string;
  price: string;
  quantity: number;
}

const _CardCart = ({
  id,
  uriProduct,
  title,
  price,
  quantity
}: CardCartProps) => {

  const { handleDecrement, handleIncrement, removeProduct } = useCart();

  return (
    <Container>
      <Image
        accessibilityRole="image"
        source={{ uri: getImageDefault("") }} />
      <Content>
        <Text>{title}</Text>
        <Text>R$ {price}</Text>
        <TouchableOpacity onPress={()=> removeProduct(id)}>
          <Text removed>Remover</Text>
        </TouchableOpacity>
      </Content>
      <Content>
        <ControlCount
          handleDecrement={() => handleDecrement(id)}
          handleIncrement={() => handleIncrement(id)}
          count={quantity} />
      </Content>
    </Container>
  )
}

export const CardCart = React.memo(_CardCart);


