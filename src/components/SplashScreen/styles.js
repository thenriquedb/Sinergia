import styled from 'styled-components/native';
import Colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  justify-content: center;
  align-items: center;
`;




export const Title = styled.Text`
  font-size: 30;
  color: ${Colors.primary};
  text-transform:uppercase;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 20;
  color: #fff;
  font-weight: 300;
`;
