import { Animated } from "react-native";
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled(Animated.Text)`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  position: absolute;
  bottom: 80;
`;

export const Description = styled(Animated.Text)`
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 15;
  height: 70px;
`;

export const Icon = styled(Animated.Image)`
  width: 110px;
  height: 110px;
  margin-bottom: 10px;
  position: absolute;
top: 0;
`;