import { Animated } from "react-native";
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  margin-top: 20;
  padding-left: 15;
  padding-right: 15;
`;

export const SettingsButtonContainer = styled(Animated.View)`
  padding: 0px 15px;
  align-items: flex-end;
  position: absolute;
  right: 0;
`;

export const SettingsButton = styled.TouchableOpacity``;

export const TotalConsumeLabel = styled(Animated.Text)`
  color: #fff;
  font-size: 22;
  text-transform: uppercase;
`;

export const TotalConsumeValue = styled(Animated.Text)`
  color: #fff;
  font-size: 50;
  font-weight: bold;
`;

export const TotalConsumeKW = styled.View`
  align-items: center;
`;

export const Details = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailLabel = styled.Text`
  color: #fff;
  font-size: 16;
  font-weight: bold;
`;

export const DetailValue = styled.Text`
  color: #fff;
  font-size: 16;
  text-align: center;
`;

export const Detail = styled.View``;