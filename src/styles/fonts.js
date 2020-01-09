import styled from 'styled-components/native';

const FONT_SIZES = {
  'h1': 42,
  'h2': 34,
  'h3': 28,
  'h4': 22,
  'h5': 16,
  'h6': 14,
  default: 16
}

const Text = styled.Text`
  font-size: ${props => (props.fontSize ? FONT_SIZES[props.fontSize] : FONT_SIZES['default'])};
  font-family: 'Roboto-Regular';
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

const TextThin = styled.Text`
  font-size: ${props => (props.fontSize ? FONT_SIZES[props.fontSize] : FONT_SIZES['default'])};
  font-family: 'Roboto-Thin';
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

const TextLight = styled.Text`
  font-size: ${props => (props.fontSize ? FONT_SIZES[props.fontSize] : FONT_SIZES['default'])};
  font-family: 'Roboto-Light';
  margin: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

const TextBold = styled.Text`
  font-size: ${props => (props.fontSize ? FONT_SIZES[props.fontSize] : FONT_SIZES['default'])};
  font-family: 'Roboto-Bold';
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${props => (props.color ? props.color : '#000')};
`;

export { Text, TextThin, TextLight, TextBold };
