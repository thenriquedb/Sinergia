import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  height: 100px;
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
  justify-content: center;
  margin-left: 5px;
  flex-direction: column;
`;

export const Icon = styled.Image`
  width: 70;
  height: 70;
`;

export const IconContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

