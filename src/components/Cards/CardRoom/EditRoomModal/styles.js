import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const Container = styled.View`
  background-color: #fff;
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  padding: 10px 20px 20px 20px;
`;

export const SaveBtn = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 50px;
  padding: 5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
