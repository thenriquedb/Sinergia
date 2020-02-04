import { Animated } from "react-native"
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  align-items: flex-end;
  padding: 0 10px;
  margin-top: 5px;
`;

export const BackButtonContainer = styled(Animated.View)`
  position: absolute;
  left: 10;
`;

export const EditButtonContainer = styled(Animated.View)`
  position: absolute;
  right: 10;
`;

export const Button = styled.TouchableOpacity`
  /* padding: 30px 15px; */
`;
