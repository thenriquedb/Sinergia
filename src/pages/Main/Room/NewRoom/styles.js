import styled from 'styled-components/native';
import Colors from '../../../../styles/colors';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
`;

export const SaveBtn = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 15px;
  border-radius: 10px;
`;


export const EquipmentContainer = styled.View`
  padding: 20px 10px 10px 10px;
`;

export const EquipmentCard = styled.View`
  flex: 1;
  height: 115;
  width: 115;
  align-items: center;
  justify-content: center;
  text-align: center;
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
