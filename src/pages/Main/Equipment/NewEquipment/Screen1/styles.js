import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import Colors from '../../../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.white};
`;

export const RoomContainer = styled.View`
  padding: 5px 0px 0px 10px;
  flex: 1;
`;

export const RoomCard = styled.View`
  flex: 1;
  height: 115;
  width: 115;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px;
  background-color: ${Colors.white};
  border: 1px;
  border-color: ${Colors.lightGray1};
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const ContinueButton = styled.View`
  height: 40;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${Colors.primary};
`;

export const Footer = styled.View`
  background-color: red;
`;

export const FooterTextContainer = styled.View`
  padding: 5px 0px 5px 5px;
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
