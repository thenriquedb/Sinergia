import styled from 'styled-components/native';
import Colors from '../../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 10;
    top: 10
  `;