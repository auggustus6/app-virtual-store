import { TextView } from "@components/Labels";
import React from "react";
import {
  Container,
  Text,
} from './styles';

type BadgeProps = {
  count?: number;
}

const Badge = ({ count = 0 }: BadgeProps) => {
  return (
    <Container>
      <Text>{count}</Text>
    </Container>
  )
}

export default Badge


