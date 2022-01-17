import { getImageDefault } from "@shared/functions";
import React from "react";
import {
  Container,
  ContainerImage,
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

const Card = ({ 
  title, 
  price, 
  uri,
  testID  }: CardProps) => {
    
  return (
    <Container testID={testID}>
      <ContainerImage>
        <Image
          accessibilityRole="image"
          source={{ uri: getImageDefault(uri) }}
        />
      </ContainerImage>
      <ContainerBody>
        <ContainerInfo>
          <Price accessibilityLabel="test-label" allowFontScaling={false}>R$ {price}</Price>
          <Description allowFontScaling={false}>{title}</Description>
        </ContainerInfo>
      </ContainerBody>
    </Container>
  )
}

export default Card


