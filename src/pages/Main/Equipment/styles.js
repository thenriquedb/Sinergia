import { Animated } from "react-native";
import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled(Animated.View)`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.primary};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10;
  top: 10
`;

export const RegisteredContainer = styled(Animated.ScrollView)`
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  padding: 15px;
`;

export const CheckBoxArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const InputArea = styled.View`
  margin-top: 10px;
`;