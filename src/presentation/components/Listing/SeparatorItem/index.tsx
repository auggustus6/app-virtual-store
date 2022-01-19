import React from "react";
import { 
  Container,
 } from './styles';
 
const _SeparatorItem = () => {
  return (
    <Container />
 )
}

export const SeparatorItem = React.memo(_SeparatorItem);


