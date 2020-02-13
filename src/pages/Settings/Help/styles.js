import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background-color: #fff
`;

export const MenuLabel = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const MenuButton = styled.TouchableHighlight.attrs({ underlayColor: "#F6F6F6" })`
  padding: 20px 10px;
  justify-content: center;
  margin-bottom: 5px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0,0,0,0.3);
`;

export const ModalContainer = styled.ScrollView.attrs({ showsVerticalScrollIndicator: false })``;

export const IntervalContainer = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0,0,0,0.3);
  margin-bottom: 8px;
`;

export const IntervalsGraph = styled.Image`
  height: 140px;
  width: 140px;
`;

export const IntervalsGraphContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px
`;


export const IntervalLabel = styled.Text`
  color: #777;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 5px
`;

export const ModalTitle = styled.Text`
  color: ${props => (props.color ? props.color : '#777')};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalSubtitle = styled.Text`
  color: ${props => (props.color ? props.color : '#777')};
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

export const ModalText = styled.Text`
  color: #777;
  font-size: 18px;
  line-height: 25px;
`;