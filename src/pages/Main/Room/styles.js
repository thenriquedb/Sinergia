import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.primary};
`;

export const Scroll = styled.ScrollView`
`;


export const Icon = styled.Image`
  width: 140px;
  height:140px;
`;

export const IconContainer = styled.View`

`;

export const ContainerNoEquipment = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;

export const HeaderContainer = styled.View`
  padding: 0px 10px 0px 10px;
`;

export const HeaderTop = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderInfosContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const HeaderInfo = styled.View`
  flex-direction: column;

`;

export const EquipmentsList = styled.View`
  flex: 3;
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  margin-top: 5;
  padding-top: 15;
  padding-left: 10;
  padding-right: 10;
  justify-content: center;
  align-content: center;
`;

