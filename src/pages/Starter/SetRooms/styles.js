import styled from 'styled-components/native';
import Colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  padding: 0px 15px 0px 15px;
`;

export const Content = styled.View`
  margin-top: 10px;
`;

export const NewRoomButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-width: 2px;
  border-style: dashed;
  border-color: ${Colors.lightGray1};
  border-radius: 5;
  padding: 1px 5px 0px 5px;
`;

export const NextPageButton = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 35px;
  padding: 15px;
  border-radius: 10px;
`

export const ContinueConfigArea = styled.View` 
  height: 100px;
  align-items: center;
  justify-content: center;
`