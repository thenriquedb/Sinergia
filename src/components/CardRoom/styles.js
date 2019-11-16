import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 5;
  border-left-width: 4;
  border-left-color: ${colors.high};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  padding-top: 10;
  padding-bottom: 10;
  padding-right: 15;
  padding-left: 5;
  elevation: 2;
  margin-bottom: 15;
`;

export const Status = styled.View`
  background-color: ${colors.high};
  border-top-left-radius: 10;
  border-bottom-left-radius: 10;
  margin-right: 5;
  height: 100;
  width: 3;
`;

export const TotalPrice = styled.View`
  align-items: center;
  justify-content: center;
`;
