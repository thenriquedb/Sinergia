import colors from '../../../../styles/colors';
import styled from 'styled-components/native';
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  background-color: #f66767;
  flex-direction: row-reverse;
  height: 100px;
`;

export const DeleteButton = styled.View`
  flex: 1;
  height: 100;
  background-color: #f66767;
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  justify-content: center;
  align-items: flex-end;
`;


export const IconContainer = styled(Animated.View)`
  width: 100;
  height: 100;
  background-color: #f66767;
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  justify-content: center;
  align-items: center;
`;




