import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  height: 100px;
  border-radius: 5;
  border-left-width: 4;
  border-left-color: ${colors.high};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${colors.white};
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 15;
  padding-left: 5;
  elevation: 2;
`;

export const Details = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const DetailsLabels = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Icon = styled.View`
  color: red;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
