import colors from '../../../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  background-color: #ffbd39;
  flex-direction: row-reverse;
  height: 70px;
`;

export const DeleteButton = styled.TouchableHighlight`
  width: 50;
  height: 70px;
  background-color: #f66767;
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.TouchableHighlight`
  width: 50;
  height: 70px;
  background-color: #ffbd39;
  justify-content: center;
  align-items: center;
`;
