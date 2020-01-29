import { Animated } from "react-native";

import styled from 'styled-components/native';
import Colors from "../../../styles/colors";

export const Container = styled.View`
  flex: 1;
`;

export const SettingsItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  margin:  10px 0;
`;

export const Icon = styled.Image`
  height: 42px;
  width: 42px;
`;

export const LabelContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 10px;
  
`;


export const Title = styled.Text` 
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.Text` 
  font-size: 16px;
  color: #666;
`;

export const IconContainer = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary}
`;

