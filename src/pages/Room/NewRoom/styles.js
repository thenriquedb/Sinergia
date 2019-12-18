import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  padding: 10px 10px 0px 10px;
`;

export const SaveBtn = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 50px;
  padding: 10px;
  margin-top: 30;
  align-items: center;
  justify-content: center;
`;
