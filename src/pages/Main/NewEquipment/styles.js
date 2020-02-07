import { StyleSheet, Animated } from 'react-native';

import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.white};
`;

export const RoomContainer = styled.View`
  padding: 10px;
  flex: 1;
`;

export const RoomCard = styled(Animated.View)`
  padding: 6px;
  height: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${Colors.white};
  border: 1px;
  border-color: ${Colors.lightGray1};
  border-radius: 5px;
  margin: 6px 4px;
`;

export const Icon = styled(Animated.Image)`
  width: 75px;
  height: 75px;
`;

export const RoomCardLabel = styled(Animated.Text)`
  text-align: center;
  font-size: 22px;
  color: ${props => props.color}
`;

export const Footer = styled.View`
  background-color: red;
`;

export const ContinueButton = styled.View`
  height: 40;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${Colors.primary};
`;

export const styles = StyleSheet.create({
  SelectedEquipmentCard: {
    flex: 1,
    color: Colors.primary,
    borderWidth: 5,
    borderColor: Colors.primary,
  },

  ConitnueButton: {
    backgroundColor: Colors.lightGray1,
  },
});
