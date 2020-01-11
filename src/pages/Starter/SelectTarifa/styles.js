import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import Colors from "../../../styles/colors";

export const Container = styled.View`
  flex: 1;
  padding: 0px 10px 0px 10px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px 0px 15px;
  justify-content: space-between;
`;

export const NextPageButton = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 35px;
  padding: 15px;
  border-radius: 10px;
`

export const ContinueConfigArea = styled.View` 
  height: 100px;
  align-items: center;
  justify-content: center;
`

export const TarifaCard = styled.View`
  padding: 6px;
  height: 150;
  width: 150;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${Colors.white};
  border: 1px;
  border-color: ${Colors.lightGray1};
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Icon = styled.Image`
width: 90;
height: 90;
margin-bottom: 5;
`;

export const styles = StyleSheet.create({
  SelectedTarifaCard: {
    color: Colors.primary,
    borderWidth: 5,
    borderColor: Colors.primary,
  },

  ConitnueButton: {
    backgroundColor: Colors.lightGray1,
  },
});
