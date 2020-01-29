import { Animated } from "react-native";

import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexDirection: 'column',
    // backgroundColor: Colors.high,
  }
})``;

export const SettingsButton = styled.TouchableOpacity`
  padding: 30px 15px;
`;


export const ContainerNoRooms = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;

export const RoomListContainer = styled(Animated.View)``;

export const Rooms = styled.View`
min-height: 440px;
   background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  margin-top: 30;
  padding-top: 15;
  padding-left: 10;
  padding-right: 10;
`;

export const Header = styled.View`
  flex: 1;
  margin-top: 30;
  padding-left: 15;
  padding-right: 15;
`;

export const TotalConsumeKW = styled.View`
  align-items: center;
  margin-bottom: 15;
`;

export const Details = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
