import styled from 'styled-components';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  border-radius: 5;
  border-left-width: 4;
  border-left-color: ${Colors.high};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${Colors.white};
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 15;
  padding-left: 10;
  elevation: 2;
`;

export const Details = styled.View`
  flex: 1;
`;

export const TotalPrice = styled.View`
  align-items: center;
  justify-content: center;
`;
