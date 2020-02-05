import styled from 'styled-components/native';
import Colors from '../../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.primary};
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 15;
  padding-left: 15;
  padding-right: 15;
`;

export const RegisteredContainer = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  padding: 15px;
`;

export const Icon = styled.Image`
width: 100px;
height: 100px;`;

export const CheckBoxArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const InputArea = styled.View`
  margin-top: 10px;
`;