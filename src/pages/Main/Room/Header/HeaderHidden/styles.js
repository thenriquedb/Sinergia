import { Animated } from "react-native";
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  padding: 0px 15px;
  padding-top: 30px;
  margin-top: 10px;
`;

export const ExpensesLabel = styled(Animated.Text)`
  color: #fff;
  font-size: 24;
  font-weight: bold;
`;

export const ExpensesValue = styled(Animated.Text)`
  color: #fff;
  font-size: 32;
`;

export const ExpensesValueLabel = styled(Animated.Text)`
  color: #fff;
  font-size: 18;
  font-weight: bold;
`;

export const HeaderInfo = styled.View`
  flex-direction: column;
`;

export const HeaderInfosContainer = styled(Animated.View)`
  flex-direction: column;
  margin-top: 10px;
  height: 80px;
`;

export const HeaderInfosValuesContainer = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const DifferenceBetweenTariffsContainer = styled(Animated.View)`
  margin-top: 10px;
`;

export const DifferenceBetweenTariffs = styled(Animated.Text)`
  color: #fff;
  font-size: 48px;
  font-weight: bold
`;