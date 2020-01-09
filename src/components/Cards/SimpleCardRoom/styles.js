import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  height: 70px;
  border-radius: 5;
  border-left-width: 4;
  border-left-color: ${colors.primary};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${colors.white};
  elevation: 2;
  margin-bottom: 10;
  padding: 1px 5px 0px 5px;
`;


export const Details = styled.View`
  flex: 1;
  margin-left: 5px;
  flex-direction: column;
  /* align-items: center; */
`;

export const Icon = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
`;

