import styled from 'styled-components/native';
import Colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: column;
`;

export const RadioItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
`;

export const Circle = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  border-width: 1px;
  border-color: #000;
  align-items: center;
  justify-content: center;
`;

export const RadioButtonMarked = styled.View`
  width: 15px;
  height: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${Colors.primary};
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
`;


export const RadioLabel = styled.Text`
  font-size: 18px;
  margin-left: 5px
`;