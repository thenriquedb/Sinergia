import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  line-height: 25px;
  margin-top: 15px;
`;

export const Graph = styled.Image`
  height: 140px;
  width: 140px;
`;

export const GraphContainer = styled.View`
justify-content: center;
align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  line-height: 25px;
  margin-top: 15px;
`;

export const TarifaLabel = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  color: ${props => props.color ? props.color : '#000'}
`;

export const IntervaloHorario = styled.Text`
  font-size: 20px;
`;

