import styled from 'styled-components/native';
import Colors from '../../../../styles/colors';

export const Container = styled.View`
  padding: 10px 10px 0px 10px;
`;

export const SaveBtn = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 15px;
  border-radius: 10px;
`;
