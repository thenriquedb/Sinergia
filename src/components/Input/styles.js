import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  input: {
    borderWidth: 1.5,
    fontSize: 18,
    padding: 6,
    borderRadius: 5,
    borderColor: Colors.lightGray1,
  },
});

export const MyInput = styled.TextInput`
  border-width: 1.5;
  font-size: 18px;
  padding: 6px;
  border-radius: 5;
  border-color: ${Colors.lightGray1};
`;

export const Label = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

