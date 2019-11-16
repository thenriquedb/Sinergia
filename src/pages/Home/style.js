import Colors from '../../styles/colors';
import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.primary};
`;

export const Tasks = styled.View`
  flex: 2;
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  padding-top: 15;
  padding-left: 10;
  padding-right: 10;
  justify-content: center;
  align-content: center;
`;
