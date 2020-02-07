import styled from 'styled-components/native';
import Colors from "../../../../styles/colors";

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const SetOperationLabel = styled.Text`
  font-size: 16;
  color: #000;
  font-weight: bold;
  margin-top: 20px
`;

export const HourLabel = styled.Text`
  font-size: 14;
  color: #707070;
  font-weight: bold;
  margin-top: 5px
`;

export const SetOperation = styled.View`
  background-color: ${Colors.white};
  border-radius: 8;
  border-color: ${Colors.lightGray1};
  border-width: 1px;
  padding: 10px;
  elevation: 3;
`;

export const SelectTime = styled.View`
  border-width: 1.5;
  font-size: 18;
  padding: 5px;
  border-radius: 5px;
  border-color: ${props => props.color ? props.color : Colors.lightGray1};
`;
