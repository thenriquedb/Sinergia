import { Animated } from "react-native";

import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

export const RoomList = styled(Animated.FlatList)``;

export const Rooms = styled.View`
  flex: 1; 
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  margin-top: 30;
  padding-top: 15;
  padding-left: 10;
  padding-right: 10;
`;