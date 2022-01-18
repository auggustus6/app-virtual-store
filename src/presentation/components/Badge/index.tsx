import React from "react";
import {
  Container,
  Text,
} from './styles';

type BadgeProps = {
  count?: number;
}

const _Badge = ({ count = 0 }: BadgeProps) => {
  return (
    <Container>
      <Text>{count}</Text>
    </Container>
  )
}

export const Badge = React.memo(_Badge);


