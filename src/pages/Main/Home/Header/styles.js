import { Animated } from "react-native";
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  margin-top: 20;
  padding-left: 15;
  padding-right: 15;
`;


export const SettingsButton = styled.TouchableOpacity`
  padding: 0px 15px;
  align-items: flex-end;
  position: absolute;
  right: 0;
`;

export const TotalConsumeKW = styled.View`
  align-items: center;
`;

export const Details = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
`;


export const Detail = styled.View``;