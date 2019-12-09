import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.primary};
`;

export const Tasks = styled.View`
  flex: 3;
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  margin-top: 30;
  padding-top: 15;
  padding-left: 10;
  padding-right: 10;
  justify-content: center;
  align-content: center;
`;

export const Header = styled.View`
  flex: 1;
  margin-top: 30;
  padding-left: 15;
  padding-right: 15;
`;

export const TotalConsumeKW = styled.View`
  align-items: center;
  margin-bottom: 15;
`;

export const Details = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
