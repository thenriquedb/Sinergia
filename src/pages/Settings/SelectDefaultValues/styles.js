import styled from 'styled-components/native';
import Colors from "../../../styles/colors";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 15px;
`;


export const InputArea = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;


export const Footer = styled.View``;

export const SaveBtn = styled.TouchableOpacity`
  height: 40;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${Colors.primary};
`;