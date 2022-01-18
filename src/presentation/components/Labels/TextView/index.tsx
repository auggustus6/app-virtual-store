import React from "react";
import { TextProps } from "react-native";
import {
  Container,
} from './styles';

type TextViewProps = {
  children?: React.ReactNode;
} & TextProps

const _TextView = ({ children, ...rest }: TextViewProps) => {
  return (
    <Container {...rest} style={rest.style}>
      {children}
    </Container>
  )
}

export const TextView = React.memo(_TextView);



