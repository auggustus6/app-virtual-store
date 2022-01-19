import React from "react";
import { Feather } from '@expo/vector-icons';
import {
  Container,
  ButtonRounded,
  Text,
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type ControlCountProps = {
  count: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

const _ControlCount = ({ count = 0, handleDecrement, handleIncrement }: ControlCountProps) => {
  const theme = useTheme();
  return (
    <Container>
      <ButtonRounded
        testID="button-decrement"
        onPress={handleDecrement}
        disabled={count === 1}
        actived={count > 1}>
        <Feather name="minus" size={RFValue(24)} color={theme.colors.white} />
      </ButtonRounded>

      <Text>{count}</Text>

      <ButtonRounded
        testID="button-increment"
        onPress={handleIncrement}
        actived>
        <Feather name="plus" size={RFValue(24)} color={theme.colors.white} />
      </ButtonRounded>

    </Container>
  )
}

export const ControlCount = React.memo(_ControlCount);


