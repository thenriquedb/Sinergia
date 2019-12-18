import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.white};
  padding: 10px 10px 0px 10px;
`;

export const EquipmentCard = styled.View`
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${Colors.white};
  border: 1px;
  border-color: ${Colors.lightGray1};
  border-radius: 5px;
  margin: 2px;
  padding: 10px;
`;

export const SelectedEquipmentCard = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${Colors.white};
  border: 4px;
  border-color: ${Colors.primary};
  border-radius: 5px;
  margin: 2px;
  padding: 10px;
`;

// export const styles = StyleSheet.create({
//   SelectedEquipmentCard: {
//     borderWidth: 5,
//     borderColor: Colors.primary,
//   },
// });
