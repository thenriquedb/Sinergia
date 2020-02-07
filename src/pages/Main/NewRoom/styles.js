import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const EquipmentContainer = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: center;
`;

export const EquipmentCard = styled(Animated.View)`
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

export const Icon = styled.Image`
  width: 75px;
  height: 75px;
`;


export const CardLabel = styled.Text`
  text-align: center;
  font-size: 22px;
  color: ${props => props.color}
`

export const ContinueButton = styled.View`
  height: 40;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${Colors.primary};
`;

export const Footer = styled.View``;

export const SaveBtn = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 15px;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  SelectedRoomCard: {
    flex: 1,
    color: Colors.primary,
    borderWidth: 5,
    borderColor: Colors.primary,
  },

  ContinueButton: {
    backgroundColor: Colors.lightGray1,
  },
});
