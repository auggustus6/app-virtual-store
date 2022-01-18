import Cart from "@components/Cart";
import { getImageDefault } from "@shared/functions";
import React from "react";
import {
  Container,
  Image,
  ContainerBody,
  ContainerInfo,
  Price,
  Description,
} from './styles';

export type CardProps = {
  title: string;
  price: string;
  uri?: string;
  testID?: string;
}

 const _CardProduct = ({
  title,
  price,
  uri,
  testID }: CardProps) => {

  return (
    <Container testID={testID}>
        <Image
          accessibilityRole="image"
          source={{ uri: getImageDefault(uri) }}
        />
      <ContainerBody>
        <ContainerInfo>
          <Price accessibilityLabel="test-label" allowFontScaling={false}>R$ {price}</Price>
          <Description allowFontScaling={false} numberOfLines={1}>{title}</Description>
        </ContainerInfo>
        <Cart />
      </ContainerBody>
    </Container>
  )
}

export const CardProduct = React.memo(_CardProduct);
