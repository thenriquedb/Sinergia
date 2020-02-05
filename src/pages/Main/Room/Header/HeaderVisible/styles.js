import styled from 'styled-components/native';
import { Animated } from "react-native";

export const Container = styled.View`
  padding: 10px 15px;
  margin-top: 15px;
`;

export const HeaderTop = styled(Animated.View)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Animated.Text)`
  font-size: 48;
  color: #fff;
  font-weight: bold;
`;

export const HeaderInfosContainer = styled(Animated.View)`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const HeaderInfoLabel = styled.Text`
  font-size: 16;
  color: #fff;
  font-weight: bold;
`;
export const HeaderInfoValue = styled.Text`
  font-size: 22;
  color: #fff;
`;

export const HeaderInfo = styled.View`
  flex-direction: column;
`;

export const Icon = styled(Animated.Image)`
  width: 140px;
  height:140px;
`;