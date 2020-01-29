import styled from 'styled-components/native';
import Colors from '../../../styles/colors';
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexDirection: 'column',
  }
})``;

export const EquipmentsListContainer = styled(Animated.View)``;

export const IconContainer = styled.View``;

export const ContainerNoEquipment = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;


export const EquipmentsList = styled.View`
  min-height: 440px;
  background-color: ${Colors.white};
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  margin-top: 5;
  padding-top: 15;
  padding-left: 10;
  padding-right: 10;
`;