import styled from 'styled-components/native';
import Colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 15px 0px 15px;
`;

export const InputContainer = styled.View`
  margin-top:20px;
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